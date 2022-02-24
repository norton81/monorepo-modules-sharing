import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss']
})
export class Feature2Component {
  @Input() form: FormGroup;
  @Input() bus: FormGroup;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();

  get stocks() {
    return (this?.form?.get('employees') as FormArray)?.controls || [];
  }

  ngOnInit() {
    const array = new FormArray([])
    this.form?.addControl('employees',array);
  }

  ngOnChanges(changes: SimpleChanges) {
    const control = this.form.get('employees') as FormArray;
    if(changes['model']?.currentValue) {
      control.clear();
      this.model.employees.forEach( (emp: any, index: any)=> {
        control.insert(index, new FormGroup({
          firstName: new FormControl(emp.firstName),
          secondName: new FormControl(emp.secondName),
          id: new FormControl(emp.id)
        }))
      })
    }
  }

  createNew() {
    this.form.get('current')?.patchValue({id: '', firstName: '', secondName: ''})
  }

  remove(item: AbstractControl, index: number) {
    const control = this.form.get('employees') as FormArray;
    control.removeAt(index);
  }

  edit(item: AbstractControl, index: number) {
    const model = {...this.model}
    model.current = item?.value;
    this.changed.emit(model);
  }
}
