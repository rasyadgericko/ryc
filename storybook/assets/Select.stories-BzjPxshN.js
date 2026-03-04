import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css              */import"./index-yBjzXJbu.js";const p=({label:d,name:t,options:b=[],placeholder:h="Select an option",required:v=!1,value:g,onChange:y})=>{const r=`select-${t}`;return e.jsxs("div",{className:"ryc-field",children:[e.jsx("label",{className:"ryc-label",htmlFor:r,children:d}),e.jsxs("select",{className:"ryc-select",id:r,name:t,required:v,value:g,onChange:y,children:[e.jsx("option",{value:"",disabled:!0,children:h}),b.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))]})]})};p.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const j={title:"Components/Select",component:p,tags:["autodocs"]},a={args:{label:"Project Type",name:"project_type",placeholder:"Select a type",required:!0,options:[{value:"website",label:"Website / Landing Page"},{value:"saas",label:"SaaS / Web App"},{value:"ecommerce",label:"E-Commerce"},{value:"branding",label:"Branding & Identity"},{value:"other",label:"Other"}]}},n={args:{label:"Timeline",name:"timeline",placeholder:"When do you need it?",required:!0,options:[{value:"asap",label:"ASAP"},{value:"1month",label:"Within 1 month"},{value:"3months",label:"1-3 months"},{value:"flexible",label:"Flexible"}]}};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Project Type',
    name: 'project_type',
    placeholder: 'Select a type',
    required: true,
    options: [{
      value: 'website',
      label: 'Website / Landing Page'
    }, {
      value: 'saas',
      label: 'SaaS / Web App'
    }, {
      value: 'ecommerce',
      label: 'E-Commerce'
    }, {
      value: 'branding',
      label: 'Branding & Identity'
    }, {
      value: 'other',
      label: 'Other'
    }]
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Timeline',
    name: 'timeline',
    placeholder: 'When do you need it?',
    required: true,
    options: [{
      value: 'asap',
      label: 'ASAP'
    }, {
      value: '1month',
      label: 'Within 1 month'
    }, {
      value: '3months',
      label: '1-3 months'
    }, {
      value: 'flexible',
      label: 'Flexible'
    }]
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const x=["ProjectType","Timeline"];export{a as ProjectType,n as Timeline,x as __namedExportsOrder,j as default};
