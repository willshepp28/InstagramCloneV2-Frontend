import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "../../core/store/app.states";
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post/post';
import { LoadPosts } from 'src/app/core/store/actions/post.actions';


@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.css']
})
export class InstagramFeedComponent implements OnInit {
  post$: Observable<Post>;

  constructor(
    private store: Store<any>
  ) {

   }

  ngOnInit() {
    this.store.dispatch(new LoadPosts());
    this.store.select('posts').subscribe(post => {
      this.post$ = post.posts;
     });
  }

}
