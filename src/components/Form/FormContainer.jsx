import { useState } from "react"
import { FormUI } from "./FormUI"
import { ValidateForm } from "../../Utils/ValidateForm";

export const FormContainer = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;

        const updatedData = { ...formData, [name]: value }
        setFormData(updatedData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = ValidateForm(formData)

        if (Object.keys(error).length > 0) {
            setErrors(error)
        } else {
            // si no hay errores se resetea al estado "errors"
            setErrors({})
            console.log(formData)
            setFormData({ name: "", lastname: "", email: "", message: "" }) //reseteamos el formulario 
        }
    };

    return <FormUI onChange={handleChange} onSubmit={handleSubmit} formData={formData} errors={errors} />
};