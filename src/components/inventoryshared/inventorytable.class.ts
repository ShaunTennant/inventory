export class Inventory {
	items: InventoryItem[] = [];
	matches: boolean[] = [];
	greys: boolean[] = [];
}

export class InventoryItem {
	description: string | number;
	keys: Key[];
	counts: Count[];
}

export class Key {
	key: string | number;
	rank: number;
}
export class Count {
	size: string;
	count: number;
}

export class Test {
	keys: Key[];
}
