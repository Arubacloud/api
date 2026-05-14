import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from '@docusaurus/router';

const CustomScript = () => {
  const location = useLocation();
  const currentLanguage = document.documentElement.lang;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'pageview',
        environment: 'ENVIRONMENT', // es. dev
        platform: 'web', // es. web
        page_type: 'panel', // es. site
        lang: currentLanguage.substring(0, 2),
        page: {
            url: location.pathname,
            title: document.title,
        },
    });


     // console.log('Custom script eseguito su', window.location.pathname);
    }
  }, [location]); // Esegui di nuovo se cambia la posizione

  return null; // Non serve restituire nulla qui
};

export default function CustomLayout(props) {
  return (
    <>
      <Layout {...props} />
      <BrowserOnly fallback={null}>
        {() => <CustomScript />}
      </BrowserOnly>
    </>
  );
}
