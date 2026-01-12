module.exports = {
  apps: [
    {
      name: 'sakfasteners',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/sakfasteners',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 8056,
      },
      error_file: '/var/www/sakfasteners/logs/pm2-error.log',
      out_file: '/var/www/sakfasteners/logs/pm2-out.log',
      log_file: '/var/www/sakfasteners/logs/pm2-combined.log',
      time: true,
      merge_logs: true,
    },
  ],
};
