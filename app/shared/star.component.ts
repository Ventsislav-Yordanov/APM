import { Component, OnChanges } from "@angular/core";

@Component({
    selector: "ai-star",
    moduleId: module.id,
    templateUrl: "star.component.html",
    styleUrls: ["star.component.html"]
})
export class StarComponent implements OnChanges {
    rating: number = 4; // hardcoded for now
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}