import { useState, useContext, useEffect } from "react";
import Mock from "../../context/Mock";
import Property from "../Property";
import CountrySelector from "../CountrySelector";
import "./UserSettings.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../redux/action/user/User";

const UserSettings = () => {

    //const mock = useContext(Mock);
    const stateUser = useSelector(state => state.user)
    const dispatch = useDispatch();
    const user = stateUser.details;

    const encodeImageFileAsURL = ({ target }) => {
        let file = target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            const result = {
                name: file.name,
                size: file.size,
                length: new Blob([reader.result]).size,
                pictureBase64: reader.result
            }
            processPictureBase64(result);
        }
        reader.readAsDataURL(file);
    }

    const processPictureBase64 = ({ name, size, length, pictureBase64 }) => {
        const maxLength = 5000;
        if (length > maxLength) {
            const width = 128;
            const height = 128;

            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;

            const img = new Image();
            img.onload = () => {
                context.drawImage(img, 0, 0, width, height);
                let reducedSize = maxLength + 1;
                let quality = 1.0;
                const qualityStep = -0.1;
                const qualityThreshold = 0.2;
                while (reducedSize > maxLength && quality >= qualityThreshold) {
                    pictureBase64 = canvas.toDataURL("image/jpeg", quality);
                    reducedSize = new Blob([pictureBase64]).size;
                    quality += qualityStep;
                }
                if (reducedSize <= maxLength) {
                    setEditedUserDetails({ ...editedUserDetails, pictureBase64 });
                }
            }

            img.src = pictureBase64;
            return;
        }
        setEditedUserDetails({ ...editedUserDetails, pictureBase64 });
    }

    const [editedUserDetails, setEditedUserDetails] = useState({
        ...stateUser.details
    });

    const onChange = ({ target: { value, id } }) => {
        setEditedUserDetails({
            ...editedUserDetails,
            [id]: value
        });
    };

    const onClick = () => {
        let dispatchDetails = {};
        for (let key of Object.keys(editedUserDetails)) {
            if (editedUserDetails[key] != stateUser.details[key]) {
                dispatchDetails = {
                    ...dispatchDetails,
                    [key]: editedUserDetails[key]
                };
            }
        }
        dispatch(updateUserDetails({ token: stateUser.token, details: dispatchDetails }));
    }

    return <div className="user-settings-view">
        <h2 className="user-settings-header">Change user settings</h2>
        <div className="user-settings-form">
            <Property name="First name" id="firstname" value={editedUserDetails.firstname} disabled={false} onChange={onChange} />
            <Property name="Last name" id="lastname" value={editedUserDetails.lastname} disabled={false} onChange={onChange} />
            <Property name="e-Mail" id="email" value={editedUserDetails.email} disabled={true} onChange={onChange} />
            <Property name="Phone number" id="phone" value={editedUserDetails.phone} disabled={false} onChange={onChange} />
            <Property name="Address" id="address" value={editedUserDetails.address} disabled={false} onChange={onChange} />
            <div className="profile-picture-container row">
                <label className="col-md-2" forHtml="userPictureInput">Profile Image:</label>
                <input className="col-md-7" type="file" id="userPictureInput" onChange={(e) => encodeImageFileAsURL(e)} />
            </div>
            <button className="user-settings-submit btn btn-light" type="submit" onClick={onClick}>
                Change User Settings
            </button>
        </div>
    </div>
}

export default UserSettings;