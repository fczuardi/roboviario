#!/usr/bin/env node
require('shelljs/global');

cp([
    '.gitignore',
    'LICENSE',
    'CNAME'
],
    './dist/www/.'
);
