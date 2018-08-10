import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private email:string;
  private password:string;
  private resultado:string;
  private error:boolean;

  constructor() { }

  signin(){
    var self = this;
    var data = {
      email: this.email,
      password: this.password
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/login", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function(){
      if(xhr.status == 200){
        self.resultado = "You're email and password are correct";
        self.error = false;
      }else if(xhr.status == 400){
        self.resultado = "Missing email or password";
        self.error = true;
      }
    };
    xhr.send(JSON.stringify(data));
  }

  getemail(){
    var password = document.getElementById("hidepass");
    var boton = document.getElementById("signin");
    var boton2 = document.getElementById("sendemail");
    var texto = document.getElementById("signintext");
    password.style.display = "none";
    texto.style.display = "none";
    boton.style.display = "none";
    boton2.style.display = "block";
  }

  sendemail(){
    var password = document.getElementById("hidepass");
    var boton = document.getElementById("signin");
    var boton2 = document.getElementById("sendemail");
    var texto = document.getElementById("signintext");
    password.style.display = "block";
    texto.style.display = "block";
    boton.style.display = "block";
    boton2.style.display = "none";
    this.error = false;
    this.resultado = "Su email ha sido enviado";
  }
}
