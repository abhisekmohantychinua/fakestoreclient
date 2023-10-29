import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credentials: {
    username: string;
    password: string;
  };
  constructor(
    private authService: AuthService,
    private _snack: SnackbarComponent,
    private router: Router
  ) {
    this.credentials = { username: '', password: '' };
  }
  ngOnInit(): void {
    this.authService.logout();
  }

  onSubmit() {
    this.authService.loginUser(this.credentials).subscribe({
      next: (data: any) => {
        this.authService.setJwt(data.token);
        this.authService.getAllUser().subscribe({
          next: (data: any) => {
            const users = data as Array<User>;
            const user: User = users.filter(
              (u) =>
                u.username === this.credentials.username &&
                u.password === this.credentials.password
            )[0];
            this.authService.setUser(user);
            this.authService.updateLoginStatus();
            this.router.navigate(['/']);
          },
          error: (error) => {
            this.authService.logout();
            this._snack.openSnackBar("Couldn't fetch user.", 'Ok');
          },
        });
      },
      error: (error) => {
        this.authService.logout();
        this._snack.openSnackBar('Invalid username or password', 'Ok');
      },
    });
  }
}
