import { Injectable } from '@angular/core';
import { Post } from './post';
import { Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class PostService {
    private postsUrl = environment.domain + 'api/post';

    constructor (private http: Http) {}

    createPost(newPost: Post): Promise<any> {
      return this.http.post(this.postsUrl, newPost)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}
