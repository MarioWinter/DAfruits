import { Component, Input } from "@angular/core";

@Component({
    selector: "app-singlefruit",
    standalone: true,
    imports: [],
    templateUrl: "./singlefruit.component.html",
    styleUrl: "./singlefruit.component.scss",
})
export class SinglefruitComponent {
    getStatusColor(stars: number) {
        return stars >= 3 ? "fontColorGood" : "fontColorBad";
    }
    getStarType(count: number, starts: number): string {
        if (starts >= count) {
            return "full";
        } else if (starts >= count - 0.5) {
            return "half";
        } else {
            return "empty";
        }
    }

    @Input() fruit = {
        name: "Apfel",
        img: "apple.png",
        description:
            "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
        genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
        stars: 2.3,
        reviews: [
            { name: "Kevin W.", text: "ist lecker" },
            { name: "Arne P.", text: "nicht so meins" },
        ],
    };
}
