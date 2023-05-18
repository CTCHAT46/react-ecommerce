import React, { useState, useEffect } from 'react'
import Features from '../Features/features'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            console.log(data, 'data')
            setCategories(data)
        }
        fetchCategories()
    }, [])

    if (categories.length === 0) return <div>Loading...</div>

    return (
        <Features cards={categories} />
    )
}

export default Categories