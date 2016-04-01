#!/usr/bin/env node
require('shelljs/global');
const pkg = require('../package.json');

const css = cat([
    './dist/www/lib/css/material-icons.css'
]);
cp(
    './src/html/index.amp.html',
    './dist/www/index.html'
);
sed('-i',
    /NPM_VERSION/,
    pkg.version,
    './dist/www/index.html'
);
sed('-i',
    /<style amp-custom>/,
    '<style amp-custom>\n' + css,
    './dist/www/index.html'
);
