import { createLogger, transports, format } from 'winston';

function devLogger() {
  return createLogger({
    level: 'debug',
    format: format.combine(
      format.colorize(),
      format.timestamp(),
      format.simple()
    ),
    transports: [new transports.Console()],
  });
}

export function getLogger() {
  return devLogger();
}
