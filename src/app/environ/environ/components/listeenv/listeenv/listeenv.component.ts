import { Environ } from './../../../models/environ';
import { Component, OnInit } from '@angular/core';

import { FonctionenvironService } from '../../../services/fonctionenviron.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FonctionLoginService } from 'src/app/Auth/Login/service/fonction-login.service';

@Component({
  selector: 'app-listeenv',
  templateUrl: './listeenv.component.html',
  styleUrls: ['./listeenv.component.css']
})
export class ListeenvComponent implements OnInit{
  materiels: Environ[] = [];
  // rex : Rex[] = [];
  myFormenv! : FormGroup;
  mat! : Environ

  constructor(private functionService : FonctionenvironService,
    private fb : FormBuilder,
    private route: Router,private router: ActivatedRoute, privateauth : FonctionLoginService){}

  ngOnInit(): void {


    this.myFormenv = this.fb.group({

      idEnv : 0,
      libelleEnv:['', Validators.required]



      })
    //getAllMateriel(){
      this.functionService.getMateriels().subscribe((response : any) => {
        console.log('responsse' + response)
        this.materiels = response;
        console.log(this.materiels);

    });
    //getRex
    // this.fonctionRexService.getRex().subscribe((data : any) => {
    //   this.rex = data;
    //   console.log(this.rex);
    //})

  //}





  }

  chargeData(envp : Environ){
    this.mat = envp;
    this.myFormenv.patchValue({
      idEnv: envp.idEnv,
      libelleEnv: envp.libelleEnv



    });
  }
  delete(materiel:Environ){
    this.functionService.deleteMateriel(materiel.idEnv).subscribe({
      next : data => {
        //console.log(data);
        //alert("succes")
        window.location.reload();
      },
      error : error => {
        console.log(error)
        alert("error")
      }
    });


  }

  // edit(materiel: Environ){
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
