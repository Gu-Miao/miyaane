const { app, Menu } = require('electron')

const APP_NAME = app.name
const HOME_PAGE = process.env.npm_package_homepage

const createApplicationMenu = () => {
  const template = [
    {
      label: APP_NAME,
      submenu: [
        {
          label: 'about',
          async click() {
            const { shell } = require('electron')
            await shell.openExternal(HOME_PAGE)
          }
        },
        { type: 'separator' },
        { role: 'quit', label: `quit ${APP_NAME}` }
      ]
    },
    {
      label: 'editor',
      submenu: [
        { role: 'selectAll', label: 'select all' },
        { role: 'undo', label: 'undo' },
        { role: 'redo', label: 'redo' },
        { type: 'separator' },
        { role: 'cut', label: 'cut' },
        { role: 'copy', label: 'copy' },
        { role: 'paste', label: 'paste' }
      ]
    },
    {
      label: 'debug',
      submenu: [
        { role: 'reload', label: 'reload' },
        { role: 'forcereload', label: 'force reload' },
        { type: 'separator' },
        { role: 'toggledevtools', label: 'toggle devtools' }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  global.win.setMenu(menu)
}

module.exports = createApplicationMenu
