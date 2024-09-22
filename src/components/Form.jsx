import { useState, useContext } from "react";
import Input from "./input";

import { FormContext } from "../pages/App";

const Form = () => {
    const { url } = useContext(FormContext);

    const [odontologo, setOdontologo] = useState({ nombre: null, apellido: null, matricula: null });

    // Estados para el imput de nombre
    const [name, setName] = useState("");

    // Estados para el imput de apellido
    const [lastName, setLastName] = useState("");

    // Estados para el imput de matricula
    const [code, setCode] = useState("");

    const validationText = (text) => {
        const regex = /^[a-zA-Z\s]*$/; // ¿Cómo podemos agregar tildes en la expresión regular?
        return regex.test(text);
    };

    const validationCode = (code) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(code);
    };

    //* Validar formulario
    const handlerSubmit = (event) => {
        event.preventDefault();

        if (name === "" || name === null || !validationText(name)) {
            alert("El nombre es inválido");
            return;
        }

        if (lastName === "" || lastName === null || !validationText(lastName)) {
            alert("El apellido es inválido");
            return;
        }

        if (code === "" || code === null || !validationCode(code)) {
            alert("La matricula es inválida");
            return;
        }

        setOdontologo({
            nombre: name,
            apellido: lastName,
            matricula: code,
        });

        const fetchData = async (URL, odontologo) => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(odontologo),
            };

            const responde = await fetch(URL, options);
            const res = await responde.json();

            console.log(res);
        };

        fetchData(url, odontologo);
    };

    return (
        <form onSubmit={handlerSubmit}>
            <Input id="Nombre" typeData="Nombre" typeInput="text" autoComplete={"Nombre"} setState={setName} />

            <Input
                id="Apellido"
                typeData="Apellido"
                typeInput="text"
                autoComplete={"Apellido"}
                setState={setLastName}
            />

            <Input id="Codigo" typeData="Codigo" typeInput="text" setState={setCode} />

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;