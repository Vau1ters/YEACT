import { application, initializeApplication } from '@core/application'

export class Main {
  public static async init(): Promise<void> {
    initializeApplication()
  }
}
Main.init()
