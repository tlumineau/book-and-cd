import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CD } from '../../models/CD';
import { BookCdService } from '../../services/book-cd.service';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: CD;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private bookCdService: BookCdService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('cdId');
    this.cd = this.bookCdService.listCD[this.index];
  }

  dissmissModal(){
    this.viewCtrl.dismiss();
  }

  onLendOrReturnCD(){
    //this.cd.isLend = !this.cd.isLend;
    this.bookCdService.lendOrReturnElement(false, this.index);
  }

}
