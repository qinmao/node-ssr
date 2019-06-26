module.exports = {
  apps : [{
    name: 'node-ssr',
    script: 'server/index.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      "PORT": 8080
    },
    env_production: {
      NODE_ENV: 'production',
      "PORT": 8081
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : ['39.96.190.20'],
      ssh_options: "StrictHostKeyChecking=no",
      ref  : 'origin/master',
      repo : 'git@github.com:qinmao/node-ssr.git',
      path : '/var/www/node-ssr',
      'post-deploy' : 'npm i && npm run build && pm2 reload ecosystem.config.js --env production'
    },
    development: {
      user : 'root',
      host : ['39.96.190.20'],
      ssh_options: "StrictHostKeyChecking=no",
      ref  : 'origin/dev',
      repo : 'git@github.com:qinmao/node-ssr.git',
      path : '/var/www/node-ssr',
      'post-deploy' : 'npm i && npm run build && pm2 reload ecosystem.config.js --env development'
    }
  }
};
