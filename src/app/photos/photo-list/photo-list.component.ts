import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  
  photos : Photo[] = [];
  filter : string = ''


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
