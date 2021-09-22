import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';


@Component({
  selector: 'app-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  
  photos : Photo[] = [];
  filter : string = ''


  constructor(private activatedRouter : ActivatedRoute){}
  
  ngOnInit(){
    this.photos = this.activatedRouter.snapshot.data.photos;
  }
}
