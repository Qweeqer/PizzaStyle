"use strict";(self.webpackChunkpizzastyle=self.webpackChunkpizzastyle||[]).push([[1],{9894:function(t,n,r){r.d(n,{Z:function(){return o}});var e={button:"Button_button__wiIYs",width:"Button_width__WofPE Button_button__wiIYs Button_button__wiIYs",modal:"Button_modal__I2KnZ Button_button__wiIYs Button_button__wiIYs",chart:"Button_chart__PR8OG Button_button__wiIYs Button_button__wiIYs",width90:"Button_width90__pFijk Button_button__wiIYs Button_button__wiIYs"},i=r(184),o=function(t){var n=t.cn,r=t.type,o=void 0===r?"button":r,c=t.onClick,a=t.children,s=e[n]||e.button;return(0,i.jsx)("button",{type:o,className:s,onClick:c,children:a})}},8449:function(t,n,r){r.d(n,{Z:function(){return l}});var e=r(9434),i=r(4554),o=r(1872),c=r(9894),a="Counter_counterBox__w4Xc9",s="Counter_counterButtonBox__DPVO0",u=r(184);var l=function(t){var n=t.id,r=(0,e.I0)(),l=(0,e.v9)((function(t){return t.pizzaStyle.cart})).find((function(t){return t.id===n})),d=l?l.quantity:0,_=d>=1,h=function(){r((0,o.Xq)(n))};return(0,u.jsxs)(i.Z,{className:a,children:[d>0?(0,u.jsxs)(i.Z,{className:s,children:[(0,u.jsx)(c.Z,{onClick:function(){r(1===d?(0,o.h2)(n):(0,o.Od)(n))},children:"-"}),(0,u.jsx)("span",{children:d}),(0,u.jsx)(c.Z,{onClick:h,children:"+"})]}):(0,u.jsx)(c.Z,{onClick:h,children:"Add to Cart"}),_&&(0,u.jsx)(c.Z,{onClick:function(){r((0,o.h2)(n))},children:"Remove"})]})}},5001:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e=r(9434),i=r(1087),o=r(1614),c=r(890),a=r(3066),s=r(8449),u=r(7621),l=r(2169),d=r(9504),_=r(4554),h=r(184);var x=function(){return(0,e.v9)((function(t){return t.pizzaStyle.cart})).map((function(t){var n=t.id,r=t.title,e=t.description,i=t.price,o=t.image,x=t.quantity;return(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,h.jsxs)(u.Z,{sx:{height:"100%","&:hover":{boxShadow:"0px 10px 13px -7px #000000"}},children:[(0,h.jsx)(l.Z,{image:o,alt:r,title:r,sx:{height:400,"&:hover":{transform:"scale(1.05)"}}}),(0,h.jsxs)(d.Z,{sx:{height:100},children:[(0,h.jsx)(c.Z,{variant:"h6",component:"h3",children:r}),(0,h.jsx)(c.Z,{variant:"body2",children:e}),(0,h.jsxs)(c.Z,{variant:"body1",children:["Total price for ",x," pizzas: ",i*x," UAH"]})]}),(0,h.jsx)(_.Z,{children:(0,h.jsx)(s.Z,{id:n})})]})},n)}))},j=r(1872),p=r(9894),f={orderBox:"MakeOrder_orderBox__pLgpn",orderButtonBox:"MakeOrder_orderButtonBox__PHh+j"};function m(){var t=(0,e.I0)(),n=(0,e.v9)((function(t){return t.pizzaStyle.cart})),r=n.reduce((function(t,n){return t+n.price*n.quantity}),0),i=n.length>0;return(0,h.jsxs)(_.Z,{className:f.orderBox,children:[(0,h.jsxs)(c.Z,{variant:"h5",children:["Total Sum: ",r," UAH"]}),(0,h.jsxs)(_.Z,{className:f.orderButtonBox,children:[(0,h.jsx)(p.Z,{variant:"contained",color:"primary",onClick:function(){i&&t((0,j.dN)())},disabled:!i,children:"Place Order"}),!i&&(0,h.jsx)(c.Z,{color:"error",children:"Add items to cart to place an order."})]})]})}var Z={cartContainer:"Cart_cartContainer__3nSF+",linkToHome:"Cart_linkToHome__kLEy4"};function v(){var t=(0,e.v9)((function(t){return t.pizzaStyle.cart}));return(0,h.jsx)(o.Z,{className:Z.cartContainer,children:0===t.length?(0,h.jsxs)(c.Z,{variant:"h3",align:"center",children:["Please, choose pizza"," ",(0,h.jsx)(i.rU,{to:"/",className:Z.linkToHome,children:"here"})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.ZP,{container:!0,spacing:{xs:2,md:3},children:(0,h.jsx)(x,{})}),(0,h.jsx)(m,{})]})})}}}]);
//# sourceMappingURL=1.6a86cdf6.chunk.js.map