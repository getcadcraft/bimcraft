---
title: Atvērt .pln un .pla projekta failus
summary: Ko BimCraft šobrīd dara ar .pln, .pla, .tpl un .bpn failiem un kā no tiem eksportēt IFC un DWG, lai modelis un rasējumi šeit atvērtos.
keywords: pln, pla, tpl, bpn, projekta fails, arhīvs, sagatave, dublējums, ifc eksports, dwg eksports, tulkotājs, zonas, izkārtojumi
from: 41fb921d
---

## Ko jūs darīsiet

Ievietosiet BimCraft projektu, kas saglabāts kā `.pln` (projekts), `.pla` (arhīvs ar tā bibliotēku), `.tpl` (sagatave) vai `.bpn` (dublējums). Šie ir paši Archicad faili.

## Ko šobrīd var atvērt

- **Paši projekta faili vēl nevar tikt atvērti.** To formāts nav publicēts, un BimCraft to vēl nenolasa. Kad atverat kādu no tiem, BimCraft to paziņo un norāda uz šo lapu.
- **BimCraft pārbauda faila pirmos baitus.** Archicad projekti no versijas 17 sākas ar to pašu īsu signatūru, tāpēc BimCraft var noteikt ar pilnu pārliecību, ka fails ir Archicad projekts. Fails ar Archicad nosaukumu, kas tā nesākas, iespējams, ir pārdēvēts, bojāts vai nāk no vecākas versijas. Pēc signatūras nevar atšķirt projektu, arhīvu un sagatavi.
- **IFC eksports atveras pilnībā**: modelis 3D skatā, stāvi, zonas kā telpas, elementu dati, rekvizītu kopas un klasifikācijas, ar visiem BimCraft rīkiem.
- **DWG eksports atveras** 2D skatā ar tā slāņiem un lapām, kā arī {{ui:3D}}. Lai to rediģētu, izmantojiet {{ui:Rediģēt programmā CadCraft}}.

Vai ievietojiet visu projektu kā vienu zip failu ar tā skatiem, lapām un rekvizītu grupām: skatiet [Atvērt projekta paketi](topic:open-project-bundle).

## Eksportēt IFC (modeli)

1. Atveriet projektu programmā Archicad.
2. Izvēlieties **File > Save As** un kā faila tipu izvēlieties **IFC**.
3. Izvēlieties IFC tulkotāju (Archicad nosaukums kopai ar IFC eksporta iestatījumiem). Viens no **IFC4 Reference View** vai **IFC2X3 Coordination View 2.0** der BimCraft. IFC4X3 arī atveras.
4. Izvēlieties, ko eksportēt: visu projektu vai tikai elementus, kas redzami stāvos, kurus skatāt.
5. Saglabājiet, tad noklikšķiniet uz {{ui:Izvēlēties failu}} BimCraft un izvēlieties `.ifc` failu.

Pirms eksporta pārbaudiet šos tulkotāja iestatījumus:

- **Zonas**: eksportējiet tās, lai telpas nonāktu kā telpas. Noklikšķiniet uz {{ui:Telpas}} BimCraft, lai tās redzētu.
- **Rekvizīti un klasifikācijas**: eksportējiet tos, lai tie rādītos {{ui:Rekvizīti}} un varētu izmantot {{ui:Meklēt}}, {{ui:Krāsa}} un {{ui:Daudzumu kopsummas}}.
- **Vienkāršs `.ifc`**, nevis `.ifczip` vai `.ifcxml`. BimCraft atver tikai vienkāršu `.ifc`.

## Eksportēt DWG (rasējumus)

1. Atveriet plānu, griezumu vai lapu, ko vēlaties.
2. Izvēlieties **File > Save As** un kā faila tipu izvēlieties **DWG**.
3. Izvēlieties DXF-DWG tulkotāju un saglabājiet.
4. Visai lapu kopai saglabājiet lapas no Layout Book vai publicējiet tās kā DWG.
5. Atveriet `.dwg` BimCraft. Rasējumi, ko saistījis eksports, atveras kopā ar to, ja tie atrodas tajā pašā mapē; skatiet [Saistītie rasējumi un attēli](topic:dwg-linked-files).

## Problēmu novēršana

- **"… ir Archicad projekts: tā pirmie baiti to norāda."** Eksportējiet IFC vai DWG, kā aprakstīts iepriekš, un atveriet šo failu.
- **"… nosaukts kā Archicad fails, bet nesākas kā tāds."** Pārbaudiet, no kurienes fails nācis: tas var būt cita veida fails ar jaunu nosaukumu (mēģiniet to atvērt ar tā īsto paplašinājumu), nepabeigta kopija vai projekts no versijas, kas vecāka par 17. Ja varat, atveriet to programmā Archicad un tad eksportējiet IFC vai DWG.
- **Modelis atveras bez telpām.** Zonas netika eksportētas. Ieslēdziet tās IFC tulkotājā un eksportējiet vēlreiz.
- **Atveres nav izgrieztas.** BimCraft to norāda sadaļā **Vēl nav uzzīmēts** panelī {{ui:Fails}}. Eksportējiet vēlreiz; ja tas paliek, atveriet modeli programmā, kas to izveidoja, un pārbaudiet atveres tur.
- **Teksts DWG izskatās citādi.** Eksportā var būt saglabāti fonti, kādu BimCraft nav; BimCraft zīmē tekstu parastā bezserifu fontā.

Skatiet arī [Projekta faila ievietošana 3D caur IFC](topic:rvt-to-ifc) un [Ko BimCraft nolasa no katra formāta](topic:file-formats).
