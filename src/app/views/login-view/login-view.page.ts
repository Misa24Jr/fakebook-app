import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { AppStorageService } from 'src/services/app-storage.service';
//import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login-view.page.html',
  styleUrls: ['./login-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LoginPage implements OnInit {
  emailInputValue: String;
  passwordInputValue: String;

  constructor(private router: Router, private appStorageService: AppStorageService) {
    this.emailInputValue = '';
    this.passwordInputValue = '';
  }

  //aplicar validación de inputs
  ngOnInit() {

  }

  handleEmailInputChange(event: any) {
    this.emailInputValue = event.target.value;
  }

  handlePasswordInputChange(event: any) {
    this.passwordInputValue = event.target.value;
  }

  async handleLoginClick() {
    if(this.emailInputValue === '' || this.passwordInputValue === '') {
      return; //alertar al usuario que todos los campos son requeridos
    }

    try {
      const response = await fetch('https://fakebook-api-dev-qamc.3.us-1.fl0.io/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.emailInputValue,
          password: this.passwordInputValue
        })
      });

      if(response.status === 401) {
        return; //alertar al usuario que su correo o contraseña son incorrectos
      }

      if(response.status !== 401 && response.status !== 200) {
        return; //alertar al usuario que hubo un error desconocido en el servidor
      }

      const data = await response.json();
      await this.appStorageService.set('token', data.token);
      this.router.navigate(['/feed']);
    } catch (error) {
      //alertar al usuario que hubo un error al intentar iniciar sesión
    }
  }
}
