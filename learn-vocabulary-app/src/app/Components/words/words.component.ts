import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'words-component',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
  // template: '<p>This is words component works! Use decorator: template not templateUrl</p>'
})
export class WordsComponent implements OnInit {

  fillerStatus = 'view_all';
  newEn: string = '';
  newVn: string = '';
  isShowAddWord = false;

  listWords = [
    { id: 1, en: 'mechanism', vn: 'cơ chế', memorized: true },
    { id: 2, en: 'referred', vn: 'được giới thiệu', memorized: false },
    { id: 3, en: 'specified', vn: 'được chỉ định', memorized: true },
    { id: 4, en: 'abbreviation', vn: 'viết tắt', memorized: true },
    { id: 5, en: 'entity', vn: 'thực thể', memorized: false },
    { id: 6, en: 'separate', vn: 'tách rời, ly thân', memorized: true }
];


  constructor() { }

  ngOnInit() {
  }

  addNewWord() {
    this.listWords.unshift({
      id: this.listWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false,
    });

    this.newEn = '';
    this.newVn = '';
    this.isShowAddWord = false;
  }


  removeWord(id:number) {
    let index = this.listWords.findIndex(e => e.id === id);
    this.listWords.splice(index, 1);
  }


  getShowStatus(memorized: boolean){
    if (this.fillerStatus === 'view_all')
      return true;
    if(this.fillerStatus === 'view_memorized' && memorized)
      return true;
    if(this.fillerStatus === 'view_not_yet' && !memorized)
      return true;
  }

}
