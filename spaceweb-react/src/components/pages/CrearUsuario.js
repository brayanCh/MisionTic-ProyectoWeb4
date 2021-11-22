import PageContainer from "../global/pageContainer";
import FormContainer from "../global/FormContainer" 
import InputText from "../global/inputText";
import StyledButton     from "../global/styledButton";import useInput from "./useInput"

const CrearUsuarios = () => {

    const [ email, setEmail ] = useInput(""); 
    const [ identification, setIdentification ] = useInput(0); 
    const [ completeName, setCompleteName] = useInput(""); 
    const [ passwdHash, setPasswdHash] = useInput(""); 
    const [ rol, setRol] = useInput(""); 

    return (
        <PageContainer>
            <FormContainer title="Crea un nuevo usuario" >

                <p>Correo electronico</p> 
                <InputText onChange={setEmail} val={email} />
    
                <p>Numero de identidad</p> 
                <InputText onChange={setIdentification} val={identification} />
    
                <p>Nombre Completo</p> 
                <InputText onChange={setCompleteName} val={completeName} />
    
                <p>Contraseña</p> 
                <InputText onChange={setPasswdHash} val={passwdHash} />
    
                <p>Rol o Papel</p> 
                <InputText onChange={setRol} val={rol} />
    
                <StyledButton>Envia los datos</StyledButton>
            </FormContainer>
        </PageContainer>
    )
}

export default CrearUsuarios;
