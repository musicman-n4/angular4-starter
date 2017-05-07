import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  private wiki: string;

  constructor() { }

  ngOnInit() {
    this.wiki = localStorage.getItem('amke') as string;
  }

}
