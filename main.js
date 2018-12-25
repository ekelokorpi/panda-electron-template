game = {};
require('./src/game/config.js');
var {app, BrowserWindow} = require('electron');
var path = require('path');
var url = require('url');
var info = require('./package.json');
var isDev = process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath);

app.on('ready', function() {
    var appWin = new BrowserWindow({
        width: game.config.system.width,
        height: game.config.system.height,
        useContentSize: true,
        resizable: false,
        show: false
    });
    
    if (isDev) {
        appWin.loadURL('http://localhost:3000/');
    }
    else {
        appWin.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    
    appWin.once('ready-to-show', function() {
        appWin.show();
    });
});

app.on('window-all-closed', function() {
    app.quit();
});
