'use strict';

var mainBowerFiles = require('main-bower-files');
var vendorFiles = mainBowerFiles();

var paths = {
  src: '<%= projectName %>/static-src/',
  dest: '<%= projectName %>/static/',
  styles: '<%= projectName %>/static-src/stylesheets/**/*.scss',
  ie_styles: '<%= projectName %>/static-src/ie/**/*.scss',
  scripts: [
    '<%= projectName %>/static-src/javascripts/**/*',
    '!<%= projectName %>/static-src/javascripts/templates.js'
  ],
  vendor_scripts: vendorFiles,
  images: '<%= projectName %>/static-src/images/**/*',
  templates: '<%= projectName %>/templates/**/*',
};

module.exports = paths;
