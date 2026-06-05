import './FormUI.css'

export const FormUI = ({ onChange, onSubmit, formData, errors }) => {
    return (
        <form className="formStyle" onSubmit={onSubmit}>
            <h2>Contactenos</h2>

            <div>
                <label htmlFor="name">Nombre </label>
                <input id="name" name="name" value={formData.name} type="text" onChange={onChange} />

                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="lastname">Apellido </label>
                <input id="lastname" name="lastname" value={formData.lastname} type="text" onChange={onChange} />

                {errors.lastname && <p className="error">{errors.lastname}</p>}
            </div>

            <div>
                <label htmlFor="email">Email </label>
                <input id="email" name="email" value={formData.email} type="text" onChange={onChange} />

                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="message">Mensaje </label>
                <input id="message" name="message" value={formData.message} type="text" onChange={onChange} />

                {errors.email && <p className="error">{errors.message}</p>}
            </div>

            <div>
                <button type="submit">Enviar Comentario</button>
            </div>
        </form>
    )
};