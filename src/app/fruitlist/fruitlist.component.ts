import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { SinglefruitComponent } from "./singlefruit/singlefruit.component";
import { FruitlistdataService } from "../shared/components/fruitlistdata.service";

@Component({
    selector: "app-fruitlist",
    standalone: true,
    imports: [CommonModule, SinglefruitComponent],
    templateUrl: "./fruitlist.component.html",
    styleUrl: "./fruitlist.component.scss",
})
export class FruitlistComponent {
    FontBackroundColor: string = "#00000";
    fruitlistdata = inject(FruitlistdataService);

    AddCommentToFruit(comment: string, index: number) {
        this.fruitlistdata.postComment(comment, index);
    }
}
