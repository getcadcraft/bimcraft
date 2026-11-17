---
title: DWG vai DXF zīmējuma skatīšana 3D
summary: Pārslēdziet zīmējuma modeļa telpu uz 3D, lai redzētu augstumus, biezumu, 3D virsmas, tīklus un blokus, pagrieztu skatu ap to, noklikšķinātu objektu, lai redzētu tā rekvizītus, un redzētu, kas vēl nav attēlots.
keywords: 3d, dwg, dxf, zīmējums, modeļa telpa, orbīta, griezums, šķēlums, apgriešana, atlasīt, izvēlēties, rekvizīti, atribūti, identifikators, augstums, biezums, ekstrūzija, 3dface, polyface, tīkls, 3d polilīnija, bloki, skati, perspektīva, paralēls, robežas, ACIS, cietvielas
from: a0c6cd17
---

## Ko jūs darīsiet

Apskatiet zīmējuma modeļa telpu 3D. Līnijas un polilīnijas atrodas savos reālajos augstumos, objekti ar biezumu paceļas kā sienas, un 3D virsmas, tīkli un 3D bloki parādās kā virsmas, ap kurām var pagriezties. Lapas paliek 2D.

## Soļi

1. Atveriet DWG vai DXF. Sk. [Skatīt DWG vai DXF zīmējumu](topic:view-dwg). Tas atveras 3D, ja vien {{ui:Iestatījumi}} › {{ui:BimCraft}} › **Zīmējumi atveras** nenorāda {{ui:Modelis (2D)}}.
2. No 2D noklikšķiniet uz {{ui:3D}} joslā virs zīmējuma vai nospiediet {{key:3}}.
3. Pirmajā reizē pagaidiet mirkli: statusa rindā rādās „Zīmējuma veidošana 3D…”, tad — cik līniju un virsmu tas rāda.
4. Pagriezieties, panoramējiet un tuviniet (sk. tabulu zemāk).
5. Noklikšķiniet uz skata otrajā joslā: {{ui:Izometrija}}, {{ui:Augša}}, {{ui:Apakša}}, {{ui:Priekšpuse}}, {{ui:Aizmugure}}, {{ui:Kreisā puse}} vai {{ui:Labā puse}}.
6. Noklikšķiniet uz {{ui:Perspektīva}}, lai pārslēgtos starp perspektīvu un paralēlu skatu.
7. Noklikšķiniet uz {{ui:Robežas}} vai nospiediet {{key:F}}, lai atkal redzētu visu zīmējumu.
8. Noklikšķiniet uz {{ui:3D}} vēlreiz, nospiediet {{key:3}}, vai noklikšķiniet uz {{ui:Modelis}} vai lapas cilnes, lai atgrieztos 2D.

## Ko jums vajadzētu redzēt

- Modeļa telpa 3D, Z augšup, zīmējuma pašu krāsās. Virsmas ir nedaudz gaišākas nekā to malas.
- Slāņi, ko izslēdzat sadaļā {{ui:Slāņi}}, pazūd arī no 3D skata.
- Labajā pusē: līniju un virsmu skaits, zīmējuma izmērs X, Y un Z, **Tikai 2D skatā** un **Vēl nav attēlots**.

## Griezums ar griezuma plakni

Noklikšķiniet uz {{ui:Griezums}} 3D joslā vai nospiediet {{key:X}}. Josla zem tā darbojas tāpat kā IFC modeļiem (sk. [Griezt IFC modeli ar griezuma plakni](topic:section-plane)): griezt no {{ui:Augša}}, {{ui:Priekšpuse}} vai {{ui:Sāns}}, velciet vai ierakstiet nobīdi — šeit zīmējuma pašās vienībās — un {{ui:Apgriezt}}, lai paturētu otru pusi. To, ko plakne nogriež, nevar atlasīt. Atgriešanās 2D noņem griezumu.

## Apskatīt objekta rekvizītus

Noklikšķiniet uz objekta 3D skatā. Tas kļūst atlases krāsā, un {{ui:Rekvizīti}} parāda, ko fails par to saka: tā tipu, slāni, krāsu, līnijtipu un identifikatoru, tad tā paša datus, piemēram, līnijas sākumu, galu un garumu, apļa centru un rādiusu, 3D virsmas stūrus vai bloka atsauces bloku, ievietošanas punktu, mērogu, pagriezienu un atribūtu vērtības.

