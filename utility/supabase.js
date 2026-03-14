/* ===== SUPABASE.JS — Shared Supabase client + SVG mock fallbacks =====
   Loaded explicitly on pages that use Supabase data (index.html, work.html).
   NOT loaded via boot.js — add <script> after the Supabase CDN, before page JS.
   Requires: window.supabase (Supabase CDN UMD) already loaded.
   ================================================================= */

(function () {
  'use strict';
  window.RYC = window.RYC || {};

  /* ── Supabase client (publishable key — safe to expose) ── */
  if (window.supabase) {
    window.RYC.sb = window.supabase.createClient(
      'https://nymxhmekhiwifkaccafc.supabase.co',
      'sb_publishable_jCxzAlUEg0AFFqU9nxJ3hQ_nJOy_hwB'
    );
  }

  /* ── Slug helper — maps title to SVG fallback key ── */
  window.RYC.toSlug = function (title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  /* ── SVG fallbacks (shown until image_url is set in Supabase) ── */
  var MOCK = {};

  /* Terra & Tide — sustainable homeware e-commerce */
  MOCK['terra-tide'] = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="300" fill="#f7f5f2"/>
    <rect width="480" height="44" fill="#f7f5f2"/>
    <rect x="0" y="43" width="480" height="1" fill="#e2dcd5"/>
    <rect x="24" y="16" width="82" height="13" rx="2" fill="#1c1a18"/>
    <rect x="178" y="20" width="34" height="7" rx="2" fill="#c4bdb5"/>
    <rect x="224" y="20" width="34" height="7" rx="2" fill="#c4bdb5"/>
    <rect x="270" y="20" width="34" height="7" rx="2" fill="#c4bdb5"/>
    <circle cx="434" cy="22" r="7" fill="#e2dcd5"/>
    <circle cx="454" cy="22" r="7" fill="#e2dcd5"/>
    <rect x="0" y="44" width="480" height="152" fill="#b5a895"/>
    <rect x="0" y="44" width="480" height="152" fill="#1c1a18" opacity="0.26"/>
    <ellipse cx="358" cy="114" rx="56" ry="74" fill="#8a7a6a" opacity="0.3" transform="rotate(-14 358 114)"/>
    <rect x="32" y="80" width="202" height="24" rx="3" fill="#fff" opacity="0.92"/>
    <rect x="32" y="114" width="148" height="9" rx="2" fill="#fff" opacity="0.48"/>
    <rect x="32" y="132" width="108" height="9" rx="2" fill="#fff" opacity="0.34"/>
    <rect x="32" y="154" width="98" height="26" rx="13" fill="#1c1a18"/>
    <rect x="4"   y="204" width="113" height="88" rx="5" fill="#ede7df"/>
    <rect x="123" y="204" width="113" height="88" rx="5" fill="#e2dcd5"/>
    <rect x="242" y="204" width="113" height="88" rx="5" fill="#ede7df"/>
    <rect x="361" y="204" width="115" height="88" rx="5" fill="#ddd5c9"/>
    <ellipse cx="60"  cy="242" rx="26" ry="30" fill="#c8b8a8" opacity="0.6"/>
    <ellipse cx="179" cy="242" rx="26" ry="30" fill="#b8a898" opacity="0.6"/>
    <ellipse cx="298" cy="242" rx="26" ry="30" fill="#c8b8a8" opacity="0.6"/>
    <ellipse cx="418" cy="242" rx="26" ry="30" fill="#b0a090" opacity="0.6"/>
    <rect x="8"   y="294" width="55" height="5" rx="2" fill="#9e9289" opacity="0.58"/>
    <rect x="127" y="294" width="55" height="5" rx="2" fill="#9e9289" opacity="0.58"/>
    <rect x="246" y="294" width="55" height="5" rx="2" fill="#9e9289" opacity="0.58"/>
    <rect x="365" y="294" width="55" height="5" rx="2" fill="#9e9289" opacity="0.58"/>
  </svg>`;

  /* Nexus Analytics — dark SaaS dashboard */
  MOCK['nexus-analytics'] = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="300" fill="#0d1117"/>
    <rect width="480" height="40" fill="#161b22"/>
    <circle cx="20" cy="20" r="6" fill="#5b7fff"/>
    <rect x="36" y="14" width="78" height="12" rx="3" fill="#21262d"/>
    <rect x="436" y="11" width="28" height="18" rx="4" fill="#21262d"/>
    <rect width="52" height="260" y="40" fill="#161b22"/>
    <rect x="13" y="56" width="26" height="26" rx="5" fill="#5b7fff" opacity="0.85"/>
    <rect x="14" y="92"  width="24" height="24" rx="4" fill="#21262d"/>
    <rect x="14" y="124" width="24" height="24" rx="4" fill="#21262d"/>
    <rect x="14" y="156" width="24" height="24" rx="4" fill="#21262d"/>
    <rect x="64" y="52" width="116" height="56" rx="7" fill="#1c2128"/>
    <rect x="76" y="64" width="52" height="7" rx="2" fill="#30363d"/>
    <rect x="76" y="78" width="72" height="18" rx="3" fill="#e6edf3" opacity="0.88"/>
    <rect x="190" y="52" width="116" height="56" rx="7" fill="#1c2128"/>
    <rect x="202" y="64" width="52" height="7" rx="2" fill="#30363d"/>
    <rect x="202" y="78" width="72" height="18" rx="3" fill="#e6edf3" opacity="0.88"/>
    <rect x="316" y="52" width="152" height="56" rx="7" fill="#1c2128"/>
    <rect x="328" y="64" width="52" height="7" rx="2" fill="#30363d"/>
    <rect x="328" y="78" width="90" height="18" rx="3" fill="#e6edf3" opacity="0.88"/>
    <rect x="64" y="120" width="266" height="164" rx="7" fill="#1c2128"/>
    <line x1="82" y1="254" x2="312" y2="254" stroke="#21262d" stroke-width="1"/>
    <line x1="82" y1="227" x2="312" y2="227" stroke="#21262d" stroke-width="1"/>
    <line x1="82" y1="200" x2="312" y2="200" stroke="#21262d" stroke-width="1"/>
    <line x1="82" y1="173" x2="312" y2="173" stroke="#21262d" stroke-width="1"/>
    <polygon points="82,248 116,234 152,242 188,214 224,220 260,195 296,180 312,174 312,255 82,255" fill="#5b7fff" opacity="0.17"/>
    <polyline points="82,248 116,234 152,242 188,214 224,220 260,195 296,180 312,174" fill="none" stroke="#5b7fff" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="260" cy="195" r="4" fill="#5b7fff"/>
    <circle cx="260" cy="195" r="8" fill="#5b7fff" opacity="0.22"/>
    <rect x="340" y="120" width="128" height="164" rx="7" fill="#1c2128"/>
    <rect x="352" y="134" width="56" height="8" rx="2" fill="#30363d"/>
    <rect x="352" y="152" width="100" height="18" rx="3" fill="#21262d"/>
    <rect x="352" y="176" width="100" height="18" rx="3" fill="#21262d"/>
    <rect x="352" y="200" width="100" height="18" rx="3" fill="#21262d"/>
    <rect x="352" y="224" width="78"  height="18" rx="3" fill="#21262d"/>
    <rect x="352" y="248" width="90"  height="18" rx="3" fill="#21262d"/>
  </svg>`;

  /* Vertex Capital — editorial VC site */
  MOCK['vertex-capital'] = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="300" fill="#090909"/>
    <rect width="480" height="54" fill="#090909"/>
    <rect x="0" y="53" width="480" height="1" fill="#1e1e1e"/>
    <rect x="28" y="20" width="50" height="16" rx="2" fill="#f1f1f1"/>
    <rect x="330" y="23" width="36" height="9" rx="2" fill="#2e2e2e"/>
    <rect x="376" y="23" width="36" height="9" rx="2" fill="#2e2e2e"/>
    <rect x="430" y="15" width="22" height="22" rx="11" fill="#f1f1f1"/>
    <rect x="28" y="74"  width="296" height="40" rx="4" fill="#f1f1f1" opacity="0.92"/>
    <rect x="28" y="122" width="220" height="22" rx="4" fill="#f1f1f1" opacity="0.36"/>
    <rect x="28" y="152" width="248" height="14" rx="3" fill="#f1f1f1" opacity="0.18"/>
    <rect x="28" y="172" width="186" height="14" rx="3" fill="#f1f1f1" opacity="0.18"/>
    <rect x="0" y="196" width="480" height="1" fill="#1e1e1e"/>
    <rect x="28" y="212" width="420" height="1" fill="#1c1c1c"/>
    <rect x="28" y="216" width="136" height="10" rx="2" fill="#444"/>
    <rect x="382" y="216" width="66" height="10" rx="2" fill="#2a2a2a"/>
    <rect x="28" y="237" width="420" height="1" fill="#1c1c1c"/>
    <rect x="28" y="241" width="168" height="10" rx="2" fill="#444"/>
    <rect x="382" y="241" width="66" height="10" rx="2" fill="#2a2a2a"/>
    <rect x="28" y="260" width="420" height="1" fill="#1c1c1c"/>
    <rect x="28" y="264" width="148" height="10" rx="2" fill="#444"/>
    <rect x="382" y="264" width="66" height="10" rx="2" fill="#2a2a2a"/>
    <rect x="28" y="283" width="420" height="1" fill="#1c1c1c"/>
    <rect x="28" y="287" width="112" height="10" rx="2" fill="#333"/>
    <rect x="382" y="287" width="66" height="10" rx="2" fill="#2a2a2a"/>
  </svg>`;

  /* MedSync Pro — health dashboard */
  MOCK['medsync-pro'] = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="300" fill="#f4f6f9"/>
    <rect width="54" height="300" fill="#fff"/>
    <rect x="54" y="0" width="1" height="300" fill="#e5e9ef"/>
    <rect x="14" y="12" width="26" height="26" rx="6" fill="#dcfce7"/>
    <circle cx="27" cy="25" r="8" fill="#16a34a"/>
    <rect x="16" y="52"  width="22" height="22" rx="4" fill="#16a34a" opacity="0.2"/>
    <rect x="16" y="82"  width="22" height="22" rx="4" fill="#e5e9ef"/>
    <rect x="16" y="112" width="22" height="22" rx="4" fill="#e5e9ef"/>
    <rect x="16" y="142" width="22" height="22" rx="4" fill="#e5e9ef"/>
    <rect x="54" y="0" width="426" height="46" fill="#fff"/>
    <rect x="54" y="46" width="426" height="1" fill="#e5e9ef"/>
    <rect x="68" y="16" width="82" height="14" rx="3" fill="#111827" opacity="0.75"/>
    <rect x="336" y="13" width="34" height="22" rx="11" fill="#dcfce7"/>
    <rect x="380" y="13" width="34" height="22" rx="7"  fill="#e5e9ef"/>
    <rect x="420" y="13" width="48" height="22" rx="11" fill="#16a34a"/>
    <rect x="66"  y="58" width="94" height="52" rx="7" fill="#fff"/>
    <rect x="78"  y="70" width="48" height="7"  rx="2" fill="#9ca3af"/>
    <rect x="78"  y="83" width="66" height="17" rx="3" fill="#111827" opacity="0.8"/>
    <rect x="170" y="58" width="94" height="52" rx="7" fill="#fff"/>
    <rect x="182" y="70" width="48" height="7"  rx="2" fill="#9ca3af"/>
    <rect x="182" y="83" width="66" height="17" rx="3" fill="#16a34a"/>
    <rect x="274" y="58" width="94" height="52" rx="7" fill="#fff"/>
    <rect x="286" y="70" width="48" height="7"  rx="2" fill="#9ca3af"/>
    <rect x="286" y="83" width="66" height="17" rx="3" fill="#111827" opacity="0.8"/>
    <rect x="378" y="58" width="96" height="52" rx="7" fill="#fff"/>
    <rect x="390" y="70" width="48" height="7"  rx="2" fill="#9ca3af"/>
    <rect x="390" y="83" width="66" height="17" rx="3" fill="#111827" opacity="0.8"/>
    <rect x="66" y="122" width="248" height="162" rx="8" fill="#fff"/>
    <rect x="80" y="136" width="80" height="10" rx="3" fill="#111827" opacity="0.7"/>
    <rect x="80"  y="155" width="28" height="28" rx="4" fill="#f3f4f6"/>
    <rect x="114" y="155" width="28" height="28" rx="4" fill="#f3f4f6"/>
    <rect x="148" y="155" width="28" height="28" rx="4" fill="#dcfce7"/>
    <rect x="182" y="155" width="28" height="28" rx="4" fill="#f3f4f6"/>
    <rect x="216" y="155" width="28" height="28" rx="4" fill="#16a34a"/>
    <rect x="250" y="155" width="28" height="28" rx="4" fill="#f3f4f6"/>
    <rect x="284" y="155" width="28" height="28" rx="4" fill="#f3f4f6"/>
    <rect x="80"  y="191" width="28" height="28" rx="4" fill="#f3f4f6"/>
    <rect x="114" y="191" width="28" height="28" rx="4" fill="#f3f4f6"/>
    <rect x="148" y="191" width="28" height="28" rx="4" fill="#f3f4f6"/>
    <rect x="182" y="191" width="28" height="28" rx="4" fill="#dcfce7"/>
    <rect x="216" y="191" width="28" height="28" rx="4" fill="#f3f4f6"/>
    <rect x="324" y="122" width="140" height="162" rx="8" fill="#fff"/>
    <rect x="336" y="136" width="60" height="10" rx="3" fill="#111827" opacity="0.7"/>
    <circle cx="350" cy="165" r="8" fill="#e5e9ef"/>
    <rect x="364" y="159" width="66" height="8" rx="2" fill="#374151" opacity="0.8"/>
    <rect x="364" y="171" width="44" height="5" rx="2" fill="#9ca3af"/>
    <circle cx="350" cy="193" r="8" fill="#e5e9ef"/>
    <rect x="364" y="187" width="66" height="8" rx="2" fill="#374151" opacity="0.8"/>
    <rect x="364" y="199" width="44" height="5" rx="2" fill="#9ca3af"/>
    <circle cx="350" cy="221" r="8" fill="#dcfce7"/>
    <rect x="364" y="215" width="66" height="8" rx="2" fill="#374151" opacity="0.8"/>
    <rect x="364" y="227" width="44" height="5" rx="2" fill="#9ca3af"/>
  </svg>`;

  /* Soulflow Yoga — warm wellness platform */
  MOCK['soulflow-yoga'] = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="300" fill="#faf7f2"/>
    <rect width="480" height="44" fill="#faf7f2"/>
    <rect x="0" y="43" width="480" height="1" fill="#e8dfd4"/>
    <rect x="24" y="14" width="90" height="14" rx="2" fill="#8b6f4e"/>
    <rect x="190" y="20" width="32" height="6" rx="2" fill="#c4b49a"/>
    <rect x="234" y="20" width="32" height="6" rx="2" fill="#c4b49a"/>
    <rect x="278" y="20" width="32" height="6" rx="2" fill="#c4b49a"/>
    <rect x="420" y="14" width="40" height="20" rx="10" fill="#8b6f4e"/>
    <rect x="0" y="44" width="480" height="156" fill="#e8dfd4"/>
    <circle cx="360" cy="130" r="60" fill="#d4c4a8" opacity="0.4"/>
    <circle cx="380" cy="110" r="40" fill="#c4b49a" opacity="0.3"/>
    <rect x="36" y="78" width="200" height="18" rx="2" fill="#5c4a32" opacity="0.85"/>
    <rect x="36" y="104" width="260" height="10" rx="2" fill="#5c4a32" opacity="0.5"/>
    <rect x="36" y="122" width="180" height="10" rx="2" fill="#5c4a32" opacity="0.35"/>
    <rect x="36" y="148" width="100" height="28" rx="14" fill="#8b6f4e"/>
    <rect x="16" y="210" width="140" height="78" rx="8" fill="#fff"/>
    <rect x="28" y="222" width="60" height="8" rx="2" fill="#8b6f4e"/>
    <rect x="28" y="238" width="100" height="6" rx="2" fill="#c4b49a"/>
    <rect x="28" y="252" width="80" height="6" rx="2" fill="#c4b49a"/>
    <rect x="28" y="268" width="60" height="12" rx="6" fill="#e8dfd4"/>
    <rect x="168" y="210" width="140" height="78" rx="8" fill="#fff"/>
    <rect x="180" y="222" width="60" height="8" rx="2" fill="#8b6f4e"/>
    <rect x="180" y="238" width="100" height="6" rx="2" fill="#c4b49a"/>
    <rect x="180" y="252" width="80" height="6" rx="2" fill="#c4b49a"/>
    <rect x="180" y="268" width="60" height="12" rx="6" fill="#e8dfd4"/>
    <rect x="320" y="210" width="140" height="78" rx="8" fill="#fff"/>
    <rect x="332" y="222" width="60" height="8" rx="2" fill="#8b6f4e"/>
    <rect x="332" y="238" width="100" height="6" rx="2" fill="#c4b49a"/>
    <rect x="332" y="252" width="80" height="6" rx="2" fill="#c4b49a"/>
    <rect x="332" y="268" width="60" height="12" rx="6" fill="#e8dfd4"/>
  </svg>`;

  /* Atelier Studio — bold dark creative agency */
  MOCK['atelier-studio'] = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="480" height="300" fill="#0a0a0a"/>
    <rect width="480" height="40" fill="#0a0a0a"/>
    <rect x="0" y="39" width="480" height="1" fill="#222"/>
    <rect x="24" y="14" width="72" height="12" rx="2" fill="#fff"/>
    <rect x="340" y="16" width="28" height="6" rx="2" fill="#666"/>
    <rect x="380" y="16" width="28" height="6" rx="2" fill="#666"/>
    <rect x="420" y="16" width="28" height="6" rx="2" fill="#666"/>
    <rect x="24" y="64" width="432" height="36" rx="2" fill="#fff" opacity="0.95"/>
    <rect x="24" y="108" width="380" height="28" rx="2" fill="#fff" opacity="0.85"/>
    <rect x="24" y="148" width="200" height="8" rx="2" fill="#666"/>
    <rect x="24" y="164" width="160" height="8" rx="2" fill="#444"/>
    <rect x="24" y="188" width="90" height="26" rx="13" fill="#ff4d2d"/>
    <rect x="0" y="230" width="240" height="70" rx="0" fill="#161616"/>
    <rect x="12" y="242" width="100" height="10" rx="2" fill="#fff" opacity="0.8"/>
    <rect x="12" y="260" width="140" height="6" rx="2" fill="#666"/>
    <rect x="12" y="274" width="60" height="6" rx="2" fill="#ff4d2d" opacity="0.7"/>
    <rect x="240" y="230" width="240" height="70" rx="0" fill="#1a1a1a"/>
    <rect x="252" y="242" width="100" height="10" rx="2" fill="#fff" opacity="0.8"/>
    <rect x="252" y="260" width="140" height="6" rx="2" fill="#666"/>
    <rect x="252" y="274" width="60" height="6" rx="2" fill="#ff4d2d" opacity="0.7"/>
  </svg>`;

  window.RYC.MOCK = MOCK;
})();
