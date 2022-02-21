import { Injectable } from '@angular/core';
import {DynamicComponents} from "./dynamic-component-descriptor";
import {Feature3Component} from "./app1/feature3/feature3.component";
import {Feature1Component} from "./app1/feature1/feature1.component";

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentsResolver {
  get descriptors(): DynamicComponents {
    return {
      'app-feature1': {
        mode: 'replace',
        component: Feature3Component
      },
      'app-feature2': {
        mode: 'add-after',
        component: Feature1Component
      },
      'app-feature3': {
        mode: 'remove',
      },
    }
  };
  async getDynamicComponents() {
    Promise.resolve([]);
  };
};

