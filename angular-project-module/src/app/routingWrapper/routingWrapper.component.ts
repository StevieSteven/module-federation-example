import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {BasePathService} from "../basePathService.service";

declare const require: any;

@Component({
  selector: 'routingWrapper',
  templateUrl: './routingWrapper.component.html',
  styleUrls: ['./routingWrapper.component.css'],
})
export class RoutingWrapperComponent implements OnInit {

  @ViewChild('routingWrapper', {read: ElementRef, static: true})
  vc: ElementRef;

  ngVersion = require('../../../package.json').dependencies['@angular/core'];

  baseA: string;
  baseB: string;

  constructor(
    private router: Router,
    private basePathService: BasePathService
  ) {
    console.log("RoutingWrapperComponent::constructor");
  }

  ngOnInit(): void {
    console.log("RoutingWrapperComponent::ngOnInit");
    this.baseA = this.basePathService.generateLink("/a");
    this.baseB = this.basePathService.generateLink("/b");
  }
  ng
}

