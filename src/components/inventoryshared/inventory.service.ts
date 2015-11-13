import { Inventory, InventoryItem, Filter, Amount } from '../inventoryshared/inventorytable.class'

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
                        this.inventory.matches[i] = this.inventory.matches[i] || (this.inventory.items[i].filters[j].value === this.currentFilters[k].value);
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
                    duplicateFound = this.uniqueFilters[k].value === this.inventory.items[i].filters[j].value && this.uniqueFilters[k].rank === this.inventory.items[i].filters[j].rank;
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
            if (typeof a.value === typeof b.value) {
                if (a.value < b.value) {
                    return -1;
                }
                if (a.value > b.value) {
                    return 1;
                }
                return 0;
            }
            if (typeof a.value === 'string') {
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
            { description: "bifimbriata", filters: [{ value: "b", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "blepharophylla", filters: [{ value: "b", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "brachypoda", filters: [{ value: "b", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "brevifolia", filters: [{ value: "b", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "brevifolia subsp. brevifolia", filters: [{ value: "b", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "brevifolia subsp. stirlingensis", filters: [{ value: "b", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "brownii", filters: [{ value: "b", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "acerosa", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "acerosa var. acerosa", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "acerosa var. preissii", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "aereiflora", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "albida", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "amphigia", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "apecta", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "argentea", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "attenuata", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "aurea", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "auriculata", filters: [{ value: "a", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "capillaris", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "carinata", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "centipeda", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "chrysantha", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "chrysanthella", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "chrysostachys", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "chrysostachys var. chrysostachys", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "chrysostachys var. pallida", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "citrella", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "comosa", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "cooloomia", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "coronata", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "crebra", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "cunninghamii", filters: [{ value: "c", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "dasystylis", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "dasystylis subsp. dasystylis", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "dasystylis subsp. kalbarriensis", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "dasystylis subsp. oestopoia", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "densiflora", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "densiflora var. cespitosa", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "densiflora var. densiflora", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "densiflora var. pedunculata", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "densiflora var. roseostella", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "densiflora var. stelluligera", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "dichroma", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "dichroma var. dichroma", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "dichroma var. syntoma", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "drummondii", filters: [{ value: "d", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "endlicheriana", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "endlicheriana var. angustifolia", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "endlicheriana var. compacta", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "endlicheriana var. endlicheriana", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "endlicheriana var. major", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "endlicheriana var. manicula", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "eriocephala", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "etheliana", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "etheliana var. etheliana", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "etheliana var. formosa", filters: [{ value: "e", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "fastigiata", filters: [{ value: "f", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "fimbrilepis", filters: [{ value: "f", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "fimbrilepis subsp. australis", filters: [{ value: "f", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "fimbrilepis subsp. fimbrilepis", filters: [{ value: "f", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "forrestii", filters: [{ value: "f", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "fragrans", filters: [{ value: "f", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "galeata", filters: [{ value: "g", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "gracilis", filters: [{ value: "g", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "grandiflora", filters: [{ value: "g", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "grandis", filters: [{ value: "g", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "habrantha", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "halophila", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "harveyi", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "helichrysantha", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "helmsii", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "huegelii", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "huegelii var. decumbens", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "huegelii var. huegelii", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "huegelii var. stylosa", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "huegelii var. tridens", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "hughanii", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "humilis", filters: [{ value: "h", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "inclusa", filters: [{ value: "i", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "insignis", filters: [{ value: "i", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "insignis subsp. compta", filters: [{ value: "i", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "insignis subsp. eomagis", filters: [{ value: "i", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "insignis subsp. insignis", filters: [{ value: "i", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "integra", filters: [{ value: "i", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "interioris", filters: [{ value: "i", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "jamiesonii", filters: [{ value: "j", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "laciniata", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "lehmannii", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "lepidophylla", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "lepidophylla var. lepidophylla", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "lepidophylla var. quantula", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "lindleyi", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "lindleyi subsp. lindleyi", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "lindleyi subsp. purpurea", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "longistylis", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "luteola", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "luteola var. luteola", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "luteola var. rosea", filters: [{ value: "l", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "minutiflora", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "mirabilis", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "mitchelliana", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "mitchelliana subsp. implexior", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "mitchelliana subsp. mitchelliana", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "mitodes", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "monadelpha", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "monadelpha var. callitricha", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "monadelpha var. monadelpha", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "muelleriana", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "muelleriana subsp. minor", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "muelleriana subsp. muelleriana", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "multiflora", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "multiflora subsp. multiflora", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "multiflora subsp. solox", filters: [{ value: "m", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "nitens", filters: [{ value: "n", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "nobilis", filters: [{ value: "n", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "oculata", filters: [{ value: "o", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "ovalifolia", filters: [{ value: "o", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "oxylepis", filters: [{ value: "o", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "paludosa", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "patens", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "penicillaris", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "pennigera", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "pholidophylla", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "picta", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "pityrhops", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "plumosa", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "plumosa var. ananeotes", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "plumosa var. brachyphylla", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "plumosa var. grandiflora", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "plumosa var. incrassata", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "plumosa var. plumosa", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "plumosa var. vassensis", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "polytricha", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "pritzelii", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "pulchella", filters: [{ value: "p", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "rennieana", filters: [{ value: "r", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "roei", filters: [{ value: "r", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "roei subsp. meiogona", filters: [{ value: "r", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "roei subsp. roei", filters: [{ value: "r", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "rutilastra", filters: [{ value: "r", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "serotina", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "serrata", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "serrata var. ciliata", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "serrata var. linearis", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "serrata var. serrata", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "serrata var. Udumung", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "setacea", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "sieberi", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "sieberi var. curta", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "sieberi var. lomata", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "sieberi var. pachyphylla", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "sieberi var. sieberi", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "spicata", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "spicata subsp. spicata", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "spicata subsp. squamosa", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "staminosa", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "staminosa var. cylindracea", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "staminosa var. erecta", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "staminosa subsp. staminosa", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "stenopetala", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "subulata", filters: [{ value: "s", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "tumida", filters: [{ value: "t", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "tumida subsp. therogana", filters: [{ value: "t", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "tumida subsp. tumida", filters: [{ value: "t", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "venusta", filters: [{ value: "v", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "verticillata", filters: [{ value: "v", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "verticordina", filters: [{ value: "v", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "vicinella", filters: [{ value: "v", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] },
            { description: "wonganensis", filters: [{ value: "w", rank: 0 }], amounts: [{ size: "200mm", value: 0 }, { size: "70mm", value: 0 }, { size: "50mm", value: 0 }, ] }
        ];

        this.inventory.items.sort(function(a: InventoryItem, b: InventoryItem) {
            if (typeof a.description === typeof b.description) {
                if (a.description === b.description) {
                    return 0;
                } else if (a.description > b.description) {
                    return 1;
                } else {
                    return -1;
                }
            } else if (typeof a.description === "number") {
                return 1;
            } else {
                return -1;
            }
        });

        for (var i: number = 0; i < this.inventory.items.length; i++) {
            this.inventory.matches.push(true);
            this.inventory.greys.push(i % 2 === 0);
        };
        
        this.collateKeys();

        this.currentFilters = [{ value: "s", rank: 0 }, { value: "a", rank: 0 }, { value: "b", rank: 0 }];
        // this.currentFilters = [{ value: "f", rank: 0 }];
        this.filter()

        return this.inventory;
    }
}