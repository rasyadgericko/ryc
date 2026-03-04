import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const r=()=>e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),m=()=>e.jsxs("div",{className:"ryc-testimonial__stars",role:"img","aria-label":"5 out of 5 stars",children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),s=({text:t,name:o,role:d,initials:l,variant:c="sub"})=>e.jsx("div",{className:`ryc-testimonial--${c}`,children:c==="featured"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"ryc-testimonial__text",children:`"${t}"`}),e.jsxs("div",{className:"ryc-testimonial__author",children:[e.jsx("div",{className:"ryc-testimonial__avatar",children:l}),e.jsxs("div",{children:[e.jsx("div",{className:"ryc-testimonial__name",children:o}),e.jsx("div",{className:"ryc-testimonial__role",children:d})]}),e.jsx(m,{})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"ryc-testimonial__top",children:[e.jsx(m,{}),e.jsx("span",{className:"ryc-testimonial__quote",children:'"'})]}),e.jsx("p",{className:"ryc-testimonial__text",children:t}),e.jsxs("div",{className:"ryc-testimonial__author",children:[e.jsx("div",{className:"ryc-testimonial__avatar",children:l}),e.jsxs("div",{children:[e.jsx("div",{className:"ryc-testimonial__name",children:o}),e.jsx("div",{className:"ryc-testimonial__role",children:d})]})]})]})});s.__docgenInfo={description:"",methods:[],displayName:"TestimonialCard",props:{text:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},role:{required:!0,tsType:{name:"string"},description:""},initials:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'featured' | 'sub'",elements:[{name:"literal",value:"'featured'"},{name:"literal",value:"'sub'"}]},description:"",defaultValue:{value:"'sub'",computed:!1}}}};const b={title:"Components/TestimonialCard",component:s,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{maxWidth:600},children:e.jsx(t,{})})]},a={args:{variant:"featured",text:"I'd worked with two agencies before who took months and delivered templates. RYC rebuilt our entire storefront in three weeks — and our conversion rate jumped 40% the first month.",name:"Sarah Laurent",role:"Founder, Maison Luxe",initials:"SL"}},i={args:{variant:"sub",text:"We gave them four weeks and honestly expected to push the deadline. They delivered in three. The dashboard handles 50K concurrent users and we haven't touched the codebase since.",name:"James Kim",role:"CTO, Nexus Analytics",initials:"JK"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:800},children:[e.jsx(s,{variant:"featured",text:"RYC rebuilt our entire storefront in three weeks — conversion rate jumped 40%.",name:"Sarah Laurent",role:"Founder, Maison Luxe",initials:"SL"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[e.jsx(s,{text:"They delivered in three weeks. The dashboard handles 50K concurrent users.",name:"James Kim",role:"CTO, Nexus Analytics",initials:"JK"}),e.jsx(s,{text:"HIPAA compliance baked into architecture from the first commit. Zero audit findings.",name:"Dr. Rachel Torres",role:"CEO, MedSync Pro",initials:"RT"})]})]})};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'featured',
    text: "I'd worked with two agencies before who took months and delivered templates. RYC rebuilt our entire storefront in three weeks — and our conversion rate jumped 40% the first month.",
    name: 'Sarah Laurent',
    role: 'Founder, Maison Luxe',
    initials: 'SL'
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var p,v,y;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'sub',
    text: "We gave them four weeks and honestly expected to push the deadline. They delivered in three. The dashboard handles 50K concurrent users and we haven't touched the codebase since.",
    name: 'James Kim',
    role: 'CTO, Nexus Analytics',
    initials: 'JK'
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,f,g;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 800
  }}>
      <TestimonialCard variant="featured" text="RYC rebuilt our entire storefront in three weeks — conversion rate jumped 40%." name="Sarah Laurent" role="Founder, Maison Luxe" initials="SL" />
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }}>
        <TestimonialCard text="They delivered in three weeks. The dashboard handles 50K concurrent users." name="James Kim" role="CTO, Nexus Analytics" initials="JK" />
        <TestimonialCard text="HIPAA compliance baked into architecture from the first commit. Zero audit findings." name="Dr. Rachel Torres" role="CEO, MedSync Pro" initials="RT" />
      </div>
    </div>
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const w=["Featured","Supporting","Layout"];export{a as Featured,n as Layout,i as Supporting,w as __namedExportsOrder,b as default};
