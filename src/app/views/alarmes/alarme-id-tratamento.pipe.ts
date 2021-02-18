import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'trataId'})

export class TrataIdPipe implements PipeTransform{
    transform(id: string) : string{
        let vals: string[];
        vals = id.split('|');
        return vals[3];
    }
    
}

