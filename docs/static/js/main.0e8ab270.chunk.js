(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{17:function(e,c,a){},18:function(e,c,a){},19:function(e,c,a){},20:function(e,c,a){},31:function(e,c,a){},32:function(e,c,a){},33:function(e,c,a){},34:function(e,c,a){},38:function(e,c,a){"use strict";a.r(c);a(17);var t=a(10),n=(a(18),a(19),a(20),a(7)),s=a(0),r=function(e){return Object(s.jsx)("li",{children:Object(s.jsxs)(n.b,{className:"link card",to:"/character/".concat(e.characterInfo.id),replace:!0,children:[Object(s.jsx)("div",{className:"card__container-img",children:Object(s.jsx)("img",{className:"card__img",src:e.characterInfo.image,alt:"".concat(e.characterInfo.name,"'s portrait")})}),Object(s.jsxs)("div",{className:"card__text",children:[Object(s.jsx)("h3",{className:"card__text-title",children:e.characterInfo.name}),Object(s.jsx)("p",{className:"card__text-paragraph",children:e.characterInfo.specie}),Object(s.jsx)("p",{className:"card__text-paragraph",children:e.characterInfo.planet})]})]})})},i=function(e){var c=e.charactersInfo.map((function(e){return Object(s.jsx)(r,{className:"characterCard",characterInfo:e},e.id)}));return Object(s.jsx)("section",{children:Object(s.jsx)("ul",{className:"charactersList",children:c})})},l=function(){return fetch("//rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,specie:e.species,planet:e.location.name,status:e.status,episodes:e.episode}}))}))},o=(a(31),function(e){return Object(s.jsxs)("label",{className:"form__label",htmlFor:"searchField",children:[Object(s.jsx)("input",{className:"form__input",type:"text",name:"searchField",id:"searchField",placeholder:"write a character name",onChange:function(c){e.handleFilter({key:"name",value:c.target.value.toUpperCase()})},value:e.name}),Object(s.jsx)("span",{className:"icon iconInput fas fa-undo",onClick:function(){e.handleReset()}})]})}),j=(a(32),function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("label",{className:"specie__title",children:"Species:"}),Object(s.jsxs)("select",{className:"specie__input",name:"specie",id:"specie",onChange:function(c){e.handleFilter({key:"specie",value:c.target.value})},value:e.specie,children:[Object(s.jsx)("option",{value:"all",children:"All"}),Object(s.jsx)("option",{value:"Alien",children:"Alien"}),Object(s.jsx)("option",{value:"Human",children:"Human"})]})]})}),d=(a(33),a.p+"static/media/logo.de13d484.png"),h=function(e){return Object(s.jsxs)("section",{children:[Object(s.jsx)("img",{src:d,alt:"logo Rick and Morty"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"formContainer",children:[Object(s.jsx)(o,{handleFilter:e.handleFilter,handleReset:e.handleReset,name:e.name}),Object(s.jsx)(j,{handleFilter:e.handleFilter,specie:e.specie})]})]})},m=a(1),p=a(2),u=(a(34),a.p+"static/media/CatNoWay.37d34f2e.gif"),b=function(e){return void 0===e.characterInfo?Object(s.jsx)("div",{className:"modal",children:Object(s.jsx)("div",{className:"modal__dialog",children:Object(s.jsxs)("div",{className:"modal__content",children:[Object(s.jsx)("header",{className:"modal__header",children:Object(s.jsx)(n.b,{to:"/",children:Object(s.jsx)("span",{className:"modal__close icon fas fa-undo"})})}),Object(s.jsx)("div",{className:"modal__text-error",children:Object(s.jsx)("p",{children:"Error: character not found"})}),Object(s.jsx)("div",{className:"modal__img",children:Object(s.jsx)("img",{className:"modal__img-error",src:u,alt:"Cat no way"})})]})})}):Object(s.jsx)("article",{className:"modal",children:Object(s.jsx)("div",{className:"modal__dialog",children:Object(s.jsxs)("div",{className:"modal__content",children:[Object(s.jsx)("header",{className:"modal__header"}),Object(s.jsx)("div",{className:"modal__img",children:Object(s.jsx)("img",{className:"modal__img-src",src:e.characterInfo.image,alt:"".concat(e.characterInfo.name,"'s portrait")})}),Object(s.jsxs)("div",{className:"modal__text",children:[Object(s.jsx)("h2",{children:e.characterInfo.name}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"modal__text--property",children:"Status: "}),Object(s.jsx)("span",{children:e.characterInfo.status})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"modal__text--property",children:"Species: "}),Object(s.jsx)("span",{children:e.characterInfo.specie})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"modal__text--property",children:"Origin: "}),Object(s.jsx)("span",{children:e.characterInfo.planet})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"modal__text--property",children:"Episodes: "}),Object(s.jsx)("span",{children:e.characterInfo.episodes.length})]})]}),Object(s.jsx)(n.b,{to:"/",children:Object(s.jsx)("span",{className:"modal__close icon iconDetail fas fa-undo"})})]})})})},x=function(){var e=Object(m.useState)([]),c=Object(t.a)(e,2),a=c[0],n=c[1],r=Object(m.useState)(""),o=Object(t.a)(r,2),j=o[0],d=o[1],u=Object(m.useState)("all"),x=Object(t.a)(u,2),O=x[0],f=x[1];Object(m.useEffect)((function(){l().then((function(e){return n(e)}))}),[]);console.log(O);var _=a.filter((function(e){return e.name.toUpperCase().includes(j)})).sort((function(e,c){return e.name>c.name?1:-1})).filter((function(e){return"all"===O||e.specie===O}));console.log(j),console.log(_);return Object(s.jsx)("div",{className:"app",children:Object(s.jsxs)(p.c,{children:[Object(s.jsx)(p.a,{exact:!0,path:"/",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("header",{className:"app__header",children:Object(s.jsx)(h,{handleFilter:function(e){"name"===e.key?d(e.value):"specie"===e.key&&f(e.value)},handleReset:function(){console.log("estoy borrando"),n(a),d(""),f("all")},name:j,specie:O})}),Object(s.jsx)("main",{className:"app__main",children:Object(s.jsx)(i,{charactersInfo:_})})]})}),Object(s.jsx)(p.a,{path:"/character/:id",render:function(e){var c=parseInt(e.match.params.id),t=a.find((function(e){return e.id===c}));return Object(s.jsx)(b,{characterInfo:t})}})]})})},O=a(16);a.n(O).a.render(Object(s.jsx)(n.a,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0e8ab270.chunk.js.map