import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function startSonus() {
  const Sonus = require('sonus');
  const path = require('path');
  const speech = require('@google-cloud/speech')({
    projectId: 'infobotas-1538826776838',
    keyFilename: path.resolve('./keyfile.json')
  });

  const hotwords = [{ file: path.resolve('node_modules/sonus/resources/sonus.pmdl'), hotword: 'sonus' }]
  const language = "en-US"

  //recordProgram can also be 'arecord' which works much better on the Pi and low power devices
  const sonus = Sonus.init({ hotwords, language, recordProgram: "rec" }, speech)

  Sonus.start(sonus)
  console.log('Say "' + hotwords[0].hotword + '"...')

  sonus.on('hotword', (index, keyword) => console.log("!" + keyword))

  sonus.on('partial-result', result => console.log("Partial", result))

  sonus.on('final-result', result => {
    console.log("Final", result)
    if (result.includes("stop")) {
      Sonus.stop()
    }
  })

  // try{
  //   Sonus.trigger(sonus, 2)
  // } catch (e) {
  //   console.log('Triggering Sonus with an invalid index will throw the following error:', e)
  // }

  //Will use index 0 with a hotword of "triggered" and start streaming immedietly
  Sonus.trigger(sonus, 0, "some hotword")
}

function createWindow() {

  var n = navigator;
  n.getUserMedia({video: true, audio:true}, function (stream) {  }, function (error) {  });

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  startSonus()
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
