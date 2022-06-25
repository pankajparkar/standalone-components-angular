import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sca-post-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$ = this.apiService.getPosts();

  constructor(
    private readonly apiService: ApiService,
  ) { }

  ngOnInit(): void {
  }

}
