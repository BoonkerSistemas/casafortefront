import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-strategy',
    imports: [],
    templateUrl: './strategy.component.html',
    styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}