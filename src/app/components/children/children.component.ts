import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sca-children',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
