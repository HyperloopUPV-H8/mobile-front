export class Cache<T> {

    private lastValue: T | undefined

    update(value: T): void {
        this.lastValue = value
    }

    compare(value: T): boolean {
        return this.lastValue === value
    }

    compareAndUpdate(value: T): boolean {
        if (this.compare(value)) return false
        this.update(value)
        return true
    }
}