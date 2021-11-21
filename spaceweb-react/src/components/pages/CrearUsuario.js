import PageContainer from "../global/pageContainer";
import useInput from "./useInput"

const CrearUsuarios = () => {

    const [ email, setEmail ] = useInput(""); 
    const [ identification, setIdentification ] = useInput(0); 
    const [ completeName, setCompleteName] = useInput(""); 
    const [ passwdHash, setPasswdHash] = useInput(""); 
    const [ rol, setRol] = useInput(""); 

    return (
        <PageContainer>
            <FormContainer>

            </FormContainer>
        </PageContainer>
    )
}
