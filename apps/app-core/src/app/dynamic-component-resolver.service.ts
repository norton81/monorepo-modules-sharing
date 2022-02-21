import { Inject, Injectable } from '@angular/core';

@Injectable()
export class DynamicComponentsResolver {
  async getDynamicComponents(components: any[]) {
    return Promise.resolve(components);
  };
}
