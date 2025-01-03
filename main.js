const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');
const axios = require('axios');
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800, //before 735
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadFile('index.html');
}
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
