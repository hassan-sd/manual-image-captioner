const { app, BrowserWindow } = require('electron');
const shell = require('electron').shell;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 1000,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {

        // open url in a browser and prevent default
        shell.openExternal(url);
        return { action: 'deny' };
    });

}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
});