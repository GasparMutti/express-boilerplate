export const config = {
  port: process.env.PORT || 8080,
  allowedOrigins: process.env.ALLOWED_ORIGINS?.split(",").map((origin) =>
    origin.trim()
  ) ?? ["http:localhost:9090"],
};
