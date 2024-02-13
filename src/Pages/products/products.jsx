import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectedItemActions } from "../../Redux/slices/selectedItemSlice";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../Redux/slices/cartSlice";
import { CheckItemStatus } from "../../utlility";
import { Loader } from "../../Components/Icons/loader";

const Products = () => {
  const [listedProducts, setListedProducts] = useState([]);

  const products = useSelector((state) => state.products);
  const searchText = useSelector((state) => state.search);
  const isLoading = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchText !== "") {
      setListedProducts(() =>
        products?.filter((product) =>
          product.title
            .toLowerCase()
            .trim()
            .includes(searchText?.toLowerCase().trim())
        )
      );
    } else {
      setListedProducts([...products]);
    }
  }, [searchText, products]);

  const openItem = (product) => {
    if (product) {
      dispatch(selectedItemActions(product));
      navigate(`/products/${product.id}`);
    }
  };

  const addToCart = (e, product) => {
    e.stopPropagation();

    const itemStatus = CheckItemStatus(product.id);

    if (itemStatus.cart) {
      dispatch(addToCartAction(product));
    } else {
      dispatch(removeFromCartAction(product));
    }
  };

  return (
    <div className="home-page-wrapper">
      <div className="available-products">
        {listedProducts?.length > 0 &&
          listedProducts.map((product) => {
            return (
              <div key={product.id}>
                <Card
                  id={product.id}
                  imgSrc={product.image}
                  price={product.price}
                  // onAddToWishList={(e) => adToWishList(e, product)}
                  onAddToCart={(e) => addToCart(e, product)}
                  onClickCard={() => openItem(product)}
                  title={product.title}
                />
              </div>
            );
          })}
        {!isLoading && listedProducts?.length === 0 && (
          <div style={{ fontSize: "26px", fontWeight: 500 }}>
            Sorry, no results found!
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
