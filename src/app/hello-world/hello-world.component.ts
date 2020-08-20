import { Component, OnInit } from '@angular/core';

export function log(target: any): void {
  console.log(`%c ${target}`, 'color: red; font-weight: bold; font-size: 18px');
}

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
@log
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
