import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    return (this.form?.get('employees') as any)?.controls;
  }

  constructor(private cd: ChangeDetectorRef,private fb: FormBuilder) {
  }


  ngOnInit() {
    debugger
    const array = new FormArray([
      this.fb.group({
        firstName: this.fb.control('Ivan1'),
        secondName: this.fb.control('Petrov1')
      }),
      this.fb.group({
        firstName: this.fb.control('Savely1'),
        secondName: this.fb.control('Kramorov1')
      }),
    ])
    this.form?.addControl('employees',array);
    debugger
    console.log('*****',array instanceof FormArray);
    //const controls = this.form?.get('employees') as any;
    //console.log('*****',controls instanceof FormArray);
    console.log('*****',this.form.get(["employees"]) instanceof FormArray);

  }

  onRemove(item: AbstractControl, index: number) {
    const control = this.form?.get('employees') as any;
    control.removeAt(index);
    //this.cd.detectChanges();
  }
}

