import { FormControl, FormGroup } from "@angular/forms";

/**
 * A validator for comparing two input controls
 */
export class ComparisonValidator {

  /**
   * Compares the value of the control to a control which has the same parent with the current control.
   * @param comparer The control name to be validated against
   * @returns An object with a single key ```{ comparison : {comaparison: value of the comparing element }}```
   */
//   static Compare(comparer: string) {
//     return (control: FormControl): { [key: string]: any } | null => {
//       let val = control.value;

//       let ab = control.parent?.controls[comparer as keyof typeof control.parent].value;

//       if (control.parent != undefined && val != control.parent.controls[comparer].value || val == undefined || val == null || val == "" || val == " ") {
//         return { "comparison": { "comparison": val, } };
//       } else {
//         return null;
//       }
//     }
//   }
}