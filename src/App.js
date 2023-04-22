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
import { Outlet, useLocation } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';


function App() {
  const location = useLocation()

  return (
    <Layout className={style.layout}>
      <Header />
      <Content>
        <Outlet />
        {location.pathname === '/' &&
          <>
            <Propelling />
            <GeToday />
            <GePower />
            <TheRoad />
            <PowerSpotlight />
            <JoinTheTeam />
          </>
        }
      </Content>

      <Footer />
    </Layout>
  );
}


export default App;
