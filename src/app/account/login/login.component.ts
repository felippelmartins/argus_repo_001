import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };
  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;
  isDisabled = true;

  getErrorMessage() {
    if(this.email.hasError('required')) {
      return 'Entre um valor válido!';
    }
    return this.email.hasError('email') ? 'Não é um email válido' : '';
  }

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try {
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      this.router.navigate(['']);
    }catch(error) {
      console.error(error);
    }
  }

}
