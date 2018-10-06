import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

  // startSonus = () => {
  //   const Sonus = window.require('sonus');
  //   const path = window.require('path');
  //   const speech = window.require('@google-cloud/speech')({
  //     projectId: 'travelplan-ai',
  //     keyFilename: path.resolve('./keyfile.json')
  //   });

  //   const hotwords = [{ file: path.resolve('node_modules/sonus/resources/sonus.pmdl'), hotword: 'sonus' }];
  //   const language = "en-US";

  //   //recordProgram can also be 'arecord' which works much better on the Pi and low power devices
  //   const sonus = Sonus.init({ hotwords, language, recordProgram: "rec" }, speech);

  //   Sonus.start(sonus)
  //   console.log('Say "' + hotwords[0].hotword + '"...');

  //   sonus.on('hotword', (index, keyword) => console.log("!" + keyword));

  //   sonus.on('partial-result', result => console.log("Partial", result));

  //   sonus.on('final-result', result => {
  //     console.log("Final", result);
  //     if (result.includes("stop")) {
  //       Sonus.stop();
  //     }
  //   });

  //   // Sonus.trigger(sonus, 0, "some hotword")
  // }

}
