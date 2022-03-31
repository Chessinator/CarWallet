import { useState, useContext } from "react";
import Mock from "../../context/Mock";
import "./UserSettings.css";
import Property from "../Property";

const UserSettings = () => {

    const mock = useContext(Mock);
    const [user, setUser] = useState({
        ...{
            address: {
                country: "",
                town: "",
                zip: "",
                street: ""
            }
        },
        ...mock.user
    });

    const onChange = ({ target: { value, id } }) => {
        const destUsr = destructureRecursive(id, value);
        setUser(
            {
                ...user,
                ...destUsr,
                address: {
                    ...user.address,
                    ...destUsr.address
                }}
        )
    };

    const destructureRecursive = (propName, value) => {
        const firstDotIndex = propName.indexOf(".");
        if (firstDotIndex < 0) {
            return { [propName]: value }
        }
        return { [propName.slice(0, firstDotIndex)]: destructureRecursive(propName.slice(firstDotIndex + 1), value) }
    }

    const onClick = () => {
        console.log("user:", user); // ADD REDUX ACTION
        mock.user = user; // TODO: REEEDDUUUXXX
    }

    return <div className="user-settings-view">
        <h2 className="user-settings-header">Change user settings</h2>
        <div className="user-settings-form">
            <Property name="firstname" value={user.firstname} disabled={false} onChange={onChange}/>
            <Property name="lastname" value={user.lastname} disabled={false} onChange={onChange}/>
            <Property name="email" value={user.email} disabled={false} onChange={onChange}/>
            <Property name="phonenumber" value={user.phonenumber} disabled={false} onChange={onChange}/>
            <div className="spacer"> </div>
            <Property name="address.country" value={user.address.country} disabled={false} onChange={onChange}/>
            <Property name="address.zip" value={user.address.zip} disabled={false} onChange={onChange}/>
            <Property name="address.town" value={user.address.town} disabled={false} onChange={onChange}/>
            <Property name="address.street" value={user.address.street} disabled={false} onChange={onChange}/>
            <button className="user-settings-submit btn btn-light" type="submit" onClick={onClick}>
                Change User Settings
            </button>
        </div>
    </div>
}

export default UserSettings;