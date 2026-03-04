import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{B as a}from"./Button-jeySILFD.js";import"./index-yBjzXJbu.js";const V={title:"Components/Button",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","outline","submit"],description:"Visual style of the button"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},showArrow:{control:"boolean",description:"Show arrow icon"},disabled:{control:"boolean",description:"Disabled state (submit variant only)"}}},e={args:{children:"Start a Project",variant:"primary"}},s={args:{children:"Start a Project",variant:"outline"}},t={args:{children:"Send Message",variant:"submit",showArrow:!1}},n={args:{children:"Sending...",variant:"submit",disabled:!0,showArrow:!1}},o={args:{children:"Learn More",variant:"primary",size:"sm"}},i={args:{children:"Let's Talk",variant:"primary",size:"lg"}},c={render:()=>r.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"outline",children:"Outline"}),r.jsx(a,{variant:"submit",showArrow:!1,children:"Submit"}),r.jsx(a,{variant:"submit",disabled:!0,showArrow:!1,children:"Disabled"})]})};var l,d,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Start a Project',
    variant: 'primary'
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Start a Project',
    variant: 'outline'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,b,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Send Message',
    variant: 'submit',
    showArrow: false
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,w,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Sending...',
    variant: 'submit',
    disabled: true,
    showArrow: false
  }
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var f,x,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Learn More',
    variant: 'primary',
    size: 'sm'
  }
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var A,B,P;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Let's Talk",
    variant: 'primary',
    size: 'lg'
  }
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var z,L,D;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="submit" showArrow={false}>Submit</Button>
      <Button variant="submit" disabled showArrow={false}>Disabled</Button>
    </div>
}`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const k=["Primary","Outline","Submit","Disabled","Small","Large","AllVariants"];export{c as AllVariants,n as Disabled,i as Large,s as Outline,e as Primary,o as Small,t as Submit,k as __namedExportsOrder,V as default};
