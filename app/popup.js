function byAlphabeticalURLOrder(tab1, tab2) {
  if (tab1.url < tab2.url) {
    return -1;
  } else if (tab1.url > tab2.url) {
    return 1;
  }
  return 0;
}

chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  tabs.sort(byAlphabeticalURLOrder);
  for (let i = 0; i < tabs.length; i++) {
    chrome.tabs.move(tabs[i].id, {index: i});
  }
});