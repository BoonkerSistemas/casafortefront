import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-demo-sidebar',
    imports: [RouterLink],
    templateUrl: './demo-sidebar.component.html',
    styleUrls: ['./demo-sidebar.component.scss']
})
export class DemoSidebarComponent {

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}