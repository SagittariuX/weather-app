import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'kelvinToCelcius'})
export class KelvinToCelciusPipe implements PipeTransform {
    transform(value: number | undefined): number | undefined{

        if (typeof(value) !== 'number') return undefined;
        
        return parseFloat((value - 273.15).toFixed(2));
    }
}

@Pipe({name: 'kelvinToFahrenheit'})
export class KelvinToFahrenheitPipe implements PipeTransform{
    transform(value: number | undefined): number | undefined{

        if (typeof(value) !== 'number') return undefined;

        return parseFloat(((value - 273.15)*9/5 + 32).toFixed(2));
    }
}