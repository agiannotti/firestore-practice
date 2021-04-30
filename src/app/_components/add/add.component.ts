import { TutorialService } from './../../_services/tutorial.service';
import { Component } from '@angular/core';
import Tutorial from 'src/app/_models/tutorial.model';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  tutorial: Tutorial = new Tutorial();
  submitted = false;

  constructor(private tutorialService: TutorialService) {}

  saveTutorial(): void {
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }
}
