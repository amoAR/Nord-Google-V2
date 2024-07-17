// ==UserScript==
// @name            Nord Google
// @description     A nord-rounded Google theme with neat urls
// @namespace       https://github.com/amoAR
// @match           https://www.google.com/*
// @grant           none
// @version         1.0
// @author          amoAR
// @icon            https://www.google.com/favicon.ico
// @updateURL       https://github.com/amoAR/Nord-Google-V2/raw/main/Nord_Google.user.js
// @downloadURL     https://github.com/amoAR/Nord-Google-V2/raw/main/Nord_Google.user.js
// @license         MIT
// ==/UserScript==

function findTerm(styleStr, term) {
  if (styleStr != null && styleStr != undefined)
    if (styleStr.includes(term))
      return styleStr;
  return '';
}

function addStyle(styleString) {
  const style = document.createElement("style");
  styleString.replace(";", "!important");
  style.textContent = styleString;
  document.head.append(style);
}

function setBackColor(element, varColor) {
  element.style.cssText = `background-color: var(${varColor})`;
  element.classList.add("customCssInjected");
}

function Run(observer) {
  if (observer !== undefined) {
    document.onreadystatechange = () => {
      if (document.readyState) {
        var elems = [...document.getElementsByTagName("*")];

        elems.forEach(el => {
          var content = el.innerText;

          switch (content) {
            case "بازخورد":
              el.style.display = "none";
              break;
          }
        })

        const valueFilterList = ["inherit", "initial", "revert", "revert-layer", "unset", ''];
        elems.filter((el) => (window.getComputedStyle(el).getPropertyValue("background-color")).length > 0).forEach(el => {
          var elStyle = window.getComputedStyle(el).getPropertyValue("background-color");

          if (elStyle != null && elStyle != undefined)
            if (!valueFilterList.indexOf(el) >= 0 && !el.classList.contains("customCssInjected")) {
              switch (elStyle) {
                case "rgb(31, 31, 31)":
                case "rgb(32, 33, 36)":
                case "rgb(255, 255, 255)":
                  setBackColor(el, '--my-primary-color');
                  break;
                case "rgb(32, 33, 36)":
                case "rgb(40, 41, 42)":
                case "rgb(45, 49, 51)":
                case "rgb(48, 49, 52)":
                case "rgb(49, 51, 53)":
                case "rgb(44, 48, 61)":
                case "rgb(36, 39, 41)":
                case "rgb(45, 49, 51)":
                case "rgb(86, 96, 100)":
                case "rgb(249, 249, 249)":
                  setBackColor(el, '--my-secondary-color');
                  break;
                case "rgb(23, 23, 23)":
                case "rgb(60, 64, 67)":
                case "rgb(138, 180, 248)":
                  setBackColor(el, '--my-tertiary-color');
                  break;
              }
            }
        });

        elems.filter((el) => (window.getComputedStyle(el).getPropertyValue("border-color")).length > 0).forEach(el => {
          var elStyle = window.getComputedStyle(el).getPropertyValue("border-color");

          if (elStyle != null && elStyle != undefined)
            if (!valueFilterList.indexOf(el) >= 0) {
              if (el.tagName !== "IFRAME") {
                switch (elStyle) {
                  case findTerm(elStyle, "255, 255, 255"):
                  case findTerm(elStyle, "154, 160, 166"):
                  case findTerm(elStyle, "49, 51, 53"):
                  case findTerm(elStyle, "60, 64, 67"):
                  case findTerm(elStyle, "68, 71, 70"):
                  case findTerm(elStyle, "5, 6, 7"):
                    el.style.cssText = 'border-color: var(--my-light-border-color) !important; background-color: var(--my-secondary-color); border-radius: 1rem;'
                    break;
                }
              }
            }
        });

        addStyle(`
          * {
            font-family: IRANSansXFaNum, iranyekan !important;
          }

          :root {
            --my-primary-color: #292d3e;
            --my-secondary-color: #383d51;
            --my-tertiary-color: rgba(27, 30, 39, .5);
            --my-light-border-color: rgba(255, 255, 255, .3);
          }

          .RNNXgb textarea:first-of-type {
            unicode-bidi: plaintext;
            direction: unset;
          }

          div[role="navigation"] div[role="list"] > div:last-child > g-popup > div[role="button"]:not(div + div) .customCssInjected,
          div[role="listitem"] a > div:first-of-type:not(div:has(> div:last-child#tools_1) + div *),
          div[role="listitem"] g-popup > div:first-of-type,
          a[href^="https://www.youtube.com"] *:not(div:has(> span)):not(span):not(div:has(> div > div > div > video) + div),
          form[role="search"] button
          {
            background: transparent !important;
          }
          
          #rc-anchor-container,
          .rc-anchor,
          div[aria-label="نتایج ویژه"] > div:first-of-type > div:first-of-type > div,
          div[aria-label="Featured results"] > div:first-of-type > div:first-of-type > div,
          #rcnt:has(div[aria-label="نتایج ویژه"]) > div:has(> div:first-of-type > div.kp-wholepage-osrp) span[role="tab"] > span:first-of-type,
          #rcnt:has(div[aria-label="Featured results"]) > div:has(> div:first-of-type > div.kp-wholepage-osrp) span[role="tab"] > span:first-of-type,
          #bres div[data-q] > div:first-of-type div[role="button"] > div:nth-child(2),
          div:has(> div:last-child#tools_1) + div a > div:first-of-type,
          div:has(> div > div > div > video) + div,
          hr + div:not(:has(a)),
          .b2Rnsc,
          div:has(> div div[data-gmc]) c-wiz > div:first-of-type,
          div:has(> div div[data-gmc]) c-wiz > div:first-of-type > div:first-child > div:first-child
          {
            background: var(--my-secondary-color) !important;
            background-color: var(--my-secondary-color) !important;
          }

          div[aria-label="نتایج ویژه"] > div:first-of-type > div:first-of-type > div,
          div[aria-label="Featured results"] > div:first-of-type > div:first-of-type > div
          {
            border-radius: 1.2rem;
          }

          /* g-loading-icon + div:not(:has()):first-of-type, */
          div[data-q] > div:first-of-type > div:first-of-type,
          div:has(> div[style*="border-top:none"]) > div:not(:first-child),
          .wp-ms + div div[role="heading"],
          .wp-ms + div div[role="heading"] > div,
          div[data-attrid*="awards"] > div,
          .rKnmn,
          a
          {
            border-color: var(--my-light-border-color) !important;
          }

          div[role="presentation"] > div[role="presentation"] ul[role="listbox"] > li[role="presentation"] {
            background: var(--my-tertiary-color);
            margin: 10px 20px 2px -10px;
          }

          #before-appbar div:has(> svg > polyline),
          .UUbT9 > div:last-child,
          div[role="button"]:has(> span > span > svg[viewBox="0 0 24 24"]),
          .g div > div:has(div[class*="feedback"]), div > div:has(> div[data-bkt="related_questions"]),
          .wp-ms + div > div:first-child > div:first-child > div:last-child:has(> .customCssInjected),
          div[data-maindata*="local_time"] + div[role="button"],
          g-section-with-header > #iur ~ div:has(span) > div:first-of-type,
          div.customCssInjected:has(a[tabindex="0"] + a[href^="https://support.google.com"]):first-of-type:not(#fbar),
          #rhsads ~ div[class="kp-wholepage-osrp"] > div:last-of-type #media_result_group,
          div.customCssInjected[data-phone_number],
          #main ~ *:not(div:has(> div div[data-gmc])),
          div:has(> div div[data-gmc]) c-wiz + div
          {
            display: none;
          }

          div[data-ly*="/map"] .customCssInjected:first-of-type div:has(> img):first-of-type {
            display: block !important;
          }

          block-component:has(h2[data-attrid="title"]) * {
            position: relative;
            z-index: 1;
          }

          div[class^="kp-wholepage kp-wholepage-osrp"] a[href^="/search?newwindow=1"]:not(:nth-child(1)),
          div[class^="kp-wholepage kp-wholepage-osrp"] > div:last-child,
          .kp-wholepage:has(> div:nth-child(3)) > div:last-child:has(div[role="button"]),
          #rcnt > div:first-of-type > div:last-of-type div:has(> g-snackbar) > div:last-of-type
          {
            visibility: hidden;
          }
          
          div[class^="kp-wholepage kp-wholepage-osrp"],
          .kp-wholepage:has(> div:nth-child(3))
          {
            padding: 5% 0 5% 5%;
            border-radius: 1rem !important;
            position: relative;
            right: 50%;
          }

          div[class="kp-wholepage-osrp"] {
            position: relative;
            right: -7%;
            margin-bottom: 1rem;
          }

          .rl_item div,
          block-component:has(h2[data-attrid="title"]) a[href^="/search?"] div[style]:last-of-type > div:has(span):not(:has(svg))  {
            border-radius: 0 !important;
          }

          div[role="complementary"]#rhs #rhsads ~ div[role="complementary"] {
            padding: 1.5rem;
            border-radius: 1rem !important;
            position: relative;
            left: 7%;
            margin-bottom: 2rem;
          }

          div[role="complementary"]#rhs #rhsads ~ div[role="complementary"]:nth-last-of-type(2) > div > div > div:nth-last-of-type(-n+2):not(div:has(*[data-attrid*="reviews"])) {
            display: none;
          }

          div[role="complementary"] hr.customCssInjected + div.customCssInjected,
          g-more-link > div.customCssInjected,
          g-left-button g-fab,
          g-right-button g-fab,
          div:has(> div div[data-gmc]) c-wiz div[role="listitem"] div:has(> svg),
          div:has(> div div[data-gmc]) c-wiz a[href^="/search?"] > div:first-child
          {
            background-color: var(--my-tertiary-color) !important;
          }

          div[class^="kp-wholepage kp-wholepage-osrp"] .customCssInjected,
          .customCssInjected:has(> a[role="link"] > g-more-link),
          div:has(h1 + a[href^="/search?"] + a[href^="/search?"]) > a[href^="/search?"] > div:first-of-type,
          div:has(h1 + a[href^="/search?"] + a[href^="/search?"]) > a[href*="maps.google.com"] > div:first-of-type,
          span[aria-label="More Filters"],
          g-menu-item a[role="menuitem"] > div,
          {
            background-color: transparent !important;
          }

          a[href="#"] div:has(> span > svg[viewBox="0 0 24 24"]:first-child),
          a[href="#"] div > span:first-of-type:has(> svg[viewBox="0 0 24 24"]:first-child)
          {
            background-color: transparent !important;
            margin-right: -6px;
          }

          a[href="#"] span > svg[viewBox="0 0 24 24"]:first-child {
            transform: rotate(45deg);
          }

          hr,
          g-inner-card,
          g-scrolling-carousel div[role="button"] > div:first-child
          {
            background-color: var(--my-secondary-color) !important;
            border-color: var(--my-light-border-color) !important;
          }

          div[role="complementary"] a.customCssInjected[href="#"]:has(> span),
          .ab_button.customCssInjected
          {
            background-image: -webkit-linear-gradient(top, var(--my-secondary-color), var(--my-tertiary-color));
            background-color: var(--my-secondary-color) !important;
            border-color: var(--my-light-border-color) !important;
          }

          g-inner-card:not(:has(g-image-section)) {
            padding: 1rem;
          }

          g-link ~ div > div:last-child {
            right: 1rem;
          }

          g-scrolling-carousel div:has(> div > img) {
            position: relative !important;
          }

          div[id="search"] div:not(a *):not(hr + div):not(div:has(> div > div > a[href^="/search?"])):not(div:has(> div > color-palette) *),
          .UUbT9 div[role="presentation"] + div[role="presentation"]
          {
            background-color: transparent !important;
          }

          div[role="contentinfo"] {
            position: relative;
            bottom: 0;
          }

          li:hover,
          #searchform > div:first-of-type
          {
            background: var(--my-primary-color) !important;
          }

          path[d="M7.41 2L6 3.41l6 6 6-6L16.59 2 12 6.58 7.41 2zM12 17.42L16.59 22 18 20.59l-6-6-6 6L7.41 22 12 17.42z"] {
            d: path('M16.59 9.41L18 8l-6-6-6 6 1.41 1.41L12 4.83l4.59 4.58zM12 19.17l-4.59-4.58L6 16l6 6 6-6-1.41-1.41L12 19.17z') !important;
          }

          a[href^="/search?"]:has(path[d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"]) {
            display: none;
          }

          polyline {
            fill: var(--my-secondary-color) !important;
            stroke: var(--my-light-border-color) !important;
          }
        `)
      }
    }

    try {
      const searchResultContainer = document.getElementById('search');
      observer.observe(searchResultContainer, {
        subtree: true,
        childList: true,
      });
    } catch { }
  }
}

