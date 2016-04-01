#!/usr/bin/env node
require('shelljs/global');

cp([
    './node_modules/material-design-icons/maps/2x_web/ic_directions_bus_black_48dp.png'
],
    './dist/www/lib/img/logo.png'
);
