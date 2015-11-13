import { Component, View, NgFor, NgClass } from 'angular2/angular2';
// import { InventoryItem } from '../inventoryshared/inventorytable.class'

@Component({
	selector: 'inventoryfilter',
	templateUrl: './components/inventoryfilters/inventoryfilters.html',
	styleUrls: ['./components/inventoryfilters/inventoryfilters.css'],
	directives: [NgFor, NgClass],
	inputs: ['filters']
})
export class InventoryFilterComponent {
}