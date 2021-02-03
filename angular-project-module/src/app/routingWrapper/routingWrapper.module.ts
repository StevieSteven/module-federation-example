import {Injector, NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {endsWith} from "../router.utils";
import {AComponent} from "../a/a.component";
import {BComponent} from "../b/b.component";
import {BasePathService} from "../basePathService.service";
import {APP_BASE_HREF} from "@angular/common";
import {RoutingWrapperComponent} from "./routingWrapper.component";
import {HomeComponent} from "../home/home.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {matcher: endsWith('a'), component: AComponent},
      {matcher: endsWith('b'), component: BComponent},
    ]),
  ],
  declarations: [
    AComponent,
    BComponent,
    HomeComponent,
    RoutingWrapperComponent,
  ],
  providers: [
    BasePathService,
  ],
  exports: [
    RoutingWrapperComponent
  ],
  bootstrap: []
})
export class RoutingWrapperModule {

  constructor(private injector: Injector) {
    console.log("RoutingWrapperModule: ", this)
  }

}
