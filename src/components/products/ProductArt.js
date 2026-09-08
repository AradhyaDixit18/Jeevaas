/**
 * PRODUCT ART — cohesive, brand-matched inline SVG product illustrations.
 * Self-contained (no external image files), one shared lighting + colour
 * system, so the whole catalogue reads as a single finished set. Decorative
 * only (aria-hidden); each product supplies its own visible name + alt text.
 */

const DEFS = `
<defs>
  <linearGradient id='pbg' x1='0' y1='0' x2='0' y2='1'>
    <stop offset='0' stop-color='#f8fafc'/><stop offset='1' stop-color='#e4eaf3'/>
  </linearGradient>
  <radialGradient id='pglow' cx='0.5' cy='0.36' r='0.62'>
    <stop offset='0' stop-color='#ffffff' stop-opacity='0.95'/><stop offset='1' stop-color='#ffffff' stop-opacity='0'/>
  </radialGradient>
  <linearGradient id='steel' x1='0' y1='0' x2='1' y2='1'>
    <stop offset='0' stop-color='#f1f5f9'/><stop offset='0.34' stop-color='#cbd5e1'/><stop offset='0.56' stop-color='#94a3b8'/><stop offset='0.78' stop-color='#e2e8f0'/><stop offset='1' stop-color='#aeb9c6'/>
  </linearGradient>
  <linearGradient id='steelV' x1='0' y1='0' x2='0' y2='1'>
    <stop offset='0' stop-color='#eef2f7'/><stop offset='0.5' stop-color='#9aa7b6'/><stop offset='1' stop-color='#5b6b7d'/>
  </linearGradient>
  <linearGradient id='chrome' x1='0' y1='0' x2='1' y2='0'>
    <stop offset='0' stop-color='#dbe3ec'/><stop offset='0.22' stop-color='#ffffff'/><stop offset='0.5' stop-color='#9fb0c0'/><stop offset='0.76' stop-color='#6b7b8c'/><stop offset='1' stop-color='#cdd6df'/>
  </linearGradient>
  <linearGradient id='blueP' x1='0' y1='0' x2='0' y2='1'>
    <stop offset='0' stop-color='#60a5fa'/><stop offset='1' stop-color='#1d4ed8'/>
  </linearGradient>
  <linearGradient id='tealP' x1='0' y1='0' x2='0' y2='1'>
    <stop offset='0' stop-color='#2dd4bf'/><stop offset='1' stop-color='#0f766e'/>
  </linearGradient>
  <linearGradient id='whiteP' x1='0' y1='0' x2='0' y2='1'>
    <stop offset='0' stop-color='#ffffff'/><stop offset='1' stop-color='#d7dee7'/>
  </linearGradient>
  <linearGradient id='amberL' x1='0' y1='0' x2='0' y2='1'>
    <stop offset='0' stop-color='#fcd34d'/><stop offset='1' stop-color='#b45309'/>
  </linearGradient>
  <linearGradient id='goldM' x1='0' y1='0' x2='0' y2='1'>
    <stop offset='0' stop-color='#fde68a'/><stop offset='1' stop-color='#b45309'/>
  </linearGradient>
  <filter id='softb' x='-30%' y='-30%' width='160%' height='160%'><feGaussianBlur stdDeviation='7'/></filter>
</defs>`;

const label = (x, y, w, h) =>
  `<g><rect x='${x}' y='${y}' width='${w}' height='${h}' rx='6' fill='#ffffff' opacity='0.92'/>` +
  `<rect x='${x + 10}' y='${y + 12}' width='${w - 20}' height='7' rx='3.5' fill='#2563eb'/>` +
  `<rect x='${x + 10}' y='${y + 26}' width='${w - 40}' height='5' rx='2.5' fill='#94a3b8'/>` +
  `<rect x='${x + 10}' y='${y + 37}' width='${w - 26}' height='5' rx='2.5' fill='#cbd5e1'/></g>`;

const ART = {};

