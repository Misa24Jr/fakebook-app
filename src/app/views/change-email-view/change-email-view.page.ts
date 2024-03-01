import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-change-email-view',
  templateUrl: './change-email-view.page.html',
  styleUrls: ['./change-email-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class ChangeEmailViewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
