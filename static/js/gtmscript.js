(function (w, d) {
  w.dataLayer = w.dataLayer || [];
  w.pushPageview = function (pathname) {
    var lang = (d.documentElement.lang || 'en').substring(0, 2);
    w.dataLayer.push({
      event: 'pageview',
      environment: 'prod',
      platform: 'web',
      page_type: 'site',
      order_type: '',
      user: {},
      lang: lang,
      page: {
        url: pathname || w.location.pathname,
        title: d.title,
        referrer: d.referrer,
        cart_id: '',
      },
    });
    w.__initialPageviewPath = pathname || w.location.pathname;
  };

  // Deve essere eseguito prima dello snippet GTM, così il container trova i dati già nel dataLayer
  w.pushPageview(w.location.pathname);
})(window, document);

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N6L83LFC');
    