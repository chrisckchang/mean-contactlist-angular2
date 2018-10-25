import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-entry',
  templateUrl: './post-entry.component.html',
  styleUrls: ['./post-entry.component.css']
})
export class PostEntryComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
