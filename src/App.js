import { Layout } from 'antd';
import style from './style.module.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GeToday } from './components/GeToday/GeToday';
import { GePower } from './components/GePower/GePower';
import { TheRoad } from './components/TheRoad/TheRoad';
import { PowerSpotlight } from './components/PowerSpotlight/PowerSpotlight';
import { JoinTheTeam } from './components/JoinTheTeam/JoinTheTeam';
import { Propelling } from './components/Propelling/Propelling';


function App() {

  return (
    <Layout className={style.layout}>
      <Header />
      <Propelling />
      <GeToday />
      <GePower />
      <TheRoad />
      <PowerSpotlight />
      <JoinTheTeam />
      <Footer />
    </Layout>
  );
}


export default App;
