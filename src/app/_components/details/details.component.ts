import { TutorialService } from './../../_services/tutorial.service';
import Tutorial from 'src/app/_models/tutorial.model';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit, OnChanges {
  @Input() tutorial?: Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
  };
  message = '';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = { ...this.tutorial };
  }
  updatePublished(status: boolean): void {
    if (this.currentTutorial.id) {
      this.tutorialService
        .update(this.currentTutorial.id, {
          published: status,
        })
        .then(() => {
          this.currentTutorial.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch((err) => console.log(err));
    }
  }
  deleteTutorial(): void {
    if (this.currentTutorial.id) {
      this.tutorialService
        .delete(this.currentTutorial.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch((err) => console.log(err));
    }
  }
}
