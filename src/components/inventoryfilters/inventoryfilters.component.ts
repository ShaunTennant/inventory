import { Component, View, NgFor, NgClass } from 'angular2/angular2';
import { Inventory, InventoryItem, Key, Count, Test } from '../inventoryshared/inventorytable.class'

@Component({
	selector: 'inventoryfilters',
	templateUrl: './components/inventoryfilters/inventoryfilters.html',
	styleUrls: ['./components/inventoryfilters/inventoryfilters.css'],
	directives: [NgFor, NgClass],
	inputs: ['aaaa']
})
export class InventoryFiltersComponent {
}