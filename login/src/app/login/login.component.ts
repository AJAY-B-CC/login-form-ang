import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private http:HttpClient,private router:Router) {
    this.username = '';
    this.password = '';
    
  }
 
onLogin(){
  console.log(this.username,this.password)
  if (!this.username || !this.password) {
    alert("Username and password cannot be empty.");
    return; 
  }
  
  this.http.post('https://hrm-backend-square.onrender.com/auth/login', {
    email:this.username,
    password:this.password
  })
  .subscribe((res:any)=>{
    if(res.existingUser){
      console.log(res);
      this.router.navigateByUrl("/homepage")
    }
    
  },
  (err)=>{
    alert(err.error.message);
  })
}

}
