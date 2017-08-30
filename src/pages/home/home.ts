import { Component } from '@angular/core';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage 
{  
    users:any[];
    nome:boolean = false;
    
    constructor()
    {
        
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

    ngOnInit()
    {
      this.getDados();
    }

    mostraNome()
    {
        this.nome = !this.nome;
    }
}
