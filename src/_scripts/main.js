// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import List from '../_modules/list/list';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');

  new List();
});
