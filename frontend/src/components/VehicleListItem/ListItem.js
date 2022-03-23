const ListItem = ({vehicle}) => {

    const { make, model, year } = vehicle;

    return (
        <li className="list-group-item">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="http://via.placeholder.com/640x640" className="img-fluid rounded-start" alt="dummy" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{make}</h5>
                            <p className="card-text">{model}</p>
                            <p className="card-text">{year}</p>
                            <p className="card-text"><small className="text-muted">Status</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )

}

export default ListItem;