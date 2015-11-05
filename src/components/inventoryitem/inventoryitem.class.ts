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