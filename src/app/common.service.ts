import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CommonService {
  APIUrl = 'http://188.40.50.201:89/CMS/AppWCF.svc';
  ticket = '';
  IsAthenticated = false;
  constructor(private router: Router) {
  }

  setTicket(ticket) {
    sessionStorage.setItem('ticket', ticket);
    this.ticket = sessionStorage.getItem('ticket');
  }

  getTicket() {
    if (sessionStorage.getItem('ticket') == null) {
      this.ticket = null;
    } else {
      this.ticket = sessionStorage.getItem('Ticket');
    }
  }

  Handle_Successfull_Login(ticket) {
    this.IsAthenticated = true;
    this.setTicket(ticket);
    this.router.navigate(['/main']);
  }

  logout()  {
     this.setTicket(null);
     this.IsAthenticated = false;
     this.router.navigate(['/login']);
  }

  // tslint:disable-next-line:one-line
  checkIfAuthentic() {   
    if (this.IsAthenticated === false) {
      this.logout();
    }
  }
}
