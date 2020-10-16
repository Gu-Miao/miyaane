const { app } = require('electron')
const createWindow = require('./modules/createWindow')
const createApplicationMenu = require('./modules/createApplicationMenu')

global.app = app

app.whenReady().then(() => {
  createWindow()
  createApplicationMenu()
})

app.on('window-all-closed', () => {
  app.quit()
})
