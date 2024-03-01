import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-change-password-view',
  templateUrl: './change-password-view.page.html',
  styleUrls: ['./change-password-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ChangePasswordViewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
