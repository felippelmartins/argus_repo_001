import { Component, OnInit } from '@angular/core';
import { OpService } from '../op.service';
import{Router} from '@angular/router';
import { Op } from '../op.model';

@Component({
  selector: 'app-op-create',
  templateUrl: './op-create.component.html',
  styleUrls: ['./op-create.component.css']
})
export class OpCreateComponent implements OnInit {

  op: Op = {
    id: 0,
    depName: '',
    parentDepName: '',
    createDate: ''
  }

  constructor(private opService: OpService, private router: Router) { }

  ngOnInit(): void {

    

  }

  criarOp(): void {

    this.opService.create(this.op).subscribe(() => {
      this.opService.showMessage("Operação criada com sucesso!");
      this.router.navigate(['/ops']);
    })
    
  }

  cancel(): void {
    this.router.navigate(['/ops']);
  }


 

}
