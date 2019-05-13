import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tamanho = 10000;
  numeroMax = 1000000;
  array = this.preparaArray();
  ordenado = false;
  inicio: number;
  duracao: number;

  constructor(public navCtrl: NavController, public toastController: ToastController) {
  }

  preparaArray() {
    return Array.from({length: this.tamanho}, () => 
      Math.floor(Math.random() * this.numeroMax)
    );
  }

  ordenar() {
    // const inicio = moment().format('MMMM Do YYYY, h:mm:ss a');
    this.inicio = moment().valueOf();
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
    this.duracao = moment().valueOf() - this.inicio;
    this.mostraToast();
  }

  mostraToast() {
    const toast = this.toastController.create({
      message: this.duracao + "ms"
    });
    toast.present();
  }
}
