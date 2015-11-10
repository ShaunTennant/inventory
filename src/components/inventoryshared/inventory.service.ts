import { Inventory } from '../inventoryshared/inventorytable.class'

export class InventoryService {
    private static _inventory: Inventory = new Inventory();
    private static _filters: string[] = [];

    static get filters(): string[] {
        return this._filters;
    }

    static set filters(filters: string[]) {
        this._filters = filters;
        this.filter()
    }

    private static filter(): void {
        for (var i: number = 0; i < this._inventory.items.length; i++) {
            this._inventory.matches[i] = false;
            for (var j: number = 0; j < this._inventory.items[i].keys.length; j++) {
                if (this._filters.length == 0) {
                    this._inventory.matches[i] = true;
                } else {
                    for (var k: number = 0; k < this._filters.length; k++) {
                        this._inventory.matches[i] = this._inventory.matches[i] || (this._inventory.items[i].keys[j].key == this._filters[k]);
                    }
                }
            }
        }

        var grey: boolean = true;
        for (var i: number = 0; i < this._inventory.items.length; i++) {
            if (this._inventory.matches[i]) {
                this._inventory.greys[i] = grey;
                grey = !grey;
            }
        }
    }

    public static getInventory() {
        this._inventory.items = [
            { description: "acerosa", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "acerosa var. acerosa", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "acerosa var. preissii", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "aereiflora", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "albida", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "amphigia", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "apecta", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "argentea", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "attenuata", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "aurea", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "auriculata", keys: [{ key: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "bifimbriata", keys: [{ key: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "blepharophylla", keys: [{ key: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brachypoda", keys: [{ key: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brevifolia", keys: [{ key: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brevifolia subsp. brevifolia", keys: [{ key: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brevifolia subsp. stirlingensis", keys: [{ key: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brownii", keys: [{ key: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "capillaris", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "carinata", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "centipeda", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysantha", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysanthella", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysostachys", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysostachys var. chrysostachys", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysostachys var. pallida", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "citrella", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "comosa", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "cooloomia", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "coronata", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "crebra", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "cunninghamii", keys: [{ key: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dasystylis", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dasystylis subsp. dasystylis", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dasystylis subsp. kalbarriensis", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dasystylis subsp. oestopoia", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. cespitosa", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. densiflora", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. pedunculata", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. roseostella", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. stelluligera", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dichroma", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dichroma var. dichroma", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dichroma var. syntoma", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "drummondii", keys: [{ key: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. angustifolia", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. compacta", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. endlicheriana", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. major", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. manicula", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "eriocephala", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "etheliana", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "etheliana var. etheliana", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "etheliana var. formosa", keys: [{ key: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fastigiata", keys: [{ key: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fimbrilepis", keys: [{ key: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fimbrilepis subsp. australis", keys: [{ key: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fimbrilepis subsp. fimbrilepis", keys: [{ key: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "forrestii", keys: [{ key: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fragrans", keys: [{ key: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "galeata", keys: [{ key: "g", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "gracilis", keys: [{ key: "g", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "grandiflora", keys: [{ key: "g", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "grandis", keys: [{ key: "g", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "habrantha", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "halophila", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "harveyi", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "helichrysantha", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "helmsii", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii var. decumbens", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii var. huegelii", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii var. stylosa", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii var. tridens", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "hughanii", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "humilis", keys: [{ key: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "inclusa", keys: [{ key: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "insignis", keys: [{ key: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "insignis subsp. compta", keys: [{ key: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "insignis subsp. eomagis", keys: [{ key: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "insignis subsp. insignis", keys: [{ key: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "integra", keys: [{ key: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "interioris", keys: [{ key: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "jamiesonii", keys: [{ key: "j", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "laciniata", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lehmannii", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lepidophylla", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lepidophylla var. lepidophylla", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lepidophylla var. quantula", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lindleyi", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lindleyi subsp. lindleyi", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lindleyi subsp. purpurea", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "longistylis", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "luteola", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "luteola var. luteola", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "luteola var. rosea", keys: [{ key: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "minutiflora", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mirabilis", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mitchelliana", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mitchelliana subsp. implexior", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mitchelliana subsp. mitchelliana", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mitodes", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "monadelpha", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "monadelpha var. callitricha", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "monadelpha var. monadelpha", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "muelleriana", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "muelleriana subsp. minor", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "muelleriana subsp. muelleriana", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "multiflora", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "multiflora subsp. multiflora", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "multiflora subsp. solox", keys: [{ key: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "nitens", keys: [{ key: "n", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "nobilis", keys: [{ key: "n", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "oculata", keys: [{ key: "o", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "ovalifolia", keys: [{ key: "o", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "oxylepis", keys: [{ key: "o", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "paludosa", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "patens", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "penicillaris", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pennigera", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pholidophylla", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "picta", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pityrhops", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. ananeotes", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. brachyphylla", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. grandiflora", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. incrassata", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. plumosa", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. vassensis", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "polytricha", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pritzelii", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pulchella", keys: [{ key: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "rennieana", keys: [{ key: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "roei", keys: [{ key: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "roei subsp. meiogona", keys: [{ key: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "roei subsp. roei", keys: [{ key: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "rutilastra", keys: [{ key: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serotina", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata var. ciliata", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata var. linearis", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata var. serrata", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata var. Udumung", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "setacea", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi var. curta", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi var. lomata", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi var. pachyphylla", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi var. sieberi", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "spicata", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "spicata subsp. spicata", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "spicata subsp. squamosa", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "staminosa", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "staminosa var. cylindracea", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "staminosa var. erecta", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "staminosa subsp. staminosa", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "stenopetala", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "subulata", keys: [{ key: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "tumida", keys: [{ key: "t", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "tumida subsp. therogana", keys: [{ key: "t", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "tumida subsp. tumida", keys: [{ key: "t", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "venusta", keys: [{ key: "v", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "verticillata", keys: [{ key: "v", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "verticordina", keys: [{ key: "v", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "vicinella", keys: [{ key: "v", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "wonganensis", keys: [{ key: "w", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] }
        ];

        for (var i: number = 0; i < this._inventory.items.length; i++) {
            this._inventory.matches.push(true);
            this._inventory.greys.push(i % 2 == 0);
        };

        this.filters = ['s', 'a', 'f'];
        // this.filters = [];

        return this._inventory;
    }
}