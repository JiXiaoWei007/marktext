export const selectTheme = (theme, mtApp) => {
  const { appWindow, preference } = mtApp
  preference.setItem('preference.theme', theme)
  for (const { win } of appWindow.windows.values()) {
    win.webContents.send('AGANI::user-preference', { theme })
  }
}
