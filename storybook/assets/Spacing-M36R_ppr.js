import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-DI2gBlDf.js";import{M as t}from"./index-hCPRoH73.js";import{u as d,H as l,M as x}from"./ModeContext-Bz0wOFel.js";import{M as g}from"./MachineText-B0XH-b6r.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./iframe-CPqD-8hl.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const h=s=>({width:Math.max(s,2),height:32,background:"var(--accent)",opacity:.2+s/96*.6,borderRadius:"var(--radius-sm)",transition:"width 0.3s var(--ease)"}),i={display:"grid",gridTemplateColumns:"120px 120px 1fr",alignItems:"center",gap:16,padding:"8px 0",borderBottom:"1px solid var(--border)"},p={fontFamily:"var(--font-mono)",fontSize:12,color:"var(--fg-muted)"},o=({tokens:s})=>{const a=d();return e.jsxs("div",{style:{marginBottom:48},children:[e.jsxs("div",{style:{...i,borderBottom:"2px solid var(--border)",padding:"8px 0",fontSize:"var(--text-xs)",fontWeight:600,textTransform:"uppercase",letterSpacing:"var(--tracking-wide)",color:"var(--fg-muted)"},children:[e.jsx("span",{children:"Token"}),e.jsx("span",{children:"Value"}),e.jsx("span",{children:a==="human"?"Preview":"Description"})]}),s.map(n=>e.jsxs("div",{style:i,children:[e.jsx("span",{style:p,children:n.variable}),e.jsx("span",{style:p,children:n.value}),a==="human"?e.jsx("div",{style:h(n.px)}):e.jsx("span",{style:{fontSize:"var(--text-sm)",color:"var(--fg-dim)"},children:n.description})]},n.variable))]})};o.__docgenInfo={description:"",methods:[],displayName:"SpacingScale",props:{tokens:{required:!0,tsType:{name:"Array",elements:[{name:"SpacingToken"}],raw:"SpacingToken[]"},description:""}}};const m=[{variable:"--space-0",value:"0",px:0,description:"None"},{variable:"--space-1",value:"4px",px:4,description:"Micro — icon gaps, inline spacing"},{variable:"--space-2",value:"8px",px:8,description:"Tight — tag padding, compact gaps"},{variable:"--space-3",value:"12px",px:12,description:"Small — card grid gaps, form gaps"},{variable:"--space-4",value:"16px",px:16,description:"Base — default component spacing"},{variable:"--space-5",value:"20px",px:20,description:"Medium — card padding compact"},{variable:"--space-6",value:"24px",px:24,description:"Comfortable — form field gaps"},{variable:"--space-8",value:"32px",px:32,description:"Large — section sub-spacing"},{variable:"--space-10",value:"40px",px:40,description:"Extra large — layout gaps"},{variable:"--space-12",value:"48px",px:48,description:"Section inner — card padding"},{variable:"--space-16",value:"64px",px:64,description:"Section — desktop horizontal padding"},{variable:"--space-20",value:"80px",px:80,description:"Section vertical — large sections"},{variable:"--space-24",value:"96px",px:96,description:"Section max — hero spacing"}];function c(s){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Foundations/Spacing"}),`
`,e.jsx(a.h1,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(a.p,{children:["RYC uses a ",e.jsx(a.strong,{children:"4px base grid"}),". Every margin, padding, and gap snaps to this scale for visual consistency across components and layouts."]}),`
`,e.jsx(a.hr,{}),`
`,e.jsx(a.h2,{id:"scale",children:"Scale"}),`
`,e.jsx(o,{tokens:m}),`
`,e.jsxs(l,{children:[e.jsx(a.h3,{id:"layout-patterns",children:"Layout Patterns"}),e.jsxs(a.p,{children:[`| Context | Token | Usage |
|---------|-------|-------|
| Section padding (desktop) | `,e.jsx(a.code,{children:"--space-20"})," + ",e.jsx(a.code,{children:"4vw"}),` | Vertical + horizontal section spacing |
| Section padding (mobile) | `,e.jsx(a.code,{children:"--space-16"})," + ",e.jsx(a.code,{children:"6vw"}),` | Reduced on smaller screens |
| Card padding | `,e.jsx(a.code,{children:"--space-10"})," – ",e.jsx(a.code,{children:"--space-12"}),` | Internal card content spacing |
| Card grid gap | `,e.jsx(a.code,{children:"--space-3"}),` | Space between card grid items |
| Form field gap | `,e.jsx(a.code,{children:"--space-6"}),` | Vertical gap between form fields |
| Two-column layout gap | `,e.jsx(a.code,{children:"--space-12"})," – ",e.jsx(a.code,{children:"--space-16"}),` | About section, contact split |
| Button padding | `,e.jsx(a.code,{children:"--space-5"})," (v) × ",e.jsx(a.code,{children:"--space-10"}),` (h) | Primary button internal spacing |
| Tag padding | `,e.jsx(a.code,{children:"--space-1"})," (v) × ",e.jsx(a.code,{children:"--space-3"})," (h) | Pill-shaped tags and badges |"]}),e.jsx(a.h3,{id:"guidelines",children:"Guidelines"}),e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Always use spacing tokens instead of arbitrary pixel values."}),`
`,e.jsx(a.li,{children:"For responsive adjustments, drop one or two steps rather than halving values."}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"--space-3"})," (12px) is the default gap for dense grids; ",e.jsx(a.code,{children:"--space-6"})," (24px) for relaxed layouts."]}),`
`]})]}),`
`,e.jsx(x,{children:e.jsx(g,{children:`## Spacing

4px base grid. Every margin, padding, and gap snaps to this scale.

### Scale
| Token | Value | Use |
|---|---|---|
| --space-0 | 0 | None |
| --space-1 | 4px | Micro — icon gaps, inline spacing |
| --space-2 | 8px | Tight — tag padding, compact gaps |
| --space-3 | 12px | Small — card grid gaps, form gaps |
| --space-4 | 16px | Base — default component spacing |
| --space-5 | 20px | Medium — card padding compact |
| --space-6 | 24px | Comfortable — form field gaps |
| --space-8 | 32px | Large — section sub-spacing |
| --space-10 | 40px | Extra large — layout gaps |
| --space-12 | 48px | Section inner — card padding |
| --space-16 | 64px | Section — desktop horizontal padding |
| --space-20 | 80px | Section vertical — large sections |
| --space-24 | 96px | Section max — hero spacing |

### Layout Patterns
- Section padding (desktop): --space-20 + 4vw (vertical + horizontal)
- Section padding (mobile): --space-16 + 6vw
- Card padding: --space-10 to --space-12
- Card grid gap: --space-3
- Form field gap: --space-6
- Button padding: --space-5 (v) × --space-10 (h)
- Tag padding: --space-1 (v) × --space-3 (h)

### CSS
--space-0: 0;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;`})})]})}function C(s={}){const{wrapper:a}={...r(),...s.components};return a?e.jsx(a,{...s,children:e.jsx(c,{...s})}):c(s)}export{C as default};
