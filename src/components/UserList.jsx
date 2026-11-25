import { useState, useEffect } from "react";
import { getAllUsersAxios } from "../services/userApi.services";
import User from "./User";
import AddUser from "./AddUser";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getAllUsersAxios()
            .then(data => setUsers(data.users))
            .catch(error => setErrors(error));
    }, []);

    return (
        <>
            <AddUser />

            <h1>All the users</h1>
            {errors ? (
                <p>{errors.message}</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>

                    {users.map(item => (
                        <User key={item.id} data={item} />
                    ))}
                </div>
            )}
        </>
    );
}