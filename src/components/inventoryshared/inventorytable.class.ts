export class Inventory {
	items: InventoryItem[];
	matches: boolean[];
	hiddens: boolean[];

	constructor(items: InventoryItem[], matches: boolean[], hiddens: boolean[])
	{
		this.items = items;
		this.matches = matches;
		this.hiddens = hiddens;
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
