import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';
import { alert } from 'src/app/utils/alert';

@Component({
  selector: 'app-change-password-view',
  templateUrl: './change-password-view.page.html',
  styleUrls: ['./change-password-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ChangePasswordViewPage implements OnInit {
  passwordInputValue: String;
  token: string;

  constructor(private router: Router) {
    this.passwordInputValue = '';
    this.token = ''; //get token from storage
  }

  ngOnInit() {

  }

  handlePasswordChange(event: any) {
    this.passwordInputValue = event.target.value;
  }

  async handleConfirmClick() {
    if(this.passwordInputValue === '') return alert('Oops!', 'New password is required', ['Try Again']);

    try {
      const response = await fetch('https://fakebook-api-dev-qamc.3.us-1.fl0.io/api/users/updatePassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        },
        body: JSON.stringify({ password: this.passwordInputValue })
      });

      if(response.status !== 200) return alert('Error!', 'Unknown error in server', ['OK']);

      alert('Success!', 'Password has been changed successfully', ['Continue']);
      return this.router.navigate(['/user-settings']);
    } catch (error) {
      return alert('Error!', 'Something went wrong while trying to change password', ['OK']);
    }
  }

}
