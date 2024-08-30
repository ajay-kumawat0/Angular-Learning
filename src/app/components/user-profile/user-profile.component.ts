import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input({alias: "userName"}) name: String | undefined;


  // name = 'Raj';
  // age = 25;
  // email = 'raj@gmail.com';
  // isBtnDisabled = false;
  // inputVal = 'Hello World';

  // users = [
  //   {name: 'Raj', age: 25, isAvailable: true},
  //   {name: "Jay", age: 30, isAvailable: false},
  //   {name: "Shyam", age: 18, isAvailable: true},
  // ]
  // test(e: Event){
  //   const value = (e.target as HTMLInputElement).value;
  //   this.inputVal = value;
  // }
}
