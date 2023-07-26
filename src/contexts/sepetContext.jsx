/*Context: uygulamada bir çok bileşenin ihtiyaç duyduğu verileri ve bu verileri değiştirmeye yarayacak fonksiyonları tutan
ve yalnızca kendisine abone olan bileşenlere bu verileri gönderen 
merkezi state yönetim aracı */

import { createContext, useState } from "react";

// context yapısının temelini oluşturma
export const SepetContext = createContext();
//sağlayıcıyı ve onun tuttuğu verileri tanımlama
export function SepetProvider({ children }) {
  const [items, setItems] = useState([]);
  //sepete yeni eleman ekleme fonksiyonu:
  const addToCart = (product) => {
    const foundItem = items.find((item) => item.id === product.id);
    if (foundItem) {
      //eleman bulunduysa miktarı artır
      product.amount++;
      //clone alma
      const clone =[...items];
      //düzenlediğimiz elemanın dizideki yerini bulma
      const index = clone.findIndex((i)=>i.id===product.id)
      //bu elemanı dizide güncelle
      clone[index]= product;
      //state'i güncelle
      setItems(clone);
    } else {
      //elea-man bulunmadıysa sepete ekle
      setItems([...items, product]);
    }
  };
  //sepetten eleman eksiltme
  const deleteFromKart = (product) => {
    //elemeanı dizide bulma
    const foundItem = items.find((item) => item.id === product.id);
    if (foundItem.amount > 1) {
      //miktarı 1'den fazlaysa miktarını azaltırız
      const cloneItems = [...items];
      //bize gelen ürünün miktarını azaltma
      product.amount--;
      //değiştireceğimiz elemanın dizideki sırasını bulma
      const index = cloneItems.findIndex((i) => i.id === product.id);
      //dizideki eski elemanı çıkartıp yenisini ekleme
      cloneItems[index] = product;
      //state güncelleme
      setItems(cloneItems);
    } else {
      const filteredArr = items.filter((item) => item.id !== product.id);
    }
    //state'i güncelleme
    setItems(filteredArr);
  };
  return (
    <SepetContext.Provider value={{ items, addToCart, deleteFromKart }}>
      {children}
    </SepetContext.Provider>
  );
}
