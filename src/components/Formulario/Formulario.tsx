import "./Formulario.scss";
import React, { useState } from "react";

interface Movie {
  title: string;
  year: string;
  duration: string;
  image: string;
}

interface FormularioProps {
  movie: Movie;
  onSubmit: (valoracion: number) => void;
  onClose: () => void;
}

interface FormData {
  valoracion: string;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  email: string;
}

interface FormErrors {
  [key: string]: string;
}

const Formulario: React.FC<FormularioProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    valoracion: "",
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    email: "",
  });

  const [errores, setErrores] = useState<FormErrors>({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validarFormulario = () => {
    const nuevosErrores: FormErrors = Object.keys(formData).reduce((acc, campo) => {
      acc[campo] = formData[campo as keyof FormData].trim() ? "" : "Debe rellenarse";
      return acc;
    }, {} as FormErrors);

    setErrores(nuevosErrores);

    return !Object.values(nuevosErrores).some((error) => error);
  };

  const handleValorarClick = () => {
    if (validarFormulario()) {
      if (formData.valoracion !== "") {
        onSubmit(Number(formData.valoracion));
        onClose();
      } else {
        alert("Debes seleccionar una valoración");
      }
    }
  };

  return (
    <div className="form">
      <h2 className="form__title">2. Rellena el formulario</h2>

      <div className="form__container">
        <div className="form__user">
          <div>
            <label className="form__label">Nombre*</label>
            <input name="nombre" className="form__input" type="text" value={formData.nombre} onChange={handleChange} />
            {errores.nombre && <div className="form__error">{errores.nombre}</div>}
          </div>

          <div>
            <label className="form__label">Primer apellido*</label>
            <input name="primerApellido" className="form__input" type="text" value={formData.primerApellido} onChange={handleChange} />
            {errores.primerApellido && <div className="form__error">{errores.primerApellido}</div>}
          </div>

          <div>
            <label className="form__label">Segundo apellido*</label>
            <input name="segundoApellido" className="form__input" type="text" value={formData.segundoApellido} onChange={handleChange} />
            {errores.segundoApellido && <div className="form__error">{errores.segundoApellido}</div>}
          </div>
        </div>

        <div className="form__mail">
          <div>
            <label className="form__label">Email*</label>
            <input name="email" className="form__input--big" type="email" value={formData.email} onChange={handleChange} />
            {errores.email && <div className="form__error">{errores.email}</div>}
          </div>

          <div>
            <label className="form__label">Valoración*</label>
            <select name="valoracion" className="form__input" value={formData.valoracion} onChange={handleChange}>
              <option value=""></option>
              <option value="1">1 Estrella</option>
              <option value="2">2 Estrellas</option>
              <option value="3">3 Estrellas</option>
              <option value="4">4 Estrellas</option>
              <option value="5">5 Estrellas</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form__container-btn">
        <button className="form__btn" type="button" onClick={handleValorarClick}>
          Valorar
        </button>
      </div>
    </div>
  );
};

export default Formulario;
