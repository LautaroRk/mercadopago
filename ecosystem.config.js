module.exports = {
  apps : [{
    name       : "api-app",
    script     : "./dist/index.js",
    instances  : 4,
    exec_mode  : "cluster",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}