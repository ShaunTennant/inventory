import { bootstrap, Component, View, NgFor, Pipe, PipeTransform } from 'angular2/angular2';

import { InventoryTableComponent } from '../inventorytable/inventorytable.component'
import { Inventory, InventoryItem, Key } from '../inventoryshared/inventorytable.class'
import { InventoryService } from '../inventoryshared/inventory.service'

@Pipe({
	name: 'firstLetter'
})
class FirstLetterPipe implements PipeTransform {
	transform(inventory: InventoryItem[], args: string[]) {
		return inventory.filter(function(item: InventoryItem) {
			return item.keys[0].key === args[0];
		});
	}
}

@Component({
	selector: 'inventoryroot',
	templateUrl: './components/inventory/inventory.html',
	styleUrls: ['./components/inventory/inventory.css'],
	directives: [InventoryTableComponent, NgFor],
	pipes: [FirstLetterPipe]
})
export class InventoryRoot {
	private inventory: Inventory;

	constructor() {
		this.inventory = InventoryService.getInventory();
	}
}

bootstrap(InventoryRoot);