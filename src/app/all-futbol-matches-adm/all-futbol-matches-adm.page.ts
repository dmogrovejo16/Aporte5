import { Component,ElementRef,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-all-futbol-matches-adm',
  templateUrl: './all-futbol-matches-adm.page.html',
  styleUrls: ['./all-futbol-matches-adm.page.scss'],
})
export class AllFutbolMatchesAdmPage implements OnInit {
  nombreTorneo:any;
  ubicacion:any;
  id: any;
  Eq1: any;
  rutaTabla:any;
  Eq2: any;
  result1:any;
  result2:any;
  partidos: any[] = [];
  constructor(private el: ElementRef, private http: HttpClient, public _apiService: ApiService, private db:Firestore) { }

  async apagar() {

    const datosActualizados = {
      ubicacion: this.ubicacion,
      result1: this.result1,
      result2: this.result2
  };

    this.rutaTabla = doc(this.db,'Partido','datos');//RUTA DE TABLA EN LA BD
    await setDoc(this.rutaTabla, datosActualizados);//CAMBIA EL ATRIBUTO DE LA TABLA

}

  ngOnInit() {
    this.nombreTorneo = localStorage.getItem("NombreTorneo");
    
    this._apiService.getAllMatches().subscribe((res:any)=>{

      console.log(res);
      this.partidos = res.filter((partido: any) => partido.disciplina == "Futbol");

    
        },(error: any)=>{ 
            console.log("ERROR ===", error);
          })


        }
        
      

      enviarUbi(result1:any, result2:any,ubi:any){
        this.ubicacion=ubi;
        this.result1=result1;
        this.result2=result2;
        console.log(this.ubicacion, result1, result2);
        this.apagar();
      }

  enviarID(id: any, Eq1:any, Eq2:any){
    this.id=id;
    this.Eq1=Eq1;
    this.Eq2=Eq2;
    console.log(this.id);
    console.log(this.Eq1);
    console.log(this.Eq2);
    localStorage.setItem("idPartido",this.id);
    localStorage.setItem("Equipo1",this.Eq1);
    localStorage.setItem("Equipo2",this.Eq2);
      }

  handleRefresh(event:any) {
    this.ngOnInit();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1500);
  }

}
