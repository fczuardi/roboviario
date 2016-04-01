import babel from 'rollup-plugin-babel';

export default {
    format: 'umd',
    plugins: [
        // "babelrc": false,
        // "externalHelpers": true,
        babel({
            "presets": [
                "es2015-rollup"
        //         "stage-2",
        //         "stage-3",
        //         "react"
            ]
        })
    ],
    external: [
        'uuid',
        // 'redux',
        // 'react',
        // 'react-dom',
        // 'react-redux',
        // 'lodash/fp',
        // 'rethinkdb-websocket-client'
    ],
    globals: {
        'uuid': 'uuid',
        // 'redux': 'Redux',
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        // 'react-redux': 'ReactRedux',
        // 'lodash/fp': 'LodashFP',
        // 'rethinkdb-websocket-client': 'RethinkdbWebsocketClient'
    }
};
