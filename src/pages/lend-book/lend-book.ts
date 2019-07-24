import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../models/Book';
import { BookCdService } from '../../services/book-cd.service';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  book: Book;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private bookCdService: BookCdService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('bookId');
    this.book = this.bookCdService.listBooks[this.index];
  }

  dissmissModal(){
    this.viewCtrl.dismiss();
  }

  onLendOrReturnBook(){
    this.bookCdService.lendOrReturnElement(true, this.index);
  }

}
