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
	private activeFilters: Filter[] = InventoryService.activeFilters;
	private mouseoverFilter: Filter;

	filterClick(filter: Filter) {
		let index: number = this.activeFilters.indexOf(filter);
		if (index === -1) {
			this.activeFilters.push(filter);
		} else {
			this.activeFilters.splice(index, 1);
		}
		// let active: string = "";
        // this.activeFilters.forEach(function(filter: Filter) {
        //     active += filter.value + ',' + filter.rank + "|";
        // });
		// console.log(active);
		// let inventoryServiceActive: string = "";
        // InventoryService.activeFilters.forEach(function(filter: Filter) {
        //     inventoryServiceActive += filter.value + ',' + filter.rank + "|";
        // });
		// console.log(inventoryServiceActive);
	}
	
	filterMouseenter(filter: Filter) {
		this.mouseoverFilter = filter;
	}

	filterMouseleave() {
		this.mouseoverFilter = null;
	}
}