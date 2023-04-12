import { Layout } from 'antd';
import style from './style.module.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GeToday } from './components/GeToday/GeToday';


function App() {

  return (
    <Layout className={style.layout}>
      <Header />
      <GeToday />
      <Footer />
    </Layout>
  );
}


export default App;
