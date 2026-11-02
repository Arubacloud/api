(function (w, d) {
  w.dataLayer = w.dataLayer || [];
  var previousPageUrl = d.referrer;
  w.pushPageview = function (pathname) {
    var lang = (d.documentElement.lang || 'en').substring(0, 2);
    var pageview = {
      event: 'pageview',
      environment: 'prod',
      platform: 'web',
      page_type: 'site',
      order_type: '',
      user: {
        login_state: 'guest',
       },
      lang: lang,
      page: {
        url: w.location.href,
        title: d.title,
        referrer: previousPageUrl,
        cart_id: '',
      },
    };
    w.dataLayer.push(pageview);
    previousPageUrl = pageview.page.url;
    w.__initialPageviewPath = pathname || w.location.pathname;
  };

  
  w.pushPageview(w.location.pathname);
})(window, document);

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N6L83LFC');
    