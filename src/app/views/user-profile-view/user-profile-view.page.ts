import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';
import { Storage, ref } from '@angular/fire/storage';
import { listAll, getDownloadURL } from '@firebase/storage';
import { alert } from 'src/app/utils/alert';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.page.html',
  styleUrls: ['./user-profile-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class UserProfileViewPage implements OnInit {
  images: string[];
  token: string;

  constructor(private storage: Storage) {
    this.images = [];
    this.token = '';
  }

  ngOnInit() {
    this.getImages();
  }

  async getAllPosts() {
    try {
      const response = await fetch('https://fakebook-api-dev-qamc.3.us-1.fl0.io/api/posts/getAll', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${this.token}` }
      });

      if(response.status !== 200) return alert('Error!', 'Server error getting your posts', ['OK']);

      const data = await response.json();
      return console.log(data);
    } catch (error) {
      return alert('Error!', 'Unable to get your posts', ['OK']);
    }
  }

  getImages(){
    const imgRef = ref(this.storage, 'images');

    listAll(imgRef)
    .then(async response => {
        console.log(response);
        this.images = [];
        for(let item of response.items){
          const url = await getDownloadURL(item)
          this.images.push(url);
          console.log(url);
        }
    })
    .catch(error => console.log(error));
  }
}
