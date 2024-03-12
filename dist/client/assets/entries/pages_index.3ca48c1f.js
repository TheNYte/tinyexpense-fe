import{f as P,j as e,r as x,q as L,a as k,s as N,F as R,i as V}from"../chunks/chunk-9d3c0ac7.js";import{F as _,a as z,b as F,v as O,c as S,d as I,e as B,V as U}from"../chunks/chunk-6121774a.js";import{a as b,F as y,I as E,B as D,T as M}from"../chunks/chunk-b18ede8a.js";import"../chunks/chunk-d6cd9d78.js";var j=P(function(o,i){const{htmlWidth:r,htmlHeight:a,alt:t,...d}=o;return e.jsx("img",{width:r,height:a,ref:i,alt:t,...d})});j.displayName="NativeImage";function W(s){const{loading:o,src:i,srcSet:r,onLoad:a,onError:t,crossOrigin:d,sizes:g,ignoreFallback:f}=s,[c,h]=x.useState("pending");x.useEffect(()=>{h(i?"loading":"pending")},[i]);const l=x.useRef(),p=x.useCallback(()=>{if(!i)return;u();const n=new Image;n.src=i,d&&(n.crossOrigin=d),r&&(n.srcset=r),g&&(n.sizes=g),o&&(n.loading=o),n.onload=m=>{u(),h("loaded"),a==null||a(m)},n.onerror=m=>{u(),h("failed"),t==null||t(m)},l.current=n},[i,d,r,g,a,t,o]),u=()=>{l.current&&(l.current.onload=null,l.current.onerror=null,l.current=null)};return L(()=>{if(!f)return c==="loading"&&p(),()=>{u()}},[c,p,f]),f?"loaded":c}var q=(s,o)=>s!=="loaded"&&o==="beforeLoadOrError"||s==="failed"&&o==="onError";function H(s,o=[]){const i=Object.assign({},s);for(const r of o)r in i&&delete i[r];return i}var T=P(function(o,i){const{fallbackSrc:r,fallback:a,src:t,srcSet:d,align:g,fit:f,loading:c,ignoreFallback:h,crossOrigin:l,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:u,...n}=o,m=r!==void 0||a!==void 0,v=c!=null||h||!m,C=W({...o,crossOrigin:l,ignoreFallback:v}),A=q(C,p),w={ref:i,objectFit:f,objectPosition:g,...v?n:H(n,["onError","onLoad"])};return A?a||e.jsx(k.img,{as:j,className:"chakra-image__placeholder",src:r,...w}):e.jsx(k.img,{as:j,src:t,srcSet:d,crossOrigin:l,loading:c,referrerPolicy:u,className:"chakra-image",...w})});T.displayName="Image";const $=s=>{const{login:o}=N(),i=async r=>{await o(r.email,r.password)};return e.jsxs(b,{m:8,bgColor:"white",display:"flex",flexDir:"column",gap:4,children:[e.jsx(_,{initialValues:{email:"",password:""},onSubmit:i,children:()=>e.jsxs(z,{children:[e.jsx(F,{name:"email",validate:O,children:({field:r,form:a,meta:t})=>e.jsxs(y,{isInvalid:a.errors.email&&a.touched.email,children:[e.jsx(S,{children:"Email Address"}),e.jsx(E,{...r,placeholder:"domipapa@tinyexpense.com",mb:t.error?0:6}),t.error&&e.jsx(I,{children:a.errors.email})]})}),e.jsx(F,{name:"password",validate:B,children:({field:r,form:a,meta:t})=>e.jsxs(y,{mt:2,isInvalid:a.errors.password&&a.touched.password,children:[e.jsx(S,{children:"Password"}),e.jsx(E,{type:"password",...r,placeholder:"********",mb:t.error?0:6}),t.error&&e.jsx(I,{children:a.errors.password})]})}),e.jsx(D,{mt:4,background:"linear-gradient(to right, #ff5757, #8c52ff)",color:"white",_hover:{background:"linear-gradient(to right, #8c52ff, #ff5757)",color:"white"},type:"submit",width:"full",children:"Login"})]})}),e.jsx(b,{mt:2,textAlign:"center",children:e.jsx(U,{href:"/register",children:e.jsx(M,{backgroundImage:"linear-gradient(to right, #ff5757, #8c52ff)",color:"transparent",style:{WebkitBackgroundClip:"text"},children:"Don't have an account? Register here."})})})]})};function G(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{w:"293px",m:8,h:"120px",borderRadius:"lg",overflow:"hidden",children:e.jsx(R,{h:"100%",alignItems:"center",justifyContent:"center",children:e.jsx(T,{src:"/logo.png"})})}),e.jsx(b,{mx:"auto",w:"293px",bg:"white",rounded:"lg",shadow:"md",display:"flex",flexDir:"column",overflow:"hidden",gap:4,children:e.jsx($,{})})]})}const J=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),Z=[{configName:"onRenderClient",importPath:"/renderer/+onRenderClient.tsx",isValueFile:!0,exportValues:V},{configName:"Page",importPath:"/pages/index/+Page.tsx",isValueFile:!0,exportValues:J}],ee={onBeforeRenderEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},dataEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},hydrationCanBeAborted:{definedAt:{filePathToShowToUser:"/renderer/+config.ts",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:"true"},hooksTimeout:{definedAt:{filePathToShowToUser:"/renderer/+config.ts",fileExportPathToShowToUser:["default","hooksTimeout"]},valueSerialized:'{"data":{"error":30000,"warning":10000}}'}};export{Z as configValuesImported,ee as configValuesSerialized};
