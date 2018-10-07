import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: 'call.component.html',
  styleUrls: ['call.component.scss'],
})

export class CallComponent implements OnInit {

  public recognition;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
  ) {}

  startRecognition = function(event) {
    this.recognition.start();
  }

	ngOnInit() {
    let _self = this;

    (<any>window).startRecognition = function() {
      _self.recognition.start();
    }

    let recognizing;
    let ignore_onend;
    let final_transcript = '';
    let start_timestamp;

    const {webkitSpeechRecognition} = (window as any)

    if (!('webkitSpeechRecognition' in window)) {
      console.log('Not supported')
    } else {

      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
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

        if (ignore_onend) {
          return;
        }

        if (!final_transcript) {
          console.log('info_start');
          return;
        }

        if (window.getSelection) {
          window.getSelection().removeAllRanges();
          var range = document.createRange();
          range.selectNode(document.getElementById('final_span'));
          window.getSelection().addRange(range);
        }
      };

      this.recognition.onresult = function(event) {

        var interim_transcript = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
            _self.recognition.stop();
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }

        console.log(interim_transcript)
        console.log(final_transcript)

      };

      // _self.recognition.start();

    }

  }

}




