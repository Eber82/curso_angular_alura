import { NgModule } from '@angular/core';



import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.modules';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
  ]
})

export class PhotosModule { }
