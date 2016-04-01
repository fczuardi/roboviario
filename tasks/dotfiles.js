#!/usr/bin/env node
require('shelljs/global');

cp([
    '.gitignore',
    'LICENSE'
],
    './dist/www/.'
);
