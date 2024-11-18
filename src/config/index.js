export const config = {
  port: process.env.PORT || 8080,
  accessControlAllowOrigins:
    process.env.ALLOWED_ORIGINS || "http:localhost:9090",
};
