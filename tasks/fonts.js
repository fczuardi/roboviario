#!/usr/bin/env node
require('shelljs/global');

cp(
    './node_modules/material-design-icons/iconfont/MaterialIcons-*', 
    './dist/www/lib/fonts/.'
);
