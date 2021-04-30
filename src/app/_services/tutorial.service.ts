import { AngularFireStore } from '@angular/fire/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private db: AngularFireStore) {}
}
