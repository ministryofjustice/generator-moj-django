/*global describe, before, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('moj-django:app', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temptest'))
      .withOptions({
        'skip-install': true
      })
      .withPrompt({
        projectName: 'temptest',
        features: ['foundation', 'fontawesome', 'heroku']
      })
      .on('end', done);
  });

  it('creates files', function() {
    assert.file([
      // Django
      'manage.py',
      'temptest/__init__.py',
      'temptest/apps/__init__.py',
      'temptest/urls.py',
      'temptest/wsgi.py',

      // Core App
      'temptest/apps/core/__init__.py',
      'temptest/apps/core/admin.py',
      'temptest/apps/core/context_processors.py',
      'temptest/apps/core/models.py',
      'temptest/apps/core/tests.py',
      'temptest/apps/core/views.py',
      'temptest/apps/core/migrations/__init__.py',
      'temptest/templates/base.html',
      'temptest/templates/core/index.html',

      // Assets
      'temptest/assets-src/stylesheets/app.scss',
      'temptest/assets-src/stylesheets/_settings.scss',
      'temptest/assets-src/stylesheets/_styles.scss',
      'temptest/assets-src/javascripts/app.js',

      // Settings
      'temptest/settings/__init__.py',
      'temptest/settings/base.py',
      'temptest/settings/prod.py',
      'temptest/settings/dev.py',

      // Project
      '.bowerrc',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      'bower.json',
      'gulpfile.js',
      'package.json',

      // Requirements
      'requirements/base.txt',
      'requirements/dev.txt',
      'requirements/prod.txt',

      // Heroku
      'Procfile',
      'requirements.txt',
      '.buildpacks'
    ]);
  });
});
