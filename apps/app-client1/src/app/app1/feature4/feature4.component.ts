import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feature4',
  templateUrl: './feature4.component.html',
  styleUrls: ['./feature4.component.scss']
})
export class Feature4Component {
  @Input() form: FormGroup;
  @Input() bus: FormGroup;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();

  ngOnInit() {
    this.bus.addControl('total', new FormControl(0))
  }

  get total() {
    return (this.bus?.get('total') as FormControl);
  }
}
