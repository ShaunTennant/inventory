import { bootstrap, Component, View, NgFor, Pipe, PipeTransform } from 'angular2/angular2';

import { InventoryTableComponent } from '../inventorytable/inventorytable.component'
import { InventoryFilterComponent } from '../inventoryfilters/inventoryfilters.component'
import { Inventory, InventoryItem, Key } from '../inventoryshared/inventorytable.class'
import { InventoryService } from '../inventoryshared/inventory.service'

@Component({
	selector: 'inventoryroot',
	templateUrl: './components/inventory/inventory.html',
	styleUrls: ['./components/inventory/inventory.css'],
	directives: [InventoryFilterComponent, InventoryTableComponent, NgFor]
})
export class InventoryRoot {
	private inventory: Inventory;
	private filters: Key[];

	constructor() {
		this.inventory = InventoryService.inventoryOpen();
		this.filters = InventoryService.selectedKeys;
	}
}

bootstrap(InventoryRoot);