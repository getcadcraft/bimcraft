---
title: Lër një asistent AI të punojë me modelin tënd
summary: Ndiz asistentët te Cilësimet, që një asistent në kompjuterin tënd të gjejë elementë, të lexojë vetitë e tyre, t'i izolojë në pamje dhe të vizatojë mure, dyer, dritare, dysheme, nivele dhe rrjete, përmes CadCraft Studio. Joaktiv derisa ta ndezësh.
keywords: ai, asistent, mcp, skript, automatizim, studio, gjej elementë, izolo, veti, leje, shkëput, aktivitet, vizato mure, shto dyer, shto dritare, nivele, rrjete, dysheme, zhbëj, ruaj, rresht komande, cli, pa dritare, përdor me asistentë AI
from: c5ee595b
---

## Çfarë do të mësosh

Si ta lësh një asistent AI (çdo asistent që flet MCP) të shikojë modelin IFC që ke hapur dhe të vizatojë në të, çfarë mund dhe s'mund të bëjë, dhe si ta ndalosh.

## Çfarë mund të bëjë një asistent në BimCraft

| Kërkon të | Çfarë ndodh | Kërkon |
|---|---|---|
| Gjejë elementë | Merr një listë elementesh sipas klasës, katit, emrit ose vlerës së një vetie, ashtu si e bën **Gjej** | Lexim |
| Lexojë vetitë | Merr atributet, tipin, grupet e vetive dhe sasitë e një elementi, ashtu si i shfaq **Vetitë** | Lexim |
| Përshkruajë modelin, të listojë muret | Merr nivelet, muret, dyert, dritaret, dhomat, dyshemetë, rrjetet dhe kolonat, dhe skajet, tipin dhe lartësinë e secilit mur | Lexim |
| Izolojë, shikojë përmes, fshehë ose shfaqë | Pamja 3D ndryshon sikur të kishe përdorur menunë {{ui:Shfaq}} | Ndrysho pamjen dhe vizato |
| Vizatojë mure, dyer, dritare, dysheme, nivele ose vija rrjeti | Modeli ndryshon sikur të kishe përdorur veglat {{ui:Vizato}}: muret bashkohen, dhomat, dysheme dhe çatitë ndjekin | Ndrysho pamjen dhe vizato |
| Ndryshojë një emër ose një vlerë vetie | Emri, Përshkrimi, Lloji i objektit ose Etiketa e një elementi, ose vlera e një vetie. Një vlerë që ndan me elementë të tjerë kopjohet së pari; një vlerë e tipit të tij ndryshon vetëm kur asistenti e thotë, sepse çdo element i tipit ndjek | Ndrysho pamjen dhe vizato |
| Zhvendosë, fshijë, ndryshojë mure, dyer dhe dritare | Elementët zhvendosen ose fshihen bashkë me ato që mbajnë; muret e vizatuar me veglat {{ui:Vizato}} ndryshojnë sipas skajeve ose tipit, dyert dhe dritaret sipas vendit, madhësisë ose tipit, dhe dhomat dhe bashkimet ndjekin | Ndrysho pamjen dhe vizato |
| Përgatitë, rregullojë dhe lexojë një tabelë | "Një tabelë dyerash sipas katit, me klasë zjarri dhe ferramenta": asistenti emëron tabelën, kolonat e saj (një veti ose etiketë bëhet kolonë) dhe grupimin; BimCraft e plotëson nga modeli dhe e vendos në faqe, duke marrë nga standardi i zyrës atë që asistenti nuk e ka thënë. Përgatitja hyn në listën tënde të Tabelave. Çdo rresht që kthehet emëron elementët e vet, kështu që mund t'i zgjedhë | Lexim për të lexuar; Ndrysho pamjen dhe vizato për të ruajtur një përgatitje |
| Eksportojë një tabelë | CSV, Excel, ose tekst i ndarë me tab për ta ngjitur në Google Sheets (asgjë nuk dërgohet te Google) | Eksport |
| Lexojë dhe caktojë përfundimet e dhomave | Llojet e përfundimeve, përfundimin e dyshemesë, murit dhe tavanit të çdo dhome, zonat; sipërfaqet, numri i pllakave dhe vëllimet e substratit vijnë pastaj nga tabelat e përfundimeve | Lexim; Ndrysho pamjen dhe vizato për ta caktuar |
| Zgjedhë elementë, zhbëjë hapat e vet | Elementët zgjidhen në pamje; hapi i fundit i tij merret mbrapsht | Ndrysho pamjen dhe vizato |
| Ruajë | Një skedar i ri IFC me çdo ndryshim, ashtu si e bën {{ui:Ruaj si IFC}} (origjinali nuk ndryshohet kurrë) | Ruaj |
| Eksportojë USD | Modelet e hapura si OpenUSD (.usda, .usdc ose .usdz), ashtu si e shkruan {{ui:USD}} në shiritin e veglave | Eksport |
| Renderojë një foto, ekzekutojë radhën e renderimit | Një foto e pamjes 3D, ashtu si e bën dialogu {{ui:Renderim}} me cilësimet e tua të renderimit, përveç nëse kërkon të tjera, ose foto me cilësi të lartë të shtuara në radhën e dialogut, dhe të renderuara një pas tjetrës (radha kërkon WebGPU). Asgjë në model nuk ndryshon ([Rendero një foto](topic:render)) | Eksport |

