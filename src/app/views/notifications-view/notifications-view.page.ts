import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from 'src/app/components/others/nav-bar/nav-bar.component';
import { PhotosService } from 'src/services/photos.service';

@Component({
  selector: 'app-notifications-view',
  templateUrl: './notifications-view.page.html',
  styleUrls: ['./notifications-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavBarComponent]
})
export class NotificationsViewPage implements OnInit {

  photos: string[] = [];

  constructor(private photosService: PhotosService) {
    this.photos = this.photosService.photos;
  }

  ngOnInit() {
  }

  async takePhoto(){
    await this.photosService.addNewPhoto();
  }

}
