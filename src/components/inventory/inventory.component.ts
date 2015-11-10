import { bootstrap, Component, View, NgFor, Pipe, PipeTransform } from 'angular2/angular2';

import { InventoryTableComponent } from '../inventorytable/inventorytable.component'
import { Inventory, InventoryItem, Key } from '../inventoryshared/inventorytable.class'
import { InventoryService } from '../inventoryshared/inventory.service'

@Component({
	selector: 'inventoryroot',
	templateUrl: './components/inventory/inventory.html',
	styleUrls: ['./components/inventory/inventory.css'],
	directives: [InventoryTableComponent, NgFor]
})
export class InventoryRoot {
	private inventory: Inventory;

	constructor() {
		this.inventory = InventoryService.getInventory();
	}
}

bootstrap(InventoryRoot);