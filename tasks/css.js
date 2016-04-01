#!/usr/bin/env node
require('shelljs/global');

sed(
    /url\(/,
    'url(lib/fonts/',
    './node_modules/material-design-icons/iconfont/material-icons.css'
).to(
    './dist/www/lib/css/material-icons.css'
);
