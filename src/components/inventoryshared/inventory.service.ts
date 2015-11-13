import { Inventory, InventoryItem, Filter, Count } from '../inventoryshared/inventorytable.class'

export class InventoryService {
    public static inventory: Inventory = new Inventory();
    public static currentFilters: Filter[];
    public static uniqueFilters: Filter[];

    private static filter(): void {
        for (var i: number = 0; i < this.inventory.items.length; i++) {
            this.inventory.matches[i] = false;
            for (var j: number = 0; j < this.inventory.items[i].filters.length; j++) {
                if (this.currentFilters.length === 0) {
                    this.inventory.matches[i] = true;
                } else {
                    for (var k: number = 0; k < this.currentFilters.length; k++) {
                        this.inventory.matches[i] = this.inventory.matches[i] || (this.inventory.items[i].filters[j].filter === this.uniqueFilters[k].filter);
                    }
                }
            }
        }

        var grey: boolean = true;
        for (var i: number = 0; i < this.inventory.items.length; i++) {
            if (this.inventory.matches[i]) {
                this.inventory.greys[i] = grey;
                grey = !grey;
            }
        }
    }

    public static collateKeys() {
        var duplicateFound: boolean;
        this.uniqueFilters = [];
        for (var i: number = 0; i < this.inventory.items.length; i++) {
            for (var j: number = 0; j < this.inventory.items[i].filters.length; j++) {
                duplicateFound = false;
                for (var k: number = 0; k < this.uniqueFilters.length; k++) {
                    duplicateFound = this.uniqueFilters[k].filter === this.inventory.items[i].filters[j].filter && this.uniqueFilters[k].rank === this.inventory.items[i].filters[j].rank;
                    if (duplicateFound) {
                        break;
                    }
                }

                if (!duplicateFound) {
                    this.uniqueFilters.push(this.inventory.items[i].filters[j]);
                }
            }
        }
        // this.uniqueFilters.forEach(function(value: Filter) {
        //     console.log(value.filter + ',' + value.rank);
        // });

        this.uniqueFilters.sort(function(a: Filter, b: Filter) {
            if (a.rank < b.rank) {
                return -1;
            }
            if (a.rank > b.rank) {
                return 1;
            }
            if (typeof a.filter === typeof b.filter) {
                if (a.filter < b.filter) {
                    return -1;
                }
                if (a.filter > b.filter) {
                    return 1;
                }
                return 0;
            }
            if (typeof a.filter === 'string') {
                return -1;
            }
            return 1;
        });
        // console.log('================================');
        // this.uniqueFilters.forEach(function(value: Filter) {
        //     console.log(value.filter + ',' + value.rank);
        // });
    }

