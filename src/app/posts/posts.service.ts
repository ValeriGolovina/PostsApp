import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PostModel} from '../core/models/Post';
import {BehaviorSubject, Subject} from 'rxjs';
import {first, map, skip, take, takeLast} from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }
  public editedPost = new BehaviorSubject({});
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  addPost(data) {
   const body = {
     'title' : data[2],
     'description': data[1],
     'userId': data[0]
   };
   return this.http.post('https://jsonplaceholder.typicode.com/posts', body);
  }
  updatePost(id: number, user: PostModel) {
      return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, user);
  }
  getComments (id: number) {
   return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
  getUserPosts (userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
