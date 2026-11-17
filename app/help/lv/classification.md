---
title: Klasifikācijas kodi (Uniclass, OmniClass, UniFormat)
summary: Piešķiriet katram elementam un tipam klasifikācijas kodu, izvēlieties, kuras sistēmas izmanto projekts, meklējiet Uniclass tabulās, kas nāk kopā ar lietotni, ielādējiet sava biroja licencētās tabulas un rādiet kodus specifikācijās. Kodi tiek ierakstīti IFC failā citai programmatūrai.
keywords: klasifikācija, klasificēt, kods, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabula, elementa kods, tipa kods, noklusējuma kods, IfcClassification, IfcClassificationReference, cobie, specifikācijas kolonna, csv, licence, license
from: 222b94cd
---

## Ko jūs darīsiet

Piešķiriet klasifikācijas kodu sienām, grīdām, jumtiem, durvīm, logiem un visam citam modelī, līdz trijās sistēmās blakus: Uniclass, OmniClass un UniFormat. Citas disciplīnas un cita programmatūra paļaujas uz kodu, nevis nosaukumu, tāpēc kodi tiek saglabāti IFC failā kā klasifikācijas atsauces, ko nolasa jebkura BIM programma.

## Piešķirt elementam kodu

1. Atlasiet elementu (vai vairākus) un atveriet **Rekvizīti**. Atveriet sadaļu {{ui:Klasifikācija}}.
2. Ierakstiet kodu tās sistēmas laukā un nospiediet Enter. Ja ir ielādēts kodu saraksts, ierakstiet daļu no koda vai dažus vārdus ("aizkaru siena") un izvēlieties no atbilstībām: koda nosaukums tiek aizpildīts jums.
3. {{ui:Attiecas uz}} norāda, kur kods attiecas: **Šis elements** vai **Tā tips (katrs šī tipa elements)**. Kods sienas tipā tiek nolasīts katrai šī tipa sienai, arī tām, ko zīmēsiet vēlāk.
4. {{ui:Notīrīt}} noņem kodu.

Zem katra koda sadaļa norāda, no kurienes tas nāk: iestatīts šim elementam, no tā tipa vai projekta noklusējums tā klasei. Paša elementa kods vienmēr ir svarīgāks par tipa kodu, bet tipa kods — par noklusējumu. Ja atlasīti vairāki elementi, lodziņš ar uzrakstu "varies" (dažādi) nozīmē, ka tiem nav viena koda; ierakstot vienu, tas tiek piešķirts visiem. Katra izmaiņa ir viens atsaukšanas solis.

Kodu vienmēr var ierakstīt neatkarīgi no tā, vai saraksts ir ielādēts. Ja tas neizskatās pēc šīs sistēmas koda vai nav ielādētajā sarakstā, parādās norāde un kods tiek saglabāts tā, kā ierakstījāt.

## Izvēlēties projekta sistēmas

Atveriet **Dati** modeļa joslā un izvēlieties {{ui:Klasifikācija}} (vai {{ui:Projekta klasifikācija…}} sadaļā Rekvizīti).

- Atzīmējiet sistēmas, ko šis projekts izmanto. Rekvizīti tad rāda tikai tās.
- **Uniclass**: Elementu/funkciju (EF), Sistēmu (Ss) un Produktu (Pr) tabulas nāk kopā ar lietotni. Tās ir © NBS, licencētas ar Creative Commons Attribution-NoDerivatives 4.0 un tiek nodotas tālāk nemainītas. Dialogā redzams katras tabulas izdevums un diena, kad tā nolasīta. Tās nav jaunākās tabulas: izdevējs katru ceturksni izdod jaunas savā vietnē.
- **OmniClass** un **UniFormat**: kodu saraksti netiek piegādāti kopā ar lietotni, jo izdevējs neļauj tabulas nodot bez licences. Ierakstiet jebkuru kodu vai ielādējiet sava biroja licencēto tabulu.
- {{ui:Ielādēt tabulu (CSV)…}} nolasa jūsu biroja tabulu no CSV faila ar kodu kolonnu un nosaukuma kolonnu (galvenes rindu ar nosaukumu Code, Number vai Identifier un Title, Name vai Description atpazīst automātiski; bez tās tiek izmantotas pirmās divas kolonnas). Tabula paliek šajā pārlūkprogrammā un nekad netiek ievietota projekta failā. Failā tiek saglabāti tikai jūsu piešķirtie kodi. Jaunāku Uniclass tabulu varat ielādēt tādā pašā veidā.
- {{ui:Dot elementiem noklusējuma kodu pēc to klases}} katrai sienai, grīdai, jumtam, durvīm, logam, kāpnēm, rampai, kolonnai, sijai un mēbelei piešķir sākotnējo Uniclass kodu no Elementu/funkciju tabulas, ja tam nav sava. Elementi, ko zīmēsiet pēc tam, to saņem arī.
- {{ui:Rādīt kodus kā kolonnas specifikācijās}} pievieno vienu kolonnu katrai sistēmai specifikācijās Durvis, Logi, Sienas pēc tipa un Telpas, kā arī to CSV. Rindā ar vairākiem elementiem rāda "varies" (dažādi), ja to kodi atšķiras.

## Lietderīga informācija

- Noklusējuma kodi ir CadCraft pašu sākotnējā izvēle, nevis izdevēja, un praktiķis tos nav pārbaudījis. Pārbaudiet tos pret sava projekta standartu.
- Failā noklusējums ir īsta klasifikācija ar attiecības nosaukumu "CadCraft default", un tas tiek aizstāts, tiklīdz elementam vai tā tipam tiek piešķirts pats savs kods.
- Kodi, ko jau satur importētais fails, tiek nolasīti un parādīti neatkarīgi no tā, kā cita programma rakstījusi sistēmas nosaukumu. Jebkuras citas sistēmas kodi (biroja pašu) tiek uzskaitīti un atstāti nemainīti.
- Kodi tiek nolasīti atkārtoti, kad fails tiek atvērts vēlreiz, šeit vai citā programmā. Tie tiek pārnesti arī uz IFC5 alfa (IFCX) eksportu, ja šī laboratorijas opcija ir ieslēgta, izņemot kodu, kas iestatīts uz jumta.
- Vēl nav izveidots: koka skats tabulas pārlūkošanai pa līmeņiem, kodi uz stāviem un telpām kā projekta noklusējumi un koda pārbaude pret failā norādīto izdevumu.
