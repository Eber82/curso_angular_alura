import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";


@Pipe({name : 'filterByDescription'})
export class FilterByDescription implements PipeTransform{
    
    transform(photos: Photo[], descriptionQuery: string) {
        
        descriptionQuery = descriptionQuery
                        .trim()
                        .toLowerCase();

        console.log(descriptionQuery);

        if (descriptionQuery){
            
            console.log('1');
            photos = photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
            
            console.log(photos);
            
            return photos;

        }else{
        
            console.log('2');
            return photos;
        }

    }
}
