import { Component,EventEmitter,Input, Output } from '@angular/core';
import { type Speakers } from './Speakers.model';



@Component({
  selector: 'app-Speakers',
  standalone: true,
  templateUrl: './Speakers.component.html',
})

export class SpeakersComponent {
@Input({required: true}) speaker!: Speakers;
@Input( { required: true }) selected!: boolean;
@Output() select = new EventEmitter<string>();


get imagePath(){
  return 'assets/speakers/'+ this.speaker.avatar;
}

  onSelectUser(){
    this.select.emit(this.speaker.id);
  }


}
export { Speakers };

