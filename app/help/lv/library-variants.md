---
title: Novietot un aizstāt bibliotēkas vienumu, kam ir varianti
summary: Daži bibliotēkas vienumi nāk vairākos izmēros vai opcijās. Izvēlieties variantu, pirms to novietojat, skatiet, kāds variants ir novietotais vienums, aizstājiet to ar citu variantu vienā klikšķī un saglabājiet to, kad vienums tiek atjaunināts.
keywords: variants, varianti, izmēri, opcijas, konfigurācija, bibliotēka, librarycraft, novietot, aizstāt, konfigurators, saime, tips, atjaunināt, pieslēgvietas
from: c05f0af3
---

## Ko jūs darīsiet

Novietojiet bibliotēkas vienumu izmērā vai opcijā, kas jums vajadzīga, un vēlāk mainiet savu domu, neizvietojot to no jauna. Vienumam ar variantiem bibliotēkā ir viens ieraksts (viens nosaukums, viena licence, viena versija) ar tabulu variantiem, kādos tas pieejams: piemēram, stiprinājuma plāksne mazā, vidējā un lielā izmērā vai tā pati plāksne bez caurumiem.

## Izvēlieties variantu un novietojiet to

1. Atveriet cilni {{ui:Bibliotēka}} un noklikšķiniet uz vienuma kartītes.
2. Zem nosaukuma izvēle {{ui:Variants}} uzskaita katru variantu ar tā izmēru. Vienuma noklusējums ir izvēlēts pirmais.
3. Izvēlieties vienu. Plāns, izmērs un 3D ķermeņa rinda seko jūsu izvēlei.
4. Noklikšķiniet uz {{ui:Novietot plānā}} (vai {{ui:Novietot modelī}} 3D skatā) un novietojiet to kā jebkuru vienumu: skatiet [Novietot aprīkojumu un mēbeles no bibliotēkas](topic:place-from-library).

Novietotais elements tiek nosaukts pēc vienuma un varianta, piemēram, *Stiprinājuma plāksne — Lielā*, lai specifikācija {{ui:Aprīkojums}} un koks tos atšķirtu. Katrs variants ir savs IFC tips: viena un tā paša varianta novietošana divreiz izmanto vienu tipu, cits variants saņem savu.

## Skatiet, kāds variants ir novietotais vienums

Atlasiet elementu. Sadaļā {{ui:Rekvizīti}} lodziņā **Bibliotēkas vienums** ir rindiņa **Variants**. IFC to glabā `CadCraft_LibraryItem`: `Variant` (varianta ID), `VariantName` un `VariantValues` (opciju vērtības kā teksts), lai citas programmas to varētu nolasīt.

## Aizstāt ar citu variantu

1. Atlasiet novietoto vienumu un noklikšķiniet uz {{ui:Aizstāt vienumu…}} lodziņā **Bibliotēkas vienums**. Atveras cilne {{ui:Bibliotēka}}.
2. Augšdaļā **Citi varianti no** *šā vienuma* uzskaita katru variantu ar izmēru. Novietotais ir atzīmēts, un to nevar izvēlēties.
3. Noklikšķiniet uz {{ui:Aizstāt uz …}} variantam, kuru vēlaties.

Elements saglabā savu vietu, pagriezienu, stāvu, vienuma numuru, daudzumu un piezīmes; tā tips, forma un dati mainās uz citu variantu. {{key:Mod+Z}} atgriež iepriekšējo. Jūs joprojām varat izvēlēties jebkuru citu vienumu no saraksta zemāk, kā agrāk: skatiet [Aizstāt novietoto vienumu un atjaunināt vienumus no bibliotēkas](topic:swap-and-update-library-items).

## Kopēšana, ielīmēšana un atjauninājumi

- Novietota varianta kopija ir tas pats variants: šajā modelī un citā modelī, kas atvērts tajā pašā pārlūka cilnē, caur {{ui:Kopēt}} un {{ui:Ielīmēt}}.
- **Atjauninājumi** saglabā variantu: ja jaunākajā vienuma versijā tas vēl ir, novietojums kļūst par šī varianta versiju jaunajā versijā. Ja jaunajā versijā tā vairs nav, novietojums saņem vienuma noklusējuma variantu.

## Noderīga informācija

- Tikai daži bibliotēkas vienumi ir ar variantiem. Kartītes to neteic; {{ui:Variants}} izvēli redzat, kad to atverat.
- Vienums var uzskaitīt **pieslēgvietas** (savienojuma punktus caurulēm un gaisa vadiem) katram variantam. Bibliotēkas cilnē redzams, cik tādu ir variantam. Tās vēl **netiek** ierakstītas IFC, kad vienumu novieto no bibliotēkas cilnes.
- Variants bez 3D ķermeņa tiek novietots ar aizstājēja kasti, kā jebkurš 2D simbols.
- Izmēri izvēlē ir milimetros, kā tos raksta bibliotēka.
