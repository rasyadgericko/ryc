import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as f}from"./index-DI2gBlDf.js";import{M as b}from"./index-hCPRoH73.js";import{r as v}from"./index-BlmOqGMO.js";import{u as x,H as y,M as j}from"./ModeContext-Bz0wOFel.js";import{M as k}from"./MachineText-B0XH-b6r.js";import"./index-yBjzXJbu.js";import"./iframe-CPqD-8hl.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const C={display:"flex",flexDirection:"column",gap:8,minWidth:160},S=t=>({width:"100%",height:80,borderRadius:"var(--radius-md)",background:t,border:"1px solid var(--border)"}),T={fontSize:"var(--text-sm)",fontWeight:500,color:"var(--fg)"},n={fontSize:"var(--text-xs)",color:"var(--fg-muted)",fontFamily:"var(--font-mono)"},w={fontSize:11,padding:"2px 8px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)",background:"var(--bg-sub)",color:"var(--fg-muted)",cursor:"pointer",marginLeft:8},g=({token:t,theme:r="dark"})=>{const a=x(),s=r==="dark"?t.dark:t.light,[h,o]=v.useState(!1),u=p=>{navigator.clipboard.writeText(p),o(!0),setTimeout(()=>o(!1),1500)};return e.jsxs("div",{style:C,children:[e.jsx("div",{style:S(s)}),e.jsx("div",{style:T,children:t.description}),a==="human"?e.jsx("div",{style:{fontSize:"var(--text-xs)",color:"var(--fg-dim)",lineHeight:1.4},children:t.usage}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{style:n,children:t.variable}),e.jsx("button",{style:w,onClick:()=>u(`var(${t.variable})`),children:h?"Copied":"Copy"})]}),e.jsx("span",{style:n,children:s})]})]})},i=({tokens:t,title:r,theme:a="dark"})=>e.jsxs("div",{style:{marginBottom:48},children:[e.jsx("h3",{style:{fontFamily:"var(--font-display)",fontSize:"var(--text-xl)",fontWeight:700,marginBottom:24,textTransform:"uppercase",letterSpacing:"var(--tracking-tight)"},children:r}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:24},children:t.map(s=>e.jsx(g,{token:s,theme:a},s.variable))})]}),d=[{label:"Primary Text",variable:"--fg",description:"Headings, primary content"},{label:"Muted Text",variable:"--fg-muted",description:"Body text, descriptions"},{label:"Dim Text",variable:"--fg-dim",description:"Captions, labels, decorative"}],l=({sample:t,fg:r,bg:a})=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:16,padding:"12px 0",borderBottom:`1px solid ${a==="#0f0f0f"?"rgba(241,241,241,0.1)":"rgba(22,22,22,0.12)"}`},children:[e.jsx("span",{style:{fontFamily:"'Cabinet Grotesk', sans-serif",fontSize:"1.4rem",fontWeight:700,color:r,textTransform:"uppercase",letterSpacing:"-0.03em",minWidth:200},children:t.label}),e.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.88rem",color:r,opacity:.6},children:t.variable}),e.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.78rem",color:r,opacity:.4,marginLeft:"auto"},children:t.description})]}),m=()=>{const t={"--fg":"#f1f1f1","--fg-muted":"#aaa","--fg-dim":"#777"},r={"--fg":"#161616","--fg-muted":"#555","--fg-dim":"#777"};return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:48},children:[e.jsxs("div",{style:{background:"#0f0f0f",border:"1px solid rgba(241,241,241,0.1)",borderRadius:"var(--radius-md)",padding:"2rem"},children:[e.jsx("div",{style:{fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",color:"#777",marginBottom:20,fontFamily:"'Inter', sans-serif"},children:"Dark Theme"}),d.map(a=>e.jsx(l,{sample:a,fg:t[a.variable],bg:"#0f0f0f"},a.variable+"-dark"))]}),e.jsxs("div",{style:{background:"#f1f1f1",border:"1px solid rgba(22,22,22,0.12)",borderRadius:"var(--radius-md)",padding:"2rem"},children:[e.jsx("div",{style:{fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",color:"#777",marginBottom:20,fontFamily:"'Inter', sans-serif"},children:"Light Theme"}),d.map(a=>e.jsx(l,{sample:a,fg:r[a.variable],bg:"#f1f1f1"},a.variable+"-light"))]})]})};g.__docgenInfo={description:"",methods:[],displayName:"ColorSwatch",props:{token:{required:!0,tsType:{name:"ColorToken"},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'dark'",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"ColorGrid",props:{tokens:{required:!0,tsType:{name:"Array",elements:[{name:"ColorToken"}],raw:"ColorToken[]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'dark'",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"TextColorPreview"};const I=[{variable:"--bg",light:"#f1f1f1",dark:"#0f0f0f",description:"Page background",usage:"Primary background for all pages and sections"},{variable:"--fg",light:"#161616",dark:"#f1f1f1",description:"Primary foreground",usage:"Main text, headings, icons"},{variable:"--fg-muted",light:"#555",dark:"#aaa",description:"Muted foreground",usage:"Secondary text, descriptions, subtitles"},{variable:"--fg-dim",light:"#777",dark:"#777",description:"Dim foreground",usage:"Tertiary text, decorative labels, counters"},{variable:"--border",light:"rgba(22,22,22,0.12)",dark:"rgba(241,241,241,0.1)",description:"Border color",usage:"Card borders, dividers, separators"},{variable:"--bg-sub",light:"#e8e8e8",dark:"#151515",description:"Subtle background",usage:"Alternating rows, shaded cells, hover states"},{variable:"--accent",light:"#161616",dark:"#f1f1f1",description:"Accent / interactive",usage:"Buttons, active states, focus rings"},{variable:"--accent-glow",light:"rgba(22,22,22,0.06)",dark:"rgba(241,241,241,0.04)",description:"Accent glow",usage:"Soft shadows, magnetic button aura"}],M=[{variable:"--bg-elevated",light:"#ffffff",dark:"#1a1a1a",description:"Elevated surface",usage:"Cards, modals, popovers above background"},{variable:"--bg-overlay",light:"rgba(0,0,0,0.4)",dark:"rgba(0,0,0,0.6)",description:"Overlay",usage:"Modal backdrops, image overlays"},{variable:"--accent-hover",light:"#333",dark:"#ddd",description:"Accent hover",usage:"Interactive elements on hover"},{variable:"--accent-active",light:"#000",dark:"#fff",description:"Accent active",usage:"Interactive elements on press"}],B=[{variable:"--success",light:"#22c55e",dark:"#22c55e",description:"Success",usage:"Confirmation, availability, positive states"},{variable:"--error",light:"#ef4444",dark:"#ef4444",description:"Error",usage:"Validation errors, destructive actions"},{variable:"--warning",light:"#f59e0b",dark:"#f59e0b",description:"Warning",usage:"Caution states, attention needed"},{variable:"--info",light:"#3b82f6",dark:"#3b82f6",description:"Info",usage:"Informational states, help text"}];function c(t){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...f(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Foundations/Colors"}),`
`,e.jsx(r.h1,{id:"colors",children:"Colors"}),`
`,e.jsxs(r.p,{children:["RYC uses a monochromatic palette that inverts cleanly between light and dark themes. Every color is defined as a CSS custom property and adapts automatically via ",e.jsx(r.code,{children:"data-theme"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsxs(y,{children:[e.jsx(r.h2,{id:"text-colors",children:"Text Colors"}),e.jsx(r.p,{children:"White text on dark, dark text on light — the system inverts automatically."}),e.jsx(m,{}),e.jsx(r.h2,{id:"core-palette",children:"Core Palette"}),e.jsx(r.p,{children:"The foundation of every surface, text, and border in the system."}),e.jsx(i,{tokens:I,title:"Core"}),e.jsx(r.h2,{id:"extended-palette",children:"Extended Palette"}),e.jsx(r.p,{children:"Additional tokens for layered surfaces and interactive states."}),e.jsx(i,{tokens:M,title:"Extended"}),e.jsx(r.h2,{id:"semantic-colors",children:"Semantic Colors"}),e.jsx(r.p,{children:"Functional colors for status, feedback, and system states."}),e.jsx(i,{tokens:B,title:"Semantic"}),e.jsx(r.h3,{id:"usage-guidelines",children:"Usage Guidelines"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Never hardcode hex values"})," — always use ",e.jsx(r.code,{children:"var(--token-name)"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"--fg"})," and ",e.jsx(r.code,{children:"--bg"})," carry the theme. Everything else derives from these."]}),`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.code,{children:"--fg-muted"})," for secondary text, ",e.jsx(r.code,{children:"--fg-dim"})," for decorative/tertiary."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"--border"})," uses alpha transparency so it works on any background."]}),`
`,e.jsxs(r.li,{children:["Semantic colors (",e.jsx(r.code,{children:"--success"}),", ",e.jsx(r.code,{children:"--error"}),", etc.) are theme-agnostic — same value in both modes."]}),`
`]})]}),`
`,e.jsx(j,{children:e.jsx(k,{children:`## Colors

### Core Palette
| Token | Light | Dark | Use |
|---|---|---|---|
| --bg | #f1f1f1 | #0f0f0f | Page background |
| --fg | #161616 | #f1f1f1 | Primary text, headings, icons |
| --fg-muted | #555 | #aaa | Secondary text, descriptions |
| --fg-dim | #777 | #777 | Tertiary text, decorative labels |
| --border | rgba(22,22,22,0.12) | rgba(241,241,241,0.1) | Card borders, dividers |
| --bg-sub | #e8e8e8 | #151515 | Alternating rows, hover states |
| --accent | #161616 | #f1f1f1 | Buttons, active states, focus rings |
| --accent-glow | rgba(22,22,22,0.06) | rgba(241,241,241,0.04) | Soft shadows, magnetic button aura |

### Extended Palette
| Token | Light | Dark | Use |
|---|---|---|---|
| --bg-elevated | #ffffff | #1a1a1a | Cards, modals, popovers |
| --bg-overlay | rgba(0,0,0,0.4) | rgba(0,0,0,0.6) | Modal backdrops, image overlays |
| --accent-hover | #333 | #ddd | Interactive elements on hover |
| --accent-active | #000 | #fff | Interactive elements on press |

### Semantic Colors (same in both themes)
| Token | Hex | Use |
|---|---|---|
| --success | #22c55e | Confirmation, positive states |
| --error | #ef4444 | Validation errors, destructive actions |
| --warning | #f59e0b | Caution states, attention needed |
| --info | #3b82f6 | Informational states, help text |

### Rules
- NEVER hardcode hex values — always use var(--token-name).
- --fg and --bg carry the theme. Everything else derives from these.
- --border uses alpha transparency so it works on any background.
- Semantic colors are theme-agnostic — same value in both modes.

### CSS
:root {
  --bg: #f1f1f1;
  --fg: #161616;
  --fg-muted: #555;
  --fg-dim: #777;
  --border: rgba(22, 22, 22, 0.12);
  --bg-sub: #e8e8e8;
  --accent: #161616;
  --accent-glow: rgba(22, 22, 22, 0.06);
  --bg-elevated: #ffffff;
  --bg-overlay: rgba(0, 0, 0, 0.4);
  --accent-hover: #333;
  --accent-active: #000;
  --success: #22c55e;
  --error: #ef4444;
  --warning: #f59e0b;
  --info: #3b82f6;
}

[data-theme="dark"] {
  --bg: #0f0f0f;
  --fg: #f1f1f1;
  --fg-muted: #aaa;
  --fg-dim: #777;
  --border: rgba(241, 241, 241, 0.1);
  --bg-sub: #151515;
  --accent: #f1f1f1;
  --accent-glow: rgba(241, 241, 241, 0.04);
  --bg-elevated: #1a1a1a;
  --bg-overlay: rgba(0, 0, 0, 0.6);
  --accent-hover: #ddd;
  --accent-active: #fff;
}`})})]})}function H(t={}){const{wrapper:r}={...f(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(c,{...t})}):c(t)}export{H as default};
