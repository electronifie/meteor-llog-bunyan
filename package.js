Package.describe({
  summary: "llog logging with bunyan support",
  version: "0.0.0",
  git: "https://github.com/electronifie/meteor-llog-bunyan.git"
});

Npm.depends({
  "llog": "0.0.3",
  "bunyan": "1.2.3"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('electronifie:log-bunyan.js', 'server');
});

Package.onTest(function(api) {
  api.use('electronifie:servicebus');
});

