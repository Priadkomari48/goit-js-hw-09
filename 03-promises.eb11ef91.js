function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("7Y9D8");function l(e,n){const t=Math.random()>.3;return new Promise(((o,i)=>t?o({position:e,newDelay:n}):i({position:e,newDelay:n})))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();const t=n.currentTarget;let o=+t.delay.value;const i=+t.step.value,s=+t.amount.value;let u=0;for(let n=1;n<=s;n+=1){u=n;const t=o;o+=i;l(u,t).then((({position:n,newDelay:t})=>{setTimeout((()=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)}),t)})).catch((({position:n,newDelay:t})=>{setTimeout((()=>{e(r).Notify.warning(`❌ Rejected promise ${n} in ${t}ms`)}),t)}))}}));
//# sourceMappingURL=03-promises.eb11ef91.js.map
