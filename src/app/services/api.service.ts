import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getPosts() {
    return this.http.get(`${environment.API_URL}/posts`);
  }

  getPost(id: string) {
    return this.http.get(`${environment.API_URL}/posts/${id}`);
  }
}
