module.exports = {
 
  apps: [
    {
      name: "config-server",
      script: "java",
      args: "-jar ./config-server/target/Config-Server-0.0.1.jar",
      log_file: "./logs/config-server.log",
    },
    {
      name: "service-registry",
      script: "java",
      args: "-jar ./service-registry/target/Service-Registry-0.0.1.jar",
      log_file: "./logs/service-registry.log",
    },
    {
      name: "api-gateway",
      script: "java",
      args: "-jar ./api-gateway/target/Api-Gateway-0.0.1.jar",
      log_file: "./logs/api-gateway.log",
    }
  ]
}