import { Candle } from '../elements/candle';
import { Dimensions } from '../dimensions';
import { MathUtils } from '../math-utils';
export class CandleRenderer {
    public draw(candle: Candle, dimensions: Dimensions, context: CanvasRenderingContext2D): void {
        const [ maxHighCandle, maxLowCandle ] = Candle.getHighLow(); 
        const graphHeight = dimensions.getHeight() - dimensions.getVerticalMargin();

        if(candle.getXStart() <= dimensions.getWidth() - dimensions.getHorizontalMargin() + 10) {
            const yDrawingHigh = MathUtils.interpolate(graphHeight, candle.yHigh, maxLowCandle, maxHighCandle);
            const yDrawingLow = MathUtils.interpolate(graphHeight, candle.yLow, maxLowCandle, maxHighCandle);
    
            context.beginPath();
            context.moveTo(candle.getXStart(), yDrawingLow);
            context.lineTo(candle.getXStart(), yDrawingHigh);
            context.strokeStyle = candle.getColor();
            context.lineWidth = 1;
            context.stroke();


            const yDrawingStart = MathUtils.interpolate(graphHeight, candle.getYStart(), maxLowCandle, maxHighCandle);
            const yDrawingEnd = MathUtils.interpolate(graphHeight, candle.getYEnd(), maxLowCandle, maxHighCandle);
    
            context.beginPath();
            context.roundRect(candle.getXStart() - (1 * candle.zoom) / 2, yDrawingEnd, 1 * candle.zoom, yDrawingStart - yDrawingEnd, 1)
            context.fillStyle = candle.getColor();
            context.stroke();
            context.fill();
        }
    }
}