ART.archbar = `
  <path d='M138 342 Q300 188 462 342' fill='none' stroke='#556170' stroke-width='32' stroke-linecap='round'/>
  <path d='M138 342 Q300 188 462 342' fill='none' stroke='url(#steel)' stroke-width='23' stroke-linecap='round'/>
  <path d='M150 332 Q300 205 450 332' fill='none' stroke='#ffffff' stroke-opacity='0.55' stroke-width='4' stroke-linecap='round'/>
  <g fill='#475569'><circle cx='214' cy='300' r='6.5'/><circle cx='258' cy='270' r='6.5'/><circle cx='300' cy='260' r='6.5'/><circle cx='342' cy='270' r='6.5'/><circle cx='386' cy='300' r='6.5'/></g>
  <g fill='none' stroke='url(#steelV)' stroke-width='9' stroke-linecap='round'><path d='M208 348 q-9 26 9 34'/><path d='M300 302 q-9 30 9 40'/><path d='M392 348 q9 26 -9 34'/></g>`;

ART.suture = `
  <rect x='176' y='232' width='248' height='168' rx='18' fill='url(#whiteP)' stroke='#cbd5e1' stroke-width='3'/>
  <rect x='176' y='232' width='248' height='46' rx='18' fill='url(#tealP)'/>
  <rect x='176' y='262' width='248' height='16' fill='url(#tealP)'/>
  ${label(196, 300, 150, 74)}
  <path d='M366 250 a58 58 0 1 0 30 92' fill='none' stroke='url(#steelV)' stroke-width='10' stroke-linecap='round'/>
  <path d='M366 250 q-46 -26 -96 -6 q-44 18 -78 -6' fill='none' stroke='#7c8a99' stroke-width='3.5' stroke-dasharray='2 7' stroke-linecap='round'/>`;

ART.needle = `
  <g transform='rotate(32 300 300)'>
    <rect x='196' y='286' width='150' height='30' rx='12' fill='url(#blueP)'/>
    <rect x='196' y='291' width='150' height='8' rx='4' fill='#ffffff' opacity='0.35'/>
    <rect x='150' y='294' width='52' height='14' rx='6' fill='url(#steelV)'/>
    <rect x='340' y='297' width='118' height='8' rx='4' fill='url(#steel)'/>
    <rect x='452' y='299.5' width='30' height='3' rx='1.5' fill='#64748b'/>
    <rect x='150' y='280' width='24' height='42' rx='8' fill='url(#whiteP)' stroke='#cbd5e1' stroke-width='2'/>
  </g>`;

ART.bottle = `
  <rect x='250' y='196' width='100' height='40' rx='10' fill='url(#blueP)'/>
  <rect x='266' y='176' width='68' height='30' rx='8' fill='url(#steelV)'/>
  <path d='M238 250 q0 -28 28 -28 h68 q28 0 28 28 v168 q0 26 -26 26 h-72 q-26 0 -26 -26 z' fill='#dbeafe' stroke='#93c5fd' stroke-width='3'/>
  <path d='M238 322 v96 q0 26 26 26 h72 q26 0 26 -26 v-96 z' fill='url(#amberL)' opacity='0.9'/>
  <path d='M252 262 q0 -12 12 -12' fill='none' stroke='#ffffff' stroke-width='7' stroke-linecap='round' opacity='0.7'/>
  ${label(258, 300, 84, 92)}`;

ART.jar = `
  <ellipse cx='300' cy='250' rx='120' ry='30' fill='url(#steelV)'/>
  <rect x='180' y='236' width='240' height='40' rx='6' fill='url(#chrome)'/>
  <ellipse cx='300' cy='236' rx='120' ry='28' fill='#e8eef4' stroke='#cbd5e1' stroke-width='2'/>
  <ellipse cx='300' cy='236' rx='96' ry='21' fill='#f8fafc'/>
  <path d='M192 280 q0 150 12 150 h192 q12 0 12 -150 z' fill='url(#whiteP)' stroke='#cbd5e1' stroke-width='3'/>
  ${label(224, 322, 152, 86)}`;

ART.tube = `
  <g transform='rotate(-9 268 320)'>
    <path d='M232 190 l72 0 l0 150 q0 40 -36 40 q-36 0 -36 -40 z' fill='url(#whiteP)' stroke='#cbd5e1' stroke-width='3'/>
    <rect x='250' y='170' width='36' height='28' rx='6' fill='url(#steelV)'/>
    <path d='M232 190 l72 0 l-8 -18 l-56 0 z' fill='#cbd5e1'/>
    <rect x='244' y='250' width='48' height='60' rx='6' fill='#2563eb' opacity='0.9'/>
  </g>
  <g transform='rotate(13 348 320)'>
    <path d='M312 200 l72 0 l0 150 q0 40 -36 40 q-36 0 -36 -40 z' fill='url(#whiteP)' stroke='#cbd5e1' stroke-width='3'/>
    <rect x='330' y='180' width='36' height='28' rx='6' fill='url(#steelV)'/>
    <path d='M312 200 l72 0 l-8 -18 l-56 0 z' fill='#cbd5e1'/>
    <rect x='324' y='260' width='48' height='60' rx='6' fill='#0f766e' opacity='0.9'/>
  </g>`;

