import { Component } from "@angular/core";

@Component({
    selector: "pm-app",
    moduleId: module.id,
    templateUrl: "app.component.html"
})
export class AppComponent {
    pageTitle: string = "Acme Product Management";
}