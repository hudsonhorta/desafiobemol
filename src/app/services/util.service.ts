import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private Toastr: ToastrService
  ) { }

    /* Função de Apresentação de Mensagem ao Usuario utilizando ToastMessage */
    toastrMensagem(tipo: string, mensagem: string, titulo: string) {
      switch (tipo) {
        case 'error':
          this.Toastr.error(mensagem, titulo, { closeButton: true })
          break
        case 'warning':
          this.Toastr.warning(mensagem, titulo, { closeButton: true })
          break
        case 'success':
          this.Toastr.success(mensagem, titulo, { closeButton: true })
          break
        default:
          this.Toastr.info(mensagem, titulo, { closeButton: true })
          break
      }
    }
    
}
