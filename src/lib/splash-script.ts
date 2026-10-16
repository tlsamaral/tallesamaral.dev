/**
 * Runs inline in <head>, before first paint. Marks the page for the splash
 * curtain only when it is the first home-page visit of the session and
 * nothing argues against it. `?splash=1` forces it (useful for testing).
 */
export const SPLASH_SCRIPT = `(function(){try{
var d=document.documentElement,q=/[?&]splash=1/.test(location.search);
if(!/^\\/(pt|en)\\/?$/.test(location.pathname))return;
if(!q){
if(navigator.webdriver||/bot|crawl|spider|lighthouse|headless/i.test(navigator.userAgent))return;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
if(sessionStorage.getItem('splash'))return;
}
sessionStorage.setItem('splash','1');
d.setAttribute('data-splash','show');
}catch(e){}})();`