ART.burs = `
  <path d='M196 356 h208 l-16 74 q-2 10 -12 10 h-152 q-10 0 -12 -10 z' fill='url(#blueP)'/>
  <rect x='188' y='340' width='224' height='30' rx='10' fill='#1e40af'/>
  <g fill='#e2e8f0'><rect x='222' y='210' width='9' height='150' rx='4'/><rect x='266' y='190' width='9' height='170' rx='4'/><rect x='310' y='200' width='9' height='160' rx='4'/><rect x='354' y='214' width='9' height='146' rx='4'/></g>
  <ellipse cx='226.5' cy='208' rx='16' ry='20' fill='#64748b'/>
  <ellipse cx='270.5' cy='188' rx='17' ry='22' fill='#334155'/>
  <path d='M298 200 h34 l-6 34 h-22 z' fill='#475569'/>
  <ellipse cx='358.5' cy='214' rx='15' ry='18' fill='#94a3b8'/>
  <g fill='#ffffff' opacity='0.5'><circle cx='222' cy='202' r='2'/><circle cx='266' cy='184' r='2'/><circle cx='355' cy='210' r='2'/></g>`;

ART.disc = `
  <rect x='294' y='296' width='12' height='158' rx='6' fill='url(#steelV)'/>
  <circle cx='300' cy='300' r='30' fill='url(#steel)'/>
  <g transform='translate(300 240)'>
    <ellipse rx='150' ry='30' fill='url(#chrome)' stroke='#94a3b8' stroke-width='2'/>
    <ellipse rx='150' ry='30' fill='#cbd5e1' opacity='0.30'/>
    <ellipse rx='34' ry='7' fill='#5b6b7d'/>
    <g fill='#64748b'><circle cx='-150' cy='0' r='4'/><circle cx='150' cy='0' r='4'/><circle cx='-120' cy='17' r='3'/><circle cx='120' cy='17' r='3'/><circle cx='-120' cy='-17' r='3'/><circle cx='120' cy='-17' r='3'/></g>
  </g>`;

ART.wax = `
  <g><path d='M186 388 l120 -34 l108 30 l-120 34 z' fill='#0e7490'/><path d='M186 388 l0 -24 l120 -34 l0 24 z' fill='#155e75'/><path d='M414 384 l0 -24 l-108 -30 l0 24 z' fill='#22a5b8'/></g>
  <g transform='translate(4 -54)'><path d='M190 388 l116 -32 l104 28 l-116 32 z' fill='#db2777'/><path d='M190 388 l0 -24 l116 -32 l0 24 z' fill='#9d174d'/><path d='M410 384 l0 -24 l-104 -28 l0 24 z' fill='#f472b6'/></g>
  <g transform='translate(8 -108)'><path d='M196 388 l110 -30 l100 26 l-110 30 z' fill='#f59e0b'/><path d='M196 388 l0 -24 l110 -30 l0 24 z' fill='#b45309'/><path d='M406 384 l0 -24 l-100 -26 l0 24 z' fill='#fbbf24'/></g>`;

ART.micromotor = `
  <rect x='172' y='300' width='168' height='120' rx='18' fill='url(#whiteP)' stroke='#cbd5e1' stroke-width='3'/>
  <rect x='172' y='300' width='168' height='34' rx='18' fill='url(#blueP)'/>
  <rect x='172' y='320' width='168' height='14' fill='url(#blueP)'/>
  <circle cx='222' cy='378' r='30' fill='#e2e8f0' stroke='#94a3b8' stroke-width='3'/>
  <line x1='222' y1='378' x2='222' y2='354' stroke='#1d4ed8' stroke-width='5' stroke-linecap='round'/>
  <rect x='276' y='356' width='46' height='16' rx='4' fill='#10b981'/>
  <rect x='276' y='388' width='46' height='12' rx='4' fill='#cbd5e1'/>
  <path d='M340 340 q70 -6 84 -70' fill='none' stroke='#64748b' stroke-width='8' stroke-linecap='round'/>
  <g transform='rotate(-24 420 250)'>
    <rect x='388' y='176' width='64' height='150' rx='30' fill='url(#chrome)' stroke='#94a3b8' stroke-width='2'/>
    <rect x='394' y='300' width='52' height='14' rx='7' fill='url(#steelV)'/>
    <rect x='412' y='150' width='16' height='34' rx='6' fill='url(#steelV)'/>
  </g>`;

