import { Component } from '@angular/core';
import { ModalController, NavParams, MenuController } from 'ionic-angular';
import { Book } from '../../models/Book';
import { BookCdService } from '../../services/book-cd.service';
import { LendBookPage } from '../lend-book/lend-book';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  bookList: Book[];

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public bookCdService: BookCdService, public menuCtrl: MenuController) {
  }

  ionViewWillEnter(){
    this.bookList = this.bookCdService.listBooks.slice();
  }

  onLoadBook(index: number){
    let modal = this.modalCtrl.create(LendBookPage, {bookId: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

}
