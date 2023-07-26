import Kart from "../components/Kart";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "ceket",
      image: "https://picsum.photos/536/355",
      price: 120,
    },
    { id: 2, name: "sdsd", image: "https://picsum.photos/536/357", price: 125 },
    { id: 3, name: "ds", image: "https://picsum.photos/536/358", price: 130 },
    { id: 4, name: "sds", image: "https://picsum.photos/536/359", price: 150 },
    { id: 5, name: "dfd", image: "https://picsum.photos/536/360", price: 170 },
    {
      id: 6,
      name: "wqwqwq",
      image: "https://picsum.photos/536/356",
      price: 190,
    },
    {
      id: 7,
      name: "asasasa",
      image: "https://picsum.photos/536/361",
      price: 100,
    },
    {
      id: 8,
      name: "asass",
      image: "https://picsum.photos/536/362",
      price: 200,
    },
    {
      id: 9,
      name: "qwqwqwq",
      image: "https://picsum.photos/536/363",
      price: 300,
    },
  ];
  return (
    <div className="container d-flex flex-wrap justify-contemt-between gap-5 p-4">
      {/* //products dizisindeki her bir obje için ekrana kart basma */}
      {products.map((product) => (
        // ekrana bastığımız karta içeriği prop olarak gönderdik.
        <Kart {...product} />
      ))}
    </div>
  );
};
export default Products;