ART.airotor = `
  <g transform='rotate(-16 300 300)'>
    <rect x='256' y='214' width='60' height='158' rx='30' fill='url(#chrome)' stroke='#94a3b8' stroke-width='2'/>
    <g stroke='#7c8a99' stroke-width='3' opacity='0.55'><line x1='264' y1='300' x2='308' y2='300'/><line x1='264' y1='314' x2='308' y2='314'/><line x1='264' y1='328' x2='308' y2='328'/></g>
    <rect x='250' y='366' width='72' height='22' rx='11' fill='url(#steelV)'/>
    <path d='M266 216 q10 -52 58 -46 q34 4 34 34 q0 22 -24 27' fill='url(#chrome)' stroke='#94a3b8' stroke-width='2'/>
    <circle cx='334' cy='196' r='30' fill='url(#steel)' stroke='#94a3b8' stroke-width='2'/>
    <circle cx='334' cy='196' r='11' fill='#5b6b7d'/>
    <rect x='329' y='196' width='10' height='72' rx='4' fill='url(#steelV)'/>
    <rect x='327' y='250' width='14' height='18' rx='3' fill='#475569'/>
  </g>`;

ART.contra = `
  <g transform='rotate(8 300 300)'>
    <rect x='250' y='250' width='64' height='150' rx='32' fill='url(#chrome)' stroke='#94a3b8' stroke-width='2'/>
    <rect x='246' y='386' width='72' height='22' rx='11' fill='url(#steelV)'/>
    <path d='M262 256 q-14 -60 26 -96 q26 -22 52 4 q18 20 -2 42 l-30 30' fill='url(#chrome)' stroke='#94a3b8' stroke-width='2'/>
    <circle cx='330' cy='176' r='30' fill='url(#steel)' stroke='#94a3b8' stroke-width='2'/>
    <circle cx='330' cy='176' r='12' fill='#5b6b7d'/>
    <rect x='324' y='150' width='12' height='30' rx='5' fill='url(#steelV)'/>
    <g stroke='#7c8a99' stroke-width='3' opacity='0.5'><line x1='258' y1='320' x2='306' y2='320'/><line x1='258' y1='334' x2='306' y2='334'/></g>
  </g>`;

ART.straightHP = `
  <g transform='rotate(-30 300 300)'>
    <rect x='268' y='168' width='64' height='210' rx='30' fill='url(#chrome)' stroke='#94a3b8' stroke-width='2'/>
    <rect x='278' y='150' width='44' height='30' rx='10' fill='url(#steelV)'/>
    <rect x='288' y='120' width='24' height='40' rx='8' fill='url(#steel)'/>
    <rect x='262' y='372' width='76' height='24' rx='12' fill='url(#steelV)'/>
    <g stroke='#7c8a99' stroke-width='3' opacity='0.5'><line x1='276' y1='250' x2='324' y2='250'/><line x1='276' y1='266' x2='324' y2='266'/><line x1='276' y1='282' x2='324' y2='282'/></g>
    <ellipse cx='300' cy='196' rx='22' ry='9' fill='#ffffff' opacity='0.4'/>
  </g>`;

ART.endofile = `
  <rect x='206' y='356' width='188' height='66' rx='14' fill='url(#tealP)'/>
  <rect x='206' y='356' width='188' height='20' rx='10' fill='#ffffff' opacity='0.25'/>
  <g stroke='#64748b' stroke-width='7' stroke-linecap='round'><line x1='236' y1='200' x2='236' y2='366'/><line x1='280' y1='184' x2='280' y2='366'/><line x1='324' y1='196' x2='324' y2='366'/><line x1='368' y1='210' x2='368' y2='366'/></g><g stroke='#cbd5e1' stroke-width='2' stroke-linecap='round'><line x1='234' y1='206' x2='234' y2='360'/><line x1='278' y1='190' x2='278' y2='360'/><line x1='322' y1='202' x2='322' y2='360'/><line x1='366' y1='216' x2='366' y2='360'/></g>
  <rect x='226' y='188' width='20' height='26' rx='6' fill='#ef4444'/>
  <rect x='270' y='172' width='20' height='26' rx='6' fill='#3b82f6'/>
  <rect x='314' y='184' width='20' height='26' rx='6' fill='#f59e0b'/>
  <rect x='358' y='198' width='20' height='26' rx='6' fill='#10b981'/>`;

