import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Storage } from './meus.property.decorators';

@Component({
  selector: 'app-property-decorator',
  templateUrl: './property-decorator.component.html',
  styleUrls: ['./property-decorator.component.scss']
})
export class PropertyDecoratorComponent {

  @Storage('tokenUser')
  token: string;

  controle = new FormControl('');

  loadValue(): void {
    this.controle.setValue(this.token);
  }

  saveValue(): void {
    this.token = this.controle.value;
  }


}
