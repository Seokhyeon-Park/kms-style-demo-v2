import React, { useState } from 'react';
import style from '../../style/page/SearchPage.module.css';
import Header from '../component/Header';

function SearchPage() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={style.mainContainer}>
      <div className={style.searchContainer}>
        <div className={style.menubarContainer}>
          <Header />
          <div className={style.windowBtnContainer}>
            <div className={[style.windowBtn, style.maximize].join(' ')}></div>
            <div className={[style.windowBtn, style.minimize].join(' ')}></div>
            <div className={[style.windowBtn, style.close].join(' ')}></div>
          </div>
        </div>

        <div className={style.searchBarContainer}>
          <img src='/img/magnifier.png' className={style.magnifierIcon} style={{ opacity: isFocused ? 0 : 0.8 }} />
          <input
            className={style.searchBar}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;