const searchResultContainer = document.getElementById('search');
const observer = new MutationObserver(() => {
  Run(observer);
});

// -- redirect true query
var input = document.URL;

// - exceptions
let exceptions = 0;
if (input === "https://www.google.com/"
  || input === "https://images.google.com/"
  || input.match(/https:\/\/www.google.com\/sorry\/.*/) !== null
  || input.match(/https:\/\/www.google.com\/finance\/.*/) !== null
  || input.match(/https:\/\/www.google.com\/maps\/.*/) !== null) {
  exceptions = 1;
}

if (exceptions === 0) {
  // split url parts
  input = input.split("/", 4)[3];
  input = input.split("?", 2)[1];

  // get query
  var queryOption = input.split("&"); //client=safari | rls=x64 | q=lol...

  // split query options
  const queryOptionQ = queryOption.findIndex(x => x.match(/q=(.*)/) !== null);
  const queryOptionType = queryOption.findIndex(x => x.match(/tbm=(.*)/) !== null);
  const queryOptionTabs = queryOption.findIndex(x => x.match(/tbs=(.*)/) !== null);
  const queryOptionUdm = queryOption.findIndex(x => x.match(/udm=(.*)/) !== null);
  const queryOptionScrape = queryOption.findIndex(x => x.match(/si=(.*)/) !== null);
  const queryOptionStart = queryOption.findIndex(x => x.match(/start=([0-9]{2,5}$)/) !== null);

  // options concatenation
  const specialQuery = [queryOptionTabs, queryOptionUdm, queryOptionStart, queryOptionScrape];
  specialQuery.forEach((x) => {
    if (queryOption[x] !== null && queryOption[x] !== "") {
      if (queryOption[x] === undefined) {
        queryOption[x] = "";
      } else {
        queryOption[x] = "&".concat(queryOption[x]);
      }
    }
  });

  var resultQuery = "gl=US&";

  // check is change needed?
  if (queryOptionQ !== -1
    && queryOption[queryOptionQ] !== null
    && queryOption[queryOptionQ + 1] !== undefined
    && !queryOption[queryOptionQ + 1].includes("tbs=")
    && !queryOption[queryOptionQ + 1].includes("udm=")
    && !queryOption[queryOptionQ + 1].includes("start=")
    && !queryOption[queryOptionQ + 1].includes("si=")) {
    // - All results
    if (queryOptionType === -1) {
      resultQuery += queryOption[queryOptionQ];
    }

    // - Not all results
    if (queryOption[queryOptionType + 1] !== undefined && queryOptionType !== -1) {
      resultQuery += queryOption[queryOptionType] + "&" + queryOption[queryOptionQ];
    }

    // - Scrape result
    if (queryOptionScrape !== -1) {
      resultQuery += queryOption[queryOptionQ] + queryOption[queryOptionScrape];
    }

    // - Start from
    if (queryOptionStart !== -1) {
      resultQuery += queryOption[queryOptionStart];
    }

    // - Last check
    resultQuery.replace("#wxpd=browse:true", "").replace("#wxpd=browse:false", "");

    location.replace(("https://www.google.com/search?" + resultQuery + queryOption[queryOptionTabs] + queryOption[queryOptionUdm] + queryOption[queryOptionStart]).trim());
  }

  Run(observer);
}
Run(observer);