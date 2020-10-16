const { BrowserWindow } = require('electron')

const DEVSERVER_PROT = process.env.npm_package_config_port
const MAX_WIDTH = 800
const MAX_HEIGHT = 600

function createWindow() {
  const win = (global.win = new BrowserWindow({
    width: MAX_WIDTH,
    height: MAX_HEIGHT,
    minWidth: MAX_WIDTH,
    minHeight: MAX_HEIGHT,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    }
  }))

  win.loadURL(`http://localhost:${DEVSERVER_PROT}`)
  win.webContents.openDevTools()
}

module.exports = createWindow
