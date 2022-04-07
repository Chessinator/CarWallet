import { NavLink } from "react-router-dom";
import './ListItem.css'

const ListItem = ({ vehicle: { id, make, model, year, pictures } = {} }) => {
    return (
        <NavLink className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" to={`/vehicles/${id}`} role="tab" aria-controls="list-profile" >
            <li className="list-group-item" >
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4 image-preview">
                            <img src={pictures?.[0] ?? "http://via.placeholder.com/200x200"} className="img-fluid rounded-start" alt="dummy" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{make}</h5>
                                <p className="card-text">{model}</p>
                                <p className="card-text">{year}</p>
                                <p className="card-text"><small className="text">Status</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </NavLink>
    )
}

export default ListItem;