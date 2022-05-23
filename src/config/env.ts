export function getEnv() {
  return process.env as {
    NODE_ENV: string;
    PORT: string;
  };
}
