const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startUrl =
    process.env.ELECTRON_START_URL || `file://${path.join(__dirname, "dist", "index.html")}`
      mainWindow.loadURL(startUrl);
    

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
