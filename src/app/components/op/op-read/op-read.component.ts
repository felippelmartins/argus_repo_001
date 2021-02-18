import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Op } from '../op.model';
import { OpService } from '../op.service';

@Component({
  selector: 'app-op-read',
  templateUrl: './op-read.component.html',
  styleUrls: ['./op-read.component.css']
})
export class OpReadComponent implements OnInit {

  



 ops: Op[] = [];
 displayedColumns = ['id', 'depName', 'parentDepName', 'createDate'];

  constructor(private opService: OpService) { }

  ngOnInit(): void {
    this.opService.read().subscribe(ops => {
      this.ops = ops;
      console.log(ops);
    })

  }

}
