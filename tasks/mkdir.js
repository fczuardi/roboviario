#!/usr/bin/env node
require('shelljs/global');

mkdir('-p', [
    './dist/www/js',
    './dist/www/css',
    './dist/www/img',
    './dist/www/lib/js',
    './dist/www/lib/css',
    './dist/www/lib/img',
    './dist/www/lib/fonts'
]);
