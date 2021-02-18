import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'trataUrl'})

export class TrataUrlPipe implements PipeTransform {
    transform (url: string) : string {
        if(typeof(url) === undefined){
            return url;
        } else {
            let url_nova = url.replace(/u003d/g, '=').replace(/u0026/g, '&');
            return url_nova;
        }        
    }
}



