import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-typewriter:not(1)',
    imports: [],
    templateUrl: './typewriter.component.html',
    styleUrl: './typewriter.component.scss'
})
export class TypewriterComponent implements OnInit {

    textArray: string[] = ["Professional", "Passionate", "Creative", "Designer", "Unique", "Best", "Support"];
    typeWriterElement!: HTMLElement;

    ngOnInit(): void {
        this.typeWriterElement = document.getElementById('typewriter')!;
        setTimeout(() => {
            this.startWriter(0);
        }, 1000);
    }

    delWriter(text: string, i: number, cb: () => void) {
        if (i >= 0) {
            this.typeWriterElement.innerHTML = text.substring(0, i--);
            const rndBack = 10 + Math.random() * 100;
            setTimeout(() => {
                this.delWriter(text, i, cb);
            }, rndBack);
        } else if (typeof cb === 'function') {
            setTimeout(cb, 1000);
        }
    }

    typeWriter(text: string, i: number, cb: () => void) {
        if (i < text.length + 1) {
            this.typeWriterElement.innerHTML = text.substring(0, i++);
            const rndTyping = 250 - Math.random() * 100;
            setTimeout(() => {
                this.typeWriter(text, i, cb);
            }, rndTyping);
        } else if (i === text.length + 1) {
            setTimeout(() => {
                this.delWriter(text, i, cb);
            }, 1000);
        }
    }

    startWriter(i: number) {
        if (typeof this.textArray[i] === "undefined") {
            setTimeout(() => {
                this.startWriter(0);
            }, 1000);
        } else if (i < this.textArray.length) {
            this.typeWriter(this.textArray[i], 0, () => {
                this.startWriter(i + 1);
            });
        }
    }

}