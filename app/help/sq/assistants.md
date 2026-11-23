---
title: Lejo një asistent AI të punojë me modelin tënd
summary: Ndiz asistentët te Cilësimet, që një asistent në kompjuterin tënd të gjejë elementë, të lexojë vetitë e tyre, t'i izolojë në pamje dhe të vizatojë mure, dyer, dritare, dysheme, nivele dhe rrjeta, përmes CadCraft Studio. Janë të fikur derisa t'i ndezësh.
keywords: ai, asistent, mcp, skriptë, automatizim, studio, gjej elementë, izolo, veti, leje, shkëput, aktivitet, vizato mure, shto dyer, shto dritare, nivele, rrjeta, dysheme, zhbëj, ruaj, rresht komandash, cli, pa dritare, përdorimi me asistentët AI
from: 66d72742
---

## Çfarë do të mësosh

Si t'i lejosh një asistenti AI (çdo asistent që flet MCP) të shikojë modelin IFC që ke hapur dhe të vizatojë në të, çfarë mund dhe s'mund të bëjë, dhe si ta ndalosh.

## Çfarë mund të bëjë një asistent në BimCraft

| Kërkon të | Çfarë ndodh | Nevojitet |
|---|---|---|
| Gjen elementë | Merr një listë elementesh sipas klasës, katit, emrit ose vlerës së një vetie, ashtu si **Gjej** bën | Lexo |
| Lexon vetitë | Merr atributet, tipin, grupet e vetive dhe sasitë e një elementi, ashtu si tregon **Vetitë** | Lexo |
| Përshkruan modelin, liston muret | Merr nivelet, muret, dyert, dritaret, dhomat, dysheme, rrjetat dhe kolonat, si dhe skajet, tipin dhe lartësinë e secilit mur | Lexo |
| Izolon, transparent, fsheh ose shfaq | Pamja 3D ndryshon sikur të kishe përdorur menynë {{ui:Shfaq}} | Ndrysho pamjen dhe vizato |
| Vizaton mure, dyer, dritare, dysheme, nivele ose vija rrjete | Modeli ndryshon sikur të kishe përdorur veglat {{ui:Vizato}}: muret lidhen, dhomat, dyshemetë dhe çatitë ndjekin | Ndrysho pamjen dhe vizato |
| Ndryshon një emër ose vlerë vetie | Emri, Përshkrimi, Lloji i objektit ose Etiketa e një elementi, ose një vlerë vetie. Një vlerë që ndan me elementë të tjerë kopjohet së pari për të; një vlerë e tipit të tij ndryshon vetëm kur asistenti e thotë, sepse çdo element i atij tipi ndjek | Ndrysho pamjen dhe vizato |
| Zhvendos, fshin, ndryshon mure, dyer dhe dritare | Elementët zhvendosen ose fshihen bashkë me ato që mbajnë; muret e vizatuara me veglat {{ui:Vizato}} ndryshojnë sipas skajeve ose tipit, dyert dhe dritaret sipas vendit, madhësisë ose tipit, dhe dhomat dhe lidhjet ndjekin | Ndrysho pamjen dhe vizato |
| Konfiguron, rregullon dhe lexon një tabelë | "Tabelë dyerash sipas katit, me klasifikimin kundër zjarrit dhe harduerin": asistenti emëron tabelën, kolonat e saj (një veti ose etiketë bëhet kolonë) dhe grupimin e saj; BimCraft e mbush nga modeli dhe e shtron, duke marrë nga standardi i zyrës atë që asistenti nuk e ka thënë. Konfigurimi shtohet te lista jote e tabelave. Çdo rresht që merr kthen emrat e elementeve të tij, që ai t'i përzgjedhë | Lexo për të lexuar; Ndrysho pamjen dhe vizato për të ruajtur një konfigurim |
| Eksporton një tabelë | CSV, Excel ose tekst i ndarë me tab për ta ngjitur në Google Sheets (asgjë nuk dërgohet te Google) | Eksporto |
| Lexon dhe cakton përfundimet e dhomave | Llojet e përfundimeve, përfundimi i dyshemesë, i murit dhe i tavanit të secilës dhomë, zonat; sipërfaqet, numri i pllakave dhe vëllimet e shtresës së bazës vijnë pastaj nga tabelat e përfundimeve | Lexo; Ndrysho pamjen dhe vizato për ta caktuar |
| Përzgjedh elementë, zhbën hapat e veta | Elementët zgjidhen në pamje; hapi i tij i fundit anulohet | Ndrysho pamjen dhe vizato |
| Ruan | Një skedar i ri IFC me çdo ndryshim, siç e bën {{ui:Ruaj si IFC}} (origjinali nuk ndryshohet kurrë) | Ruaj |
| Eksporton USD | Modelet e hapura si OpenUSD (.usda, .usdc ose .usdz), siç i shkruan {{ui:USD}} në shiritin e veglave | Eksporto |
| Renderon një foto, ekzekuton radhën e renderimit | Një foto e pamjes 3D, siç e bën dialogu {{ui:Renderim}} me cilësimet e renderimit, përveç nëse kërkon të tjera, ose foto me cilësi të lartë të shtuara në radhën e dialogut dhe të renderuara njëra pas tjetrës (radha kërkon WebGPU). Asgjë në model nuk ndryshon ([Renderon një foto](topic:render)) | Eksporto |

