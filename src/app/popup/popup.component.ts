import { Component, OnInit,Input, Output, EventEmitter, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() title:any = 'test';
  @Input() msg:any = 'test';
  @Input() close = false;
  @Output() closepopupclicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  closePopup(){
    //this.close = true;
    this.closepopupclicked.emit(true);
  }

  
  
  keyboardEvent: any;    
	@HostListener('window:keydown', ['$event'])
	 keyboardInput(event: any) {
		 this.keyboardEvent = event;
		  if (event.keyCode == 27){
			console.log("Esc Key press to clsoe current popup");
			this. closePopup();
		  }
	 }
}
