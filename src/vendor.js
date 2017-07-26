/* this file contains reference to the vendor librarires
we're using in this project. this is used by webpack in the produciton build only*.
A separate bundle for vendor code is useful since
it's unlikely to change as often as the applications code. So all the libraries we reference here
will be written to vendor.js so they can be cached until one of them change. So basically,
this avoids customers having to donwload a huge JS file anytime a line of
code changes. The only have to downlaod vendor.js when a
vendor library changes which should be less frequent.
Any files that arent referenced here will be bundled into main.js
for the production build */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
