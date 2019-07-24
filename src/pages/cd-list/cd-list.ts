import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { CD } from '../../models/CD';
import { BookCdService } from '../../services/book-cd.service';
import { LendCdPage } from '../lend-cd/lend-cd';

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdList: CD[];

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public menuCtrl: MenuController, private bookCdService: BookCdService, ) {
  }

  ionViewWillEnter(){
    this.cdList = this.bookCdService.listCD.slice();
  }

  onloadCD(index: number){
    let modal = this.modalCtrl.create(LendCdPage, {cdId: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

}
