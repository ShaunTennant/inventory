import { Component, NgFor } from 'angular2/angular2';
import { Inventory, InventoryItem, Filter, Amount } from '../inventoryshared/inventorytable.class'
import { InventoryService } from '../inventoryshared/inventory.service'

@Component({
	selector: 'inventorytable',
	templateUrl: './components/inventorytable/inventorytable.html',
	styleUrls: ['./components/inventorytable/inventorytable.css'],
	directives: [NgFor]
})
export class InventoryTableComponent {
	private inventory: Inventory = InventoryService.inventory;
}