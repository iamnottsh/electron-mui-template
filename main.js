const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    return app.isPackaged ?
        win.loadFile('dist/index.html') :
        win.loadURL('http://127.0.0.1:5173/')
}

app.whenReady().then(createWindow)
