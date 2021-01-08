import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LazyImageDirective } from './directives/lazy-image.directive';


@NgModule({
  declarations: [HomeComponent, LazyImageDirective],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
