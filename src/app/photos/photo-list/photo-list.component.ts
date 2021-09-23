import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  photos : Photo[] = [];
  filter : string = ''
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';


  constructor(private activatedRouter : ActivatedRoute, private photoService : PhotoService){}
  
  ngOnInit(){
    this.photos = this.activatedRouter.snapshot.data.photos;
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
    this.userName = this.activatedRouter.snapshot.params.userName;
    console.log(`------- ${this.userName}`);

  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
  
  load() {
    
    //currentPage começa de 2, pois o 'resolver tratou o 1 carregamento'

    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
            this.photos = this.photos.concat(photos);
            if(!photos.length) this.hasMore = false;
        });
}

}
