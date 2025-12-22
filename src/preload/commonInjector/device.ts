// device.js
class DeviceManager {
  constructor() {}

  restartApp() {
    globalThis.PresenterFactory.usePresenter('devicePresenter').restartApp()
  }
}

export default DeviceManager
