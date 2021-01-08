import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesService } from './services/images.service';
import { ApiService } from './api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EndpointInterceptor } from './interceptors/endpoint.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    ImagesService,
    { provide: HTTP_INTERCEPTORS, useClass: EndpointInterceptor, multi: true }
  ]
})
export class ApiModule { }
