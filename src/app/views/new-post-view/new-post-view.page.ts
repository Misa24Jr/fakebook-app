import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Storage, ref, uploadBytes } from '@angular/fire/storage'

@Component({
  selector: 'app-new-post-view',
  templateUrl: './new-post-view.page.html',
  styleUrls: ['./new-post-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class NewPostViewPage implements OnInit {
  uploadImage(event: any){
    const file = event.target.files[0];
    console.log(file);


    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error));


  }
  constructor(private storage: Storage) { }

  ngOnInit() {
  }

}
