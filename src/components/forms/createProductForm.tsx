import { useState } from "react";
import ProductAddHeader from "../headers/productAddHeader";
import { handleFormChange, handleProductCreate, handleProductCreationCancel } from "../../helpers/helpers";
import { productType } from "../../types/types";
import { useNavigate } from "react-router";

const CreateProductForm = () => {
    const [formData, setFormData] = useState<productType>({
        sku: "",
        name: "",
        price: "",
        type: "",
        details: {}
    });
    const navigate = useNavigate();

    return (
        <>
            <ProductAddHeader onSave={() => handleProductCreate(formData,navigate)} onCancel={() => handleProductCreationCancel(setFormData, navigate)}/>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md" id="product_form">
                    <h2 className="text-2xl font-semibold text-center mb-6">Add Product</h2>
                    <div className="space-y-6" id="product_form">
                        <div>
                            <label htmlFor="sku" className="block text-sm font-medium text-gray-700">
                                SKU
                            </label>
                            <input
                                type="text"
                                value={formData.sku}
                                id="sku"
                                name="sku"
                                onChange={(e) => handleFormChange(e,setFormData)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => handleFormChange(e,setFormData)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price ($)
                            </label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                min={0}
                                value={formData.price}
                                onChange={(e) => handleFormChange(e,setFormData)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="productType" className="block text-sm font-medium text-gray-700">
                                Type
                            </label>
                            <select 
                                name="type" 
                                id="productType" 
                                required 
                                value={formData.type}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => handleFormChange(e,setFormData)}
                                >
                                <option value="">Choose an option</option>
                                <option value="DVD" id="DVD">DVD</option>
                                <option value="Furniture" id="Furniture">Furniture</option>
                                <option value="Book" id="Book">Book</option>
                            </select>
                        </div>
                        {formData.type === "DVD" && (
                            <div>
                                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                                    Size
                                    <span className="block text-[12px] font-thin">Please, provide Size in MB</span>
                                </label>
                                <input
                                    id="size"
                                    type="number"
                                    min={0}
                                    value={formData.details.size}
                                    name="size"
                                    onChange={(e) => handleFormChange(e,setFormData)}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        )}
                        {formData.type === "Furniture" && (
                            <div>
                                <div className="mb-4">
                                <span className="block text-[12px] font-thin">Please, provide dimensions in CM</span>
                                    <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                                        Height
                                    </label>
                                    <input
                                        id="height"
                                        name="height"
                                        value={formData.details.height}
                                        type="number"
                                        min={0}
                                        onChange={(e) => handleFormChange(e,setFormData)}
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="width" className="block text-sm font-medium text-gray-700">
                                        Width
                                    </label>
                                    <input
                                        id="width"
                                        name="width"
                                        value={formData.details.width}
                                        type="number"
                                        min={0}
                                        onChange={(e) => handleFormChange(e,setFormData)}
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="length" className="block text-sm font-medium text-gray-700">
                                        Length
                                    </label>
                                    <input
                                        id="length"
                                        name="length"
                                        value={formData.details.length}
                                        type="number"
                                        min={0}
                                        onChange={(e) => handleFormChange(e,setFormData)}
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                            </div>
                            
                        )}
                        {formData.type === "Book" && (
                            <div>
                                <span className="block text-[12px] font-thin">Please, provide Weight in KG</span>
                                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                                    Weight
                                </label>
                                <input
                                    id="weight"
                                    name="weight"
                                    value={formData.details.weight}
                                    type="number"
                                    min={0}
                                    onChange={(e) => handleFormChange(e,setFormData)}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateProductForm;