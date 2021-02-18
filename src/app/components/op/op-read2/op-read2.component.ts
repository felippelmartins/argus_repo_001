import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Op } from '../op.model';
import { OpRead2DataSource } from './op-read2-datasource';

@Component({
  selector: 'app-op-read2',
  templateUrl: './op-read2.component.html',
  styleUrls: ['./op-read2.component.css']
})
export class OpRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) declare paginator: MatPaginator;
  @ViewChild(MatSort) declare sort: MatSort;
  @ViewChild(MatTable) declare table: MatTable<Op>;
  declare dataSource: OpRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'depName', 'parentDepName'];

  ngOnInit() {
    this.dataSource = new OpRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
