import {EventEmitter} from "@angular/core";
import {FormGroup} from "@angular/forms";

export interface FeatureComponent {
    form: FormGroup | undefined;
    model: any;
    changed :EventEmitter<any>;
}
