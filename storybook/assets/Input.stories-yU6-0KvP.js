import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css              */import"./index-yBjzXJbu.js";const b=({label:q,name:t,type:x="text",placeholder:T,required:N=!1,optional:j=!1,error:s,value:I,onChange:C})=>{const o=`input-${t}`;return e.jsxs("div",{className:"ryc-field",children:[e.jsxs("label",{className:"ryc-label",htmlFor:o,children:[q,j&&e.jsx("span",{className:"ryc-label-optional",children:" (optional)"})]}),e.jsx("input",{className:`ryc-input${s?" ryc-input--error":""}`,id:o,name:t,type:x,placeholder:T,required:N,value:I,onChange:C,autoComplete:t}),s&&e.jsx("span",{className:"ryc-field-error",children:s})]})};b.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'tel' | 'url'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},optional:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const _={title:"Components/Input",component:b,tags:["autodocs"]},a={args:{label:"Name",name:"name",placeholder:"Your name",required:!0}},r={args:{label:"Email",name:"email",type:"email",placeholder:"your@email.com",required:!0}},n={args:{label:"Phone",name:"phone",type:"tel",placeholder:"+1 (555) 000-0000",optional:!0}},l={args:{label:"Email",name:"email",type:"email",placeholder:"your@email.com",error:"Please enter a valid email address",value:"not-an-email"}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    name: 'name',
    placeholder: 'Your name',
    required: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,c,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var y,g,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    optional: true
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,v,E;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'your@email.com',
    error: 'Please enter a valid email address',
    value: 'not-an-email'
  }
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const w=["Default","Email","Optional","WithError"];export{a as Default,r as Email,n as Optional,l as WithError,w as __namedExportsOrder,_ as default};
