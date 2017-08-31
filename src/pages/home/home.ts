import { Component } from '@angular/core';
// import { Validators, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage 
{  
    cadastro :any = {};
    users    :any[];
    nome     :boolean = false;

    // constructor(public formBuilder : FormBuilder)
    constructor()
    {
      this.getDados();  
      // this.cadastro = this.formBuilder.group(
      // {
      //    nome  :["",Validators.required],
      //    email :["",Validators.required],
      //    senha :["",Validators.required]
      // });
    }

    getDados()
    {
      this.users=
      [
        {
          nome:"vincius",
          email:"marcusv.bda@icloud.com"
        },
        {
          nome:"driely",
          email:"driely.aoyama@hotmail.com"
        }
      ];
    }

    mostraNome()
    {
        this.nome = !this.nome;
    }

    postDados()
    {
      console.log(this.cadastro.value);
    }

    postDados2(form)
    {
      console.log(form.value);
    }
}
