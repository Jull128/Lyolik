import { Layout } from 'antd';
import style from './style.module.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GeToday } from './components/GeToday/GeToday';
import { GePower } from './components/GePower/GePower';


function App() {

  return (
    <Layout className={style.layout}>
      <Header />
      <GeToday />
      <GePower />
      <Footer />
    </Layout>
  );
}


export default App;
