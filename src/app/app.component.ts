import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vermax Industries';
  showMe:boolean=false

  ngOnInit(){
      
  }

  display(){
    this.showMe=!this.showMe
  }

  show(){
    this.showMe = true
  }

}
