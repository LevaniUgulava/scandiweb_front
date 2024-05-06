import { useEffect, useState } from "react";
import Product from "./product";
import {  fetchData, handleMassDelete } from "../../helpers/helpers";
import ProductListHeader from "../headers/productListHeader";

const Products = () => {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetchData(setProducts);
    }, []);


    return (
        <>
            <ProductListHeader onMassDelete={() => handleMassDelete(selectedIds,setSelectedIds,setProducts)} />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.length !== 0 ? (
                        products.map((product: any) => (
                            <Product key={product.id} product={product} setSelectedIds={setSelectedIds} />
                        ))
                    ) : (
                        <p>There are no products yet.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Products;