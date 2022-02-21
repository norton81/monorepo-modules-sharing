import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  ViewContainerRef,
  Injector, ViewChild, Optional, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef, AfterContentInit, Inject
} from '@angular/core';
import { Feature2Component } from "./feature2/feature2.component";
import { Feature1Component } from "./feature1/feature1.component";
import {Feature3Component} from "./feature3/feature3.component";
import {DynamicComponentsResolver} from "../dynamic-component-resolver.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FeatureComponent} from "../IFeatureComponent";

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component {

  dynamicComponents = [Feature1Component, Feature2Component, Feature3Component];

  constructor(
      private injector: Injector,
      private componentFactoryResolver: ComponentFactoryResolver,
      private fb: FormBuilder,
      @Optional() @Inject('DEPENDENCY_RESOLVER') private dynamicResolver: DynamicComponentsResolver
  ) {
  }

  public form: FormGroup = this.fb.group({});
  public model = {
    feature1Name: 'Feature 1',
    feature2Name: 'Feature 2',
    feature3Name: 'Feature 3',
  };

  @ViewChild('container', {read: ViewContainerRef} ) container: ViewContainerRef | undefined;

  public async ngOnInit() {
    if(this.dynamicResolver) {
      this.dynamicComponents = await this.dynamicResolver.getDynamicComponents(this.dynamicComponents);
    }
    setTimeout(() => {
      this.initFeatures();
    });
  }

  private initFeatures() {
    this.container?.clear();
    this.dynamicComponents.forEach((component)=>{
      this.createComponent(component);
    })
  }

  private createComponent(component: any) {
    Injector.create({
      providers: [],
      parent: this.injector,
    });

    const componentRef = this?.container?.createComponent<FeatureComponent>(component, {
      injector: this.injector
    });

    if(componentRef) {
      componentRef.instance.form = this.form;
      componentRef.instance.model = this.model;
      componentRef.instance.changed.subscribe(this.featureChanged);
    }
  }

  private featureChanged(value: any) {
    console.log(value);
  }
}
