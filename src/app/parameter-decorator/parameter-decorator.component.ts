import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Required, Validate } from './meus.parameter.decorators';

@Component({
  selector: 'app-parameter-decorator',
  templateUrl: './parameter-decorator.component.html',
  styleUrls: ['./parameter-decorator.component.scss']
})
export class ParameterDecoratorComponent {

  num1 = new FormControl();
  num2 = new FormControl();
  total: number;

  somar(): void {
    this.total = this.add(this.num1.value, this.num2.value);
  }

  @Validate()
  add(@Required() parcela1: number, @Required() parcela2: number): number {
    return parcela1 + parcela2;
  }

}
