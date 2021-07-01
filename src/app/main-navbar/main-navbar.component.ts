import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent {
  title = 'BLOOD BANK PORTAL';
  showDonor:boolean=false
  showAddDonor:boolean=true
  showDueDonor:boolean=false
 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  display(){
    this.showDonor=!this.showDonor
    // this.showAddDonor=!this.showAddDonor
  }

  onAddDonor(){
    this.showDonor = false
    this.showDueDonor = false
    this.showAddDonor = true
    
  }

  onDonor(){
    this.showDonor = true
    this.showAddDonor = false
    this.showDueDonor = false
  }

  onDueDonor(){
    this.showDonor = false
    this.showAddDonor = false
    this.showDueDonor = true
  }


}
