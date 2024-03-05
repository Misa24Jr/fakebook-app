import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';
import { alert } from 'src/app/utils/alert';
<<<<<<< HEAD
import { FriendsComponent } from 'src/app/components/containers/friends/friends.component';
=======
import { GetResult, Preferences } from '@capacitor/preferences';
>>>>>>> 2c38aa41830a130ad78c742b8c24e331b3e6a6f3

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.page.html',
  styleUrls: ['./search-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, FriendsComponent]
})
export class SearchViewPage implements OnInit {
<<<<<<< HEAD
  token: string;
  name: string = 'Luis Romero';
=======
  token: GetResult;
>>>>>>> 2c38aa41830a130ad78c742b8c24e331b3e6a6f3

  constructor(private router: Router) {
    this.token = { value: '' };
  }

  async ngOnInit() {
    this.token = await Preferences.get({ key : 'token' });
  }

  async handleSearchInputChange(event: any) {
    try {
      const response = await fetch('https://fakebook-api-dev-qamc.3.us-1.fl0.io/api/users/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token.value}`
        },
        body: JSON.stringify({ name: event.target.value })
      });

      if(response.status !== 200) return alert('Error!', 'Server error searching for users', ['OK']);

      const data = await response.json();
      return console.log(data);
    } catch (error) {
      return alert('Error!', 'An error occurred searching for users', ['OK']);
    }
  }

}
