import { Compiler, Inject, Injectable } from '@angular/core';
import {Feature3Component} from "./app1/feature3/feature3.component";
import {Feature2Component} from "./app1/feature2/feature2.component";
import { Feature2Module } from './app1/feature2/feature2.module';
import { Feature4Component } from './app1/feature4/feature4.component';

@Injectable()
export class DynamicComponentsResolver {
  constructor(private compiler: Compiler) {
  }
  async getDynamicComponents(components: any[]) {
    const result = [Feature4Component, components[0], Feature2Component, Feature3Component]
    await this.compiler. compileModuleAndAllComponentsAsync(Feature2Module)
    return Promise.resolve(result);
  };
};

