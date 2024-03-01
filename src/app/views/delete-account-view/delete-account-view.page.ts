import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-account-view',
  templateUrl: './delete-account-view.page.html',
  styleUrls: ['./delete-account-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class DeleteAccountViewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
