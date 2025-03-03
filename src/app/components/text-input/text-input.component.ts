import { Component, ElementRef, Input, ViewChild, forwardRef  } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { shakeX } from 'ng-animate';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextInputComponent),
  multi: true
};

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    animations: [
      trigger('shakeX', [transition('* => *', useAnimation(shakeX,
        {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1, delay: 0 }}
      ))])
    ],
})
export class TextInputComponent  {

  constructor(){
  }

  /**
   * The type of input control
   */
  @Input("type") type: "text" | "password" | "number" | "phone" | "email" = "text"

  /**
   * The placeholder for the input
   */
  @Input() placeholder?: string

  /**
   * The validation class to show accent color for the control when validating
   */
  @Input() validationClass?: string | "danger" | "success" | "info" | "warning" | null

  /**
   * A validation message to display to the user if any
   */
  @Input() validationMessage?: string

  /**
   * Determines if validation messages and symbols should be displayed
   */
  @Input() showValidation?: boolean = false

  /**
   * The input element
   */
  @ViewChild("inputEl", {static: true}) inputEl!: ElementRef

  /**
   * The container element
   */
  @ViewChild("textEl", {static: true}) textEl!: ElementRef

  // #region NgModel template definiton
  private innerValue:any;

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  //get accessor
  get value(): any {
      return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.innerValue) {
          this.innerValue = value;
      }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }
  //#endregion

  showPassword(event: any){
    if (this.inputEl.nativeElement.type == "password"){
      this.inputEl.nativeElement.type = "text";

      event.target.classList.remove("fa-eye-slash");
      event.target.classList.add("fa-eye");
    }else{
      this.inputEl.nativeElement.type = "password";
      
      event.target.classList.remove("fa-eye");
      event.target.classList.add("fa-eye-slash");
    }
  }

  clearInput(){
    this.value = undefined
  }

  inputChanged(){
    this.showValidation = false
    this.inputEl.nativeElement.attributes.remove("[@shakeX]")
  }
}
