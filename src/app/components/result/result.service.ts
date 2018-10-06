import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../environments/environment';

@Injectable()

export class ResultService {

	constructor (
	    private http: HttpClient
	) {
		console.log('Content service loaded')
	}

	getResult(slug) {

		// let itemDataUrl = `${AppConfig.contentAPI}/${slug}`
		let itemDataUrl = `/api/result`

		return this.http.get(itemDataUrl)
	}

}