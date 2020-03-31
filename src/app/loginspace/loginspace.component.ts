import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-loginspace',
  templateUrl: './loginspace.component.html',
  styleUrls: ['./loginspace.component.scss']
})
export class LoginspaceComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  constructor( private authService: AuthService ) { }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }

//    checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
//   }
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });

}
