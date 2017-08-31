import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceProvider } from '../../providers/service-provider';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage 
{  
    cadastro :any = {};
    users    :any[];
    nomes    :boolean = true;

    constructor(  public formBuilder : FormBuilder,
                  public service : ServiceProvider,
                  public alertCtrl: AlertController )
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
        this.nomes = !this.nomes;
    }

    postDados()
    {
      this.service.postData(this.cadastro.value).subscribe(
        data=>
          {
              console.log(data.mensage);
              this.getDados()
          },
        err=>console.log(err)
      );
    }

    deletaPerfil(user)
    {
      this.service.deleteData(user.id).subscribe(
        data=> this.getDados(),
        err=>console.log(err)
      );
    }




    editaPerfil(user) 
    {
      let prompt = this.alertCtrl.create(
      {
        title: 'Editar Perfil',
        inputs: [
          {
            name: 'nome',
            placeholder: 'Nome',
            value: user.nome
          },
          {
            name: 'email',
            placeholder: 'Email',
            value: user.email
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {}
          },
          {
            text: 'Salvar',
            handler: data => 
            {
              let params:any=
              {
                id:user.id,
                nome:data.nome,
                email:data.email
              };
              this.service.updateData(params).subscribe(
                data=>this.getDados(),
                err=>console.log(err)
              );
            }
          }
        ]
      });
      prompt.present();
    }


    
}

