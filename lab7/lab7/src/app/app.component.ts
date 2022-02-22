import { Component } from '@angular/core';
import { UserRequest } from './user-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lab7';
  public userData: UserRequest = new UserRequest();

  emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ageRegex = /([0-9]*)?/;
  phoneRegex = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;

  nameError = '';
  loginError = '';
  sexError = '';
  bdError = '';
  emailError = '';
  ageError = '';
  cardError = '';
  phoneError = '';
  animalError = '';

  checkData() {
    this.nameError = '';
    this.loginError = '';
    this.sexError = '';
    this.bdError = '';
    this.emailError = '';
    this.ageError = '';
    this.cardError = '';
    this.phoneError = '';
    this.animalError = '';
    let isValid = true;

    if (this.userData.email === '') {
      this.emailError = 'Fill';
      isValid = false;
    } else if (!this.emailRegex.test(this.userData.email)) {
      this.emailError = 'Error';
      isValid = false;
    }

    if (this.userData.age === '') {
      this.ageError = 'Fill';
      isValid = false;
    } else if (!this.ageRegex.test(this.userData.age)) {
      this.ageError = 'Error';
      isValid = false;
    }

    if (this.userData.phone === '') {
      this.phoneError = 'Fill';
      isValid = false;
    } else if (!this.phoneRegex.test(this.userData.phone)) {
      this.phoneError = 'Error';
      isValid = false;
    }

    if (this.userData.name === '') {
      this.nameError = 'Fill';
      isValid = false;
    }

    if (this.userData.sex === '') {
      this.sexError = 'Fill';
      isValid = false;
    }

    if (this.userData.login === '') {
      this.loginError = 'Fill';
      isValid = false;
    }
    if (this.userData.animal === '') {
      this.animalError = 'Fill';
      isValid = false;
    }

    if (isValid) {
      this.userData = new UserRequest();
      alert('Pass');
    }
  }
}
