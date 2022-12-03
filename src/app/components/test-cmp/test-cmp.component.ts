import { TestService } from './../../services/test.service';
import { USER } from './../../models/UserModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-cmp',
  templateUrl: './test-cmp.component.html',
  styleUrls: ['./test-cmp.component.css']
})
export class TestCmpComponent implements OnInit {
  public userList!: USER[];
  public selectedUser!: USER;

  constructor(private testService: TestService) {
    this.selectedUser = new USER();
  }

  ngOnInit(): void {
    this.testService.fetchUsers().subscribe((res) => {
      this.userList = res;
    })
  }

  deleteUser(id: number, index: number) {
    this.testService.removeUser(id).subscribe(() => {
      this.userList.splice(index, 1);
    })
  }

  editUser() {
    console.log(this.selectedUser);
    this.testService.updateUser(this.selectedUser).subscribe((res) => {
      console.log("updated Successfully")
    })
  }

  // $$$$$$$$$ just to affect current user  in selected user in order to show that user's info $$$$$$$$$
  getCurrentUserInfo(currentUser: USER) {

    this.selectedUser = currentUser;

  }

}
