import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration Form';
  
  dnaam="";
  dadd="";
  dno="";
  demail="";
  

getValue(naam:string,add:string,no:string,email:string) {
  this.dnaam=naam;
  this.dadd=add;
  this.dno=no;
  this.demail=email;
  
}
}