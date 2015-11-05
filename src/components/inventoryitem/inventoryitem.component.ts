import { Component, View, NgFor, NgClass } from 'angular2/angular2';
import { InventoryItem } from './inventoryitem.class'

@Component({
	selector: "inventoryitem",
	templateUrl: './components/inventoryitem/inventoryitem.html',
	styleUrls: ['./components/inventoryitem/inventoryitem.css'],
	directives: [NgFor, NgClass],
	inputs: ['item', 'index']
})
export class InventoryItemComponent {
}