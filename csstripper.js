(function() {
  const nodes = document.getElementsByTagName("*");
  for (let n of nodes) {
    n.removeAttribute("style");
    if (n.localName === "style") {
      n.remove();
    }
  }
  for (i = 0; i < document.styleSheets.length; i++) {
    void (document.styleSheets.item(i).disabled = true);
  }
})();
