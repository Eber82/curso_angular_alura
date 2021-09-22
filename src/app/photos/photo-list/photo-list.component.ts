import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';


@Component({
  selector: 'app-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  photos : Photo[] = [];
  filter : string = ''
  debounce: Subject<string> = new Subject<string>();


  constructor(private activatedRouter : ActivatedRoute){}
  
  ngOnInit(){
    this.photos = this.activatedRouter.snapshot.data.photos;
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
  
}
