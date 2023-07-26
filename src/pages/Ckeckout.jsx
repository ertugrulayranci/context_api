import { useContext } from "react";
import { SepetContext } from "../contexts/sepetContext";

const Ckeckout = () => {
  const { items, deleteFromKart, addToKart } = useContext(SepetContext);
  //reduce metodu 2 parametre alır.aldığı 2. parametre dizide döndüğü elemanlardır. Bu elemanın herhangi bir değerini aldığı birinci parametreye ekler.
  //işlemin sonucunda , koyup totalin ilk değerini vermemiz gerekiyor.

  const total = items.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
  return (
    <div className="d-grid gap-5 p-4">
      <h2>
        Ürünlerin Toplam Fiyatı{" "}
        <span className="text-success p-1">{total}</span>
        tl'dir{" "}
      </h2>
      {items.map((item) => (
        <div className="d-flex border shadow p-4 justify-content-between align-items-center">
          <img className="h-100 rounded" src={item.image} />
          <h1>{item.name}</h1>
          <h1 className="text-success">{item.price} tl</h1>
          <p className="fw-bold">{item.amount}</p>
          <button onClick={() => addToKart(item)}>Ekle</button>
          <button
            onClick={() => deleteFromKart(item)}
            className="button bg-danger"
          >
            {item.amount > 1 ? "Azalt" : "Kaldır"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Ckeckout;
