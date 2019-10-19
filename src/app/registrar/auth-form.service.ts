import { Injectable } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class AuthFormService {

    constructor(
        private formBuilder: FormBuilder
    ) {
    }

    passwordValidate(c: FormControl) {
        let passwordValidate = {};
        let umaLetraMaiuscula = /([A-Z])/;
        let umNumero = /([0-9])/;
        let seisCaracteres = /\w{6,}/;

        if (!umaLetraMaiuscula.test(c.value)) {
            if (!passwordValidate) passwordValidate = {};
            passwordValidate["leastOneUpperCaseLetter"] = true;
        }

        if (!umNumero.test(c.value)) {
            if (!passwordValidate) passwordValidate = {};
            passwordValidate["leastOneNumber"] = true;
        }
        if (!seisCaracteres.test(c.value)) {
            if (!passwordValidate) passwordValidate = {};
            passwordValidate["leastSixCharacter"] = true;
        }

        return Object.keys(passwordValidate).length ? passwordValidate : passwordValidate;

    }

    passwordConfirm(c: FormControl) {
        if (c.parent) {
            if (c.value === c.parent.value.password)
                return null;

        }

        return {
            "passwordDoNotMatch": "true"
        }

    }


    getNewFormGroup() {
        let email = new FormControl("", [Validators.required, Validators.email]);
        let password = new FormControl("", [this.passwordValidate, Validators.minLength(6), Validators.required]);
        let confirmarPassword = new FormControl("", [this.passwordConfirm]);


        let formGroup = this.formBuilder.group({
            "email": email,
            "password": password,
            "confirmarPassword": confirmarPassword
        });
        return formGroup;
    }

}
