{% if page.url == '/404/' %}

//* Matomo *//

var _paq = window._paq = window._paq || [];
_paq.push(['setDocumentTitle',  '404/URL = ' +  encodeURIComponent(document.location.pathname+document.location.search) + '/From = ' + encodeURIComponent(document.referrer)]);
_paq.push(["setCookieDomain", "*.basspistol.com"]);
_paq.push(["setDomains", ["*.basspistol.org","*.basspistol.com","*.pauvrecoude.basspistol.com","*.paxnion.basspistol.com","*.radio.basspistol.com","*.sakrecoer.basspistol.com","*.sakrecoer.com","*.sethybowoy.basspistol.com","*.setto.basspistol.com","*.tfb.basspistol.com","*.v.basspistol.org"]]);
_paq.push(["enableCrossDomainLinking"]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://terminalnetwork.matomo.cloud/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '{{ site.matomo_site_id }}']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.src='https://cdn.matomo.cloud/terminalnetwork.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
})();
//* End Matomo *//

{% else %}


var _paq = window._paq = window._paq || [];
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.basspistol.com"]);
_paq.push(["setDomains", ["*.basspistol.org","*.basspistol.com","*.pauvrecoude.basspistol.com","*.paxnion.basspistol.com","*.radio.basspistol.com","*.sakrecoer.basspistol.com","*.sakrecoer.com","*.sethybowoy.basspistol.com","*.setto.basspistol.com","*.tfb.basspistol.com","*.v.basspistol.org"]]);
_paq.push(["enableCrossDomainLinking"]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://terminalnetwork.matomo.cloud/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '{{ site.matomo_site_id }}']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.src='https://cdn.matomo.cloud/terminalnetwork.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
})();

{% endif %}

// mautic

(function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://pr.basspistol.com/mtc.js','mt');

mt('send', 'pageview');