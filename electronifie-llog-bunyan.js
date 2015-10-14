log = Npm.require('llog');

this.Logger = log;

var levels = [ "info", "warn", "error", "debug", "fatal", "trace" ];

// Add meteor methods
levels.forEach(function(level) {
  var method = {};
  var methodName = "log." + level;

  method[methodName] = function(msg) {
    log[level]({userId:this.userId, clientAddress: this.connection.clientAddress}, msg);
  }

  Meteor.methods(method)
}.bind(this));

