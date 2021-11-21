import {useEffect, useState} from "react";
import PageContainer from "../global/pageContainer";

const MostrarUsuarios = () => {

    const [allUsers, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://spaceweb-api-rest.herokuapp.com/users/findall")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err));
    }, []);

    const infoUsers =  allUsers.map((user) =>{

        return <p>{user.email}</p> 
    });  


    return (
        <PageContainer>
            {infoUsers}
        </PageContainer>
    )
}

export default MostrarUsuarios;
