import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Op } from '../op.model';



// TODO: replace this with real data from your application
const EXAMPLE_DATA: Op[] = [
  {id: 1, depName: 'Hydrogen', parentDepName: 'VALE'},
  {id: 2, depName: 'Helium', parentDepName: 'VALE'},
  {id: 3, depName: 'Lithium', parentDepName: 'VALE'},
  {id: 4, depName: 'Beryllium', parentDepName: 'VALE'},
  {id: 5, depName: 'Boron', parentDepName: 'VALE'},
  {id: 6, depName: 'Carbon', parentDepName: 'VALE'},
  {id: 7, depName: 'Nitrogen', parentDepName: 'VALE'},
  {id: 8, depName: 'Oxygen', parentDepName: 'VALE'},
  {id: 9, depName: 'Fluorine', parentDepName: 'VALE'},
  {id: 10, depName: 'Neon', parentDepName: 'VALE'},
  {id: 11, depName: 'Sodium', parentDepName: 'VALE'},
  {id: 12, depName: 'Magnesium', parentDepName: 'VALE'},
  {id: 13, depName: 'Aluminum', parentDepName: 'VALE'},
  {id: 14, depName: 'Silicon', parentDepName: 'VALE'},
  {id: 15, depName: 'Phosphorus', parentDepName: 'VALE'},
  {id: 16, depName: 'Sulfur', parentDepName: 'VALE'},
  {id: 17, depName: 'Chlorine', parentDepName: 'VALE'},
  {id: 18, depName: 'Argon', parentDepName: 'VALE'},
  {id: 19, depName: 'Potassium', parentDepName: 'VALE'},
  {id: 20, depName: 'Calcium', parentDepName: 'VALE'},
];

/**
 * Data source for the OpRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OpRead2DataSource extends DataSource<Op> {
  data: Op[] = EXAMPLE_DATA;
  declare paginator: MatPaginator;
  declare sort: MatSort;

  constructor() {
    
    super();    
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Op[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Op[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Op[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.depName, b.depName, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
