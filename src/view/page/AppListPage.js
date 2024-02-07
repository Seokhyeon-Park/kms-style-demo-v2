
import style from '../../style/page/AppListPage.module.css';
import Header from '../component/Header';
import AppIcon from '../component/AppIcon';
import { useNavigate } from "react-router-dom";

function AppListPage() {
  const navigate = useNavigate();
  const toSearchPage = () => { navigate('/search'); }

  return (
    <div className={style.mainContainer}>
      <div className={style.HeaderConatiner}>
        <Header />
      </div>

      <div className={style.AppsConatiner}>
          <AppIcon appName='Search' backgroundImage='/img/search.png' clickEvent={toSearchPage} />
          <AppIcon appName='Sync' backgroundImage='/img/sync.png' />
          <AppIcon appName='Settings' backgroundImage='/img/settings.png' />
      </div>
    </div>
  );
}

export default AppListPage;