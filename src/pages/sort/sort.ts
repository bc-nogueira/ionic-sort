import { Component } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html'
})
export class SortPage {
  tamanho = 10000;
  numeroMax = 1000000;
  array = this.prepararArray();
  ordenado = false;
  inicioPreparacao: number;
  inicioOrdenacao: number;
  duracaoPreparacao: number;
  duracaoOrdenacao: number;

  constructor(public navCtrl: NavController, public toastController: ToastController) {
  }

  prepararArray() {
    this.inicioPreparacao = moment().valueOf();
    let array =  Array.from({length: this.tamanho}, () => 
      Math.floor(Math.random() * this.numeroMax)
    );
    this.duracaoPreparacao = moment().valueOf() - this.inicioPreparacao;
    return array;
  }

  ordenar() {
    this.inicioOrdenacao = moment().valueOf();
    let items = this.array;

    for (let i = 0; i < this.tamanho; i++) { //Number of passes
      for (let j = 0; j < (this.tamanho - i - 1); j++) { //Notice that j < (length - i)
        //Compare the adjacent positions
        if (items[j] > items[j + 1]) {
          //Swap the numbers
          let tmp = items[j]; //Temporary variable to hold the current number
          items[j] = items[j + 1]; //Replace current number with adjacent number
          items[j + 1] = tmp; //Replace adjacent number with current number
        }
      }
    }

    this.array = items;
    this.ordenado = true;
    this.duracaoOrdenacao = moment().valueOf() - this.inicioOrdenacao;
    this.mostrarToast();
  }

  mostrarToast() {
    const toast = this.toastController.create({
      message: "Preparação: " + this.duracaoPreparacao + "ms | Ordenação: " 
        + this.duracaoOrdenacao + "ms"
    });
    toast.present();
  }
}