    public static getInventory(): Inventory {
        this.inventory.items = [
            { description: "bifimbriata", filters: [{ filter: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "blepharophylla", filters: [{ filter: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brachypoda", filters: [{ filter: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brevifolia", filters: [{ filter: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brevifolia subsp. brevifolia", filters: [{ filter: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brevifolia subsp. stirlingensis", filters: [{ filter: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "brownii", filters: [{ filter: "b", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "acerosa", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "acerosa var. acerosa", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "acerosa var. preissii", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "aereiflora", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "albida", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "amphigia", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "apecta", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "argentea", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "attenuata", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "aurea", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "auriculata", filters: [{ filter: "a", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "capillaris", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "carinata", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "centipeda", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysantha", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysanthella", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysostachys", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysostachys var. chrysostachys", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "chrysostachys var. pallida", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "citrella", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "comosa", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "cooloomia", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "coronata", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "crebra", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "cunninghamii", filters: [{ filter: "c", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dasystylis", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dasystylis subsp. dasystylis", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dasystylis subsp. kalbarriensis", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dasystylis subsp. oestopoia", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. cespitosa", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. densiflora", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. pedunculata", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. roseostella", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "densiflora var. stelluligera", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dichroma", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dichroma var. dichroma", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "dichroma var. syntoma", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "drummondii", filters: [{ filter: "d", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. angustifolia", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. compacta", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. endlicheriana", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. major", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "endlicheriana var. manicula", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "eriocephala", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "etheliana", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "etheliana var. etheliana", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "etheliana var. formosa", filters: [{ filter: "e", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fastigiata", filters: [{ filter: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fimbrilepis", filters: [{ filter: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fimbrilepis subsp. australis", filters: [{ filter: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fimbrilepis subsp. fimbrilepis", filters: [{ filter: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "forrestii", filters: [{ filter: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "fragrans", filters: [{ filter: "f", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "galeata", filters: [{ filter: "g", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "gracilis", filters: [{ filter: "g", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "grandiflora", filters: [{ filter: "g", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "grandis", filters: [{ filter: "g", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "habrantha", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "halophila", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "harveyi", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "helichrysantha", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "helmsii", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii var. decumbens", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii var. huegelii", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii var. stylosa", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "huegelii var. tridens", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "hughanii", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "humilis", filters: [{ filter: "h", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "inclusa", filters: [{ filter: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "insignis", filters: [{ filter: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "insignis subsp. compta", filters: [{ filter: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "insignis subsp. eomagis", filters: [{ filter: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "insignis subsp. insignis", filters: [{ filter: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "integra", filters: [{ filter: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "interioris", filters: [{ filter: "i", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "jamiesonii", filters: [{ filter: "j", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "laciniata", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lehmannii", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lepidophylla", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lepidophylla var. lepidophylla", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lepidophylla var. quantula", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lindleyi", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lindleyi subsp. lindleyi", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "lindleyi subsp. purpurea", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "longistylis", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "luteola", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "luteola var. luteola", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "luteola var. rosea", filters: [{ filter: "l", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "minutiflora", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mirabilis", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mitchelliana", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mitchelliana subsp. implexior", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mitchelliana subsp. mitchelliana", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "mitodes", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "monadelpha", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "monadelpha var. callitricha", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "monadelpha var. monadelpha", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "muelleriana", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "muelleriana subsp. minor", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "muelleriana subsp. muelleriana", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "multiflora", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "multiflora subsp. multiflora", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "multiflora subsp. solox", filters: [{ filter: "m", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "nitens", filters: [{ filter: "n", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "nobilis", filters: [{ filter: "n", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "oculata", filters: [{ filter: "o", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "ovalifolia", filters: [{ filter: "o", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "oxylepis", filters: [{ filter: "o", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "paludosa", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "patens", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "penicillaris", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pennigera", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pholidophylla", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "picta", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pityrhops", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. ananeotes", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. brachyphylla", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. grandiflora", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. incrassata", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. plumosa", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "plumosa var. vassensis", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "polytricha", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pritzelii", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "pulchella", filters: [{ filter: "p", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "rennieana", filters: [{ filter: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "roei", filters: [{ filter: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "roei subsp. meiogona", filters: [{ filter: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "roei subsp. roei", filters: [{ filter: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "rutilastra", filters: [{ filter: "r", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serotina", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata var. ciliata", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata var. linearis", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata var. serrata", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "serrata var. Udumung", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "setacea", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi var. curta", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi var. lomata", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi var. pachyphylla", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "sieberi var. sieberi", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "spicata", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "spicata subsp. spicata", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "spicata subsp. squamosa", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "staminosa", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "staminosa var. cylindracea", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "staminosa var. erecta", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "staminosa subsp. staminosa", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "stenopetala", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "subulata", filters: [{ filter: "s", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "tumida", filters: [{ filter: "t", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "tumida subsp. therogana", filters: [{ filter: "t", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "tumida subsp. tumida", filters: [{ filter: "t", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "venusta", filters: [{ filter: "v", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "verticillata", filters: [{ filter: "v", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "verticordina", filters: [{ filter: "v", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "vicinella", filters: [{ filter: "v", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] },
            { description: "wonganensis", filters: [{ filter: "w", rank: 0 }], counts: [{ size: "200mm", count: 0 }, { size: "70mm", count: 0 }, { size: "50mm", count: 0 }, ] }
        ];

        for (var i: number = 0; i < this.inventory.items.length; i++) {
            this.inventory.matches.push(true);
            this.inventory.greys.push(i % 2 === 0);
        };
        
        this.collateKeys();

        this.currentFilters = [{ filter: "s", rank: 0 }, { filter: "a", rank: 0 }, { filter: "b", rank: 0 }, { filter: "f", rank: 0 }];
        this.filter()

        return this.inventory;
    }
}