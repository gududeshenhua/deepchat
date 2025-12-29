// device.js
class DeviceManager {
  constructor() {}

  restartApp() {
    globalThis.PresenterFactory.usePresenter('devicePresenter').restartApp()
  }

  exitApp() {
    globalThis.PresenterFactory.usePresenter('apiPresenter').quit()
  }
}

export default DeviceManager
