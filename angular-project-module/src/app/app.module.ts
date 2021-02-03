import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppComponent} from './app.component';
import {RoutingWrapperModule} from "./routingWrapper/routingWrapper.module";
import {RoutingWrapperComponent} from "./routingWrapper/routingWrapper.component";
import {BasePathService} from "./basePathService.service";

// {provide: APP_BASE_HREF, useFactory: (p: BasePathProvider) => {console.log("useFactpry: "); return p.getBasePath()}, deps: [BasePathProvider]}

// export const basePathProvider = new BasePathProvider();

@NgModule({
  imports: [
    BrowserModule,
    RoutingWrapperModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    BasePathService,
   ],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {
    console.log("AppModule: ", this)
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('angular-project-module', ce);

    console.log("AppModule::ngDoBootstrap", this)
  }

}
