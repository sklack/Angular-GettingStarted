import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
	selector: 'pm-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})

export class StarCompnent implements OnChanges {
	@Input() rating: number = 4;
	starWidth: number = 75;
	@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()
	ngOnChanges(): void {
		this.starWidth = this.rating * 75 / 5
	}

	onClick(): void {
		this.ratingClicked.emit(`The rating is ${this.rating}`)
	}
}