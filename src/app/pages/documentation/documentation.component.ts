import { Component, OnInit } from '@angular/core';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  users: Array<User> = [];
  constructor(
    private authService: AuthService,
    private _snack: SnackbarComponent
  ) {}
  ngOnInit(): void {
    this.authService.getAllUser().subscribe({
      next: (data: any) => {
        this.users = data as Array<User>;
      },
      error: (error) => {
        this._snack.openSnackBar("Couldn't fetch user details.", 'Ok');
      },
    });
  }
}
