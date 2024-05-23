import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";

    const NavBar = () => {
return (
        <header>
            <div className="containerBrand">
            <Brand />
            </div>

            <div className="containerItemList">
            <ItemListContainer 
                itemUno = "Procesadores"
                itemDos = "Motherboards"
                itemTres = "Fuentes"
                itemCuatro = "PLacas de video"
                />
            </div>

            <div className="containerCart">
            <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;