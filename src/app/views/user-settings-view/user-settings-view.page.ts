import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from 'src/app/components/others/nav-bar/nav-bar.component';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline, chevronForwardOutline, chevronBack } from 'ionicons/icons';

@Component({
  selector: 'app-user-settings-view',
  templateUrl: './user-settings-view.page.html',
  styleUrls: ['./user-settings-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, NavBarComponent, IonIcon]
})
export class UserSettingsViewPage implements OnInit {

  constructor() { 
    addIcons({ personCircleOutline });
    addIcons({ chevronForwardOutline });
    addIcons({ chevronBack });
  }

  ngOnInit() {
  }

}
