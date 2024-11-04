import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SpeakersComponent } from "./Speakers/Speakers.component";
import { DUMMY_SPEAKERS } from "./dummy-speakers";
import { popupComponent } from "./popup/popup.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SpeakersComponent, popupComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  speakers = DUMMY_SPEAKERS;
  selectedSpeakerId?: string;
  currentSlide = 0;
  speakersPerPage = 4;

  get maxSlides() {
    return Math.ceil(this.speakers.length / this.speakersPerPage) - 1;
  }

  get visibleSpeakers() {
    const start = this.currentSlide * this.speakersPerPage;
    return this.speakers.slice(start, start + this.speakersPerPage);
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlides) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }


get selectedUser()
{
  return this.speakers.find((speaker) => speaker.id === this.selectedSpeakerId)!;
}
  
onSelectSpeaker(id: string){
    this.selectedSpeakerId = id;
  }

  onClosePopup() {
    this.selectedSpeakerId = undefined; 
}
}
