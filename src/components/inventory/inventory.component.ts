import { bootstrap, Component, NgFor } from 'angular2/angular2';
import { Inventory, InventoryItem, Filter, Amount } from '../inventoryshared/inventorytable.class'
import { InventoryService } from '../inventoryshared/inventory.service'
import { InventoryTableComponent } from '../inventorytable/inventorytable.component'
import { InventoryFilters } from '../inventoryfilters/inventoryfilters.component'

@Component({
	selector: 'inventoryroot',
	templateUrl: './components/inventory/inventory.html',
	styleUrls: ['./components/inventory/inventory.css'],
	directives: [InventoryTableComponent, InventoryFilters, NgFor],
	providers: [InventoryService]
})
export class InventoryRoot {
	// private inventory: Inventory;

	constructor(inventoryService: InventoryService) {
		InventoryService.loadInventory();
	}
}

bootstrap(InventoryRoot);