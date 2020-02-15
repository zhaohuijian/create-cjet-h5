#!/usr/bin/env node

/**
 * Copyright (c) 2020, chanjet-fe, https://github.com/chanjet-fe.
 * Based on create-react-app but adds a bunch of useful features.
 */

'use strict';

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

if (major < 8) {
  console.error(
    'You are running Node ' +
    currentNodeVersion +
    '.\n' +
    'create-cjet-h5 requires Node 8 or higher. \n' +
    'Please update your version of Node.'
  );
  process.exit(1);
}

require('./createCjetH5');
