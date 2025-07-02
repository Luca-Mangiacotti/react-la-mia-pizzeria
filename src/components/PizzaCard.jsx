import { Link } from "react-router-dom";

export default function PizzaCard({
  isDetail,
  id,
  name,
  description,
  foto,
  price,
  ingredients,
}) {
  return (
    <div className="card my-5">
      <div className="card-header">
        {!isDetail && <h2>{name}</h2>}
        <div className="d-flex align-items-center">
          <div>
            <h3>Descrizione</h3>
            <p>{description}</p>
          </div>
        </div>
        <section className="mb-3">
          {ingredients && ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <div className={`badge ${isDetail ? "fs-3" : ""}`} key={index}>
                {ingredient.name}
              </div>
            ))
          ) : (
            <span>Nessun ingrediente</span>
          )}
        </section>
      </div>
      {isDetail ? (
        <div className="card-body">
          <p>{description}</p>

          <div className="w-1/2">
            <img
              className="w-full h-full object-contain p-4"
              src={foto}
              alt={name}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="card-footer d-flex align-items-center">
        <div className="mb-4"> {price} </div>
        {isDetail ? (
          <Link to="/" className="btn btn-secondary">
            {" "}
            Home{" "}
          </Link>
        ) : (
          <Link to="/pizzas/${id}" className="btn btn-primary">
            {" "}
            Dettaglio{" "}
          </Link>
        )}
      </div>
    </div>
  );
}