- Bloka atsauce tiek atlasīta kopumā, arī tajā ietvertie bloki.
- Klikšķis dažus pikseļus no līnijas atlasa līniju.
- Turiet {{key:Mod}} un noklikšķiniet, lai atlasītu vairāk objektu vai izņemtu vienu; {{ui:Rekvizīti}} tad saskaita tos pēc tipa.
- {{key:Esc}} vai klikšķis tukšā vietā notīra atlasi.
- Objektus slāņos, ko izslēdzāt, nevar atlasīt.

## Pārvietošanās

:::mouse
| Lai | Dariet šādi |
|---|---|
| Pagrieztu | Velciet ar vidējo pogu vai ar kreiso pogu |
| Panoramētu | Velciet ar labo pogu vai turiet {{key:Shift}} un velciet |
| Tuvinātu | Ritiniet ritenīti; tas tuvina uz to, kas atrodas zem rādītāja |
| Redzētu visu | {{ui:Robežas}} vai {{key:F}} |
| Skatītos no sāna | Noklikšķiniet uz skata kuba virsmas, malas vai stūra apakšējā labajā stūrī |
:::

Skata kubu var nomainīt ar asu ikonu vai paslēpt sadaļā {{ui:Iestatījumi}}. Sk. [BimCraft iestatījumi](topic:settings).

:::mac mouse
Uz skārienpaliktņa pavelciet ar diviem pirkstiem, lai pagrieztu, turiet {{key:Shift}} un pavelciet, lai panoramētu, un savelciet pirkstus, lai tuvinātu.
:::

:::touch
Velciet ar vienu pirkstu, lai pagrieztu. Savelciet divus pirkstus, lai tuvinātu, un pārvietojiet tos kopā, lai panoramētu.
:::

## Ko zīmē 3D

| Zīmējumā | 3D |
|---|---|
| Līnijas, 3D polilīnijas | Savos reālajos augstumos |
| Polilīnijas, apļi, loki, elipses | Savā plaknē, savā atzīmē, sasvērtas, kad zīmējums tās sasver |
| Biezums uz līnijām, polilīnijām, apļiem un lokiem | Sienas šajā augstumā; apļi ir slēgti augšā un apakšā |
| 3D virsmas, polyface tīkli, polygon tīkli | Nokrāsotas virsmas ar redzamām malām |
| Bloki | Novietoti, pagriezti un mērogoti 3D, arī ietvertie bloki |
| Šrafējumi | To kontūras |
| Vienkārša 2D līniju grafika | Plakana, kur tā zīmēta |

## Tikai 2D skatā

Teksts, daudzrindu teksts un bloku redzamie atribūti tiek zīmēti 3D, savā plaknē savā augstumā, un klikšķis uz tiem tos atlasa. Platas polilīnijas rāda savu platumu kā plakanu joslu. Daudzvadu norādes, attēli un šrafējuma rakstu paraugi tiek skaitīti sadaļā **Tikai 2D skatā**: skatiet tos cilnē {{ui:Modelis}} vai lapās.

## Vēl nav attēlots

Cietvielas un virsmas, kas saglabātas kā ACIS ķermeņi (3D cietvielas, ķermeņi, reģioni un virsmas), un apakšdalītie tīkli ir uzskaitīti sadaļā **Vēl nav attēlots** ar to skaitu. Tās tiek izlaistas, nevis aptuveni rekonstruētas.

## Biežākās kļūdas

- **Viss izskatās plakans.** Zīmējums ir 2D: tā līnijām nav augstuma. Noklikšķiniet uz {{ui:Priekšpuse}}, lai pārbaudītu; plakans zīmējums rādās kā līnija.
- **Cietvielu modelis nerāda neko.** Cietvielu modelētājā veidotās cietvielas ir ACIS ķermeņi, kas uzskaitīti sadaļā **Vēl nav attēlots**. Eksportējiet modeli kā IFC vai kā 3D virsmas no programmas, kurā tas izveidots.
- **Zīmējums ir sīks kopums vidū.** Kaut kas tālu modeļa telpā, piemēram, vecs plāna eksemplārs, padara robežas lielas. Tuviniet ar ritenīti tur, kur vēlaties skatīties.

## Tālāk

- [Darbs ar slāņiem un lapām](topic:dwg-layers-sheets)
- [Griezt IFC modeli ar griezuma plakni](topic:section-plane)
