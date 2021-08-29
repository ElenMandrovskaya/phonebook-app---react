(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{122:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return f}));var r,a,o,c,i=n(3),u=n(5),s=u.a.form(r||(r=Object(i.a)(["\n"]))),d=u.a.label(a||(a=Object(i.a)(["\ndisplay: flex;\nflex-direction: column;\nmargin: 0 auto;\nwidth: 400px;\nmargin-bottom: 20px;\n"]))),l=u.a.input(o||(o=Object(i.a)(["\nheight: 40px;\nborder: 1px solid #ff0d82;\nborder-radius: 4px;\nfont-size: 16px;\nmargin-top: 10px;\n&:focus {\n    outline: none;\n    border: 1px solid #9e1878;\n}\n"]))),f=u.a.button(c||(c=Object(i.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n  width: 100px;\n  height: 30px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 9px;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #ff0d82;\n  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);\n  border: none;\n  padding: 5px;\n  margin: 0 auto;\n  font-weight: 600;\n"])))},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(52);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,a=n(3),o=n(5).a.h2(r||(r=Object(a.a)(["\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #9e1878;\n"]))),c=n(2);function i(e){var t=e.title;return Object(c.jsx)(o,{children:t})}},127:function(e,t,n){"use strict";var r,a=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&c.test(e)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};t.a=function(e,t,n){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return d(r)}},129:function(e,t,n){"use strict";var r=n(47),a=n(48);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),c=(0,r(n(49)).default)(o.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.default=c},130:function(e,t,n){"use strict";var r=n(47),a=n(48);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),c=(0,r(n(49)).default)(o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=c},131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(123),a=n(0),o=n(127),c=n(8),i=n(51),u=(n(70),n(122)),s=n(37),d=function(e){return e.contacts.items},l=function(e){return e.contacts.filter},f=Object(s.a)([d,l],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),b=n(38),p=n(129),h=n.n(p),j=n(2);function x(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],l=Object(a.useState)(""),f=Object(r.a)(l,2),p=f[0],x=f[1],m=Object(o.a)(),v=Object(o.a)(),O=Object(c.b)(),g=Object(c.c)(d),y=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":s(r);break;case"number":x(r);break;default:return}},w=function(){s(""),x("")};return Object(j.jsxs)(u.b,{onSubmit:function(e){e.preventDefault(),function(e,t){var n=e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));if(n)return i.b.info("Contact with such name already exists"),n}(g,n)||(O(b.a({name:n,number:p})),w())},children:[Object(j.jsxs)(u.d,{htmlFor:m,children:[" Name",Object(j.jsx)(u.c,{id:m,type:"text",name:"name",value:n,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter contact name",required:!0})]}),Object(j.jsxs)(u.d,{htmlFor:v,children:[" Phone Number",Object(j.jsx)(u.c,{id:v,type:"tel",name:"number",value:p,onChange:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter phone number",required:!0})]}),Object(j.jsxs)(u.a,{type:"submit",children:["Add contact ",Object(j.jsx)(h.a,{style:{fontSize:18,marginLeft:5}})]})]})}var m,v,O,g=n(3),y=n(5),w=y.a.ul(m||(m=Object(g.a)(["\ndisplay: flex;\nflex-direction: column;\n"]))),C=y.a.li(v||(v=Object(g.a)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nmargin-bottom: 25px;\nfont-size: 24px;\nwidth:400px;\n"]))),z=y.a.button(O||(O=Object(g.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n  width: 100px;\n  height: 30px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #ff0d82;\n  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);\n  border: none;\n  padding: 5px;\n \n"]))),S=n(130),A=n.n(S);function k(){var e=Object(c.b)(),t=Object(c.c)(f);return Object(a.useEffect)((function(){return e(b.b())}),[e]),Object(j.jsx)(w,{children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(j.jsxs)(C,{children:[r,": ",a,Object(j.jsxs)(z,{onClick:function(){return e(b.c(n))},children:["Delete ",Object(j.jsx)(A.a,{style:{fontSize:20,marginLeft:7}})]})]},n)}))})}var E=n(54);var V=Object(E.a)("input",{target:"e1h48ha01"})({name:"190v3h3",styles:"border:1px solid #ff0d82;border-radius:4px;font-size:16px;height:40px;margin-top:10px;&:focus{outline:none;border:1px solid #9e1878;}"}),L=Object(E.a)("label",{target:"e1h48ha00"})({name:"hfle0f",styles:"display:flex;flex-direction:column;width:400px;margin-bottom:20px"}),M=n(63);function R(){var e=Object(c.c)(l),t=Object(c.b)();return Object(j.jsxs)(L,{children:["Find contacts by name",Object(j.jsx)(V,{type:"text",value:e,onChange:function(e){return t(Object(M.b)(e.currentTarget.value))},placeholder:"Enter contact name"})]})}var D=n(124),T=n(50);function _(){return Object(j.jsxs)(T.a,{children:[Object(j.jsxs)(T.b,{children:[Object(j.jsx)(D.a,{title:"Add contact"}),Object(j.jsx)(x,{}),Object(j.jsx)(D.a,{title:"Search contact"}),Object(j.jsx)(R,{})]}),Object(j.jsxs)(T.b,{children:[Object(j.jsx)(D.a,{title:"Contacts list"}),Object(j.jsx)(k,{})]})]})}}}]);
//# sourceMappingURL=3.105060ab.chunk.js.map