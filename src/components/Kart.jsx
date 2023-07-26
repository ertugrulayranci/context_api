import { useContext } from "react";
import { SepetContext } from "../contexts/sepetContext";
const Kart = ({ id, name, image, price }) => {
  const dönenVeri = useContext(SepetContext);

  return (
    <div className="card">
      <img src={image} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{name}</h4>
          <p>{price}</p>
        </div>
        <button
          className="btn btn-outline-dark"
          onClick={() =>
            dönenVeri.addToCart({
              id,
              name,
              image,
              price,
              amount:1
            })
          }
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Kart;
