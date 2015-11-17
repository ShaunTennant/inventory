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
        if (this.activeFilters.length > 0 && this.activeFilters[0] === filter) {
            InventoryService.activeFilters = [];
        } else {
            InventoryService.activeFilters = [filter];
        }
        this.activeFilters = InventoryService.activeFilters;
        InventoryService.filter();
    }

    filterMouseenter(filter: Filter) {
        this.mouseoverFilter = filter;
    }

    filterMouseleave() {
        this.mouseoverFilter = null;
    }
}