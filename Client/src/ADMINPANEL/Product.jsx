import React, { useState } from 'react';
import NavigationBS from './NavigationBS';
import pro from './pro.module.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');
  const [newProductImage, setNewProductImage] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleAddProduct = () => {
    if (!newProductName || !newProductPrice || !newProductCategory || !newProductImage) {
      alert('Please fill in all fields');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: newProductName,
      price: newProductPrice,
      category: newProductCategory,
      image: newProductImage,
    };

    setProducts([...products, newProduct]);
    setNewProductName('');
    setNewProductPrice('');
    setNewProductCategory('');
    setNewProductImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProductImage(URL.createObjectURL(file));
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleUpdateProduct = () => {
    if (!selectedProductId) {
      alert('Please select a product to update');
      return;
    }

    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === selectedProductId) {
          return {
            ...product,
            name: newProductName || product.name,
            price: newProductPrice || product.price,
            category: newProductCategory || product.category,
          };
        }
        return product;
      });
    });

    // Clear input fields after updating the product
    setNewProductName('');
    setNewProductPrice('');
    setNewProductCategory('');
    setSelectedProductId(null);
  };

  return (
    <>
      <NavigationBS />
      <div className={pro.mk}>
        <h1>Add New Product</h1>
        <div className={pro['add-product']}>
          <input
            type="text"
            placeholder="Enter product name"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter product price"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
          />
          <div className={pro.select}>
            <select
              value={newProductCategory}
              onChange={(e) => setNewProductCategory(e.target.value)}
            >
              <option>Select Category</option>
              <option>Cake Slices</option>
              <option>Cup Cake</option>
              <option>Drinks</option>
              <option>Donut</option>
              <option>Pan Cake</option>
            </select>
            <div className={pro.select_arrow}></div>
          </div>
          <input type="file" onChange={handleImageChange} />
          <button className={pro['add-btn']} onClick={handleAddProduct}>
            Add Product
          </button>
        </div>

        <div className={pro.container}>
          {products.map((product) => (
            <div className={pro['food-box']} key={product.id}>
              <div className={pro['food-pic']}>
                <img src={product.image} alt="" />
              </div>
              <div className={pro.description}>
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <div className={pro['food-btn']}>
                  <button
                    className={pro.update}
                    onClick={() => {
                      setSelectedProductId(product.id);
                      handleUpdateProduct();
                    }}
                  >
                    Update
                  </button>
                  <button
                    className={pro.delete}
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
