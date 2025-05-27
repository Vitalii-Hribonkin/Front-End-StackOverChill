
import Currency from '../../components/Currency/Currency';
import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router';

const CurrencyTab = () => {
  const isTab = useMediaQuery({
    query: '(min-width: 768px)',
  });


   if (isTab) {
     return <Navigate to='/' replace />;
   }

  return <Currency />;
};

export default CurrencyTab;
