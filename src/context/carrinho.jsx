import { createContext, useState } from "react";
export const context = createContext({});

export const  ContextProvider = ({ children }) => {
  const [comicsCart, setComicsCart] = useState([]);

  function handleAddItemToCart(comic, price,raridade) {
    const itemObject = [...comicsCart];
    const item = itemObject.find((comics) => comics.id === comic.id );
    console.log(comic)
    if (!item) {
      
      itemObject.push({
        id: comic.id,
        title: comic.title,
        price: price,
        description: comic.description,
        img: comic.thumbnail.path+'.'+comic.thumbnail.extension,
        quantidade: 1,
        raridade: raridade
      });
    } 
    setComicsCart(itemObject);
  }


  function aumentarItem(comic){
    const itemObject = [...comicsCart];
    const item = itemObject.find((comics) => comics.id === comic.id);

    if (item) {
      item.quantidade = item.quantidade + 1;
      setComicsCart(itemObject);
      console.log("ok")
  }

}

  function removerItem(id) {
    const itemObject = [...comicsCart];
    const item = itemObject.find((comics) => comics.id === id);

    if (item && item.quantidade > 1) {
      item.quantidade = item.quantidade - 1;
      setComicsCart(itemObject);
  
    } else {
      const arrayFiltered = itemObject.filter((comics) => comics.id !== id);
      setComicsCart(arrayFiltered);
    }
  } 

   function removalItem(id) {
    const itemObject = [...comicsCart];
    const arrayFiltered = itemObject.filter((comics) => comics.id !== id);

    setComicsCart(arrayFiltered);
    console.log("Item Removido")

  }

  
  function clearCart() {
    console.log(comicsCart)
    setComicsCart([]);
    console.log("Carrinho Limpo")

  }

  return (
    <context.Provider
      value={{
        comicsCart, setComicsCart,
        handleAddItemToCart,
        removerItem,
        removalItem,
        clearCart,
        aumentarItem
      }}
    >
      {children}
    </context.Provider>
  );
};