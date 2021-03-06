import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';
import { NgZone } from '@angular/core';

const axios = require('axios');

function processText(query, callback) {
  axios.post('http://localhost:5000/parse', { query: query, project: "current"})
    .then(function (response) {
      callback(query, response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

@Component({
  templateUrl: 'call.component.html',
  styleUrls: ['call.component.scss'],
})

export class CallComponent implements OnInit {

  public recognition;
  public recording: boolean = false;
  public sub;
  public params;

  constructor(
    private _ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {

  }

  startRecognition = function(event = null) {
    this.recognition.start();
    this.recording = true;
  }

  ngOnInit() {

    console.log("ngOnInit")

    let _self = this;

    let recognizing;
    let ignore_onend;
    let final_transcript = '';
    let start_timestamp;

    const {webkitSpeechRecognition} = (window as any)

    if (!('webkitSpeechRecognition' in window)) {
      console.log('Not supported')
    } else {

      this.recognition = new webkitSpeechRecognition();
      //this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = "en-US";

      this.recognition.onstart = function() {
        recognizing = true;
        console.log('info_speak_now');
      };

      this.recognition.onerror = function(event) {

        if (event.error == 'no-speech') {
          console.log('info_no_speech');
          ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
          console.log('info_no_microphone');
          ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
          if (event.timeStamp - start_timestamp < 100) {
            console.log('info_blocked');
          } else {
            console.log('info_denied');
          }
          ignore_onend = true;
        }
      };

      this.recognition.onend = function() {

        recognizing = false;

        _self._ngZone.run(() => {
          _self.recording = false;
        });

        if (ignore_onend) {
          return;
        }

        if (!final_transcript) {
          console.log('info_start');
          _self.recording = false;
          return;
        }
      };

      this.recognition.onresult = function(event) {

        var interim_transcript = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {

            var transcript = event.results[i][0].transcript
            console.log("Final transcript: ", transcript)

            processText(transcript, function(a,b) {
              console.log("Intent: ", b.intent.name)
              console.log("Entities: ", b.entities)

              if (b.entities.length > 0) {
                _self._ngZone.run(() => {
                  _self.router.navigate(['/', 'result', {
                    search_type: b.entities[0].entity,
                    keyword: b.entities[0].value,
                  }]);
                });
              } else {

                if (!_self.recording) {
                  console.log('Restart recording')
                  _self.startRecognition()   
                }

              }

            })

            interim_transcript = '';
            final_transcript = '';

          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }

        console.log(interim_transcript)

      };

    }

    this.route.params
    .subscribe((params) => {
      if (params.autostart) {
        this.startRecognition();
      }
    });

  }

}




