import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from 'src/app/components/others/nav-bar/nav-bar.component';
import { ModalComponent } from 'src/app/components/others/modal/modal.component';
import { Storage, ref } from '@angular/fire/storage';
import { listAll, getDownloadURL } from '@firebase/storage';
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

  constructor(private storage: Storage) {
    this.images = [];
  }

  ngOnInit() {
    this.getImages();
    this.getData();
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
          // console.log(url);
        } 
    })
    .catch(error => console.log(error));
  }

  getData = async () =>{
    try{
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await axios.get(url);
      console.log(response.data);
    }catch(error){
      console.log(error);
    }
  }

}