import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import { Suspense, lazy } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ProductList = lazy(() => import('./components/ProductList'));
const Cart = lazy(() => import('./components/Cart'));
const SupportForm = lazy(() => import('./components/SupportForm'));
const FAQ = lazy(() => import('./components/faq'));

const App = () => {
  return (
    <DashboardLayout>
      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      }>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path='/panier' element={<Cart />} />
          <Route path='/support' element={<SupportForm />}/>
          <Route path='/faq' element={<FAQ />} />
        </Routes>
      </Suspense>
    </DashboardLayout>
  );
};

export default App;
