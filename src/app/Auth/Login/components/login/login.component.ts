import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FonctionLoginService } from '../../service/fonction-login.service';
import { User } from '../../models/user';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  myForm! : FormGroup;
  user! : User
  submitted = false;
  constructor(private route: Router, private fb: FormBuilder,
    private authService: FonctionLoginService){

  }
  ngOnInit(): void {
    this.myForm = this.fb.group({

      email:['', [Validators.required, Validators.email]],
      password : ['', Validators.required]


      })
  }

  get f() {
    return this.myForm.controls;
  }


  auth() {
    // let email = this.myForm.value.email;
    // let pwd = this.myForm.value.password;
    // this.authService.login(email,pwd).subscribe({
    //   next : data => {
    //     console.log(data)
    //     this.route.navigate(['/dashboard'])
    //   },
    //   error : err =>{
    //     console.log(err)

    //   }
    // })
    this.submitted = true;
    console.log(this.myForm.value)
  //   const credentials = { /* Les données de connexion, par exemple, username et password */

  //  };

    this.authService.login(this.myForm.value).subscribe({
      next : data => {
        // Gérer la réponse réussie du serveur*
        let responseData;
    try {
      responseData = data.token ;
      console.log(responseData)
      // Vous pouvez maintenant stocker le token, par exemple dans le stockage local
      localStorage.setItem('token', responseData);
      this.route.navigate(['/dashboard'])
    } catch (e) {
      console.error('Erreur lors de l\'analyse JSON de la réponse :', e);

      // Gérer l'erreur de parsing JSON
      return;
    }

    // Traiter la réponse réussie du serveur (responseData)
    //console.log('Réponse du serveur :', responseData);

        console.log('Token généré avec succès', data);
      },
      error : error => {
        // Gérer les erreurs de la requête
        console.error('Erreur lors de la génération du token', error);
      }
  });


   }




}
