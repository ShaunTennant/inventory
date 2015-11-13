import { Component, View, NgFor, NgClass } from 'angular2/angular2';
import { Inventory, InventoryItem, Key, Count } from '../inventoryshared/inventorytable.class'

@Component({
	selector: 'inventorytable',
	templateUrl: './components/inventorytable/inventorytable.html',
	styleUrls: ['./components/inventorytable/inventorytable.css'],
	directives: [NgFor, NgClass],
	inputs: ['inventory']
})
export class InventoryTableComponent {
}