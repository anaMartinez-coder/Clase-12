import { useState, useContext } from "react";
import PropTypes from "prop-types";

import { FormContext } from "../pages/App";

const Input = ({ id, typeData, typeInput, autoComplete, setState }) => {
    const { url } = useContext(FormContext);
    console.log("La url es: " + url);

    const [nameClass, setNameClass] = useState("");

    // Validar de tipo texto
    const validationText = (text) => {
        const regex = /^[a-zA-Z\s]*$/;
            return regex.test(text);
    };

    // Validar de tipo código
    const validationCode = (code) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(code);
    };

    // Inicializar el manejador de input
    /*     let handlerInput = () => {};

    if (typeData === "text") {
        handlerInput = (event) => {
            const dataInput = event.target.value;

            if (validationText(dataInput)) {
                setValue(dataInput);
                setNameClass("valid");
            } else {
                setNameClass("invalid");
            }
        };
    } else if (typeData === "code") {
        handlerInput = (event) => {
            const dataInput = event.target.value;

            if (validationCode(dataInput)) {
                setValue(dataInput);
                setNameClass("valid");
            } else {
                setNameClass("invalid");
            }
        };
    } */

    const handlerInput = (event) => {
        const dataInput = event.target.value;

        switch (typeData) {
            case "nombre":
                if (validationText(dataInput)) {
                    console.log(dataInput);
                    setState(dataInput);
                    setNameClass("valid");
                } else {
                    setNameClass("invalid");
                }

                break;

            case "Apellido":
                if (validationText(dataInput)) {
                    setState(dataInput);
                    setNameClass("valid");
                } else {
                    setNameClass("invalid");
                }

                break;

            case "codigo":
                if (validationCode(dataInput)) {
                    setState(dataInput);
                    setNameClass("valid");
                } else {
                    setNameClass("invalid");
                }

                break;

            // Caso hipotetico
            case "Contraseña":
                if (validationText(dataInput)) {
                    setState(dataInput);
                    setNameClass("valid");
                } else {
                    setNameClass("invalid");
                }

                break;

            default:
                break;
        }
    };

    return (
        <div>
            <label htmlFor={id}>{id}</label>

            <input
                className={nameClass}
                onChange={handlerInput}
                type={typeInput}
                name={id}
                autoComplete={autoComplete}
                required
            />
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    typeData: PropTypes.string.isRequired,
    typeInput: PropTypes.string.isRequired,
    autoComplete: PropTypes.string,
    setState: PropTypes.func.isRequired,
};

export default Input;