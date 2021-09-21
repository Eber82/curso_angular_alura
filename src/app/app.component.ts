import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

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
