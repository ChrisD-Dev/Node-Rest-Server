export class Validators {


    static get email() {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    }

    static get password() {
        // Debe contener al menos un carácter en minúscula ((?=.*[a-z])).
        // Debe contener al menos un carácter en mayúscula ((?=.*[A-Z])).
        // Debe contener al menos un dígito ((?=.*\d)).
        // Debe contener al menos un carácter especial ((?=.*[@$!%*?&])).
        // Debe tener una longitud mínima de 8 caracteres ({8,}).
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    }


}