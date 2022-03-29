import { useState, useContext } from "react";
import Mock from "../../context/Mock";
import "./UserSettings.css";

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
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="firstname">
                    First name:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="firstname"
                    value={user.firstname}
                    placeholder="Please add a firstname"
                    onChange={onChange} />
            </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="lastname">
                    Last name:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="lastname"
                    value={user.lastname}
                    placeholder="Please add a lastname"
                    onChange={onChange} />
            </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="email">
                    e-Mail:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="email"
                    id="email"
                    value={user.email}
                    placeholder="Please add an e-Mail"
                    disabled />
            </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="phonenumber">
                    Phone number:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="phonenumber"
                    value={user.phonenumber}
                    placeholder="Please add a firstname"
                    onChange={onChange} />
            </div>
            <div className="spacer"> </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="address.country">
                    Country:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="address.country"
                    value={user.address.country}
                    placeholder="Please add a country"
                    onChange={onChange} />
            </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="address.zip">
                    ZIP:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="address.zip"
                    value={user.address.zip}
                    placeholder="Please add a ZIP"
                    onChange={onChange} />
            </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="address.town">
                    Town:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="address.town"
                    value={user.address.town}
                    placeholder="Please add a town"
                    onChange={onChange} />
            </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="address.street">
                    Street:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="address.street"
                    value={user.address.street}
                    placeholder="Please add a street"
                    onChange={onChange} />
            </div>
            <button className="user-settings-submit btn btn-light" type="submit" onClick={onClick}>
                Change User Settings
            </button>
        </div>
    </div>
}

export default UserSettings;