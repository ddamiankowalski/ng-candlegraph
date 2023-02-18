import { Candlestick } from "../interfaces/candlestick";

export class ChartPosition {
    constructor(initialColsDist: number, maxColsDistance: number) {
        this._colsDistance = initialColsDist;
        this._maxColsDistance = maxColsDistance;
        this._viewOffset = 0;
    }

    private _colsDistance: number;
    private _maxColsDistance: number;
    private _viewOffset;
    private _candleMaxHigh: number = 0;
    private _candleMaxLow: number = 0;

    get colsDistance(): number {
        return this._colsDistance;
    }

    set colsDistance(value: number) {
        this._colsDistance = value;
    }

    get maxColsDistance(): number {
        return this._maxColsDistance;
    }

    set maxColsDistance(value: number) {
        this._maxColsDistance = value;
    }

    get viewOffset(): number {
        return this._viewOffset;
    }

    set viewOffset(value: number) {
        this._viewOffset = value;
    }

    public resetCandleMaxValues(): void {
        this._candleMaxHigh = 0;
        this._candleMaxLow = 0;
    }

    public setCandleMaxHigh(candleToTest: Candlestick): void {
        if(candleToTest.high > this._candleMaxHigh) {
            this._candleMaxHigh = candleToTest.high;
        }
    }

    public setCandleMaxLow(candleToTest: Candlestick): void {
        if(candleToTest.low > this._candleMaxLow) {
            this._candleMaxLow = candleToTest.low;
        }
    }

    public getMaxAndLow(): Array<number> {
        return [ this._candleMaxHigh, this._candleMaxLow ];
    }
}