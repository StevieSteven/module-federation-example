import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {BasePathService} from "./basePathService.service";

declare const require: any;


// export const basePathProvider = new BasePathProvider();

@Component({
  selector: 'app-root',
  // template: `<div> template test with angular</div>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  inputs: ["routepath"], // first solution,
  // providers: [BasePathService]
})
export class AppComponent implements OnInit {

  // @Input("routepath")
  routepath: string
  @Input("apibasepath") apiBasePath: string // second solution

  @ViewChild('app-root', {read: ElementRef, static: true})
  vc: ElementRef;

  constructor(
    // private router: Router,
    private basePathProvider: BasePathService,
  ) {
    console.log("AppComponent::constructor::apiBasePath", this.apiBasePath)
  }

  ngOnInit(): void {
    const routePath = this.routepath //.nativeElement.getAttribute("routePath");

    console.log("AppComponent::routePath:", routePath)
    this.basePathProvider.setBasePath(routePath);

    // this.router.navigateByUrl(location.pathname.substr(1));
    // window.addEventListener('popstate', () => {
    //   this.router.navigateByUrl(location.pathname.substr(1));
    // });
  }

  ng
}

