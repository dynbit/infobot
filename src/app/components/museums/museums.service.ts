import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../environments/environment';

@Injectable()

export class MuseumsService {

	constructor (
	    private http: HttpClient
	) {
		console.log('Content service loaded')
	}

	getAll() {
		let url = '/api/museums'
		return this.http.get(url)
	}

}