const concurrently = require('concurrently')
const port = process.env.npm_package_config_port

concurrently([
  { command: `wait-on http://localhost:${port} && npm run start:ele` },
  { command: 'npm run start:react' }
])
