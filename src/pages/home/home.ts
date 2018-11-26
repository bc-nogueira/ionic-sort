import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tamanho = 10000;
  numeroMax = 1000000;
  array = this.preparaArray();
  ordenado = false;

  constructor(public navCtrl: NavController) {
  }

  preparaArray() {
    return Array.from({length: this.tamanho}, () => 
      Math.floor(Math.random() * this.numeroMax)
    );
  }

  ordenar() {
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
  }
}
