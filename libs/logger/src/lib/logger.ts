const logger = require('@dazn/lambda-powertools-logger');

export class Logger {
  static debug(message: string, params?: Record<string, any>): void {
    logger.debug(message, params);
  }

  static info(message: string, params?: Record<string, any>): void {
    logger.info(message, params);
  }

  static warn(message: string, params?: any, err?: Error): void {
    logger.warn(message, params, err);
  }

  static error(
    message: string,
    params?: Record<string, any> | Error,
    err?: Error
  ): void {
    logger.error(message, params, err);
  }
}
