import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceProvider } from '../../providers/service-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage 
{  
    cadastro :any = {};
    users    :any[];
    nome     :boolean = false;

    constructor(public formBuilder : FormBuilder,public service : ServiceProvider)
    {
      // this.getDados();  
      this.cadastro = this.formBuilder.group(
      {
         nome  :["",Validators.required],
         email :["",Validators.required],
         senha :["",Validators.required]
      });
    }

    // inicia processor em outra thread para nao parar a inicialização da page
    ngOnInit() 
    {
      this.getDados();
    }

    getDados() 
    {
      //retorno de Dados
      this.service.getData().subscribe(
        data=> this.users = data,
        err=> console.log(err)
      );
    }

    mostraNome()
    {
        this.nome = !this.nome;
    }

    postDados()
    {
      this.service.postData(this.cadastro.value).subscribe(
        data=>
          (
              console.log(data.mensage),
              this.getDados()
          ),
        err=>console.log(err)
      );
    }
    
}

