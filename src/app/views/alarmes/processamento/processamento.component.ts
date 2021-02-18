import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Alarme} from '../alarme.model';
import{FormControl} from '@angular/forms';


export interface Outros {
  name: string,
  checked: boolean
}


@Component({
  selector: 'app-processamento',
  templateUrl: './processamento.component.html',
  styleUrls: ['./processamento.component.css']
})
export class ProcessamentoComponent implements OnInit {

  
   
   local_data: any;
   declare itemSelecionado: any;
   textoOutros: string = "";
   
   sc: Outros = {
     name: 'Sem cinto',
     checked: false
   };
   sm: Outros = {
    name: 'Sem máscara',
    checked: false
  };
  oc: Outros = {
    name: 'Óculos escuros',
    checked: false
  };
  olh: Outros = {
    name: 'Olhando para baixo',
    checked: false
  };
  ds: Outros = {
    name: 'DS deslocado',
    checked: false
  };
  alim: Outros = {
    name: 'Alimento',
    checked: false
  };
  fon: Outros = {
    name: 'Fone de ouvido',
    checked: false
  };
  out: Outros ={
    name: 'Outros',
    checked: false
  };




  constructor(public dialogRef: MatDialogRef<ProcessamentoComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Alarme[]) 
    {
      
      this.local_data = {...data};
      
    } 
    
    

  ngOnInit(): void {
    
  }

  close() {
    this.dialogRef.close();  
  }

  processa(){
    this.dialogRef.close();
    console.log(this.itemSelecionado);
    console.log(this.sc.name , this.sc.checked);
    console.log(this.sm.name , this.sm.checked);
    console.log(this.oc.name , this.oc.checked);
    console.log(this.olh.name , this.olh.checked);
    console.log(this.ds.name , this.ds.checked);
    console.log(this.alim.name , this.alim.checked);
    console.log(this.fon.name , this.fon.checked);
    console.log(this.textoOutros);
  }

  

}
