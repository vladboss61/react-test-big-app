import { makeAutoObservable } from "mobx"

export class TimerStore {

    seconds = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.seconds += 1
    }
}