import { Injectable } from '@angular/core';
import { Post } from './post';
import { Http, Response } from '@angular/http';

@Injectable()
export class PostService {
    private postsUrl = '/api/post';

    constructor (private http: Http) {}

    // get("/api/posts")
    getPosts(): Promise<Post[]> {
      return this.http.get(this.postsUrl)
                 .toPromise()
                 .then(response => response.json() as Post[])
                 .catch(this.handleError);
    }

    // post("/api/posts")
    createPost(newPost: Post): Promise<Post> {
      return this.http.post(this.postsUrl, newPost)
                 .toPromise()
                 .then(response => response.json() as Post)
                 .catch(this.handleError);
    }

    // get("/api/posts/:id") endpoint not used by Angular app

    // delete("/api/posts/:id")
    deletePost(delPostId: String): Promise<String> {
      return this.http.delete(this.postsUrl + '/' + delPostId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/posts/:id")
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
