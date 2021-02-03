import {Injectable} from "@angular/core";

// https://stackoverflow.com/questions/38112891/angular-2-4-5-set-base-href-dynamically
// https://www.pluralsight.com/guides/how-to-implement-services-and-dependency-injection-angular

@Injectable({
  providedIn: "root",

})
export class BasePathService {

  private basePath: string = "";

  constructor() {
    console.log("BasePathService::constructor")
  }

  setBasePath(bP: string) {
    console.log("BasePathService::setBasePath", bP)
    this.basePath = bP
  }

  getBasePath(): string {
    console.log("BasePathProvider:get:", this.basePath);
    return this.basePath
  }

  generateLink(uri: string): string {

    console.log("BasePathProvider:generateLink:", {basePath: this.basePath, uri});
    return this.basePath + "/" + uri;
  }

}
