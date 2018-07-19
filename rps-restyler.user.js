// ==UserScript==
// @name         Rock Paper Shotgun Restyler
// @namespace    https://github.com/Daiz/rps-restyler
// @version      1.0
// @description  Tweaks the styling of Rock Paper Shotgun to be more pleasant.
// @author       Daiz
// @match        https://www.rockpapershotgun.com/*
// @grant        none
// @run-at       document-start
// @updateURL    https://github.com/Daiz/rps-restyler/raw/master/rps-restyler.user.js
// @downloadURL  https://github.com/Daiz/rps-restyler/raw/master/rps-restyler.user.js
// ==/UserScript==

(function() {
    "use strict";
    const d = document;
    const style = d.createElement("style");
    const logo = `data:image/png;base64,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`;
    const green = "#009C7C";
    const purple = "#381A72";
    const logoPurple = "#7C5FB3";
    const searchPurple = "#322450";
    const searchPlaceholder = "#9E8DC4";
    const breakingPurple = "#564380";
    const red = "#E7387D";
    const white = "#FDFCFF";
    const maxWidth = "1440px";
    style.innerHTML = `
/* use a system font stack instead of custom web fonts */
* { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important; }
i.fa { font-family: FontAwesome !important; }

/* hide ad sections and adblock banner */
.leaderboards, .page>aside, .billboard-container, #recommendations, div[id^="sp_message"], div[class^=sp_veil] { display: none !important; }

/* hide the top spotlight */
.above .spotlight { display: none; }

/* fix page width */
.page { width: auto !important; }
html, body { overflow-x: hidden !important; }

/* restyle breaking section */
.breaking { background-color: ${breakingPurple} !important; padding: 0.5rem 1rem !important; font-size: 0.75rem !important; }
.breaking p:before { content: "RIGHT NOW:"; font-size: 0.75rem; font-weight: bold; color: white; margin-right: 0.65rem; }
.breaking p { padding: 0 !important; color: ${white} !important; max-width: ${maxWidth} !important; }

/* rework header */
.header-desktop a.logo {
  width: 17.5% !important;
  height: 8rem !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  display: block;
  background-image: url("${logo}");
}
.header-desktop .container { width: 100% !important; max-width: ${maxWidth} !important; }
.header-desktop a.logo img { display: none !important; }
.header-desktop { height: 10rem !important; padding: 1.25rem !important; background: #21133F; color: #eee !important; }
.header-desktop a { color: ${green} !important; }
.header-desktop a.button { color: white !important; }
.header-desktop .primary { font-size: .95rem !important; }
.header-desktop .secondary { font-size: .95rem !important; line-height: 1.2 !important; top: -.25rem !important; }
.header-desktop .search { width: 40% !important; top: 5.25rem !important; right: 0 !important; left: unset !important; }
.header-desktop .search input { background: ${searchPurple} !important; border: 0 !important; color: ${white} !important; font-size: 0.825rem !important; }
.header-desktop .search ::placeholder { color: ${searchPlaceholder}; }
.header-desktop .search .button { border-top-left-radius: 0; border-bottom-left-radius: 0; }
.header-desktop .account { right: 0 !important; width: auto !important; top: 0.5rem !important; border-color: ${logoPurple} !important; }
.header-desktop .support-us { right: -1.25rem !important; width: 14rem !important; top: -3.25rem !important; font-weight: bold !important; padding: 0 !important; }
.header-desktop .support-us .button { background-color: ${logoPurple} !important; border-radius: 0 !important; font-size: 0.75rem !important; padding: 0.5rem 0 !important; height: 2rem; }

/* tweak main content */
main { background-color: ${white} !important; padding-bottom: 0.75rem !important; }
main .above { padding-right: 0 !important; }
main .above .section-title { display: none !important; }
#comments { padding-left: 0 !important; }
.comments-container { margin: 0 auto !important; }

/* tweak and improve comment coloring */
.comment>.details .username { color: black !important; }
.comment>.details .button { border-color: ${green} !important; background-color: ${green} !important; }
.comment>.details .button.outline { background-color: transparent !important; color: ${green} !important; }
.comment.premium_user>.details .username, .comment.premium_user>.details .tag { color: ${purple} !important; }
.comment.premium_user>.details .button { border-color: ${purple} !important; background-color: ${purple} !important; }
.comment.premium_user>.details .button.outline { background-color: transparent !important; color: ${purple} !important; }
.comment.premium_user.administrator>.details .tag { display: none; }
.comment.administrator { border-color: ${red} !important; }
.comment.administrator>.details .username { color: ${red} !important; }
.comment.administrator>.details .username:after { content: "(RPS Staff)"; font-weight: normal; margin-left: 0.25rem; }
.comment.administrator>.details .button { border-color: ${red} !important; background-color: ${red} !important; }
.comment.administrator>.details .button.outline { background-color: transparent !important; color: ${red} !important; }


/* add very slightly rounded corners to blog images and buttons */
.blog-post .images img, .button { border-radius: 0.125rem; }
.blog-post.feature .images img { border-top-left-radius: 0; }

/* bolden tags */
p.tags a { font-weight: bold; }

/* increase "read more" button size and restyle it */
.blog-post .button:not(.outline), .spotlight-bar .button {
  font-size: 1rem !important;
  padding: 0.6rem !important;
  font-weight: 500 !important;
  width: 100%;
  transition: background-color 0.25s, color 0.25s;
  background-color: #FDFCFF !important;
  border: 0.05rem solid ${green};
  color: ${green} !important;
}
.blog-post .button:not(.outline):hover, .spotlight-bar .button:hover { background-color: ${green} !important; color: white !important; }
.blog-post.feature .button:not(.outline) { border-color: ${red}; color: ${red} !important; }
.blog-post.feature .button:not(.outline):hover { background-color: ${red} !important; color: white !important; }


/* add bigger divider between blog posts */
.blog-post { border-bottom: 1px solid ${green} !important; }
.blog-post .tags:after { display: none !important; }
.blog-post.feature { border-color: ${red} !important; }
.blog-post:last-of-type { border: none !important; }

/* add small FEATURE text under featured article logo */
@media screen and (min-width: 1025px) {
.blog-post.feature:before {
  content: "FEATURE";
  position: absolute;
  right: 100%;
  top: 4rem;
  padding: 0.1rem 0.05rem;
  color: ${red};
  font-weight: bold;
}
}

/* various tweaks to below post section */
.have-you-played-widget .button {
  font-size: 1rem !important;
  font-weight: 500rem !important;
  padding: 0.6rem !important;
}
.below { margin-top: 1rem !important; padding-top: 1rem !important; }
.below .section-title { font-size: 1.25rem !important; }
.spotlight-bar .spotlight-bar-item { min-height: 10rem !important; }
.spotlight-bar { margin-bottom: 1rem !important; padding-bottom: 1rem !important; }
.spotlight-bar .button { margin-top: 1rem !important; }
    `;
    d.head.appendChild(style);
})();