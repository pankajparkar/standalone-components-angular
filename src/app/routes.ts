import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';

export const routes: Routes = [
  {
    path: 'post/list',
    component: PostListComponent
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./components/post-details/post-details.component').then(m => m.PostDetailsComponent),
    children: [
      {
        path: 'child',
        loadComponent: () => import('./components/children/children.component').then(m => m.ChildrenComponent),
      }
    ]
  },
  { path: '**', redirectTo: 'post/list' },
];

