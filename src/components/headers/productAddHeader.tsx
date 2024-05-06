import { Link } from "react-router-dom";

interface props {
    onSave:() => Promise<void>,
    onCancel:any
}

const ProductAddHeader = ({onSave, onCancel}:props) => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-semibold">
                    Product Add
                </Link>
                <div>
                    <ul className="flex items-center space-x-4">
                        <li>
                            <button onClick={onSave} className="hover:text-gray-300 transition duration-150 ease-in-out">
                                Save
                            </button>
                        </li>
                        <li>
                            <button onClick={onCancel} className="hover:text-gray-300 transition duration-150 ease-in-out">
                                Cancel
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default ProductAddHeader;