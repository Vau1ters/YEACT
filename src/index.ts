import * as PIXI from 'pixi.js'

export const windowSize = {
  width: 320,
  height: 240,
}

export const application = new PIXI.Application({
  ...windowSize,
})

export class Main {
  public static async init(): Promise<void> {
    const container = document.getElementById('container')
    if (!container)
    {
      throw 'no container found'
    }

    container.appendChild(application.view)

    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
    PIXI.settings.ROUND_PIXELS = true
    application.ticker.maxFPS = 60

  }
}
Main.init()
