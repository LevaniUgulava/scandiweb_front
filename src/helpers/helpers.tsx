import { productType } from "../types/types";
import { NavigateFunction } from "react-router";

export const BASE_URL = "https://scandiwebb-testt.000webhostapp.com";

export const validateForm = (formData: productType) => {
    if (!formData.sku || !formData.name || !formData.price || !formData.type) {
        alert("Please fill all the required fields.");
        return false;
    }
    if (formData.type === "DVD" && !formData.details.size) {
        alert("Please provide the size for DVD.");
        return false;
    }
    if (formData.type === "Book" && !formData.details.weight) {
        alert("Please provide the weight for Book.");
        return false;
    }
    if (formData.type === "Furniture" && (!formData.details.height || !formData.details.width || !formData.details.length)) {
        alert("Please provide dimensions for Furniture.");
        return false;
    }

    return true;
};

export const fetchData = async (setProducts:React.Dispatch<React.SetStateAction<productType[]>>) => {
    try {
        const response = await fetch(`${BASE_URL}/`);
        if (response.ok) {
            const data = await response.json();
            setProducts(data);
        } else {
            console.error('Failed to fetch products:', response.status);
        }
    } catch (error) {
        console.log(error);
    }
};

export const handleToggleSelect = (id:number,setSelectedIds:React.Dispatch<React.SetStateAction<number[]>>) => {
    setSelectedIds(prev => {
        if (prev.includes(id)) {
            return prev.filter(item => item !== id);
        } else {
            return [...prev, Number(id)];
        }
    });
};

export  const handleMassDelete = async (selectedIds: number[],setSelectedIds:React.Dispatch<React.SetStateAction<number[]>>,setProducts:React.Dispatch<React.SetStateAction<any>>) => {
    const data = { ids: selectedIds };
    if(selectedIds.length === 0){
        alert("You should check at least one product to MASS DELETE!");
        return;
    }
    try {
        await fetch(`${BASE_URL}/delete`, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        setSelectedIds([]);
        fetchData(setProducts);
    } catch (error) {
        console.log(error);
        
    }
  };

  export const handleProductCreate = async (formData: productType, navigate: NavigateFunction) => {
    if (validateForm(formData)) {
        try {
            const response = await fetch(`${BASE_URL}/addproduct`, {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            console.log(response);
            

            if (!response.ok) {
                throw new Error('Failed to create product');
            }

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
};

export const handleFormChange = (e:any,setFormData: React.Dispatch<React.SetStateAction<productType>>) => {
    const { name, value } = e.target;
    if (name === "size" || name === "height" || name === "width" || name === "length" || name === "weight") {
        setFormData(prevState => ({
            ...prevState,
            details: {
                ...prevState.details,
                [name]: value
            }
        }));
    } else {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
};

export const handleProductCreationCancel = (setFormData:React.Dispatch<React.SetStateAction<productType>>,navigate:NavigateFunction) =>{
    setFormData({
        sku: "",
        name: "",
        price: "",
        type: "",
        details: {}
    })
    navigate('/');
}
