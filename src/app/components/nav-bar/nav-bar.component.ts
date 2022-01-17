import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter
  public opened : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.opened = !this.opened;
    this.menuToggle.emit(this.opened);
  }

}
