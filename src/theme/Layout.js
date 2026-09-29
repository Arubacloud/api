import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from '@docusaurus/router';

const CustomScript = () => {
  const location = useLocation();
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window.__initialPageviewPath === location.pathname) {
      window.__initialPageviewPath = null;
      return;
    }
    window.dataLayer = window.dataLayer || [];
    if (typeof window.pushPageview === 'function') {
      window.pushPageview(location.pathname);
      window.__initialPageviewPath = null;
      return;
    }
    window.dataLayer.push({
      event: 'pageview',
      environment: 'prod', // es. dev
      platform: 'web', // es. web
      page_type: 'site',
      order_type: '',
      user: {},
      lang: (document.documentElement.lang || 'en').substring(0, 2),
      page: {
        url: location.pathname,
        title: document.title,
        referrer: document.referrer,
        cart_id: '',
      },
    });
  }, [location]); // Esegui di nuovo se cambia la posizione

  return null;
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
