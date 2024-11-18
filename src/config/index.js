export const config = {
  port: process.env.PORT || 8080,
  accessControlAllowOrigins:
    process.env.ACCESS_CONTROL_ALLOW_ORIGINGS || "http:localhost:9090",
};
