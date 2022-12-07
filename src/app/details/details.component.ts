import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  idetails: any
  @Output()
  updatedetails = new EventEmitter<any>()
  @Output()
  dltdetails = new EventEmitter<any>()


  ngOnInit() { }
  edit() {
    this.updatedetails.emit(this.idetails)
  }
  delete() {
    this.dltdetails.emit(this.idetails.id)
    
  }


}
