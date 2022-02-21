import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";
import {FeatureComponent} from "../../IFeatureComponent";

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss']
})
export class Feature2Component implements FeatureComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();

  get stocks() {
    return (this?.form?.get('employees') as FormArray)?.controls || [];
  }

  ngOnInit() {
    const array = new FormArray([
        new FormGroup({
          firstName: new FormControl('Ivan'),
          secondName: new FormControl('Petrov')
        }),
        new FormGroup({
          firstName: new FormControl('Savely'),
          secondName: new FormControl('Kramorov')
        }),
    ])
    this.form?.addControl('employees',array);
  }

  onRemove(item: AbstractControl, index: number) {
    const control = this.form.get('employees') as FormArray;
    control.removeAt(index);
  }
}
