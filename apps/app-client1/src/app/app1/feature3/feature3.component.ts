import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.scss']
})
export class Feature3Component {
  @Input() form: FormGroup;
  @Input() bus: FormGroup;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();

  get isDisabled() {
    return (this.bus?.get('submitDisabled') as FormControl);
  }
}
