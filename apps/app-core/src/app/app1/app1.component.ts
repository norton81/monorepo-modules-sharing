import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  ViewContainerRef,
  Injector, ViewChild, Compiler, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef, AfterContentInit
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
      private dynamicResolver: DynamicComponentsResolver,
      private fb: FormBuilder
  ) {
  }

  public form: FormGroup = this.fb.group({});
  public model = {
    feature1Name: 'Feature 1',
    feature2Name: 'Feature 2',
    feature3Name: 'Feature 3',
  };

  @ViewChildren('feature', {read: ElementRef} ) featuresElements: QueryList<ElementRef> = new QueryList<ElementRef>();
  @ViewChild('container', {read: ViewContainerRef} ) container: ViewContainerRef | undefined;

  public async ngOnInit() {
    const replacedComponents = await this.dynamicResolver.getDynamicComponents();
    this.dynamicComponents.filter((dc) => {});

    //this.dynamicComponents
    this.initFeatures();
  }

  private initFeatures() {
    this.container?.clear();
    this.featuresElements.forEach((element, index) => {
      const componentSelector = element.nativeElement.getAttribute('name');
      const dynamicComponent = this.dynamicComponents.find((component) =>
          (this.componentFactoryResolver.resolveComponentFactory(component).selector === componentSelector)
      );
      if (!dynamicComponent) {
        throw new Error('There is no dynamic component matched with template element');
      }
      const descriptor = this.dynamicResolver.descriptors[componentSelector];
      const component = (descriptor && descriptor.mode === 'replace') ? descriptor.component : dynamicComponent;
      if (descriptor && descriptor.mode === 'remove') {
        return;
      }
      if (descriptor && descriptor.mode === 'add-before') {
        this.createComponent(descriptor.component);
      }
      this.createComponent(component);
      if (descriptor && descriptor.mode === 'add-after') {
        this.createComponent(descriptor.component);
      }
    });
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
