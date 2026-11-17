---
title: Vlerëso ngarkesat e ngrohjes dhe ftohjes
summary: Humbja e nxehtësisë e secilës dhomë, ngrohja gjatë një viti sipas ditë-shkallëve dhe kulmi i ftohjes, nga ajo që e kufizon në model dhe vlera U e çdo elementi, me çdo hyrje të shfaqur. Mjet projektimi, jo llogaritje përputhshmërie.
keywords: energji, ngrohje, ftohje, humbje nxehtësie, ngarkesë nxehtësie, ngarkesë ftohjeje, vlerë U, transmetim termik, ditë-shkallë, hdd, ventilim, ndërrime ajri, fitime të brendshme, fitim diellor, lambda, përçueshmëri, izolim, projektim fillestar, analizë, dhoma, hapësira
from: ec312d20
---

Te {{ui:Drita e ditës}}, pas {{ui:Llogarit}}, hap {{ui:Ngarkesat e ngrohjes dhe ftohjes}} dhe kliko {{ui:Llogarit ngarkesat}}. Çdo dhomë merr **humbjen e nxehtësisë** në një ditë projektimi të ftohtë, **ngrohjen gjatë një viti** dhe **kulmin e ftohjes** në një ditë të nxehtë. Asgjë nuk dërgohet në rrjet, dhe asgjë nuk ndryshon në model përveç nëse shkruan një vlerë U.

:::warning
Ky është **një mjet projektimi, jo një llogaritje përputhshmërie**: një vlerësim në gjendje të qëndrueshme me çdo hyrje në ekran. **Nuk është** metoda ISO 52016-1, nuk është simulim dhe nuk është certifikatë energjetike; nuk përcakton madhësinë e kaldajave, pompave të nxehtësisë apo ftohësve. Kontrollo rezultatet, dhe përcakto madhësinë e pajisjeve me një inxhinier.
:::

## Çfarë kufizon çdo dhomë

BimCraft e gjen vetë në model, kështu që IFC i çdo programi funksionon (nuk ka nevojë për kufijtë e hapësirës që disa programe i eksportojnë). Nga çdo pjesë të sipërfaqes së vetë dhomës shikon drejt jashtë:

- muri, dritarja, dera, dyshemeja, çatia, mbulesa, muri perde ose trau i parë që takon **kufizon** atë pjesë;
- menjëherë pas atij elementi, ose **një dhomë tjetër** (llogaritet si fqinje, në të njëjtën temperaturë: pa humbje), ose **asgjë** (jashtë), ose, nën një dysheme në katin më të ulët, **toka**;
- një hapje e hapur drejt një dhome tjetër llogaritet si fqinje; një pjesë që nuk takon asgjë fare (brenda 1.5 m anash ose poshtë, 8 m lart) listohet nën dhomën dhe lihet jashtë.

Dritaret dhe dyert e marrin madhësinë e tyre nga IFC (gjerësi totale × lartësi) nga muri ku ndodhen. Kliko një dhomë në tabelë për të parë çdo element që e kufizon, me sipërfaqen e tij, vlerën U dhe nga erdhi vlera U.

## Vlerat U

Për çdo element, BimCraft përdor këtë radhitje:

1. **Vlera U e vetë IFC-së**: `ThermalTransmittance` në grupin e vetive të zakonshme të elementit (për shembull `Pset_WallCommon`) ose të tipit të tij. Shumica e programeve të projektimit mund ta shkruajnë.
2. **Shtresat e materialit**: 1 ÷ (rezistenca e sipërfaqes së brendshme + trashësia e çdo shtrese ÷ përçueshmëria e saj λ + rezistenca e sipërfaqes së jashtme), me rezistencat e zakonshme të sipërfaqes (0.13 dhe 0.04 m²K/W për muret; 0.10 lart dhe 0.17 poshtë brenda). Përçueshmëri tipike për të filluar (lesh mineral 0.035, tullë 0.77, beton 1.4…); te {{ui:Përçueshmëria e materialeve}} shkruaj atë të prodhuesit, dhe çdo vlerë U nga ato shtresa ndjek.
3. **Një vlerë tipike** (muret 0.3, çatitë 0.2, dyshemetë 0.25, dritaret 1.4, dyert 1.6 W/m²K), e shënuar si e tillë: shkruaj tënden.

Një vlerë U e shkruar në detajet e një dhome shkruhet në grupin e vetive të zakonshme të elementit si `ThermalTransmittance` (një hap; {{key:Mod+Z}} e zhbën). Nëse disa elemente ndajnë atë grup (një lloj muri, për shembull), të gjithë ndryshojnë bashkë, dhe rreshti i statusit thotë sa janë.

## Ngrohja

- **Humbja e nxehtësisë** = Σ U × A × (brenda − jashtë) për gjithçka që del jashtë + Σ U × A × (brenda − toka) për dyshemetë mbi tokë + 0.335 × ndërrime ajri në orë × vëllimi i dhomës × (brenda − jashtë). 0.335 Wh për m³ për kelvin është dendësia e ajrit (1.2 kg/m³) shumëzuar me kapacitetin e tij termik (1005 J/kgK).
- **Ngrohja gjatë një viti** = (humbja e dhomës për shkallë ndaj jashtës, përmes strukturës dhe ajrit, plus humbja e saj në tokë e shkallëzuar në të njëjtën diferencë) × **ditë-shkallët** × 24 ÷ 1000, në kWh. Shkruaj ditë-shkallët për vendin, ose {{ui:Lexo ditë-shkallë nga një CSV…}} (një rresht për ditë ose muaj; numri i fundit në çdo rresht mblidhet). Përdor ditë-shkallë me temperaturën bazë që përdor burimi yt: ajo bazë tashmë e merr parasysh nxehtësinë falas të njerëzve, dritave dhe diellit.

## Ftohja

**Kulmi i ftohjes** = nxehtësia përmes strukturës dhe ajrit në temperaturën e projektimit të verës + njerëzit (sipërfaqja për person × nxehtësia për person) + ndriçimi dhe pajisjet për m² dysheme + **dielli**: kulmi i {{ui:Dielli nëpër dritare në një datë}} për atë dhomë. Llogarit diellin së pari, në një ditë të nxehtë; deri atëherë dielli llogaritet 0 dhe seksioni e thotë këtë. Kulmi i çdo pjese mblidhet bashkë edhe nëse bien në orë të ndryshme, gjë që e tejkalon pak.

## Çfarë lë jashtë

- Metodat mujore dhe orare ISO 52016-1 (një standard i paguar), nxehtësinë e ruajtur në masën e ndërtesës, urat termike, performancën e sistemeve të ngrohjes dhe ftohjes, dhe skedarët e klimës.
- Dhomat ngjitur merren në të njëjtën temperaturë; hapësirat pa ngrohje nuk modelohen.

Shih edhe [Vlerëso dritën ditore në çdo dhomë](topic:daylight-factor).
