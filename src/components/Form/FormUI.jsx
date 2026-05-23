import './FormUI.css'

export const FormUI = ({ onSubmit, onChange, formData, errors }) => {
    return (
        <form className="formStyle" onSubmit={onSubmit}>
            <h2>Contactenos</h2>

            <div>
                <label htmlFor="name">Nombre:</label>
                <input id="name" name="name" value={formData.name} type="text" onChange={onChange} />

                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="lastName">Apellido:</label>
                <input id="lastName" name="lastName" value={formData.lastName} type="text" onChange={onChange} />

                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" value={formData.email} type="text" onChange={onChange} />

                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="message">Mensaje:</label>
                <input id="message" name="message" value={formData.message} type="text" onChange={onChange} />

                {errors.email && <p className="error">{errors.message}</p>}
            </div>

            <div>
                <button type="submit">Enviar Comentario</button>
            </div>
        </form>
    )
};