import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IFeature } from '../../IFeature';

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.scss']
})
export class Feature3Component implements IFeature{
  @Input() form: AbstractControl;
  @Input() bus: AbstractControl;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();
}
