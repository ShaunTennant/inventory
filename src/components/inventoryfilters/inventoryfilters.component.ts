import { Component, NgFor } from 'angular2/angular2';
import { Inventory, InventoryItem, Filter, Amount } from '../inventoryshared/inventorytable.class'
import { InventoryService } from '../inventoryshared/inventory.service'

@Component({
	selector: 'inventoryfilters',
	templateUrl: './components/inventoryfilters/inventoryfilters.html',
	styleUrls: ['./components/inventoryfilters/inventoryfilters.css'],
	directives: [NgFor]
})
export class InventoryFilters {
	private uniqueFilters: Filter[] = InventoryService.uniqueFilters;
}