import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from 'src/app/components/others/nav-bar/nav-bar.component';
import { ModalComponent } from 'src/app/components/others/modal/modal.component';
import { Storage, ref } from '@angular/fire/storage';
import { listAll, getDownloadURL } from '@firebase/storage';
import { alert } from 'src/app/utils/alert';
import axios from 'axios';

@Component({
  selector: 'app-feed-view',
  templateUrl: './feed-view.page.html',
  styleUrls: ['./feed-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, NavBarComponent, ModalComponent]
})
export class FeedViewPage implements OnInit {
  images: string[];
  token: string;

  constructor(private storage: Storage) {
    this.images = [];
    this.token = '';
  }

  ngOnInit() {
    this.getImages();
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

  getImages(){
    const imgRef = ref(this.storage, 'images');

    listAll(imgRef)
    .then(async response => {
        //console.log(response);
        this.images = [];
        for(let item of response.items){
          const url = await getDownloadURL(item)
          this.images.push(url);
          // console.log(url);
        }
    })
    .catch(error => console.log(error));
  }

  getData = async () =>{
    try{
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await axios.get(url);
      //console.log(response.data);
    }catch(error){
      //console.log(error);
    }
  }

}
