"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[752],{752:function(e,a,r){r.r(a),r.d(a,{default:function(){return F}});var n=r(9439),s=r(7689),t=r(1413),i=r(5987),c=r(9007),o=r(2791);var l=function(e,a){var r=(0,o.useRef)(!0);(0,o.useEffect)((function(){if(!r.current)return e();r.current=!1}),a)},u=r(7904),d=r(9726),f=r(6445),v=r(1694),m=r.n(v),x=r(8580),b=r(162),N=r(184),h=["className","bsPrefix","as"],p=o.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,s=e.as,c=void 0===s?"div":s,o=(0,i.Z)(e,h);return n=(0,b.vE)(n,"carousel-caption"),(0,N.jsx)(c,(0,t.Z)({ref:a,className:m()(r,n)},o))}));p.displayName="CarouselCaption";var Z=p,y=["as","bsPrefix","className"],j=o.forwardRef((function(e,a){var r=e.as,n=void 0===r?"div":r,s=e.bsPrefix,c=e.className,o=(0,i.Z)(e,y),l=m()(c,(0,b.vE)(s,"carousel-item"));return(0,N.jsx)(n,(0,t.Z)((0,t.Z)({ref:a},o),{},{className:l}))}));j.displayName="CarouselItem";var C=j,g=r(1701),P=r(933),E=r(7202),w=r(4083),S=["defaultActiveIndex"],k=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];var I=o.forwardRef((function(e,a){var r=e.defaultActiveIndex,s=void 0===r?0:r,v=(0,i.Z)(e,S),h=(0,x.Ch)((0,t.Z)({defaultActiveIndex:s},v),{activeIndex:"onSelect"}),p=h.as,Z=void 0===p?"div":p,y=h.bsPrefix,j=h.slide,C=void 0===j||j,I=h.fade,R=void 0!==I&&I,T=h.controls,M=void 0===T||T,L=h.indicators,O=void 0===L||L,A=h.indicatorLabels,B=void 0===A?[]:A,D=h.activeIndex,H=h.onSelect,F=h.onSlide,K=h.onSlid,U=h.interval,X=void 0===U?5e3:U,$=h.keyboard,q=void 0===$||$,z=h.onKeyDown,G=h.pause,J=void 0===G?"hover":G,Q=h.onMouseOver,V=h.onMouseOut,W=h.wrap,Y=void 0===W||W,_=h.touch,ee=void 0===_||_,ae=h.onTouchStart,re=h.onTouchMove,ne=h.onTouchEnd,se=h.prevIcon,te=void 0===se?(0,N.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}):se,ie=h.prevLabel,ce=void 0===ie?"Previous":ie,oe=h.nextIcon,le=void 0===oe?(0,N.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}):oe,ue=h.nextLabel,de=void 0===ue?"Next":ue,fe=h.variant,ve=h.className,me=h.children,xe=(0,i.Z)(h,k),be=(0,b.vE)(y,"carousel"),Ne=(0,b.SC)(),he=(0,o.useRef)(null),pe=(0,o.useState)("next"),Ze=(0,n.Z)(pe,2),ye=Ze[0],je=Ze[1],Ce=(0,o.useState)(!1),ge=(0,n.Z)(Ce,2),Pe=ge[0],Ee=ge[1],we=(0,o.useState)(!1),Se=(0,n.Z)(we,2),ke=Se[0],Ie=Se[1],Re=(0,o.useState)(D||0),Te=(0,n.Z)(Re,2),Me=Te[0],Le=Te[1];(0,o.useEffect)((function(){ke||D===Me||(he.current?je(he.current):je((D||0)>Me?"next":"prev"),C&&Ie(!0),Le(D||0))}),[D,ke,Me,C]),(0,o.useEffect)((function(){he.current&&(he.current=null)}));var Oe,Ae=0;(0,g.Ed)(me,(function(e,a){++Ae,a===D&&(Oe=e.props.interval)}));var Be=(0,u.Z)(Oe),De=(0,o.useCallback)((function(e){if(!ke){var a=Me-1;if(a<0){if(!Y)return;a=Ae-1}he.current="prev",null==H||H(a,e)}}),[ke,Me,H,Y,Ae]),He=(0,c.Z)((function(e){if(!ke){var a=Me+1;if(a>=Ae){if(!Y)return;a=0}he.current="next",null==H||H(a,e)}})),Fe=(0,o.useRef)();(0,o.useImperativeHandle)(a,(function(){return{element:Fe.current,prev:De,next:He}}));var Ke=(0,c.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var a=getComputedStyle(e);return"none"!==a.display&&"hidden"!==a.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Fe.current)&&(Ne?De():He())})),Ue="next"===ye?"start":"end";l((function(){C||(null==F||F(Me,Ue),null==K||K(Me,Ue))}),[Me]);var Xe="".concat(be,"-item-").concat(ye),$e="".concat(be,"-item-").concat(Ue),qe=(0,o.useCallback)((function(e){(0,E.Z)(e),null==F||F(Me,Ue)}),[F,Me,Ue]),ze=(0,o.useCallback)((function(){Ie(!1),null==K||K(Me,Ue)}),[K,Me,Ue]),Ge=(0,o.useCallback)((function(e){if(q&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(Ne?He(e):De(e));case"ArrowRight":return e.preventDefault(),void(Ne?De(e):He(e))}null==z||z(e)}),[q,z,De,He,Ne]),Je=(0,o.useCallback)((function(e){"hover"===J&&Ee(!0),null==Q||Q(e)}),[J,Q]),Qe=(0,o.useCallback)((function(e){Ee(!1),null==V||V(e)}),[V]),Ve=(0,o.useRef)(0),We=(0,o.useRef)(0),Ye=(0,d.Z)(),_e=(0,o.useCallback)((function(e){Ve.current=e.touches[0].clientX,We.current=0,"hover"===J&&Ee(!0),null==ae||ae(e)}),[J,ae]),ea=(0,o.useCallback)((function(e){e.touches&&e.touches.length>1?We.current=0:We.current=e.touches[0].clientX-Ve.current,null==re||re(e)}),[re]),aa=(0,o.useCallback)((function(e){if(ee){var a=We.current;Math.abs(a)>40&&(a>0?De(e):He(e))}"hover"===J&&Ye.set((function(){Ee(!1)}),X||void 0),null==ne||ne(e)}),[ee,J,De,He,Ye,X,ne]),ra=null!=X&&!Pe&&!ke,na=(0,o.useRef)();(0,o.useEffect)((function(){var e,a;if(ra){var r=Ne?De:He;return na.current=window.setInterval(document.visibilityState?Ke:r,null!=(e=null!=(a=Be.current)?a:X)?e:void 0),function(){null!==na.current&&clearInterval(na.current)}}}),[ra,De,He,Be,X,Ke,Ne]);var sa=(0,o.useMemo)((function(){return O&&Array.from({length:Ae},(function(e,a){return function(e){null==H||H(a,e)}}))}),[O,Ae,H]);return(0,N.jsxs)(Z,(0,t.Z)((0,t.Z)({ref:Fe},xe),{},{onKeyDown:Ge,onMouseOver:Je,onMouseOut:Qe,onTouchStart:_e,onTouchMove:ea,onTouchEnd:aa,className:m()(ve,be,C&&"slide",R&&"".concat(be,"-fade"),fe&&"".concat(be,"-").concat(fe)),children:[O&&(0,N.jsx)("div",{className:"".concat(be,"-indicators"),children:(0,g.UI)(me,(function(e,a){return(0,N.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=B&&B.length?B[a]:"Slide ".concat(a+1),className:a===Me?"active":void 0,onClick:sa?sa[a]:void 0,"aria-current":a===Me},a)}))}),(0,N.jsx)("div",{className:"".concat(be,"-inner"),children:(0,g.UI)(me,(function(e,a){var r=a===Me;return C?(0,N.jsx)(w.Z,{in:r,onEnter:r?qe:void 0,onEntered:r?ze:void 0,addEndListener:P.Z,children:function(a,n){return o.cloneElement(e,(0,t.Z)((0,t.Z)({},n),{},{className:m()(e.props.className,r&&"entered"!==a&&Xe,("entered"===a||"exiting"===a)&&"active",("entering"===a||"exiting"===a)&&$e)}))}}):o.cloneElement(e,{className:m()(e.props.className,r&&"active")})}))}),M&&(0,N.jsxs)(N.Fragment,{children:[(Y||0!==D)&&(0,N.jsxs)(f.Z,{className:"".concat(be,"-control-prev"),onClick:De,children:[te,ce&&(0,N.jsx)("span",{className:"visually-hidden",children:ce})]}),(Y||D!==Ae-1)&&(0,N.jsxs)(f.Z,{className:"".concat(be,"-control-next"),onClick:He,children:[le,de&&(0,N.jsx)("span",{className:"visually-hidden",children:de})]})]})]}))}));I.displayName="Carousel";var R=Object.assign(I,{Caption:Z,Item:C}),T=r(9743),M=r(2677),L=r(2007),O=r.n(L),A=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],B=(O().string,O().bool,O().bool,O().bool,O().bool,o.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,s=e.fluid,c=void 0!==s&&s,o=e.rounded,l=void 0!==o&&o,u=e.roundedCircle,d=void 0!==u&&u,f=e.thumbnail,v=void 0!==f&&f,x=(0,i.Z)(e,A);return r=(0,b.vE)(r,"img"),(0,N.jsx)("img",(0,t.Z)((0,t.Z)({ref:a},x),{},{className:m()(n,c&&"".concat(r,"-fluid"),l&&"rounded",d&&"rounded-circle",v&&"".concat(r,"-thumbnail"))}))})));B.displayName="Image";var D=B,H=r(5070),F=function(){var e=(0,s.UO)(),a=(0,o.useState)(null),r=(0,n.Z)(a,2),t=r[0],i=r[1];return(0,o.useEffect)((function(){fetch("https://dummyjson.com/products/".concat(e.id)).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[e.id]),(0,N.jsxs)("div",{children:[null!==t&&(0,N.jsxs)(T.Z,{children:[(0,N.jsx)(M.Z,{xs:6,className:"bg-dark",children:(0,N.jsx)(R,{children:t.images.map((function(e){return(0,N.jsx)(R.Item,{children:(0,N.jsx)(D,{src:e,className:"w-100"})})}))})}),(0,N.jsx)(M.Z,{xs:6,children:(0,N.jsx)(H.Z,{children:(0,N.jsxs)(H.Z.Body,{children:[(0,N.jsx)(H.Z.Title,{children:t.title}),(0,N.jsxs)(H.Z.Subtitle,{className:"mb-2 text-muted",children:[t.category," Price: $",t.price]}),(0,N.jsxs)(H.Z.Subtitle,{className:"mb-2 text-muted",children:["Brand: ",t.brand]}),(0,N.jsxs)(H.Z.Text,{children:["Summary: ",t.description]})]})})})]}),null==t&&(0,N.jsx)("p",{children:"Loading..."})]})}},5070:function(e,a,r){r.d(a,{Z:function(){return X}});var n=r(1413),s=r(5987),t=r(1694),i=r.n(t),c=r(2791),o=r(162),l=r(184),u=["className","bsPrefix","as"],d=c.forwardRef((function(e,a){var r=e.className,t=e.bsPrefix,c=e.as,d=void 0===c?"div":c,f=(0,s.Z)(e,u);return t=(0,o.vE)(t,"card-body"),(0,l.jsx)(d,(0,n.Z)({ref:a,className:i()(r,t)},f))}));d.displayName="CardBody";var f=d,v=["className","bsPrefix","as"],m=c.forwardRef((function(e,a){var r=e.className,t=e.bsPrefix,c=e.as,u=void 0===c?"div":c,d=(0,s.Z)(e,v);return t=(0,o.vE)(t,"card-footer"),(0,l.jsx)(u,(0,n.Z)({ref:a,className:i()(r,t)},d))}));m.displayName="CardFooter";var x=m,b=r(6040),N=["bsPrefix","className","as"],h=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,u=e.as,d=void 0===u?"div":u,f=(0,s.Z)(e,N),v=(0,o.vE)(r,"card-header"),m=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,l.jsx)(b.Z.Provider,{value:m,children:(0,l.jsx)(d,(0,n.Z)((0,n.Z)({ref:a},f),{},{className:i()(t,v)}))})}));h.displayName="CardHeader";var p=h,Z=["bsPrefix","className","variant","as"],y=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,c=e.variant,u=e.as,d=void 0===u?"img":u,f=(0,s.Z)(e,Z),v=(0,o.vE)(r,"card-img");return(0,l.jsx)(d,(0,n.Z)({ref:a,className:i()(c?"".concat(v,"-").concat(c):v,t)},f))}));y.displayName="CardImg";var j=y,C=["className","bsPrefix","as"],g=c.forwardRef((function(e,a){var r=e.className,t=e.bsPrefix,c=e.as,u=void 0===c?"div":c,d=(0,s.Z)(e,C);return t=(0,o.vE)(t,"card-img-overlay"),(0,l.jsx)(u,(0,n.Z)({ref:a,className:i()(r,t)},d))}));g.displayName="CardImgOverlay";var P=g,E=["className","bsPrefix","as"],w=c.forwardRef((function(e,a){var r=e.className,t=e.bsPrefix,c=e.as,u=void 0===c?"a":c,d=(0,s.Z)(e,E);return t=(0,o.vE)(t,"card-link"),(0,l.jsx)(u,(0,n.Z)({ref:a,className:i()(r,t)},d))}));w.displayName="CardLink";var S=w,k=r(7472),I=["className","bsPrefix","as"],R=(0,k.Z)("h6"),T=c.forwardRef((function(e,a){var r=e.className,t=e.bsPrefix,c=e.as,u=void 0===c?R:c,d=(0,s.Z)(e,I);return t=(0,o.vE)(t,"card-subtitle"),(0,l.jsx)(u,(0,n.Z)({ref:a,className:i()(r,t)},d))}));T.displayName="CardSubtitle";var M=T,L=["className","bsPrefix","as"],O=c.forwardRef((function(e,a){var r=e.className,t=e.bsPrefix,c=e.as,u=void 0===c?"p":c,d=(0,s.Z)(e,L);return t=(0,o.vE)(t,"card-text"),(0,l.jsx)(u,(0,n.Z)({ref:a,className:i()(r,t)},d))}));O.displayName="CardText";var A=O,B=["className","bsPrefix","as"],D=(0,k.Z)("h5"),H=c.forwardRef((function(e,a){var r=e.className,t=e.bsPrefix,c=e.as,u=void 0===c?D:c,d=(0,s.Z)(e,B);return t=(0,o.vE)(t,"card-title"),(0,l.jsx)(u,(0,n.Z)({ref:a,className:i()(r,t)},d))}));H.displayName="CardTitle";var F=H,K=["bsPrefix","className","bg","text","border","body","children","as"],U=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,c=e.bg,u=e.text,d=e.border,v=e.body,m=void 0!==v&&v,x=e.children,b=e.as,N=void 0===b?"div":b,h=(0,s.Z)(e,K),p=(0,o.vE)(r,"card");return(0,l.jsx)(N,(0,n.Z)((0,n.Z)({ref:a},h),{},{className:i()(t,p,c&&"bg-".concat(c),u&&"text-".concat(u),d&&"border-".concat(d)),children:m?(0,l.jsx)(f,{children:x}):x}))}));U.displayName="Card";var X=Object.assign(U,{Img:j,Title:F,Subtitle:M,Body:f,Link:S,Text:A,Header:p,Footer:x,ImgOverlay:P})}}]);
//# sourceMappingURL=752.6d544af8.chunk.js.map