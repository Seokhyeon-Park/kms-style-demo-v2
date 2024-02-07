import style from '../../style/component/Header.module.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const toAppListPage = () => { navigate('/appList'); }

  return (
    <div className={style.Header} onClick={toAppListPage}>
      <img src="/img/pig.png" alt="" className={style.Logo} />
      <h1 className={style.CompanyName}>StupidPigs Platform</h1>
    </div>
  );
};

export default Header;