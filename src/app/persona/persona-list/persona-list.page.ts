import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.page.html',
  styleUrls: ['./persona-list.page.scss'],
})
export class PersonaListPage implements OnInit {

  constructor( private readonly firestore: Firestore ) { }

  listaPersona = new Array();


  ngOnInit() {
    this.listarPersona();
  }

  listarPersona = () =>{
    console.log("Listar Personas");
    const personaRef = collection(this.firestore, 'persona');
    collectionData(personaRef, {idField:'id'}).subscribe(respuesta=>{
      console.log("estos son los datos ", respuesta);
      this.listaPersona=respuesta;
    })
  }


}
