var levels = [ "info", "warn", "error", "debug", "fatal", "trace" ];

if (Meteor.isServer) {
  log = Npm.require('llog');

  this.Logger = log;

  // Add meteor methods
  levels.forEach(function(level) {
    var method = {};
    var methodName = "log." + level;

    method[methodName] = function(msg) {
      // Only allow Meteor method Logger invocations if authenticated
      if (Meteor.userId()) {
        log[level]({userId:this.userId, clientAddress: this.connection.clientAddress}, msg);
      } else {
        log.warn({clientAddress: this.connection.clientAddress}, "Attempt to method call Logger from unauthenticated session.");
      }
    }

    Meteor.methods(method)
  }.bind(this));
} else {
  this.Logger = {};
  levels.forEach(function(level) {
    var methodName = "log." + level;

    this.Logger[level] = function(msg) {
      Meteor.call(methodName, msg);
    };

  }.bind(this));
}


