import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class popupComponent  {
  @Input({required : true}) userId!: string;
  @Input({required : true}) name!: string;
  @Input({required: true}) summary!: string;
  @Input({required: true}) role!: string;
  @Input({required: true}) company!: string;
  @Input({required: true}) avatar!:string;
  drupalLogo = '';
  xLogo = '';
  linkedinLogo = '';

  @Output() close = new EventEmitter<void>();

  get imagePath(){
    return 'assets/speakers/'+ this.avatar;
  }

  closePopup() {
    this.close.emit();
  }



}
