System.config({
  transpiler: 'ts',
  typescriptOptions: {
    jsx: 'react',
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  },
  meta: {
  'typescript': {
		"exports": "ts"
	  }
	},
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    app: "./app",

    react: 'npm:react@16.12.0/umd/react.development.js',
    'react-dom': 'npm:react-dom@16.12.0/umd/react-dom.development.js',

    // other libraries
    "redux":                     "npm:redux@4.0.5/dist/redux.js",
    "redux-logger":              "npm:redux-logger@3.0.6/dist/redux-logger.js",
    "redux-thunk":               "npm:redux-thunk@2.3.0/es/index.js",
    'rxjs':                      'npm:rxjs@6.2.1',
    'rxjs-compat':               'npm:rxjs-compat@6.2.1',
    'ts':                        'npm:plugin-typescript@8.0.0/lib/plugin.js',
    'typescript':                'npm:typescript@2.9.2/lib/typescript.js'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    'app/components': {
      defaultExtension: 'tsx'
    },
    rxjs: {
        main: 'index.js',
        defaultExtension: 'js'
    },
    "rxjs/operators": {
        main: 'index.js',
        defaultExtension: 'js'
    }
  }
});
