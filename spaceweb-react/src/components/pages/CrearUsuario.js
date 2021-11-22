import PageContainer from "../global/pageContainer";
import InputText from "../global/inputText";
import useInput from "./useInput"

const CrearUsuarios = () => {

    const [ email, setEmail ] = useInput(""); 
    const [ identification, setIdentification ] = useInput(0); 
    const [ completeName, setCompleteName] = useInput(""); 
    const [ passwdHash, setPasswdHash] = useInput(""); 
    const [ rol, setRol] = useInput(""); 

    return (
        <PageContainer>
            <FormContainer title="Crea un nuevo usuario" >
                <InputText onChange={setEmail} val={email} />

            </FormContainer>
        </PageContainer>
    )
}
