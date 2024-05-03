import { Component, OnInit, ViewChild } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.page.html',
  styleUrls: ['./persona-edit.page.scss'],
})
export class PersonaEditPage implements OnInit {
  @ViewChild('nombre') nombreInput!: NgModel;
  @ViewChild('apellido') apellidoInput!: NgModel;
  @ViewChild('correo') correoInput!: NgModel;
  @ViewChild('edad') edadInput!: NgModel;
  @ViewChild('direccion') direccionInput!: NgModel;
  @ViewChild('fecha') fechaInput!: NgModel;
 

  persona : any = {};
  id: any;
  isNew: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private readonly firestore: Firestore,
    private router: Router,
  ) { }

  

  ngOnInit() {
    this.route.params.subscribe((params:any)=>{
      console.log('params',params);
      this.id = params.id;

      if(params.id=='new'){
        this.isNew=true;
      }else{
        this.obtenerPersona(this.id);
      }
    });
  }

  editarPersona  =() => {
      const document = doc(this.firestore, "persona", this.id);
      updateDoc(document,{
        nombre : this.persona.nombre,
        apellido : this.persona.apellido,
        correo : this.persona.correo,
        edad : this.persona.edad,
        estado : this.persona.estado,
        direccion : this.persona.direccion,
        fecha: this.persona.fecha,
        
      }).then(() => {
        console.log("Fue Modificado con Éxito!!");
        this.router.navigate(['/persona-list']);
      }).catch(error => {
        console.error("Error al editar la persona:", error);
      });
  }
  
 guardarPersona() {
  if (this.isNew) {
    this.incluirPersona();
  } else {
    this.editarPersona();
  }
}

  incluirPersona = () =>{
    let personaRef = collection(this.firestore, "persona");
    
    addDoc(personaRef,{
      nombre : this.persona.nombre,
      apellido : this.persona.apellido,
      correo : this.persona.correo,
      edad : this.persona.edad,
      estado : this.persona.estado,
      direccion : this.persona.direccion,
      fecha: this.persona.fecha,
      
    }).then(doc=>{
      console.log("Registro Incluido");
      this.router.navigate(['/persona-list']);
    }).catch(error =>{
      console.error("no se pudo registrar", error);
    })
  }

  obtenerPersona = async (id: string) => {
    const document = doc(this.firestore, "persona", id);
    getDoc(document).then(doc =>{
      console.log("Registro a editar", doc.data());
      this.persona = doc.data();
    })
  }

  eliminarPersona = () =>{
    const document = doc(this.firestore, "persona", this.id);
    
    deleteDoc(document).then(doc => {
      console.log("Registro Eliminado");
      this.router.navigate(['/persona-list']);
    }).catch(error => {
      console.error("Error al eliminar el registro:", error);
    });
  }
  



}
