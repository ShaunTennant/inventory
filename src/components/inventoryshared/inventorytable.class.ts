export class Inventory {
	items: InventoryItem[] = [];
	matches: boolean[] = [];
	greys: boolean[] = [];
}

export class InventoryItem {
	description: string | number;
	filters: Filter[];
	counts: Count[];
}

export class Filter {
	filter: string | number;
	rank: number;
}
export class Count {
	size: string;
	count: number;
}
