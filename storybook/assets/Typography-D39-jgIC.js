import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-DI2gBlDf.js";import{M as x}from"./index-hCPRoH73.js";import{u as m,H as y,M as f}from"./ModeContext-Bz0wOFel.js";import{M as u}from"./MachineText-B0XH-b6r.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-CPqD-8hl.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const c={display:{variable:"--font-display",value:"'Cabinet Grotesk', sans-serif",description:"Display / Headings"},body:{variable:"--font-body",value:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif",description:"Body / UI Text"},mono:{variable:"--font-mono",value:"ui-monospace, 'SF Mono', Menlo, Consolas, monospace",description:"Code / Monospace"}},v=[{variable:"--text-4xl",value:"clamp(2.8rem, 8vw, 7rem)",fontFamily:"display",weight:900,lineHeight:"0.92",letterSpacing:"-0.05em",description:"Display / Hero",usage:"Hero headings, page titles"},{variable:"--text-3xl",value:"clamp(1.8rem, 5vw, 4rem)",fontFamily:"display",weight:900,lineHeight:"1.0",letterSpacing:"-0.05em",description:"Section Heading",usage:"Section H2 headings"},{variable:"--text-2xl",value:"clamp(1.3rem, 3vw, 1.8rem)",fontFamily:"display",weight:700,lineHeight:"1.1",letterSpacing:"-0.03em",description:"Subsection Heading",usage:"H3 headings, card titles"},{variable:"--text-xl",value:"1.2rem",fontFamily:"body",weight:600,lineHeight:"1.3",letterSpacing:"0",description:"Large Body",usage:"Subheadings, emphasized text"},{variable:"--text-lg",value:"1.05rem",fontFamily:"body",weight:400,lineHeight:"1.8",letterSpacing:"0",description:"Body Large",usage:"Hero descriptions, lead paragraphs"},{variable:"--text-base",value:"0.95rem",fontFamily:"body",weight:400,lineHeight:"1.8",letterSpacing:"0",description:"Body",usage:"Default body text, descriptions"},{variable:"--text-sm",value:"0.82rem",fontFamily:"body",weight:500,lineHeight:"1.5",letterSpacing:"0",description:"Small",usage:"Labels, form hints, metadata"},{variable:"--text-xs",value:"0.7rem",fontFamily:"body",weight:600,lineHeight:"1.3",letterSpacing:"0.08em",description:"Micro",usage:"Tags, eyebrows, section numbers (uppercase)"}],a=i=>({fontFamily:c[i.fontFamily].value,fontSize:i.value.startsWith("clamp")?`var(${i.variable})`:i.value,fontWeight:i.weight,lineHeight:i.lineHeight,letterSpacing:i.letterSpacing,textTransform:i.variable==="--text-xs"?"uppercase":void 0,color:"var(--fg)",marginBottom:4}),n={fontFamily:"var(--font-mono)",fontSize:11,color:"var(--fg-dim)",lineHeight:1.6},d=({token:i,sample:t})=>{const h=m(),s=t||(i.fontFamily==="display"?"Turn Your Goals Into Growth.":"The quick brown fox jumps over the lazy dog.");return e.jsx("div",{style:{padding:"24px 0",borderBottom:"1px solid var(--border)"},children:h==="human"?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{fontSize:"var(--text-xs)",fontWeight:600,textTransform:"uppercase",letterSpacing:"var(--tracking-wide)",color:"var(--fg-muted)",marginBottom:12},children:i.description}),e.jsx("div",{style:a(i),children:s}),e.jsx("div",{style:{fontSize:"var(--text-xs)",color:"var(--fg-dim)",marginTop:8},children:i.usage})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:a(i),children:s}),e.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:2},children:[e.jsxs("span",{style:n,children:[i.variable,": ",i.value]}),e.jsxs("span",{style:n,children:["font-family: ",c[i.fontFamily].variable]}),e.jsxs("span",{style:n,children:["font-weight: ",i.weight," · line-height: ",i.lineHeight," · letter-spacing: ",i.letterSpacing||"0"]})]})]})})},g=({tokens:i})=>e.jsx("div",{style:{marginBottom:48},children:i.map(t=>e.jsx(d,{token:t},t.variable))}),b=[{level:"H1",size:"clamp(2.8rem, 8vw, 7rem)",cssSize:"var(--text-4xl)",fontFamily:"'Cabinet Grotesk', sans-serif",weight:900,letterSpacing:"-0.05em",lineHeight:"0.92",transform:"uppercase"},{level:"H2",size:"clamp(1.8rem, 5vw, 4rem)",cssSize:"var(--text-3xl)",fontFamily:"'Cabinet Grotesk', sans-serif",weight:900,letterSpacing:"-0.05em",lineHeight:"1.0",transform:"uppercase"},{level:"H3",size:"clamp(1.3rem, 3vw, 1.8rem)",cssSize:"var(--text-2xl)",fontFamily:"'Cabinet Grotesk', sans-serif",weight:700,letterSpacing:"-0.03em",lineHeight:"1.1",transform:"uppercase"},{level:"H4",size:"1.2rem",cssSize:"var(--text-xl)",fontFamily:"'Cabinet Grotesk', sans-serif",weight:700,letterSpacing:"-0.02em",lineHeight:"1.2",transform:"uppercase"},{level:"H5",size:"1rem",cssSize:"1rem",fontFamily:"'Cabinet Grotesk', sans-serif",weight:700,letterSpacing:"-0.02em",lineHeight:"1.3",transform:"uppercase"},{level:"H6",size:"0.82rem",cssSize:"var(--text-sm)",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif",weight:600,letterSpacing:"0",lineHeight:"1.5"}],r={H1:"Turn Your Goals Into Growth.",H2:"What We Do Best.",H3:"Strategy & Direction",H4:"Our Process",H5:"Step One: Discovery",H6:"Additional Details"},p=()=>{const i=m();return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:0},children:b.map(t=>e.jsx("div",{style:{padding:"2rem 0",borderBottom:"1px solid var(--border)"},children:i==="human"?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--fg-dim)",marginBottom:16,fontFamily:"'Inter', sans-serif"},children:t.level}),e.jsx("div",{style:{fontFamily:t.fontFamily,fontSize:t.cssSize,fontWeight:t.weight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textTransform:t.transform,color:"var(--fg)"},children:r[t.level]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{fontFamily:t.fontFamily,fontSize:t.cssSize,fontWeight:t.weight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textTransform:t.transform,color:"var(--fg)",marginBottom:12},children:r[t.level]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs("span",{style:n,children:[t.level.toLowerCase()," ","{"," font-size: ",t.size,"; font-weight: ",t.weight,"; letter-spacing: ",t.letterSpacing,"; line-height: ",t.lineHeight,";",t.transform?` text-transform: ${t.transform};`:""," ","}"]}),e.jsxs("span",{style:n,children:["font-family: ",t.fontFamily.includes("Cabinet")?"var(--font-display)":"var(--font-body)"]})]})]})},t.level))})};d.__docgenInfo={description:"",methods:[],displayName:"TypeSpecimen",props:{token:{required:!0,tsType:{name:"TypeToken"},description:""},sample:{required:!1,tsType:{name:"string"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"TypeScale",props:{tokens:{required:!0,tsType:{name:"Array",elements:[{name:"TypeToken"}],raw:"TypeToken[]"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"HeadingPreview"};function l(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Foundations/Typography"}),`
`,e.jsx(t.h1,{id:"typography",children:"Typography"}),`
`,e.jsxs(t.p,{children:["RYC uses two typefaces: ",e.jsx(t.strong,{children:"Cabinet Grotesk"})," for display headings and ",e.jsx(t.strong,{children:"Inter"})," for body text. Both are self-hosted as WOFF2 for performance."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsxs(y,{children:[e.jsx(t.h2,{id:"heading-hierarchy",children:"Heading Hierarchy"}),e.jsxs(t.p,{children:["All headings use Cabinet Grotesk in uppercase with tight tracking. The scale is fluid — sizes respond to viewport width via ",e.jsx(t.code,{children:"clamp()"}),"."]}),e.jsx(p,{}),e.jsx(t.h2,{id:"type-scale",children:"Type Scale"}),e.jsx(t.p,{children:"Every heading and body style in the system, rendered at actual size."}),e.jsx(g,{tokens:v}),e.jsx(t.h2,{id:"font-families",children:"Font Families"}),e.jsx(t.p,{children:`| Role | Typeface | Weights | Usage |
|------|----------|---------|-------|
| Display | Cabinet Grotesk | 700, 900 | Hero headings, section titles |
| Body | Inter | 400, 500, 600 | Body text, labels, UI elements |
| Mono | System mono stack | 400 | Code snippets, token values |`}),e.jsx(t.h3,{id:"guidelines",children:"Guidelines"}),e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Headings"})," always use Cabinet Grotesk in uppercase with tight letter-spacing (",e.jsx(t.code,{children:"-0.05em"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Body text"})," uses Inter at ",e.jsx(t.code,{children:"0.95rem"})," with relaxed line-height (",e.jsx(t.code,{children:"1.8"}),") for readability."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tags and eyebrows"})," use Inter at ",e.jsx(t.code,{children:"0.7rem"}),", semibold, uppercase, with ",e.jsx(t.code,{children:"0.08em"})," tracking."]}),`
`,e.jsxs(t.li,{children:["Use ",e.jsx(t.code,{children:"<em>"})," within headings for italic emphasis — this is a core brand pattern."]}),`
`]})]}),`
`,e.jsx(f,{children:e.jsx(u,{children:`## Typography

### Font Families
| Role | Stack | Weights |
|---|---|---|
| Display | 'Cabinet Grotesk', sans-serif | 700, 900 |
| Body | 'Inter', -apple-system, BlinkMacSystemFont, sans-serif | 400, 500, 600 |
| Mono | ui-monospace, 'SF Mono', Menlo, Consolas, monospace | 400 |

### Type Scale
| Token | Value | Use |
|---|---|---|
| --text-4xl | clamp(2.8rem, 8vw, 7rem) | Hero headings — Cabinet Grotesk 900, line-height 0.92, tracking -0.05em |
| --text-3xl | clamp(1.8rem, 5vw, 4rem) | Section headings — Cabinet Grotesk 900, line-height 1.0, tracking -0.05em |
| --text-2xl | clamp(1.3rem, 3vw, 1.8rem) | Subsection headings — Cabinet Grotesk 700, line-height 1.1, tracking -0.03em |
| --text-xl | 1.2rem | Large body — Inter 600, line-height 1.3 |
| --text-lg | 1.05rem | Lead paragraphs — Inter 400, line-height 1.8 |
| --text-base | 0.95rem | Body text — Inter 400, line-height 1.8 |
| --text-sm | 0.82rem | Labels, metadata — Inter 500, line-height 1.5 |
| --text-xs | 0.7rem | Tags, eyebrows — Inter 600, uppercase, tracking 0.08em |

### Heading CSS
All headings: font-family: var(--font-display); font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em; line-height: 0.92;
h1: font-size: clamp(2.8rem, 8vw, 7rem);
h2: font-size: clamp(1.8rem, 5vw, 4rem);
h3: font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1;
h4: font-size: 1.2rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.2;
h5: font-size: 1rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.3;
h6: font-family: var(--font-body); font-size: 0.82rem; font-weight: 600; text-transform: none;

### Line Heights
| Token | Value | Use |
|---|---|---|
| --leading-tight | 0.92 | Display headings |
| --leading-snug | 1.1 | Subheadings |
| --leading-normal | 1.5 | Default body text |
| --leading-relaxed | 1.8 | Long-form body text |

### Letter Spacing
| Token | Value | Use |
|---|---|---|
| --tracking-tight | -0.05em | Display headings |
| --tracking-normal | 0 | Body text |
| --tracking-wide | 0.08em | Uppercase labels |
| --tracking-wider | 0.1em | Section eyebrows |

### Rules
- Headings always use Cabinet Grotesk in uppercase with tight letter-spacing (-0.05em).
- Body text uses Inter at 0.95rem with relaxed line-height (1.8).
- Tags and eyebrows use Inter at 0.7rem, semibold, uppercase, with 0.08em tracking.
- Use <em> within headings for italic emphasis — this is a core brand pattern.

### CSS
--font-display: 'Cabinet Grotesk', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;

--text-xs: 0.7rem;
--text-sm: 0.82rem;
--text-base: 0.95rem;
--text-lg: 1.05rem;
--text-xl: 1.2rem;
--text-2xl: clamp(1.3rem, 3vw, 1.8rem);
--text-3xl: clamp(1.8rem, 5vw, 4rem);
--text-4xl: clamp(2.8rem, 8vw, 7rem);

--leading-tight: 0.92;
--leading-snug: 1.1;
--leading-normal: 1.5;
--leading-relaxed: 1.8;

--tracking-tight: -0.05em;
--tracking-normal: 0;
--tracking-wide: 0.08em;
--tracking-wider: 0.1em;`})})]})}function I(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(l,{...i})}):l(i)}export{I as default};
