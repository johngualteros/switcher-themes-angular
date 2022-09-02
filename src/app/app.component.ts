import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'switcher-themes-angular';
  storedTheme: string | null = localStorage.getItem('theme-color');

  ngOnInit(){

  }
  constructor(){}

  setTheme(theme: string){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }
}
