import { RedditService } from './../services/redit.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: any;

  constructor(private navCtrl: NavController, private redditService: RedditService) {}
   
  ngOnInit(){
    this.getPosts('sports', 10);
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(response => {
      this.items = response.data.children;
      
    });
  }

  viewItem(item) {
    this.navCtrl.navigateRoot(DetailsPage, { item: item})
  }
}
