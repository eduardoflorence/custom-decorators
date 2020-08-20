import { Component, OnDestroy, OnInit} from '@angular/core';
import { AutoUnsubscribe } from './meus.class.decorators';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-class-decorator',
  templateUrl: './class-decorator.component.html',
  styleUrls: ['./class-decorator.component.scss']
})
@AutoUnsubscribe()
export class ClassDecoratorComponent implements OnDestroy, OnInit {

  intervalo: Subscription;
  contador: number;

  constructor() { }

  ngOnInit(): void {
    this.intervalo = interval(1000).subscribe((value) => {
      this.contador = value;
    });
  }

  ngOnDestroy(): void {
    console.log('Destroy da classe');
  }

}
