import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-DI2gBlDf.js";import{M as d}from"./index-hCPRoH73.js";import{M as o}from"./MachineText-B0XH-b6r.js";import{H as n,M as t}from"./ModeContext-Bz0wOFel.js";import"./index-BlmOqGMO.js";import"./index-yBjzXJbu.js";import"./iframe-CPqD-8hl.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const l=[{variable:"--shadow-xs",value:"0 1px 2px rgba(0,0,0,0.04)",description:"Extra small",usage:"Subtle lift for small elements"},{variable:"--shadow-sm",value:"0 2px 8px color-mix(in srgb, var(--fg) 5%, transparent)",description:"Small",usage:"Default card resting state"},{variable:"--shadow-md",value:"0 4px 16px color-mix(in srgb, var(--fg) 7%, transparent)",description:"Medium",usage:"Hovered cards, dropdowns"},{variable:"--shadow-lg",value:"0 0 0 1px color-mix(in srgb, var(--fg) 8%, transparent), 0 4px 16px color-mix(in srgb, var(--fg) 7%, transparent), 0 12px 36px color-mix(in srgb, var(--fg) 10%, transparent), 0 28px 72px color-mix(in srgb, var(--fg) 9%, transparent)",description:"Large",usage:"Elevated cards, service card hover"},{variable:"--shadow-xl",value:"0 28px 80px rgba(0,0,0,0.55)",description:"Extra large",usage:"Browser mockups, hero elements"}],x=[{variable:"--radius-none",value:"0",description:"None",usage:"Sharp elements, dividers"},{variable:"--radius-sm",value:"4px",description:"Small",usage:"Input fields, subtle rounding"},{variable:"--radius-md",value:"8px",description:"Medium",usage:"Cards, containers"},{variable:"--radius-lg",value:"12px",description:"Large",usage:"Testimonial cards, modals"},{variable:"--radius-pill",value:"100px",description:"Pill",usage:"Buttons, tags, badges"},{variable:"--radius-round",value:"50%",description:"Round",usage:"Avatars, circular icons"}],p=()=>{const e={div:"div",...s()};return a.jsx(e.div,{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:32,marginBottom:48},children:l.map(r=>a.jsxs(e.div,{style:{padding:24,borderRadius:"var(--radius-md)",background:"var(--bg-elevated)",boxShadow:r.variable==="--shadow-xs"?"0 1px 2px rgba(0,0,0,0.04)":r.variable==="--shadow-sm"?"0 2px 8px rgba(241,241,241,0.05)":r.variable==="--shadow-md"?"0 4px 16px rgba(241,241,241,0.07)":r.variable==="--shadow-lg"?"0 0 0 1px rgba(241,241,241,0.08), 0 4px 16px rgba(241,241,241,0.07), 0 12px 36px rgba(241,241,241,0.1)":"0 28px 80px rgba(0,0,0,0.55)",border:"1px solid var(--border)"},children:[a.jsx(e.div,{style:{fontSize:"var(--text-sm)",fontWeight:600,marginBottom:4},children:r.description}),a.jsx(e.div,{style:{fontSize:11,fontFamily:"var(--font-mono)",color:"var(--fg-dim)"},children:r.variable}),a.jsx(e.div,{style:{fontSize:"var(--text-xs)",color:"var(--fg-muted)",marginTop:8},children:r.usage})]},r.variable))})},c=()=>{const e={div:"div",...s()};return a.jsx(e.div,{style:{display:"flex",flexWrap:"wrap",gap:24,alignItems:"end",marginBottom:48},children:x.map(r=>a.jsxs(e.div,{style:{textAlign:"center"},children:[a.jsx(e.div,{style:{width:r.variable==="--radius-round"?64:80,height:64,background:"var(--accent)",opacity:.15,borderRadius:r.value,border:"2px solid var(--accent)",marginBottom:8}}),a.jsx(e.div,{style:{fontSize:"var(--text-xs)",fontWeight:600},children:r.description}),a.jsx(e.div,{style:{fontSize:11,fontFamily:"var(--font-mono)",color:"var(--fg-dim)"},children:r.value})]},r.variable))})};function i(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...s(),...e.components};return a.jsxs(a.Fragment,{children:[a.jsx(d,{title:"Foundations/Shadows & Radii"}),`
`,a.jsx(r.h1,{id:"shadows--radii",children:"Shadows & Radii"}),`
`,a.jsxs(r.p,{children:["Elevation and rounding tokens for layered interfaces. Shadows use ",a.jsx(r.code,{children:"color-mix()"})," with ",a.jsx(r.code,{children:"var(--fg)"})," so they adapt automatically to the active theme."]}),`
`,a.jsx(r.hr,{}),`
`,a.jsxs(n,{children:[a.jsx(r.h2,{id:"elevation-scale",children:"Elevation Scale"}),a.jsx(p,{}),a.jsx(r.h2,{id:"border-radius-scale",children:"Border Radius Scale"}),a.jsx(c,{}),a.jsx(r.h3,{id:"guidelines",children:"Guidelines"}),a.jsxs(r.ul,{children:[`
`,a.jsxs(r.li,{children:["Cards use ",a.jsx(r.code,{children:"--radius-md"})," (8px). Testimonial cards use ",a.jsx(r.code,{children:"--radius-lg"})," (12px)."]}),`
`,a.jsxs(r.li,{children:["Buttons and tags always use ",a.jsx(r.code,{children:"--radius-pill"})," (100px) for the pill shape."]}),`
`,a.jsxs(r.li,{children:["Avatars and circular icons use ",a.jsx(r.code,{children:"--radius-round"})," (50%)."]}),`
`,a.jsxs(r.li,{children:["Shadows scale with interaction: resting = ",a.jsx(r.code,{children:"--shadow-sm"}),", hover = ",a.jsx(r.code,{children:"--shadow-lg"}),"."]}),`
`]})]}),`
`,a.jsx(t,{children:a.jsx(o,{children:`## Shadows & Radii

### Shadow Scale
| Token | Value | Use |
|---|---|---|
| --shadow-xs | 0 1px 2px rgba(0,0,0,0.04) | Subtle lift for small elements |
| --shadow-sm | 0 2px 8px color-mix(in srgb, var(--fg) 5%, transparent) | Default card resting state |
| --shadow-md | 0 4px 16px color-mix(in srgb, var(--fg) 7%, transparent) | Hovered cards, dropdowns |
| --shadow-lg | multi-layer composite shadow | Elevated cards, service card hover |
| --shadow-xl | 0 28px 80px rgba(0,0,0,0.55) | Browser mockups, hero elements |

### Border Radius
| Token | Value | Use |
|---|---|---|
| --radius-none | 0 | Sharp elements, dividers |
| --radius-sm | 4px | Input fields, subtle rounding |
| --radius-md | 8px | Cards, containers |
| --radius-lg | 12px | Testimonial cards, modals |
| --radius-pill | 100px | Buttons, tags, badges |
| --radius-round | 50% | Avatars, circular icons |

### Rules
- Cards use --radius-md (8px). Testimonial cards use --radius-lg (12px).
- Buttons and tags always use --radius-pill (100px).
- Avatars and circular icons use --radius-round (50%).
- Shadows scale with interaction: resting = --shadow-sm, hover = --shadow-lg.

### CSS
/* Shadows */
--shadow-xs: 0 1px 2px rgba(0,0,0,0.04);
--shadow-sm: 0 2px 8px color-mix(in srgb, var(--fg) 5%, transparent);
--shadow-md: 0 4px 16px color-mix(in srgb, var(--fg) 7%, transparent);
--shadow-lg:
  0 0 0 1px color-mix(in srgb, var(--fg) 8%, transparent),
  0 4px 16px color-mix(in srgb, var(--fg) 7%, transparent),
  0 12px 36px color-mix(in srgb, var(--fg) 10%, transparent),
  0 28px 72px color-mix(in srgb, var(--fg) 9%, transparent);
--shadow-xl: 0 28px 80px rgba(0,0,0,0.55);

/* Radii */
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 100px;
--radius-round: 50%;`})})]})}function B(e={}){const{wrapper:r}={...s(),...e.components};return r?a.jsx(r,{...e,children:a.jsx(i,{...e})}):i(e)}export{c as RadiiPreview,p as ShadowPreview,B as default};
