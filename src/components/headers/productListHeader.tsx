import { Link } from "react-router-dom";

interface props{
    onMassDelete: () => any
}

const ProductListHeader = ({ onMassDelete }: props) => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-semibold">
                    Product List
                </Link>
                <div>
                    <ul className="flex items-center space-x-4">
                        <li>
                            <Link to="/create" className="hover:text-gray-300 transition duration-150 ease-in-out">
                                ADD
                            </Link>
                        </li>
                        <button onClick={onMassDelete} id="delete-product-btn" className="hover:text-gray-300 transition duration-150 ease-in-out">
                            MASS DELETE
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default ProductListHeader;