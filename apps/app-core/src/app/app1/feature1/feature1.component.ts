import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {FeatureComponent} from "../../IFeatureComponent";

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component implements FeatureComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();

  ngOnInit() {
    this.form?.addControl('firstName', new FormControl('Ivan'));
    this.form?.addControl('secondName', new FormControl('Ivanov'));

    this.form.get('firstName')?.valueChanges.subscribe(this.emitEvent.bind(this));
    this.form.get('secondName')?.valueChanges.subscribe(this.emitEvent.bind(this));
  }

  private emitEvent() {
    this.changed.emit({
      firstName: this.form.get('firstName')?.value,
      secondName: this.form.get('secondName')?.value
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
      firstName: this.form.get('firstName')?.value,
      secondName: this.form.get('secondName')?.value
    };
    const control = this.form.get('employees') as FormArray;
    control.push(this.createStock(employee));
  }


}