ART.mallet = `
  <rect x='196' y='236' width='150' height='72' rx='18' fill='url(#chrome)' stroke='#94a3b8' stroke-width='2'/>
  <rect x='196' y='236' width='30' height='72' rx='14' fill='url(#steelV)'/>
  <rect x='316' y='236' width='30' height='72' rx='14' fill='url(#steelV)'/>
  <ellipse cx='271' cy='272' rx='30' ry='30' fill='#ffffff' opacity='0.18'/>
  <rect x='258' y='300' width='30' height='150' rx='12' fill='url(#goldM)'/>
  <rect x='258' y='300' width='10' height='150' rx='5' fill='#ffffff' opacity='0.25'/>
  <rect x='252' y='438' width='42' height='20' rx='8' fill='#92400e'/>`;

ART.pouch = `
  <path d='M206 214 h150 l38 34 v168 q0 12 -12 12 h-176 q-12 0 -12 -12 v-190 q0 -12 12 -12 z' fill='url(#whiteP)' stroke='#cbd5e1' stroke-width='3'/>
  <path d='M356 214 l38 34 h-38 z' fill='#cbd5e1'/>
  <rect x='196' y='214' width='36' height='214' rx='6' fill='#0ea5a4' opacity='0.16'/>
  <g stroke='#0f766e' stroke-width='6' fill='none' opacity='0.7'><path d='M210 250 l0 8'/><path d='M210 274 l0 8'/><path d='M210 298 l0 8'/></g>
  ${label(250, 268, 128, 92)}
  <g fill='#7c3aed'><path d='M250 240 l14 10 l-14 10 z'/><path d='M272 240 l14 10 l-14 10 z'/></g>`;

ART.polish = `
  <rect x='190' y='210' width='220' height='210' rx='16' fill='url(#whiteP)' stroke='#cbd5e1' stroke-width='3'/>
  <rect x='190' y='210' width='220' height='40' rx='16' fill='url(#blueP)'/>
  <rect x='190' y='232' width='220' height='18' fill='url(#blueP)'/>
  <g transform='translate(234 300)'><rect x='-5' y='40' width='10' height='60' rx='4' fill='url(#steelV)'/><path d='M-22 40 q22 -64 44 0 q-22 22 -44 0z' fill='#db2777'/></g>
  <g transform='translate(300 300)'><rect x='-5' y='40' width='10' height='60' rx='4' fill='url(#steelV)'/><path d='M-22 46 q22 -70 44 0 q0 26 -22 26 q-22 0 -22 -26z' fill='#f59e0b'/></g>
  <g transform='translate(366 300)'><rect x='-5' y='40' width='10' height='60' rx='4' fill='url(#steelV)'/><ellipse cx='0' cy='30' rx='22' ry='30' fill='#0f766e'/></g>`;

ART.box = `
  <path d='M300 190 l118 40 l0 128 l-118 42 l-118 -42 l0 -128 z' fill='url(#whiteP)' stroke='#cbd5e1' stroke-width='3'/>
  <path d='M300 190 l118 40 l-118 42 l-118 -42 z' fill='#eef2f7'/>
  <path d='M300 272 l118 -42 l0 128 l-118 42 z' fill='#dbe2ea'/>
  <path d='M182 230 l118 42 l0 128 l-118 -42 z' fill='#e6ecf3'/>
  <g transform='skewY(18)'><rect x='320' y='120' width='60' height='9' rx='4' fill='#94a3b8'/><rect x='320' y='138' width='44' height='7' rx='3' fill='#cbd5e1'/></g>`;

export default function ProductArt({ name, className = "" }) {
  const inner = ART[name] || ART.box;
  const svg =
    DEFS +
    `<rect width='600' height='600' fill='url(#pbg)'/>` +
    `<circle cx='300' cy='250' r='236' fill='url(#pglow)'/>` +
    `<ellipse cx='300' cy='470' rx='166' ry='30' fill='#0f172a' opacity='0.10' filter='url(#softb)'/>` +
    inner;
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export { ART };
