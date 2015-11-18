Package.describe({
  name: 'electronifiejs:meteor-llog-bunyan',
  summary: "llog logging with bunyan support",
  version: "0.0.8",
  git: "https://github.com/electronifie/meteor-llog-bunyan.git"
});

Npm.depends({
  "llog": "0.0.11",
  "bunyan": "1.5.1"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('electronifie-llog-bunyan.js', 'server');
  api.addFiles('electronifie-llog-bunyan.js', 'client');
});
