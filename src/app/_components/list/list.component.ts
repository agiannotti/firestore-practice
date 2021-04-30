import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import Tutorial from 'src/app/_models/tutorial.model';

import { TutorialService } from './../../_services/tutorial.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  tutorials?: Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.tutorials = data;
      });
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
}
