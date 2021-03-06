import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';
import { NgZone } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})

export class HomeComponent implements OnInit {

	public recognition;

	constructor(
		private router: Router,
    private _ngZone: NgZone,
	) {}

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
	      this.recognition.lang = "lt-LT";

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

	        if (interim_transcript.toLowerCase().indexOf('kaun') !== -1) {
	        	_self.recognition.stop();
            _self._ngZone.run(() => {
              _self.router.navigate(['/', 'call', {
                autostart: true
              }]);
            });
	        }

	      };

	      _self.recognition.start();

	    }

	}  

}



