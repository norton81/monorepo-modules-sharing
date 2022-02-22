import { EventEmitter } from "@angular/core";
import { AbstractControl } from '@angular/forms';

export interface IFeature {
    form: AbstractControl;
    bus: AbstractControl;
    model: any;
    changed: EventEmitter<any>;
}
