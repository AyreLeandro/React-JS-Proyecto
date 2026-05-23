export const validateForm = (data) => {
    const errors = {};

    if (!data.name) {
        errors.name = "Debe ingresar un nombre."
    }

    if (!lastName) {
        errors.lastName = "Debe ingresar un apellido"
    }

    if (!data.email) {
        errors.email = "Debe ingresar un correo"
    } else if (!data.email.includes('@')) {
        errors.email = "El correo debe ser valido"
    }

    if (!data.message) {
        errors.message = "El mensaje no puede estar vacio"
    }

    return errors;
}