/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const ProductsCard = ({ products = [] }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-15 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        products.map((product) => {
                            console.log(product, 'product')
                            const { id, title, price, description, category, image } = product
                            return (
                                <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt={title} className="object-contain object-center w-full h-full block cursor-pointer" src={image} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 font-bold uppercase">{category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                        <p className="mt-1">${price}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductsCard
