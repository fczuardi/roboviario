#!/usr/bin/env node
require('shelljs/global');

cp([
    './node_modules/material-design-icons/maps/2x_web/ic_directions_bus_black_48dp.png'
],
    './dist/www/lib/img/logo.png'
);
cp([
    './node_modules/material-design-icons/maps/svg/production/ic_directions_bus_48px.svg'
],
    './dist/www/lib/img/logo.svg'
);
