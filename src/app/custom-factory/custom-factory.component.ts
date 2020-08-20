import { Component, OnInit } from '@angular/core';

/*
  // Decorator Function
  export function log(target: any): void {
    console.log(target);
  }
*/

// Decorator Factory
export function log(color: string = 'red'): ClassDecorator {
  // Decorator Function
  return (target: any): void => {
    console.log(`%c ${target}`, `color: ${color}; font-weight: bold; font-size: 18px`);
  };

}

@log('green')
@Component({
  selector: 'app-custom-factory',
  templateUrl: './custom-factory.component.html',
  styleUrls: ['./custom-factory.component.scss']
})
export class CustomFactoryComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Log colorido';
  }

}
