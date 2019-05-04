import { app, Menu } from 'electron'
import * as actions from '../actions/file'

const buildDocMenu = mtApp => {
  const dockMenu = Menu.buildFromTemplate([{
    label: 'Open...',
    click (menuItem, browserWindow) {
      actions.openFile(browserWindow, mtApp)
    }
  }, {
    label: 'Clear Recent',
    click () {
      app.clearRecentDocuments()
    }
  }])
  return dockMenu
}

export default buildDocMenu
