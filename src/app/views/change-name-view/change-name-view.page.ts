import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-change-name-view',
  templateUrl: './change-name-view.page.html',
  styleUrls: ['./change-name-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ChangeNameViewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
