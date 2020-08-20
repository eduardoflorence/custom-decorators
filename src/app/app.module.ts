import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CustomFactoryComponent } from './custom-factory/custom-factory.component';
import { ClassDecoratorComponent } from './class-decorator/class-decorator.component';
import { MethodDecoratorComponent } from './method-decorator/method-decorator.component';
import { PropertyDecoratorComponent } from './property-decorator/property-decorator.component';
import { ParameterDecoratorComponent } from './parameter-decorator/parameter-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CustomFactoryComponent,
    ClassDecoratorComponent,
    MethodDecoratorComponent,
    PropertyDecoratorComponent,
    ParameterDecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