Çdo ndryshim që bën një asistent është një hap në **Ndryshimet**, i emëruar "Asistent: …" (për shembull "Asistent: shto 4 mure"), kështu që {{key:Mod+Z}} merr mbrapsht gjithë veprimin e tij, dhe sheh kujt ishte hapi. Në dritare nuk mund të hapë skedarë: ti hap modelin; ai punon me atë që është hapur.

## Ndiz

Asistentët arrijnë te BimCraft përmes CadCraft Studio në kompjuterin tënd; shfletuesi i thjeshtë nuk ka rrugë hyrjeje.

1. Hap {{ui:Cilësimet}} dhe zgjidh skedën **BimCraft**.
2. Nën **Asistentët**, shëno **Lejo asistentët AI dhe skriptet të përdorin BimCraft**.
3. **Lexo** është shënuar për ty. Shëno edhe **Ndrysho pamjen dhe vizato** nëse asistenti mund të izolojë dhe fshehë elementë dhe të vizatojë, dhe **Ruaj** nëse mund ta ruajë modelin si skedar të ri.
4. Lidh asistentin në Studio (Studio shfaq adresën dhe cilësimet për ta ngjitur te ai).

## Kur një asistent është i lidhur

Një shënim në krye të panelit të djathtë thotë cili asistent është i lidhur dhe çfarë mund të bëjë. Kliko {{ui:Shkëput}} për të përfunduar sesionin e tij menjëherë; duhet të lidhet përsëri për të vazhduar.

**Aktiviteti**, nën **Asistentët** në Cilësimet, liston çdo thirrje që bëri asistenti, më të reja të parat, me atë nëse funksionoi.

:::tip
Pyet me fjalë të thjeshta, për shembull "izolo muret e jashtëm në Nivelin 1", "cilat dyer nuk kanë klasë zjarri?" ose "vizato një dhomë 6 me 4 metra në Nivelin 1 me një derë në murin jugor". Asistenti i gjen elementët dhe i shfaq në pamjen tënde, ose i vizaton.
:::

## Pa dritare: skriptet dhe rreshti i komandës

Të njëjtat vegla vizatimi funksionojnë mbi skedarët IFC në dosje që emëron, pa dritare të hapur: MCP server dhe rreshti i komandës i CadCraft mund të nisin një ndërtesë të re ose të hapin një skedar IFC, ta përshkruajnë, të shtojnë mure, dyer, dritare, dysheme, nivele dhe rrjete, të zhbëjnë dhe ta ruajnë si skedar të ri `.ifc`. Ti vendos cilat dosje mund të përdorë dhe nëse mund të ndryshojë ose ruajë diçka.

## Fike

Hiq shenjën te **Lejo asistentët AI dhe skriptet të përdorin BimCraft**. Çdo asistent shkëputet menjëherë, dhe cilësimi ruhet për herën tjetër.

## Shih edhe

- [Receta për asistentët AI](common:assistants-recipes): shembuj të punuar, secili me veglat që thërret.
- [Gjej elementë sipas klasës, emrit ose vetisë](topic:find)
- [Fshih, izolo dhe shiko përmes elementeve](topic:hide-and-isolate)
- [Cilësimet e BimCraft](topic:settings)
