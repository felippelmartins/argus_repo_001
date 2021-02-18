import { Component, OnInit, Inject } from '@angular/core';
import {Alarme} from './alarme.model';
import {AlarmeService} from './alarme.service';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ProcessamentoComponent} from './processamento/processamento.component';


@Component({
  selector: 'app-alarmes',
  templateUrl: './alarmes.component.html',
  styleUrls: ['./alarmes.component.css']
})
export class AlarmesComponent implements OnInit {

  

 declare alarmes: Alarme[];
 

 displayedColumns = ["trata", "alarmId", "alarmType", "carName", "alarmTime"];


  constructor(private alarmeService: AlarmeService, private MatDialog: MatDialog) { }

 

  openDialog(row: any){
    const dialogRef = this.MatDialog.open(ProcessamentoComponent,{
      width: '900px',
      height: '900px',
      data: {
        carName: row.carName,
        alarmName: row.alarmName,
        picUrl: row.picUrl,
        vidUrl:row.vidUrl
      }
    })
  }

 
  
  ngOnInit(): void {
    this.alarmeService.read().subscribe(alarmes => {
      this.alarmes = alarmes;
      console.log(alarmes);
      
    })



  }

}
