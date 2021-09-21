import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  
  photos : Object[] = [];


  constructor(private service : PhotoService){}
  
  ngOnInit(){
    this.service.listFromUser('flavio')
    .subscribe(photos => {
      this.photos = photos;
      console.log(photos[0].postDate)
    }, 
    erro => console.log(erro))
    
  }
}
