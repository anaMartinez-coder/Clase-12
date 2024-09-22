import { createContext } from "react";
import Form from "../components/Form";
import ContainerCard from "../components/ContainerCard";

export const FormContext = createContext();
export const SocialContext = createContext();

function App() {
    const URL = "https://www.instagram.com/";

    return (
        <>
            <h1>Servicio Ambientales</h1>

            <FormContext.Provider value={{ url: URL }}>
                <Form />
            </FormContext.Provider>

            <SocialContext.Provider
                value={{
                    instagram: "https://www.instagram.com/",
                    facebook: "https://www.facebook.com/?locale=es_LA",
                }}
            >
                <ContainerCard
                    list={[
                        { title: "Saneamiento Ambiental", description: "Nombre: Ana, Apellido: Martinez, Matricula: 11111" },
                        { title: "Saneamiento Ambiental", description: "Nombre: Nestor, Apellido: Andrade, Matricula: 22222" },
                        { title: "Saneamiento Ambiental", description: "Nombre: Giorgio, Apellido: Andrade, Matricula: 3333" },
                        { title: "Saneamiento Ambiental", description: "Nombre: Francessco, Apellido: Andrade, Matricula: 44444" },
                    ]}
                />
            </SocialContext.Provider>
        </>
    );
}

export default App;