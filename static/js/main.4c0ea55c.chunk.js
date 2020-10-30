(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),i=a(4),r=a.n(i),l=(a(13),a(7)),o=a(2),d=function(){return Object(s.jsx)("header",{className:"header page__header",children:Object(s.jsx)("div",{className:"header__logo"})})},m=a(5),j=a(6),u=new(function(){function e(t){Object(m.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(j.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCardList",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._getResponse)}},{key:"saveCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.placeName,link:e.placeUrl})}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponse)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponse(t)}))}},{key:"saveUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(this._getResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"c2262ae2-cc7e-47ac-904f-82f5dcb37778","Content-Type":"application/json"}}),_=function(e){var t=e.card,a=e.onCardClick;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("li",{className:"elements__element",children:[Object(s.jsx)("img",{src:t.link,alt:"",className:"elements__img",onClick:function(){a(t)}}),Object(s.jsxs)("div",{className:"elements__footer",children:[Object(s.jsx)("h2",{className:"elements__title",children:t.name}),Object(s.jsxs)("div",{className:"elements__like-container",children:[Object(s.jsx)("button",{className:"elements__like-btn"}),Object(s.jsx)("p",{className:"elements__like-counter",children:t.likes})]}),Object(s.jsx)("button",{className:"elements__del-btn"})]})]},t.id)})},h=function(){return Object(s.jsx)("div",{className:"spinner",children:" "})},b=function(e){var t=e.onEditAvatar,a=e.onEditProfile,c=e.onAddPlace,i=e.onCardClick,r=Object(n.useState)(""),l=Object(o.a)(r,2),d=l[0],m=l[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),p=b[0],O=b[1],x=Object(n.useState)(""),f=Object(o.a)(x,2),N=f[0],v=f[1],g=Object(n.useState)([]),k=Object(o.a)(g,2),y=k[0],C=k[1],E=Object(n.useState)(!1),S=Object(o.a)(E,2),I=S[0],L=S[1];return Object(n.useEffect)((function(){u.getUserInfo().then((function(e){m(e.name),O(e.about),v(e.avatar)})).catch((function(e){console.error(e)}))}),[]),Object(n.useEffect)((function(){L(!0),Promise.all([u.getInitialCardList()]).then((function(e){var t=e[0].map((function(e){return{id:e._id,name:e.name,link:e.link,likes:e.likes.length}}));L(!1),C(t)})).catch((function(e){console.error(e)}))}),[]),Object(s.jsxs)("main",{className:"page__main",children:[Object(s.jsxs)("section",{className:"profile page__profile",children:[Object(s.jsxs)("div",{className:"profile__info",children:[Object(s.jsx)("div",{onClick:t,className:"profile__photo-container",children:Object(s.jsx)("img",{className:"profile__photo",src:N,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(s.jsxs)("div",{className:"profile__heading",children:[Object(s.jsx)("h1",{className:"profile__title",children:d}),Object(s.jsx)("button",{onClick:a,className:"profile__edit-btn",type:"button","aria-label":"Edit"})]}),Object(s.jsx)("p",{className:"profile__subtitle",children:p})]}),Object(s.jsx)("button",{onClick:c,className:"profile__add-btn",type:"button","aria-label":"Add"})]}),Object(s.jsx)("section",{className:"page__elements",children:Object(s.jsx)("ul",{className:"elements",children:I?Object(s.jsx)(h,{}):y.map((function(e){return Object(s.jsx)(_,{card:e,onCardClick:i},e.id)}))})})]})},p=function(e){var t=e.copyright;return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("p",{className:"footer__copyright",children:t})})},O=function(e){var t=e.name,a=e.title,n=e.children,c=e.isOpen,i=e.onClose;return Object(s.jsx)("div",{className:"modal modal_type_".concat(t," ").concat(c?"modal_is-open":""),children:Object(s.jsxs)("div",{className:"modal__container",children:[Object(s.jsx)("span",{onClick:i,className:"modal__close-btn"}),Object(s.jsx)("h2",{className:"modal__title",children:a}),Object(s.jsx)("form",{className:"modal__form",name:t,action:"#",children:n})]})})},x=function(e){var t=e.card,a=e.onClose;return Object(s.jsx)("div",{className:"modal modal_type_preview ".concat(t.isImgOpen?"modal_is-open":""),children:Object(s.jsxs)("div",{className:"modal__preview-container",children:[Object(s.jsx)("span",{onClick:a,className:"modal__close-btn modal__close-btn_type_preview"}),Object(s.jsx)("img",{className:"modal__preview-img",src:t.link,alt:t.name}),Object(s.jsx)("p",{className:"modal__preview-subtitle",children:t.name})]})})};var f=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),r=Object(o.a)(i,2),m=r[0],j=r[1],u=Object(n.useState)(!1),_=Object(o.a)(u,2),h=_[0],f=_[1],N=Object(n.useState)({isImgOpen:!1}),v=Object(o.a)(N,2),g=v[0],k=v[1],y=function(){c(!1),j(!1),f(!1),k({isImgOpen:!1})};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"page",children:[Object(s.jsxs)("div",{className:"page__container",children:[Object(s.jsx)(d,{}),Object(s.jsx)(b,{onEditAvatar:function(){c(!0)},onEditProfile:function(){j(!0)},onAddPlace:function(){f(!0)},onCardClick:function(e){k(Object(l.a)({isImgOpen:!0},e))}}),Object(s.jsx)(p,{copyright:"\xa9 2020 Mesto Russia. \u0421\u0435\u0440\u0433\u0435\u0439 \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0446"}),Object(s.jsx)(O,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440?",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"url",className:"modal__input-txt modal__input-txt_type_edit-avatar",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u043e\u0435 \u0444\u043e\u0442\u043e"}),Object(s.jsx)("span",{className:"modal__input-error",id:"link-error"}),Object(s.jsx)("input",{type:"submit",className:"modal__sbmt-btn",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"save",disabled:!0})]}),isOpen:a,onClose:y}),Object(s.jsx)(O,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",className:"modal__input-txt modal__input-txt_type_name",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",autoComplete:"off"}),Object(s.jsx)("span",{className:"modal__input-error",id:"name-error"}),Object(s.jsx)("input",{type:"text",className:"modal__input-txt modal__input-txt_type_job",name:"about",placeholder:"\u0412\u0430\u0448\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f?",required:!0,minLength:"2",maxLength:"200",autoComplete:"off"}),Object(s.jsx)("span",{className:"modal__input-error",id:"about-error"}),Object(s.jsx)("input",{type:"submit",className:"modal__sbmt-btn",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"save",disabled:!0})]}),isOpen:m,onClose:y}),Object(s.jsx)(O,{name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"text",className:"modal__input-txt modal__input-txt_type_place-name",name:"placeName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30"}),Object(s.jsx)("span",{className:"modal__input-error",id:"placeName-error"}),Object(s.jsx)("input",{type:"url",className:"modal__input-txt modal__input-txt_type_img-url",name:"placeUrl",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(s.jsx)("span",{className:"modal__input-error",id:"placeUrl-error"}),Object(s.jsx)("input",{type:"submit",className:"modal__sbmt-btn",value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",name:"save"})]}),isOpen:h,onClose:y})]}),Object(s.jsx)(x,{card:g,onClose:y})]})})};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4c0ea55c.chunk.js.map