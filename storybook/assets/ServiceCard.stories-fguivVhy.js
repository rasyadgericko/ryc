import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as g}from"./Tag-Ds0hwvlJ.js";import"./index-yBjzXJbu.js";const r=({tag:t,number:u,name:p,description:l})=>e.jsxs("div",{className:"ryc-service-card",tabIndex:0,children:[e.jsxs("div",{className:"ryc-service-card__top",children:[e.jsx(g,{children:t}),e.jsx("span",{className:"ryc-service-card__num",children:u})]}),e.jsx("div",{className:"ryc-service-card__name",children:p}),e.jsx("p",{className:"ryc-service-card__desc",children:l})]});r.__docgenInfo={description:"",methods:[],displayName:"ServiceCard",props:{tag:{required:!0,tsType:{name:"string"},description:""},number:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}};const y={title:"Components/ServiceCard",component:r,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{maxWidth:400},children:e.jsx(t,{})})]},s={args:{tag:"Core",number:"01",name:"Web Development",description:"Production-grade websites built with Claude AI and reviewed by humans. Ship in weeks with 90+ Lighthouse scores out of the box."}},a={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12,maxWidth:1e3},children:[e.jsx(r,{tag:"Core",number:"01",name:"Web Development",description:"Production-grade websites built with Claude AI and reviewed by humans."}),e.jsx(r,{tag:"Design",number:"02",name:"UI/UX Design",description:"Interfaces that make investors say yes and users come back."}),e.jsx(r,{tag:"Branding",number:"03",name:"Brand Identity",description:"From name to full visual system — a brand that looks established from day one."})]})};var i,n,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tag: 'Core',
    number: '01',
    name: 'Web Development',
    description: 'Production-grade websites built with Claude AI and reviewed by humans. Ship in weeks with 90+ Lighthouse scores out of the box.'
  }
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var o,c,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    maxWidth: 1000
  }}>
      <ServiceCard tag="Core" number="01" name="Web Development" description="Production-grade websites built with Claude AI and reviewed by humans." />
      <ServiceCard tag="Design" number="02" name="UI/UX Design" description="Interfaces that make investors say yes and users come back." />
      <ServiceCard tag="Branding" number="03" name="Brand Identity" description="From name to full visual system — a brand that looks established from day one." />
    </div>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const x=["Default","Grid"];export{s as Default,a as Grid,x as __namedExportsOrder,y as default};
