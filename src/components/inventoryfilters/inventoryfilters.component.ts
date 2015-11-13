import { Component, View, NgFor, NgClass } from 'angular2/angular2';
import { Inventory, InventoryItem, Key, Count } from '../inventoryshared/inventorytable.class'

@Component({
	selector: 'inventoryfilters',
	templateUrl: './components/inventoryfilters/inventoryfilters.html',
	styleUrls: ['./components/inventoryfilters/inventoryfilters.css'],
	directives: [NgFor, NgClass],
	inputs: ['bbbb']
})
export class InventoryFiltersComponent {
}