import { makeAutoObservable } from "mobx"

export type ItemBucket = {
    id: number,
    name: string,
    description: string
}

export class BucketStore {

    items: ItemBucket[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addItem(item: ItemBucket) {
        this.items.push(item);
    }

    deleteItem(id: number) {
        const found = this.items.findIndex(x => x.id === id);
        if (found === -1) {
            return;
        }

        this.items.splice(found, 1);
    }
}