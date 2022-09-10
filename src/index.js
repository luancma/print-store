const liveServer = require('live-server')

const params = {
  ignore: 'scss,my/templates', // comma-separated string for paths to ignore
  root: './src/public', // Set root directory that's being served. Defaults to cwd.
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
  middleware: [
    function (req, res, next) {
      next()
    },
  ],
}

liveServer.start(params)
