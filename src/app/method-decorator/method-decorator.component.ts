import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Timeout, Cacheable } from './meus.method.decorators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-method-decorator',
  templateUrl: './method-decorator.component.html',
  styleUrls: ['./method-decorator.component.scss']
})
export class MethodDecoratorComponent implements OnInit {

  total: number;
  profissional: string;

  estados: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTotal('Desenvolvedores');

    this.getEstados().subscribe(
      (response) => this.estados = response
    );
  }

  @Timeout(5000)
  getTotal(name: string): void {
    this.profissional = name;
    this.total = 120;
  }

  @Cacheable()
  getEstados(): Observable<any> {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }

}
