export class Inventory {
	items: InventoryItem[] = [];
	matches: boolean[] = [];
	greys: boolean[] = [];
}

export class InventoryItem {
	description: string | number;
	filters: Filter[];
	amounts: Amount[];
}

export class Filter {
	value: string | number;
	rank: number;
}
export class Amount {
	size: string;
	value: number;
}
