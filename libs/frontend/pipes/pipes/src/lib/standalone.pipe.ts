import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'standalonePipe',
    standalone: true,
})
export class StandalonePipe implements PipeTransform {

    public transform(
        _value: string,
    ): string {
        return 'standalone-pipe';
    }
}
