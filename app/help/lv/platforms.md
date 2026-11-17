---
title: Pārlūkprogrammas, ierīces un atmiņa
summary: Kas BimCraft atšķiras starp Chrome, Edge, Firefox un Safari, Mac, Windows un Linux, ar peli, skārienpaneli vai skārienekrānu, un cik lielu failu tas var apstrādāt.
keywords: pārlūkprogramma, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, planšetdators, tālrunis, skāriens, skārienpanelis, atmiņa, lieli faili, webgl, veiktspēja
from: fd8acba1
---

BimCraft darbojas aktuālajās Chrome, Edge, Firefox un Safari versijās, Mac, Windows un Linux. 3D skatam nepieciešams WebGL, ko ir katrā aktuālā pārlūkprogrammā. Skatiet [Pārlūkprogrammas un datori](common:browsers), kas lietotnēm vispār nepieciešams.

## Mapes atvēršana

| Pārlūkprogramma | {{ui:Atvērt mapi}} dara šo | Mapes vilkšana | {{ui:Pēdējās mapes}} |
|---|---|---|---|
| Chrome, Edge | Pārlūkprogrammas mapes izvēle, tad "Vai ļaut vietnei skatīt failus?": noklikšķiniet **Skatīt failus** | Atveras bez jautājuma | Jā, mapēm, kas izvēlētas vai vilktas |
| Firefox | Sistēmas mapes izvēle | Atveras bez jautājuma | Nē |
| Safari | Sistēmas mapes izvēle ar pogu **Augšupielādēt** (nekas netiek augšupielādēts) | Atveras bez jautājuma | Nē |

Aiz priekšplāna: Chrome un Edge izmanto File System Access izvēli un var atcerēties mapi. Firefox un Safari izmanto vecāko mapes izvēli, kas nodod visus mapes failus uzreiz un to nevar atcerēties. Vilkta mape visās pārlūkprogrammās tiek nolasīta pa vienam ierakstam.

:::chromium
Brave un citas Chromium pārlūkprogrammas izslēdz mapes izvēli. BimCraft tad izmanto sistēmas mapes izvēli, un pārlūkprogramma var jautāt "Augšupielādēt *n* failus šai vietnei?". Nekas netiek augšupielādēts; faili tiek nosūtīti tikai uz cilni. Mapes vilkšana ļauj izvairīties no jautājuma.
:::

## Mac, Windows un Linux

- Saīsnes {{key:Mod+S}} un {{key:Mod+Z}} ir Command uz Mac un Ctrl uz Windows un Linux.
- {{key:Ctrl+Shift+F}} (ekrāna režīmi) ir Control visās platformās, arī Mac.
- Failu dialogi un lejupielāžu mape ir jūsu sistēmas pašas.

## Pele, skārienpanelis un skāriens

| Ievade | 3D skats | 2D zīmējums |
|---|---|---|
| Pele | Vilkšana ar kreiso pogu griež, ar labo — panoramē, ritenītis tālina, klikšķis izvēlas | Jebkura vilkšana panoramē, ritenītis tālina, dubultklikšķis pielāgo |
| Skārienpanelis | Klikšķis un vilkšana griež; {{key:Shift}} vai {{key:Mod}} un vilkšana panoramē; divu pirkstu ritināšana vai saspiešana tālina | Klikšķis un vilkšana panoramē; divu pirkstu ritināšana vai saspiešana tālina |
| Skāriens | Viens pirksts griež, divi pirksti saspiež un panoramē, pieskaršanās izvēlas | Viens pirksts panoramē; vēl nav saspiešanas tālummaiņas; pieskarieties {{ui:Pielāgot}} |

Mac skārienpanelī labais klikšķis ir divu pirkstu klikšķis (vai Control-klikšķis). Skatiet [Taustiņi, peles un skārienpaneļi](common:keys).

Planšetdatori un tālruņi var atvērt atsevišķus failus un tos apskatīt, bet ekrāns ir mazs, daudzas mobilās pārlūkprogrammas nevar izvēlēties mapes, un lieli modeļi var neiekļauties to atmiņā. Labāk darbojas dators.

## Lieli faili un atmiņa

Viss, ko BimCraft nolasa, atrodas pārlūkprogrammas cilnes atmiņā. Cik daudz cilne var izmantot, atkarīgs vairāk no pārlūkprogrammas un datora, nevis no BimCraft.

| Fails | Cik tiek nolasīts | Ko sagaidīt |
|---|---|---|
| IFC | Viss fails un 3D ģeometrija, kas no tā veidota | Cik liels — atkarīgs no datora un pārlūkprogrammas; vairāku simtu megabaitu modelis var būt par daudz klēpjdatoram. Virs 1.5 miljoniem trijstūru malas tiek izslēgtas |
| Projekta un ģimenes faili | Aptuveni 40 KB līdz 100 KB neatkarīgi no izmēra | Pat ļoti lieli centrālie modeļi atveras acumirklī, arī no tīkla diska |
| DWG un DXF | Viss fails | Ļoti lieli rasējumi rāda "Šis rasējums ir ļoti liels; redzama tikai daļa." |
| Mapes | Failu saraksts, plus daži kilobaiti katram modelim | Līdz 20,000 failiem |

Ja cilnei beidzas atmiņa, pārlūkprogramma rāda savu kļūdas lapu (piemēram, Chrome rāda "Aw, Snap!"). Aizveriet citas cilnes, pārlādējiet BimCraft un mēģiniet vēlreiz, vai izmantojiet datoru ar vairāk atmiņas.

## Saistītie

- [Tiešsaistē un bezsaistē](topic:online-offline)
- [Problēmu novēršana](topic:troubleshooting)
