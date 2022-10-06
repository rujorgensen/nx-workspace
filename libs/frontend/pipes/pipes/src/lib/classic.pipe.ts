import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'classicPipe',
    standalone: true,
})
export class ClassicPipe implements PipeTransform {

    public transform(
        _value: string,
    ): string {
        return 'classic-pipe';
    }
}
