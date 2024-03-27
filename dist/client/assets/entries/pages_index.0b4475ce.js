import{U as h,j as e,V as p,i as m}from"../chunks/chunk-4b375b17.js";import{F as x,a as g,b as a,v as f,c as s,d as n,e as j,V as w,I as b}from"../chunks/chunk-adc80fa5.js";import{a as t,F as l,I as d,B as v,T as y}from"../chunks/chunk-9c84d6e4.js";import"../chunks/chunk-d6cd9d78.js";const S=V=>{const{login:c}=h(),u=async o=>{await c(o.email,o.password)};return e.jsxs(t,{m:8,bgColor:"white",display:"flex",flexDir:"column",gap:4,children:[e.jsx(x,{initialValues:{email:"",password:""},onSubmit:u,children:()=>e.jsxs(g,{children:[e.jsx(a,{name:"email",validate:f,children:({field:o,form:r,meta:i})=>e.jsxs(l,{isInvalid:r.errors.email&&r.touched.email,children:[e.jsx(s,{children:"Email Address"}),e.jsx(d,{...o,placeholder:"domipapa@tinyexpense.com",mb:i.error?0:6}),i.error&&e.jsx(n,{children:r.errors.email})]})}),e.jsx(a,{name:"password",validate:j,children:({field:o,form:r,meta:i})=>e.jsxs(l,{mt:2,isInvalid:r.errors.password&&r.touched.password,children:[e.jsx(s,{children:"Password"}),e.jsx(d,{type:"password",...o,placeholder:"********",mb:i.error?0:6}),i.error&&e.jsx(n,{children:r.errors.password})]})}),e.jsx(v,{mt:4,background:"linear-gradient(to right, #ff5757, #8c52ff)",color:"white",_hover:{background:"linear-gradient(to right, #8c52ff, #ff5757)",color:"white"},type:"submit",width:"full",children:"Login"})]})}),e.jsx(t,{mt:2,textAlign:"center",children:e.jsx(w,{href:"/register",children:e.jsx(y,{backgroundImage:"linear-gradient(to right, #ff5757, #8c52ff)",color:"transparent",style:{WebkitBackgroundClip:"text"},children:"Don't have an account? Register here."})})})]})};function T(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{w:"293px",m:8,h:"120px",borderRadius:"lg",overflow:"hidden",children:e.jsx(p,{h:"100%",alignItems:"center",justifyContent:"center",children:e.jsx(b,{src:"/logo.png"})})}),e.jsx(t,{mx:"auto",w:"293px",bg:"white",rounded:"lg",shadow:"md",display:"flex",flexDir:"column",overflow:"hidden",gap:4,children:e.jsx(S,{})})]})}const F=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),P="Tinyexpense | Manage your expenses the right way!",_=Object.freeze(Object.defineProperty({__proto__:null,title:P},Symbol.toStringTag,{value:"Module"})),E=[{configName:"onRenderClient",importPath:"/renderer/+onRenderClient.tsx",isValueFile:!0,exportValues:m},{configName:"Page",importPath:"/pages/index/+Page.tsx",isValueFile:!0,exportValues:F},{configName:"title",importPath:"/pages/index/+title.ts",isValueFile:!0,exportValues:_}],z={onBeforeRenderEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},dataEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},hydrationCanBeAborted:{definedAt:{filePathToShowToUser:"/renderer/+config.ts",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:"true"},hooksTimeout:{definedAt:{filePathToShowToUser:"/renderer/+config.ts",fileExportPathToShowToUser:["default","hooksTimeout"]},valueSerialized:'{"data":{"error":30000,"warning":10000}}'}};export{E as configValuesImported,z as configValuesSerialized};