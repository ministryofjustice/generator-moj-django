'use strict';

var mainBowerFiles = require('main-bower-files');
var vendorFiles = mainBowerFiles();

var paths = {
  src: '<%= projectName %>/assets-src/',
  dest: '<%= projectName %>/assets/',
  styles: [
      '<%= projectName %>/assets-src/stylesheets/**/*.scss',
      '<%= projectName %>/apps/**/assets-src/stylesheets/**/*.scss'
  ],
  ie_styles: '<%= projectName %>/assets-src/ie/**/*.scss',
  scripts: [
    '<%= projectName %>/assets-src/javascripts/**/*',
    '!<%= projectName %>/assets-src/javascripts/templates.js',
    '<%= projectName %>/apps/**/assets-src/javascripts/**/*',
    '!<%= projectName %>/apps/**/assets-src/javascripts/templates.js'
  ],
  vendor_scripts: vendorFiles,
  images: [
      '<%= projectName %>/assets-src/images/**/*',
      '<%= projectName %>/apps/**/assets-src/images/**/*'
  ],
  templates: [
      '<%= projectName %>/templates/**/*',
      '<%= projectName %>/apps/**/templates/**/*'
  ]
};

module.exports = paths;
