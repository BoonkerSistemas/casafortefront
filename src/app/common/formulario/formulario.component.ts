import { Component} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-formulario',
    imports: [],
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

    constructor(
        private viewportScroller: ViewportScroller,
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    submit(form:any){
        var name = form.name;
        console.log(name);
        
        var email = form.email;
        console.log(email);

        var number = form.number;
        console.log(number);
        
        var subject = form.subject;
        console.log(subject);
        
        var message = form.message;
        console.log(message);
    }

}