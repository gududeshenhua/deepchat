import logger from '../../../shared/logger'
import { ILoggerPresenter } from '@shared/presenter'
export class LoggerPresenter implements ILoggerPresenter {
  constructor() {
    // 初始化操作可以放在这里
  }

  // // 设置日志开关
  // public setLoggingEnabled(enabled: boolean): void {
  //   setLoggingEnabled(enabled)
  // }

  // 错误级别日志
  public error(...params: unknown[]): void {
    logger.error(...params)
  }

  // 警告级别日志
  public warn(...params: unknown[]): void {
    logger.warn(...params)
  }

  // 信息级别日志
  public info(...params: unknown[]): void {
    // console.log("调用了吗----------------")
    // console.log(...params)
    logger.info(...params)
  }

  // 详细级别日志
  public verbose(...params: unknown[]): void {
    logger.verbose(...params)
  }

  // 调试级别日志
  public debug(...params: unknown[]): void {
    logger.debug(...params)
  }

  // 冗余级别日志
  public silly(...params: unknown[]): void {
    logger.silly(...params)
  }

  // 通用日志方法（等同于 info）
  public log(...params: unknown[]): void {
    logger.log(...params)
  }

  // // 获取原始控制台方法（用于恢复）
  // public getOriginalConsole(): typeof originalConsole {
  //   return originalConsole
  // }
}
