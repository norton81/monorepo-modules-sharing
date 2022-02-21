import { Inject, Injectable } from '@angular/core';
import {Feature3Component} from "./app1/feature3/feature3.component";
import {Feature2Component} from "./app1/feature2/feature2.component";

@Injectable()
export class DynamicComponentsResolver {
  async getDynamicComponents(components: any[]) {
    const result = [components[0], Feature2Component, Feature3Component]
    return Promise.resolve(result);
  };
};

