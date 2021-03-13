import { PaisesService } from '../../services/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  constructor(private paisServices: PaisesService) { }

  ngOnInit(): void {

    this.paisServices.getPaises().subscribe( resp => {
      console.log( resp );
    });
    
  }

}