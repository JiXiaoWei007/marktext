import edit from './edit'
import file from './file'
import help from './help'
import marktext from './marktext'
import view from './view'
import windowMenu from './windowMenu'
import paragraph from './paragraph'
import format from './format'
import theme from './theme'
import buildDocMenu from './dock'

class MenuTemplate {
  constructor (mtApp) {
    this.mtApp = mtApp
  }
  get dockMenu () {
    const { mtApp } = this
    return buildDocMenu(mtApp)
  }
  get templates () {
    const { mtApp } = this
    return [
      ...(process.platform === 'darwin' ? [marktext(mtApp)] : []),
      file(mtApp),
      edit(mtApp),
      paragraph(mtApp),
      format(mtApp),
      windowMenu(mtApp),
      theme(mtApp),
      view(mtApp),
      help(mtApp)
    ]
  }
}

export default MenuTemplate
