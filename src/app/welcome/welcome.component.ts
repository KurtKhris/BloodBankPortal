import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Output() dataTable = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  DataT(){
    this.dataTable.emit('app-root');
  }

}
