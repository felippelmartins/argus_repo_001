import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; //importar o router para que....

@Component({
  selector: 'app-op-crud',
  templateUrl: './op-crud.component.html',
  styleUrls: ['./op-crud.component.css']
})
export class OpCrudComponent implements OnInit {

  constructor(private router: Router) { } //... possa definir o tipo do elemento que eu quero que ele importe no meu documento

  ngOnInit(): void {
  }

  navigateToOpCreate(): void {
    this.router.navigate(['/ops/create']); //agora consigo usar o router dentro do elemento
  }
  

}
