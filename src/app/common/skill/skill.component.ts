import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-skill',
    imports: [NgIf],
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}