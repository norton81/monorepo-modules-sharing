import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IFeature } from "../../IFeature";

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component implements IFeature {
  @Input() form: FormGroup;
  @Input() bus: FormGroup;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();

  ngOnInit() {
    this.form?.addControl('current', new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      secondName: new FormControl('', Validators.required),
      id: new FormControl(''),
    }));
    this.form?.get('firstName')?.valueChanges.subscribe(this.emitEvent.bind(this));
    this.form?.get('secondName')?.valueChanges.subscribe(this.emitEvent.bind(this));
  }

  ngOnChanges(changes: SimpleChanges) {
    const control = this.form.get('current');
    if(changes['model']?.currentValue) {
      control?.patchValue(this.model.current);
    }
  }

  private emitEvent() {
    this.changed.emit({
      firstName: this.form?.get('firstName')?.value,
      secondName: this.form?.get('secondName')?.value
    });
  }

  private createStock(employee: any) {
    return new FormGroup({
      firstName: new FormControl(employee?.firstName),
      secondName: new FormControl(employee?.secondName)
    });
  }

  addEmployee() {
    const employee = {
      firstName: this.form?.get('firstName')?.value,
      secondName: this.form?.get('secondName')?.value
    };
    const control = this.form?.get('employees') as FormArray;
    control.push(this.createStock(employee));
  }
}
