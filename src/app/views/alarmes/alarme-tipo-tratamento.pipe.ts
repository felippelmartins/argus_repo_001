
import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'trataTipo'})

export class TrataTipoPipe implements PipeTransform {
    transform (tipoAlarme: string) : string {

        switch(tipoAlarme) {
            case 'alarm-type.2':
                return 'Condução perigosa N1';
                break;
            case 'alarm-type.1':
                return 'Condução perigosa N2';
                break;
            case 'alarm-type.22':
                return 'Bocejo';
                break;
            case 'alarm-type.20':
                return 'Celular';
                break;
            case 'alarm-type.16':
                return 'Fumando';
                break;
            case 'alarm-type.5':
                return 'Oclusão';
                break;
            default:
                return 'Tipo não monitorado';
                break;
    
        }
    }
}