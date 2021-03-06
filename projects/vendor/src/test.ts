// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import '@angular/localize/init';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const CONTEXT = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
CONTEXT.keys().map(CONTEXT);
