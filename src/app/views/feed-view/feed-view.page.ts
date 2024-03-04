import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from 'src/app/components/others/nav-bar/nav-bar.component';
import { ModalComponent } from 'src/app/components/others/modal/modal.component';
import { alert } from 'src/app/utils/alert';
import axios from 'axios';
import { PostComponent } from 'src/app/components/containers/post/post.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-feed-view',
  templateUrl: './feed-view.page.html',
  styleUrls: ['./feed-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, NavBarComponent, ModalComponent, PostComponent, ScrollingModule]
})
export class FeedViewPage implements OnInit {
  token: string;

  description:string = 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';
  name: string = 'Isabella Fonseca';
  date: string = '27/08/2024';

  constructor() {
    this.token = '';
  }

  ngOnInit() {
    // this.getImages();
    this.getData();
    this.getFriendPosts();
  }

  async getFriendPosts() {
    try {
      const response = await fetch('https://fakebook-api-dev-qamc.3.us-1.fl0.io/api/posts/getByFriends', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${this.token}` }
      });

      if(response.status !== 200) return alert('Error!', 'Server error getting your friend posts', ['OK']);

      const data = await response.json();
      return console.log(data);
    } catch (error) {
      return alert('Error!', 'Unable to get your friend posts', ['OK']);
    }
  }

  getData = async () =>{
    try{
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await axios.get(url);
      //console.log(response.data);
    }catch(error){
      console.log(error);
    }
  }

}
