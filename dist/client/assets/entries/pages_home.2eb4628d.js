import{r as l,f as y,j as t,I as U,a as Y,c as b,b as B,u as Z,o as q,d as G,l as J,A as K,e as Q,C as X,i as $}from"../chunks/chunk-32c49115.js";import{B as E,u as ee,a as I,T as C,I as W}from"../chunks/chunk-f7292fcf.js";import"../chunks/chunk-d6cd9d78.js";function te(e){const{viewBox:n="0 0 24 24",d:o,displayName:r,defaultProps:s={}}=e,i=l.Children.toArray(e.path),c=y((d,u)=>t.jsx(U,{ref:u,viewBox:n,...s,...d,children:i.length?i:t.jsx("path",{fill:"currentColor",d:o})}));return c.displayName=r,c}function ne(e){return l.Children.toArray(e).filter(n=>l.isValidElement(n))}var z=y((e,n)=>{const{icon:o,children:r,isRound:s,"aria-label":i,...c}=e,d=o||r,u=l.isValidElement(d)?l.cloneElement(d,{"aria-hidden":!0,focusable:!1}):null;return t.jsx(E,{padding:"0",borderRadius:s?"full":void 0,ref:n,"aria-label":i,...c,children:u})});z.displayName="IconButton";function re(e,n){return Array.isArray(e)?e.map(o=>o===null?null:n(o)):Y(e)?Object.keys(e).reduce((o,r)=>(o[r]=n(e[r]),o),{}):e!=null?n(e):null}var R=e=>t.jsx(b.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});R.displayName="StackItem";function oe(e){const{spacing:n,direction:o}=e,r={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":re(o,s=>r[s])}}var A=y((e,n)=>{const{isInline:o,direction:r,align:s,justify:i,spacing:c="0.5rem",wrap:d,children:u,divider:m,className:p,shouldWrapChildren:x,...f}=e,a=o?"row":r??"column",h=l.useMemo(()=>oe({spacing:c,direction:a}),[c,a]),g=!!m,j=!x&&!g,S=l.useMemo(()=>{const v=ne(u);return j?v:v.map((_,T)=>{const P=typeof _.key<"u"?_.key:T,F=T+1===v.length,V=x?t.jsx(R,{children:_},P):_;if(!g)return V;const M=l.cloneElement(m,{__css:h}),O=F?null:M;return t.jsxs(l.Fragment,{children:[V,O]},P)})},[m,h,g,j,x,u]),k=B("chakra-stack",p);return t.jsx(b.div,{ref:n,display:"flex",alignItems:s,justifyContent:i,flexDirection:a,flexWrap:d,gap:g?void 0:c,className:k,...f,children:S})});A.displayName="Stack";var N=y((e,n)=>t.jsx(A,{align:"center",...e,direction:"column",ref:n}));N.displayName="VStack";var w=y((e,n)=>t.jsx(A,{align:"center",...e,direction:"row",ref:n}));w.displayName="HStack";var D=y(function(n,o){const{children:r,placeholder:s,className:i,...c}=n;return t.jsxs(b.select,{...c,ref:o,className:B("chakra-select",i),children:[s&&t.jsx("option",{value:"",children:s}),r]})});D.displayName="SelectField";function se(e,n){const o={},r={};for(const[s,i]of Object.entries(e))n.includes(s)?o[s]=i:r[s]=i;return[o,r]}var L=y((e,n)=>{var o;const r=Z("Select",e),{rootProps:s,placeholder:i,icon:c,color:d,height:u,h:m,minH:p,minHeight:x,iconColor:f,iconSize:a,...h}=q(e),[g,j]=se(h,J),S=ee(j),k={width:"100%",height:"fit-content",position:"relative",color:d},v={paddingEnd:"2rem",...r.field,_focus:{zIndex:"unset",...(o=r.field)==null?void 0:o._focus}};return t.jsxs(b.div,{className:"chakra-select__wrapper",__css:k,...g,...s,children:[t.jsx(D,{ref:n,height:m??u,minH:p??x,placeholder:i,...S,__css:v,children:e.children}),t.jsx(H,{"data-disabled":G(S.disabled),...(f||d)&&{color:f||d},__css:r.icon,...a&&{fontSize:a},children:c})]})});L.displayName="Select";var ae=e=>t.jsx("svg",{viewBox:"0 0 24 24",...e,children:t.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),ie=b("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),H=e=>{const{children:n=t.jsx(ae,{}),...o}=e,r=l.cloneElement(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return t.jsx(ie,{...o,className:"chakra-select__icon-wrapper",children:l.isValidElement(n)?r:null})};H.displayName="SelectIcon";var le=te({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"});const ce=({onChange:e,currentValue:n})=>{const o=[{name:"Test Category 1",code:"1"},{name:"Test Category 1",code:"2"},{name:"Test Category 1",code:"3"},{name:"Test Category 1",code:"4"}];return t.jsx(I,{children:t.jsx(L,{placeholder:"Category",value:n,onChange:r=>{var s;e((s=r==null?void 0:r.target)==null?void 0:s.value)},children:o.map((r,s)=>t.jsx("option",{value:r.code,children:r.name},s))})})};function de(){var f;const[e,n]=l.useState(""),[o,r]=l.useState(""),[s,i]=l.useState(0),[c,d]=l.useState([]);l.useContext(K);const u=()=>{e.trim()!==""&&o.trim()!==""&&s>0&&(d(a=>[{category:e,expenseDescription:o,amount:s},...a]),n(""),r(""),i(0))},m=a=>{d(h=>h.filter((g,j)=>j!==a))},{user:p,logout:x}=Q();return t.jsxs(t.Fragment,{children:[t.jsxs(I,{position:"absolute",top:5,bgColor:"white",borderRadius:6,display:"flex",flexDir:"row",justifyContent:"space-between",alignItems:"center",h:12,p:4,minW:{base:"300px",sm:"500px"},children:[t.jsx(C,{children:((f=p==null?void 0:p.account)==null?void 0:f.name)||"Test user"}),t.jsx(E,{onClick:x,colorScheme:"teal",size:"sm",width:"auto",children:"Logout"})]}),t.jsxs(I,{p:4,mx:"auto",minH:"100px",minW:{base:"300px",sm:"500px"},bg:"white",rounded:"lg",shadow:"md",overflow:"hidden",children:[t.jsxs(N,{spacing:4,align:"flex-start",w:"100%",children:[t.jsxs(w,{spacing:4,w:"100%",children:[t.jsx(ce,{currentValue:e,onChange:a=>n(a)}),t.jsx(W,{type:"number",placeholder:"Amount",value:s,maxW:"70px",onChange:a=>i(Number(a.target.value))})]}),t.jsxs(w,{w:"100%",children:[t.jsx(W,{placeholder:"Item Name",value:o,onChange:a=>r(a.target.value)}),t.jsx(z,{isRound:!0,colorScheme:"teal","aria-label":"Add Item",onClick:u,children:t.jsx(le,{})})]})]}),t.jsxs(N,{mt:2,spacing:2,align:"flex-start",w:"100%",children:[c.length===0&&t.jsx(C,{fontSize:"md",color:"red.500",children:"No items recorded."}),c.map((a,h)=>(console.log("item",a),t.jsxs(w,{border:"2px solid black",borderRadius:"5px",w:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",px:2,children:[t.jsx(C,{fontWeight:"bold",children:a.expenseDescription}),t.jsx(C,{children:a.category}),t.jsxs(C,{children:[a.amount," ",a.currency]}),t.jsx(X,{onClick:()=>m(h)})]},h)))]})]})]})}const ue=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),fe=[{configName:"onRenderClient",importPath:"/renderer/+onRenderClient.tsx",isValueFile:!0,exportValues:$},{configName:"Page",importPath:"/pages/home/+Page.tsx",isValueFile:!0,exportValues:ue}],ge={onBeforeRenderEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},dataEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},hydrationCanBeAborted:{definedAt:{filePathToShowToUser:"/renderer/+config.ts",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:"true"},hooksTimeout:{definedAt:{filePathToShowToUser:"/renderer/+config.ts",fileExportPathToShowToUser:["default","hooksTimeout"]},valueSerialized:'{"data":{"error":30000,"warning":10000}}'}};export{fe as configValuesImported,ge as configValuesSerialized};
