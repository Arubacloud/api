function customEncodingPlugin(context, options) {
    return {
      name: 'docusaurus-custom-encoding-plugin',
      injectHtmlTags() {
        return {
          preBodyTags: [
            {
              tagName: 'noscript',
              innerHtml: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5LPKP8" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
              //innerHtml: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5LPKP8" height="0" width="0"></iframe>',
            },
          ],
          postBodyTags: [
            {
              tagName: 'script',
              attributes: {
                type: 'text/javascript',
                src: '/js/requestInterceptor.js',
              },
            }
          ],
        };
      },
    };
  }
  
  module.exports = customEncodingPlugin;
  