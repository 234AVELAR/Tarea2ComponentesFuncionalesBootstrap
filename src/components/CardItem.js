function CardItem({title, description}) {
    return (
        <div className="card" style={{ width: "18rem", margin: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px"}}>
            <div className="card-body" style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
                <h5 className="card-title"> {title} </h5>
                <p className="card-text"> {description} </p>
                <button
                    className="btn btn-primary"
                    style={{ backgroundColor: "#007bff", border: "none", borderRadius: "5px", padding: "10px 15px"}}
                >
                    ¡Ingresa Ya!
                </button>
            </div>
        </div>
    );
}

export default CardItem;