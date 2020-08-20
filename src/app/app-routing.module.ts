import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CustomFactoryComponent } from './custom-factory/custom-factory.component';
import { ClassDecoratorComponent } from './class-decorator/class-decorator.component';
import { MethodDecoratorComponent } from './method-decorator/method-decorator.component';
import { PropertyDecoratorComponent } from './property-decorator/property-decorator.component';
import { ParameterDecoratorComponent } from './parameter-decorator/parameter-decorator.component';

const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'custom-factory', component: CustomFactoryComponent },
  { path: 'class-decorator', component: ClassDecoratorComponent },
  { path: 'method-decorator', component: MethodDecoratorComponent },
  { path: 'property-decorator', component: PropertyDecoratorComponent },
  { path: 'parameter-decorator', component: ParameterDecoratorComponent },
  { path: '', redirectTo: 'hello-world', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
