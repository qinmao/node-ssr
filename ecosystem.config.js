module.exports = {
  apps : [{
    name: 'node-ssr',
    script: 'server/index.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      "PORT": 80
    },
    env_production: {
      NODE_ENV: 'production',
      "PORT": 80
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : ['39.96.190.20'],
      ssh_options: "StrictHostKeyChecking=no",
      ref  : 'origin/master',
      repo : 'git@code.aliyun.com:mao.qin/node-test-gy.git',
      path : '/var/www/node-ssr',
      'post-deploy' : 'npm i && npm run build && pm2 reload ecosystem.config.js --env production'
    },
    development: {

    }
  }
};
