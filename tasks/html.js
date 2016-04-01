#!/usr/bin/env node
require('shelljs/global');
const pkg = require('../package.json');

const mainCSS = cat([
    './dist/www/lib/css/material-icons.css',
    './src/css/main.css'
]);
const iframeCSS = cat([
    './dist/www/lib/css/material-icons.css',
    './src/css/main.css',
    './src/css/chat.css'
]);

//index
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
    '<style amp-custom>\n' + mainCSS,
    './dist/www/index.html'
);
//iframe
cp(
    './src/html/iframe.html',
    './dist/www/iframe.html'
)
sed('-i',
    /\/\*iframe css\*\//,
    iframeCSS,
    './dist/www/iframe.html'
);
