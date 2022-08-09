
import React, { useState } from 'react';
import messages from '../../../assets/local/messages';
import Button from '../button/Button';

export const SwitchLang = () => {
  const local = localStorage.getItem('lang') ?? 'ar'
  const [lang, setLang] = useState(local);

  return (
    <>
      {/* <LangContext.Provider value={lang}> */}
      <Button textColor="gray" borderColor="gray-light" bgColor="gray-lighter"
        shape="full-sm" extraClasses="me-4"
        onClick={setLang(local === 'ar' ? 'ar' : 'en')}>
        {lang === 'en' ? messages.en.langBtn : messages.ar.langBtn}
      </Button>
      {/* </LangContext.Provider> */}
    </>
  );
};

export default SwitchLang;


