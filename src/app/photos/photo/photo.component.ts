import { Component, Input } from "@angular/core";

@Component({
    selector : 'ap-photo',
    templateUrl : 'photo.component.html'
})
export class PhotoComponent {
    @Input() url = 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/05/Vit%C3%B3ria2.jpg';
    @Input() description= 'Escudo Vitória';
}