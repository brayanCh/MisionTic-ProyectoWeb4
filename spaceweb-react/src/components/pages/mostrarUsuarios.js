import {useEffect, useState} from "react";
import PageContainer from "../global/pageContainer";

const MostrarUsuarios = () => {

    const [allUsers, setUsers] = useState({});

    useEffect(() => {

        fetch("")
        .then(res => res.json())
        .then(data => something)
        .catch(err => console.log(err));
    }, []);

    return (
        <PageContainer>
            <TableUsers>

            </TableUsers>
        </PageContainer>
    )
}
