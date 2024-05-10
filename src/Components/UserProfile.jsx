import React, { useContext } from 'react';
import { mycontext } from '../App';

const UserProfile = () => {
    const {profile,setProfile} = useContext(mycontext)
    const handleSubmit=()=>{
        setProfile("Bala")
    }
    return (
        <div>
            <h1>UserProfile</h1>
            <h3>The name of the user is :{profile}</h3>
            <button onClick={handleSubmit}>Change Name</button>
        </div>
    );
};

export default UserProfile;