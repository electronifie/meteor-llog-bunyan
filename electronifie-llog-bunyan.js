var levels = [ "info", "warn", "error", "debug", "fatal", "trace" ];

if (Meteor.isServer) {
  log = Npm.require('llog');

  this.Logger = log;

  // Add meteor methods
  levels.forEach(function(level) {
    var method = {};
    var methodName = "log." + level;

    method[methodName] = function(msg) {
      log[level]({userId:this.userId, clientAddress: this.connection.clientAddress}, msg);
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

