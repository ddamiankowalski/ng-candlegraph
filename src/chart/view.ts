export class View {
    constructor(maxColInterval: number) {
        this.colInterval = maxColInterval;
        this.maxColInterval = maxColInterval;
        this.viewOffset = 0;
        this.zoom = .1;
    }

    private colInterval: number;
    private maxColInterval: number;
    private viewOffset: number;
    private zoom: number;
    private scrollSpeed: number = 10;

    public getColInterval(): number {
        return this.colInterval;
    }

    public setColInterval(x: number) {
        this.colInterval = x;
    }

    public getMaxColInterval(): number {
        return this.maxColInterval;
    }

    public setMaxColInterval(x: number) {
        this.maxColInterval = x;
    }

    public getViewOffset(): number {
        return this.viewOffset;
    }

    public setViewOffset(x: number) {
        this.viewOffset = x;
    }

    public getZoom(): number {
        return this.zoom;
    }

    public setZoom(value: number) {
        this.zoom = value;
        console.log(this.zoom)
    }

    public getScrollSpeed(): number {
        return this.scrollSpeed;
    }
}