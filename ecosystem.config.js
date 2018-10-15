module.exports = {
  apps : [{
    name: 'API',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      MESSENGER_APP_SECRET: 'ffc0d6329f4fc268a0b9a213a9a353d3',
      MESSENGER_PAGE_ACCESS_TOKEN: 'EAAE21alQFX4BAHZCYnijNVGZARy5NdhZBh0G8aq2W1tan1QGwUcZCoZBkdYopovHIP7kHYyjHlR3BddtOKa3lGjqJNxRlxZBviexViBZCnsh0rAC0DrRFQkvtZBtk85LAXpGsBZAVkpZB8qfDuXWKpZC9yKWlZAbGzzoCXNHtWfkeLKGgsEMW6sIoLUd',
      MESSENGER_VALIDATION_TOKEN: 'forceclosetoken',
      SERVER_URL: 'https://forceclose.cantuta.org'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
