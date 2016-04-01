#!/usr/bin/env node
require('shelljs/global');

//normalize.css
cp(
    './node_modules/normalize.css/normalize.css',
    './dist/www/lib/css/.'
);
//fonts
sed(
    /url\(/,
    'url(lib/fonts/',
    './node_modules/material-design-icons/iconfont/material-icons.css'
).to(
    './dist/www/lib/css/material-icons.css'
);
//main.css, chat.css
cp([
    './src/css/main.css',
    './src/css/chat.css'
],
    './dist/www/css/.'
);
