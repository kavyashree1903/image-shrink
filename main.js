const { app, BrowserWindow } = require("electron");

process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV !== 'production' ? true : false
const isMac = process.platform == 'darwin' ? true : false

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    title: "Image Shrink",
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    resizable : isDev ? true : false,
  });
  // mainWindow.loadURL(`file://${__dirname}/app/index.html`)
  mainWindow.loadFile("./app/index.html");
}

app.on("ready", createMainWindow);

app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })