import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-desafio',
  templateUrl: './desafio-component.html',
  styleUrls: ['./desafio-component.css']
})
export class DesafioComponent implements OnInit {

  numeros = '';
  resultado: string[] = [];
  listaValida = true;

  ngOnInit(): void {
    this.numeros = '';
  }

  addNumbers(): void {
    this.resultado = this.numeros?.split(",");

    if(this.resultado.length < 4) {

      this.listaValida = false;
      this.resultado = [];
      this.numeros = '';
      return

    } else if(this.resultado.length > 4 && this.resultado.length < 9) {

      this.listaValida = false;
      this.resultado = [];
      this.numeros = '';
      return

    } else if(this.resultado.length > 9 && this.resultado.length < 16 ) {

      this.listaValida = false;
      this.resultado = [];
      this.numeros = '';
      return

    }

    this.listaValida = true;
  }

  rotacionar() {
    if(this.resultado.length == 4) {

      this.changePosition(this.resultado, 0, 1);
      this.changePosition(this.resultado, 0, 3);
      this.changePosition(this.resultado, 0, 1);

    } else if(this.resultado.length == 9) {

      this.changePosition(this.resultado, 0, 1);
      this.changePosition(this.resultado, 0, 2);
      this.changePosition(this.resultado, 0, 1);
      this.changePosition(this.resultado, 0, 5);
      this.changePosition(this.resultado, 1, 2);
      this.changePosition(this.resultado, 0, 1);
      this.changePosition(this.resultado, 3, 4);
      this.changePosition(this.resultado, 6, 3);
      this.changePosition(this.resultado, 6, 7);
      this.changePosition(this.resultado, 7, 8);
      this.changePosition(this.resultado, 4, 5);
      this.changePosition(this.resultado, 8, 5);
      this.changePosition(this.resultado, 6, 7);
      this.changePosition(this.resultado, 7, 8);
    } else if (this.resultado.length == 16) {

      this.changePosition(this.resultado, 0, 1);
      this.changePosition(this.resultado, 0, 2);
      this.changePosition(this.resultado, 0, 1);
      this.changePosition(this.resultado, 0, 5);
      this.changePosition(this.resultado, 1, 2);
      this.changePosition(this.resultado, 0, 1);
      this.changePosition(this.resultado, 3, 4);
      this.changePosition(this.resultado, 6, 3);
    }

  }

  changePosition(arr: any, from: any, to: any) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
  };

  limpar() {
    this.resultado = [];
    this.numeros = '';
  }

}
