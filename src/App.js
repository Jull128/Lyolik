import { Layout } from 'antd';
import style from './style.module.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GeToday } from './components/GeToday/GeToday';
import { api } from './api';
import { useQuery } from '@tanstack/react-query';


function App() {
  const {
    data,
} = useQuery({
    queryKey: ['ticker'],
    queryFn: () => api.getTicker(),
})

const price = data?.regularMarketPrice.toFixed(2)

  return (
    <Layout className={style.layout}>
      <Header price={price}/>
      <GeToday />
      <Footer />
    </Layout>
  );
}


export default App;
