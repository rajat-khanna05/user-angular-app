import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  users: any[] = [];
  @Output() userSelected = new EventEmitter<any>();
  private userService = inject(UserService);
  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  selectUser(user: any) {
    this.userSelected.emit(user);
  }
}
