 module.exports = {
    "apps" : [
      {
        "name"      : "myweb",
        "script"    : "index.js",
        "watch":true,
        "env": {
          "COMMON_VARIABLE": true
        },
        "env_production" : {
          "NODE_ENV": "production"
        },
       "instances": 4,
        "error_file": "pm2-logs/err.log",
        "out_file": "pm2-logs/out.log",
        "log_date_format": "YYYY-MM-DD HH:mm:ss"
      }
    ],
    "deploy" : {
      "production" : {
        "user" : "yxl",
        "host" : "47.103.140.10",
        "ref"  : "origin/dev_test",
        "repo" : "git@github.com:yeqianxun/myweb.git",
        "path" : "/home/yxl/www/blog/prod",
        "post-deploy" : "cd server && rm -rf ./node_modules && cnpm install && npm run prod"
      },
      "dev" : {
       "user" : "yxl",
        "host" : "47.103.140.10",
        "ref"  : "origin/dev_test",
        "repo" : "git@github.com:yeqianxun/myweb.git",
        "path" : "/home/yxl/www/blog/dev",
        "post-deploy" : "cd server && rm -rf ./node_modules && cnpm install && pm2 reload ecosystem.config.js --env dev",
        "env"  : {
          "NODE_ENV": "dev"
        }
      }
    }
  }