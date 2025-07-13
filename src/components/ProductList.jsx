import React, { useState } from 'react';
import Products from './Products';
import { FiFilter } from 'react-icons/fi';



const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [priceFilter, setPriceFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  function handleAddToCart(name) {
    console.log("Added to cart:", name);
  }

  function searchContacts(value) {
    setSearchTerm(value);
    const filtered = Products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  }
  console.log(filteredProducts);

  function filterOut(value) {
    const filteredCategory = Products.filter((product) =>
      product.category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filteredCategory);
  }
  function filterByPrice(value) {
    setPriceFilter(value);
    const filtered = Products.filter((product) =>
      product.price <= parseInt(value)
    );
    setFilteredProducts(filtered);
  }
  function sortByPrice(order) {
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      else return b.price - a.price;
    });
    setFilteredProducts(sorted);
  }

  return (
    <div className='w-full h-screen  grid sm:grid-cols-1 md:grid-cols-[30%_70%] lg:grid-cols-[25%_75%] xl:grid-cols-[15%_85%] xxl:bg-black ' >
      <div className="justify-center gap-12 bg-slate-600 border border-slate-300 border-r-8">
        <div><input className='form-control h-2.5 sm:w-screen md:w-96 border-b-2 border-r-2 border-slate-400 shadow-xxl p-5 rounded-sm' type="text" placeholder='Search Products...' value={searchTerm} onInput={(e) => searchContacts(e.target.value)} ></input>
        </div>
        <div>
        <div>
          <div><label for="Filter" class=" my-1 p-3 flex justify-start items-center gap-3 font-medium text-xl text-white"><h4>Filter</h4> <FiFilter /></label></div>
          <select id="Category" class="bg-white m-1 border border-gray-300 shadow-md text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => filterOut(e.target.value)}>
            <option value='' disabled selected><b>Categories</b></option>
            <option value="Electronics">Electronics</option>
            <option value="Gents">Gents</option>
            <option value="Women">Women</option>
          </select>
        </div>
        <div>
          <select id="Category" class="bg-white m-1 border border-gray-300 shadow-md text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => filterByPrice(e.target.value)}>
            <option disabled selected>Filter by Price</option>
            <option value="500">Under ₹500</option>
            <option value="1000">Under ₹1000</option>
            <option value="2000">Under ₹2000</option>
            <option value="10000">Under ₹10000</option>
          </select>
        </div>
        <div>
          <select id="Category" class="bg-white m-1 border border-gray-300 shadow-md text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => sortByPrice(e.target.value)}>
            <option disabled selected>Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        </div>
      </div>
      <div className="p-10 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-5">

        {filteredProducts.map((product) => (
          <div key={product.id} class="flex flex-col bg-white shadow-xl border border-slate-200 rounded-lg my-6 w-fit h-fit">
            <div class="m-2.5 overflow-hidden border border-slate-100 shadow-sm rounded-md flex justify-center items-center">
              <img class="w-60 h-40 object-contain" src={product.image} alt="" />
            </div>
            <div class="p-6 text-center">
              <h4 class="mb-1 text-xl font-semibold text-slate-800">
                {product.name}
              </h4>
              <p class="text-sm font-semibold text-slate-500 uppercase">
                Price : &#8377;{product.price}
              </p>
              <p>Category:{product.category}</p>
              <p>Ratings :{product.rating}&#9733;</p>
            </div>
            <div class="flex justify-center p-6 pt-2 gap-7">
              <button onClick={() => handleAddToCart(product.name)} class="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}



      </div>
    </div>
  )
}



export default ProductList