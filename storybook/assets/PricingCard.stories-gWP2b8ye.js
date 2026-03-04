import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as L}from"./Tag-Ds0hwvlJ.js";import{B as $}from"./Button-jeySILFD.js";import"./index-yBjzXJbu.js";const r=({tag:d,delivery:b,price:x,description:P,features:j=[],featured:n=!1,ctaLabel:C="Start a Project"})=>e.jsxs("div",{className:`ryc-pricing-card${n?" ryc-pricing-card--featured":""}`,children:[e.jsxs("div",{className:"ryc-pricing-card__top",children:[e.jsx(L,{variant:n?"featured":"default",children:d}),e.jsx("span",{className:"ryc-pricing-card__delivery",children:b})]}),e.jsx("div",{className:"ryc-pricing-card__from",children:"from"}),e.jsx("div",{className:"ryc-pricing-card__price",children:x}),e.jsx("p",{className:"ryc-pricing-card__desc",children:P}),e.jsx("ul",{className:"ryc-pricing-card__list",children:j.map((k,_)=>e.jsx("li",{children:k},_))}),e.jsx($,{variant:n?"primary":"outline",children:C})]});r.__docgenInfo={description:"",methods:[],displayName:"PricingCard",props:{tag:{required:!0,tsType:{name:"string"},description:""},delivery:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},features:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},featured:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ctaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Start a Project'",computed:!1}}}};const I={title:"Components/PricingCard",component:r,tags:["autodocs"],decorators:[d=>e.jsx("div",{style:{maxWidth:380},children:e.jsx(d,{})})]},a={args:{tag:"Launch",delivery:"5-7 days",price:"$2,500",description:"For landing pages, personal brands, and solo founders who need a polished digital presence — fast.",features:["Single-page or 3-5 page site","Custom design, no templates","Mobile-first, 90+ Lighthouse","30-day post-launch support"]}},s={args:{tag:"Most Popular",delivery:"2-3 weeks",price:"$6,000",description:"Full marketing sites and brand builds for startups, SMBs, and e-commerce brands ready to compete.",features:["5-12 pages, full design system","UI/UX design + brand identity","CMS integration if needed","SEO-optimised from day one","30-day post-launch support"],featured:!0}},t={args:{tag:"Platform",delivery:"3-5 weeks",price:"$14,000",description:"SaaS dashboards, e-commerce platforms, and complex custom builds for businesses ready to scale.",features:["SaaS, e-commerce, or custom build","Full-stack architecture","API & third-party integrations","Performance & security hardened","30-day post-launch support"]}},i={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12,maxWidth:1100},children:[e.jsx(r,{tag:"Launch",delivery:"5-7 days",price:"$2,500",description:"Landing pages and solo founders.",features:["3-5 pages","Custom design","90+ Lighthouse","30-day support"]}),e.jsx(r,{tag:"Most Popular",delivery:"2-3 weeks",price:"$6,000",description:"Full marketing sites.",features:["5-12 pages","UI/UX + brand","CMS integration","SEO built-in","30-day support"],featured:!0}),e.jsx(r,{tag:"Platform",delivery:"3-5 weeks",price:"$14,000",description:"SaaS and e-commerce.",features:["Full-stack","API integrations","Security hardened","30-day support"]})]})};var o,c,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    tag: 'Launch',
    delivery: '5-7 days',
    price: '$2,500',
    description: 'For landing pages, personal brands, and solo founders who need a polished digital presence — fast.',
    features: ['Single-page or 3-5 page site', 'Custom design, no templates', 'Mobile-first, 90+ Lighthouse', '30-day post-launch support']
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,u,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tag: 'Most Popular',
    delivery: '2-3 weeks',
    price: '$6,000',
    description: 'Full marketing sites and brand builds for startups, SMBs, and e-commerce brands ready to compete.',
    features: ['5-12 pages, full design system', 'UI/UX design + brand identity', 'CMS integration if needed', 'SEO-optimised from day one', '30-day post-launch support'],
    featured: true
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tag: 'Platform',
    delivery: '3-5 weeks',
    price: '$14,000',
    description: 'SaaS dashboards, e-commerce platforms, and complex custom builds for businesses ready to scale.',
    features: ['SaaS, e-commerce, or custom build', 'Full-stack architecture', 'API & third-party integrations', 'Performance & security hardened', '30-day post-launch support']
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,S,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    maxWidth: 1100
  }}>
      <PricingCard tag="Launch" delivery="5-7 days" price="$2,500" description="Landing pages and solo founders." features={['3-5 pages', 'Custom design', '90+ Lighthouse', '30-day support']} />
      <PricingCard tag="Most Popular" delivery="2-3 weeks" price="$6,000" description="Full marketing sites." features={['5-12 pages', 'UI/UX + brand', 'CMS integration', 'SEO built-in', '30-day support']} featured />
      <PricingCard tag="Platform" delivery="3-5 weeks" price="$14,000" description="SaaS and e-commerce." features={['Full-stack', 'API integrations', 'Security hardened', '30-day support']} />
    </div>
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const N=["Launch","Studio","Platform","Grid"];export{i as Grid,a as Launch,t as Platform,s as Studio,N as __namedExportsOrder,I as default};
