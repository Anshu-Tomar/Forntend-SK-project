import { AbstractControl } from '@angular/forms';

export class ValidatePassword {
    static MatchPassword(abstractControl: AbstractControl) {
        const passwordControl = abstractControl.get('password');
        const confirmPasswordControl = abstractControl.get('confirmPassword');
    
        if (!passwordControl || !confirmPasswordControl) {
            // If either control is null, return null (no error)
            return null;
        }
    
        const password = passwordControl.value;
        const confirmPassword = confirmPasswordControl.value;
    
        if (password !== confirmPassword) {
            // Set error if passwords don't match
            confirmPasswordControl.setErrors({ MatchPassword: true });
        } else {
            // Clear error if passwords match
            confirmPasswordControl.setErrors(null);
        }
    
        return null; // Return null to indicate no error
    }
    
  
}
