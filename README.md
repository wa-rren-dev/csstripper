# CSStripper!

Bookmarklet for removing all CSS from a document.

To use, drag the link below to your bookmarks bar and click!

<a href="javascript:!(function(){const e=document.getElementsByTagName('*');for(let t of e)t.removeAttribute('style'),'style'===t.localName&&t.remove();for(i=0;i<document.styleSheets.length;i++)document.styleSheets.item(i).disabled=!0}());">CSStripper!</a>

This won't remove any CSS that's added to the DOM after the bookmark has been clicked.
