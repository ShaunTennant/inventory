import { bootstrap, Component, View, NgFor, Pipe, PipeTransform } from 'angular2/angular2';

import { InventoryTableComponent } from '../inventorytable/inventorytable.component'
import { InventoryFiltersComponent } from '../inventoryfilters/inventoryfilters.component'
import { Inventory, InventoryItem, Key, Count, Test } from '../inventoryshared/inventorytable.class'
import { InventoryService } from '../inventoryshared/inventory.service'

@Component({
	selector: 'inventoryroot',
	templateUrl: './components/inventory/inventory.html',
	styleUrls: ['./components/inventory/inventory.css'],
	directives: [InventoryFiltersComponent, InventoryTableComponent, NgFor]
})
export class InventoryRoot {
	private inventory: Inventory;
	private uniqueKeys: Test;

	constructor() {
		this.inventory = InventoryService.inventoryOpen();
		this.uniqueKeys = InventoryService.uniqueKeysGet();
		// this.uniqueKeys = [{ key: "b", rank: 0 }];
	}
}

bootstrap(InventoryRoot);