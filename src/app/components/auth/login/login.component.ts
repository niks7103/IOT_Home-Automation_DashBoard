import { CommonModule } from '@angular/common';  
import { Component } from '@angular/core';  
import { FormsModule } from '@angular/forms';  
import { Router, RouterModule } from '@angular/router';  

@Component({  
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css'],  
  standalone: true,  // ✅ Standalone component  
  imports: [CommonModule, FormsModule, RouterModule]  // ✅ Ensure RouterModule is imported  
})  
export class LoginComponent {  
  email: string = '';  
  password: string = '';  
  errorMessage: string = '';  

  constructor(private router: Router) {}  

  login(event: Event) {  
    event.preventDefault(); // Prevents form submission from reloading the page  
    if (this.email === 'admin@example.com' && this.password === 'password123') {  
      console.log("Logged in as:", this.email);
      this.router.navigate(['/dashboard']);  // ✅ Ensure '/dashboard' route exists  
    } else {  
      this.errorMessage = 'Invalid email or password';  
    }  
  }  
}
