import { bootstrap, Component, View, NgFor, Pipe, PipeTransform } from 'angular2/angular2';

import { InventoryItemComponent } from '../inventoryitem/inventoryitem.component'
import { InventoryItem, Key } from '../inventoryitem/inventoryitem.class'
import { InventoryService } from './inventory.service'

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
	selector: 'inventory',
	templateUrl: './components/inventory/inventory.html',
	styleUrls: ['./components/inventory/inventory.css'],
	directives: [InventoryItemComponent, NgFor],
	pipes: [FirstLetterPipe]
})
export class Inventory {
	inventory: InventoryItem[];

	constructor() {
		this.inventory = InventoryService.getInventory();
	}
}

bootstrap(Inventory);