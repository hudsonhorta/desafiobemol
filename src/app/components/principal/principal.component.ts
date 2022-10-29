import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';
import { ViacepService } from 'src/app/services/viacep.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  cEndereco = ""

  constructor(
    private viaCep: ViacepService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
  }

  salvarForm(){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      this.utilService.toastrMensagem('error', 'Erro no preenchimento do formulário', 'Erro!')
      event?.preventDefault();
      event?.stopPropagation();
    } else {
      this.utilService.toastrMensagem('success', 'Cadastro Realizado com Sucesso. Você irá receber um e-mail de confirmação!', 'Sucesso!')
    }
    form.classList.add('was-validated');
  }


  buscaCEP() {
    let codCep : string = (<HTMLInputElement>document.getElementById("cep")).value
    codCep = codCep.replace('-', '');

    if (this.verifycodCep(codCep)) {
      this.viaCep.getEndereco(codCep)
        .subscribe(
          address => {
            if (address.erro === true) {
              this.utilService.toastrMensagem('error', 'CEP não encontrado ou Inválido!', 'Erro!')
            } else {
              (<HTMLInputElement>document.getElementById("endereco")).value = address['logradouro'];
              (<HTMLInputElement>document.getElementById("estado")).value = address['uf'];
              (<HTMLInputElement>document.getElementById("cidade")).value = address['localidade'];
            }
          },
          error => {
            console.log("erro");
          }
        );
    } else {
      this.utilService.toastrMensagem('error', 'CEP não encontrado ou Inválido!', 'Erro!')
    }
  }

  verifycodCep(codCep: string): boolean {
    if (codCep.length === 8) {
      return true;
    }

    return false;
  }


}
