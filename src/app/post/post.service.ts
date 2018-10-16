import { Injectable } from '@angular/core';
import { Post } from './post';
import { Http, Response } from '@angular/http';

@Injectable()
export class PostService {
    private postsUrl = '/api/post';

    constructor (private http: Http) {}

    getPosts(): Promise<Post[]> {
      return this.http.get(this.postsUrl)
                 .toPromise()
                 .then(response => response.json() as Post[])
                 .catch(this.handleError);
    }

    createPost(newPost: Post): Promise<Post> {
      return this.http.post(this.postsUrl, newPost)
                 .toPromise()
                 .then(response => response.json() as Post)
                 .catch(this.handleError);
    }

    deletePost(delPostId: String): Promise<String> {
      return this.http.delete(this.postsUrl + '/' + delPostId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    updatePost(putPost: Post): Promise<Post> {
      var putUrl = this.postsUrl + '/' + putPost._id;
      return this.http.put(putUrl, putPost)
                 .toPromise()
                 .then(response => response.json() as Post)
                 .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}
