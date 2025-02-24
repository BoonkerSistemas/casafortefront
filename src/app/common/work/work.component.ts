import { Component } from '@angular/core';
import { NgClass, NgIf, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-work',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}