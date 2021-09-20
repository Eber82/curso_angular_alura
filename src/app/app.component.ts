import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos : Object[] = [];


  constructor(service : PhotoService){
    
    service.listFromUser('flavio')
    .subscribe(photos => this.photos = photos,
      erro => console.log(erro))
  }


}
