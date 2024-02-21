import React from "react"

interface CategoryProps {
    params: {
        categories: string[]
    };
    searchParams: {
        search?: string;
    }
}

export default function Category(props: CategoryProps) {
    console.log(props)
    const { categories } = props.params
    return(
        <h1>Categoria dinámica: {categories}</h1>
    )
}