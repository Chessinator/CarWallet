import { NavLink, useParams } from "react-router-dom";
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './AddVehicleItem.css'


const AddVehicleItem = () =>
    <NavLink className="list-group-item list-group-item-action add-vehicle" id="list-profile-list" data-bs-toggle="list" to={`/vehicles/addVehicle`} role="tab" aria-controls="list-profile" >
        <li className="list-group-item" >
            <div className="card ">
                <div className="row g-0">
                    <i className="bi bi-plus-square "></i>
                </div>
            </div>
        </li>
    </NavLink>

export default AddVehicleItem;