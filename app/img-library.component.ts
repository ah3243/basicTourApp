import { Component } from '@angular/core';

@Component({
    selector: 'img-library',
    template: `
                <p>This is the image gallery</p>
                <button class="btn button" (click)="addLocation()">Add Location</button>
    `
})
export class ImgLibrary{
    addLocation(): void{
        console.log('Adding Location..');
        
    }    
}