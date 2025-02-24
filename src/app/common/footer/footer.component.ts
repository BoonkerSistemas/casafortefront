import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DemoSidebarComponent } from '../demo-sidebar/demo-sidebar.component';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';
import { BoonkerSidebarComponent } from '../boonker-sidebar/boonker-sidebar.component';

@Component({
    selector: 'app-footer',
    imports: [BoonkerSidebarComponent, BackToTopComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}
