import { Component, OnInit } from '@angular/core';
import { FonctionlogicielService } from '../../services/fonctionlogiciel.service';
import { Logiciel } from '../../models/logiciel';
import { FonctionrexService } from '../../services/fonctionrex.service';
import { Rex } from '../../models/rex';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listelogiciel',
  templateUrl: './listelogiciel.component.html',
  styleUrls: ['./listelogiciel.component.css']
})
export class ListelogicielComponent implements OnInit{
  materiels: Logiciel[] = [];
  rex : Rex[] = [];
  mat! : Logiciel;
  myFormenv! : FormGroup;
  //mat! : Environ

  constructor(private functionService : FonctionlogicielService,
    private fb : FormBuilder,
    private route: Router,private router: ActivatedRoute, private fonctionRexService: FonctionrexService){}

  ngOnInit(): void {

    this.myFormenv = this.fb.group({

      idApp : 0,
      libelleApp:['', Validators.required],
      descriptionApp:['', Validators.required],
      rex:['', Validators.required]




      })
    //getAllMateriel(){
      this.functionService.getMateriels().subscribe((response : any) => {
        this.materiels = response;
        console.log(this.materiels);

    });

      this.fonctionRexService.getRex().subscribe((data : any) => {
        this.rex = data;
        console.log(this.rex);
      });








  }
  chargeData(appl : Logiciel){
    this.mat = appl;
    this.myFormenv.patchValue({
      idEnv: appl.idApp,
      libelleApp: appl.libelleApp,
      descriptionApp: appl.descriptionApp,
      rex: appl.rex.nom



    });
  }
  delete(materiel: Logiciel){
    this.functionService.deleteMateriel(materiel.idApp).subscribe({
      next : data => {
        //console.log(data);
       // alert("succes")
        window.location.reload();
      },
      error : error => {
        console.log(error)
        alert("error")
      }
    });


  }

  // edit(materiel: Logiciel){
  //   this.functionService.updateMateriel(materiel).subscribe({
  //     next : data => {
  //       console.log(data);
  //       alert("succes")
  //       window.location.reload();
  //     },
  //     error : error => {
  //       console.log(error)
  //       alert("error")
  //     }
  //   });

  // }

  edit(){
    this.functionService.updateMateriel(this.myFormenv.value).subscribe({
      next : data1 => {
        console.log(data1);
        alert("succes")
        //console.log(data1)
        window.location.reload();
      },
      error : error => {
        console.log(error)
        alert("error")
      }
    });

  }






}
