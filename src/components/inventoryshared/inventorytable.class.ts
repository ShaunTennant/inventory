export class Inventory {
	items: InventoryItem[];
	matches: boolean[];
	greys: boolean[];

	constructor(items: InventoryItem[], matches: boolean[], greys: boolean[])
	{
		this.items = items;
		this.matches = matches;
		this.greys = greys;
	}
}

export class InventoryItem {
	description: string;
	keys: Key[];
	counts: Count[];
}

export class Key {
	key: string;
	rank: number;
}
export class Count {
	size: string;
	count: number;
}