Çdo ndryshim që bën një asistent është një hap në **Ndryshimet**, i emëruar "Asistent: …" (për shembull "Asistent: shto 4 mure"), ndaj {{key:Mod+Z}} anulon tërë veprimin e tij, dhe mund të shohësh kujt i përket hapi. Brenda dritares s'mund të hapë skedarë: ti e hap modelin; ai punon me atë që është i hapur.

## Ndiz

Asistentët arrijnë te BimCraft përmes CadCraft Studio në kompjuterin tënd; shfletuesi i thjeshtë nuk ka rrugë hyrjeje.

1. Hap {{ui:Cilësimet}} dhe zgjidh skedën **BimCraft**.
2. Nën **Asistentët**, shëno **Lejo asistentët AI dhe skriptet të përdorin BimCraft**.
3. **Lexo** është shënuar për ty. Shëno edhe **Ndrysho pamjen dhe vizato** nëse asistenti mund të izolojë dhe fshehë elementë dhe të vizatojë, dhe **Ruaj** nëse mund ta ruajë modelin si skedar të ri.
4. Lidh asistentin në Studio (Studio tregon adresën dhe cilësimet për t'i ngjitur te ai).

## Ndërsa një asistent është i lidhur

Një shënim në krye të panelit djathtas tregon cili asistent është i lidhur dhe çfarë mund të bëjë. Kliko {{ui:Shkëput}} për ta mbyllur sesionin menjëherë; duhet të lidhet sërish për të vazhduar.

**Aktiviteti**, nën **Asistentët** te Cilësimet, shfaq çdo thirrje që bëri asistenti, më e reja e para, me informacion nëse funksionoi.

:::tip
Pyet me fjalë të thjeshta, për shembull "izolo muret e jashtme në Nivel 1", "cilat dyer s'kanë klasifikim kundër zjarrit?" ose "vizato një dhomë 6 x 4 metra në Nivel 1 me një derë në murin jugor". Asistenti gjen elementët dhe i shfaq në pamjen tënde, ose i viz.
:::

## Pa dritare: skriptet dhe rreshti i komandave

Të njëjtat vegla vizatimi funksionojnë te skedarët IFC në dosjet që emërton ti, pa dritare të hapur: serveri MCP i CadCraft dhe rreshti i komandave mund të fillojnë një ndërtesë të re ose të hapin një skedar IFC, ta përshkruajnë, të shtojnë mure, dyer, dritare, dysheme, nivele dhe rrjeta, ta zhbëjnë dhe ta ruajnë si skedar të ri `.ifc`. Katër vegla të tjera i përshtaten skripteve: `ifc_batch` ekzekuton deri në 200 hapa redaktimi si një (ose gjithçka ose asgjë: një zhbërje e kthen tërë grupin prapa, dhe një hap i refuzuar zhbën pjesën tjetër dhe e emëron hapin); `ifc_describe` liston nivelet dhe çdo mur me dyert dhe dritaret e tij; `ifc_render_png` shkruan një foto kontrolli me hije të sheshta të modelit (pa materiale, tekstura ose hije) pa dritare; `usd_export` shkruan `.usda`, `.usdc` ose `.usdz`. Në rreshtin e komandave, `cadcraft bim script.json --from model.ifc -o out.ifc` ekzekuton një skriptë me hapa, dhe `--usd`, `--png` dhe `--plan` shkruajnë një skedar USD, një foto ose një planimetri nga e njëjta ekzekutim. Ti vendos cilat dosje mund të përdorë dhe nëse mund të ndryshojë ose të ruajë diçka.

## Fike

Hiq shenjën te **Lejo asistentët AI dhe skriptet të përdorin BimCraft**. Çdo asistent shkëputet menjëherë, dhe cilësimi ruhet për herën tjetër.

## Shih edhe

- [Receta për asistentët AI](common:assistants-recipes): shembuj të punuar, secili me veglat që thërret.
- [Gjej elementë sipas klasës, emrit ose vetisë](topic:find)
- [Fshih, izolo dhe shiko përmes elementëve](topic:hide-and-isolate)
- [Cilësimet e BimCraft](topic:settings)
