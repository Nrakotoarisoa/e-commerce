import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SupportForm from './components/SupportForm';
import FAQ from './components/faq';

const App = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path='/panier' element={<Cart />} />
        <Route path='/support' element={<SupportForm />}/>
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </DashboardLayout>
  );
};

export default App;
