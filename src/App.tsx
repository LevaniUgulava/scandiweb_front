import { Route, Routes } from 'react-router';
import Products from './components/product/products';
import CreateProductForm from './components/forms/createProductForm';

function App() {
    return (
       <>
        <Routes>
            <Route path="/" element={<Products />}/>
            <Route path="/create" element={<CreateProductForm />} />
        </Routes>
       </>
      );
}

export default App;
