import { bootstrap, Component, View, NgFor, Pipe, PipeTransform } from 'angular2/angular2';
import { Inventory, InventoryItem, Filter, Amount } from '../inventoryshared/inventorytable.class'
import { InventoryService } from '../inventoryshared/inventory.service'
import { InventoryTableComponent } from '../inventorytable/inventorytable.component'

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