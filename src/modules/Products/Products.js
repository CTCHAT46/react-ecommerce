import React, { useState, useEffect } from 'react'
import ProductsCard from '../../components/ProductsCard/productsCard'
import Categories from '../../components/Categories/Categories';
const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <div>
            <Categories />
            <div className="flex flex-col text-center w-full mb-10">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
            </div>
            {
                products.length > 0 ?

                    <ProductsCard products={products} />
                    :
                    <div> Loading ...  </div>
            }

        </div>
    )
}

export default Products
