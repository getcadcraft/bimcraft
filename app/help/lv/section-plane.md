---
title: Izgrieziet IFC modeli ar griezuma plakni
summary: Sagrieziet 3D modeli no augšas, priekšpuses vai sāna, vai paturiet tikai to, kas atrodas griezuma kastē vai vairāku kastu tilpumā ar slīpām virsmām, lai redzētu iekšpusi; pārvietojiet griezumu, velkot vai ierakstot, apgrieziet to un izvēlieties, ko griezums rāda.
keywords: griezums, griezuma plakne, griezuma kaste, rokturi, vilkt, robeža, atlases kaste, griezuma kaste (clip), sagriešana, plāna griezums, stāva plāns, fasāde, iekšpuse, iekštelpa, apgriezt, nobīde, griezuma tilpums, kāpņveida griezums, L-veida, slīpums, slīps griezums, slīpa plakne, papildu plakne
from: 6315e71a
---

## Ko jūs darīsiet

Griezieties cauri IFC modelim ar vienu plakni, lai redzētu iekšpusi: no augšas plānam vai no priekšpuses vai sāna šķērsgriezumam caur ēku.

## Soļi

1. Atveriet IFC modeli. Skatiet [Atveriet IFC modeli un apskatiet 3D](topic:open-ifc-model).
2. Noklikšķiniet {{ui:Griezums}} rīkjoslā vai nospiediet {{key:X}}. Modelis tiek sagriezts pusceļā uz augšu, un zem rīkjoslas parādās josla.
3. Izvēlieties, no kurienes griezt: {{ui:Augša}}, {{ui:Priekšpuse}} vai {{ui:Sāns}}. Priekšpuse un Sāns arī pagriež skatu, lai skatītos uz griezumu.
4. Pārvietojiet griezumu: velciet slīdni **Nobīde** vai ierakstiet attālumu metros lodziņā un nospiediet {{key:Enter}}. Varat ierakstīt arī milimetrus, piemēram, `1200 mm`.
5. Noklikšķiniet {{ui:Apgriezt}}, lai paturētu otru griezuma pusi.
6. Noklikšķiniet uz elementa griezumā, lai redzētu tā rekvizītus.
7. Noklikšķiniet {{ui:Izslēgts}}, noklikšķiniet {{ui:Griezums}} vēlreiz vai nospiediet {{key:X}}, lai noņemtu griezumu.

## Griezuma kaste

Noklikšķiniet {{ui:Kaste}} tajā pašā joslā, lai paturētu tikai to, kas atrodas kastē. Katram no {{ui:X}}, {{ui:Y}} un {{ui:Z}} ir divi slīdņi: kur kaste sākas un kur beidzas, metros no modeļa malas. Vērtības rāda blakus tiem.

- {{ui:Kaste ap atlasi}} ietver kasti ap atlasītajiem elementiem un pietuvina tiem. Tā atstāj 300 mm brīvas vietas katrā pusē; mainiet to sadaļā {{ui:Iestatījumi}} › {{ui:BimCraft}} › {{ui:Rezerve ap atlasi}}.
- Ja elementi ir atlasīti, {{ui:Rādīt}} › {{ui:Griezuma kaste ap atlasi}} vai {{key:Shift+X}} dara to pašu vienā solī, pat ja griezums nav ieslēgts.
- **Rokturi** uz kastes pārvieto to ar rādītāju: velciet kvadrātu uz virsmas vidus, lai pārvietotu šo virsmu, vai uz malas vidus, lai pārvietotu divas virsmas, kas tur saskaras, vai uz stūra, lai pārvietotu trīs. Slīdņi seko. Stūris {{ui:Augša}} skatā pārvieto kasti plānā, bet {{ui:Priekšpuse}} vai {{ui:Sāns}} — fasādē.
- {{ui:Viss modelis}} atkal atver kasti uz visu modeli.
- {{ui:Augša}}, {{ui:Priekšpuse}} vai {{ui:Sāns}} atgriež uz vienu plakni.

## Vairāku kastu tilpums, slīpas virsmas un papildu plaknes

Kaste ne vienmēr ir vajadzīgā forma: kāpņveida griezums, L-veida spārns vai griezums gar sienu, kas nav taisna attiecībā pret režģi.

1. Zem {{ui:Kaste}} noklikšķiniet {{ui:Pievienot kasti}}. Griezums tagad patur to, kas atrodas **jebkurā** no kastēm, tātad divas kastes veido kāpņveida vai L-veida tilpumu. Saraksts blakus norāda, kuru kasti mainīs slīdņi ({{ui:Kaste 1}}, {{ui:Kaste 2}}…); {{ui:Noņemt šo kasti}} izņem izvēlēto. Tilpumā var būt līdz 8 kastēm.
2. Atveriet {{ui:Slīpums un plaknes}}, lai veidotu izvēlēto kasti:
   - Izvēlieties {{ui:Virsma}} un ierakstiet, cik tālu tā sliecas katrā virzienā, grādos (līdz 80). Virsma pagriežas ap savu vidu; citas virsmas paliek tur, kur tās novietojuši slīdņi. {{ui:Taisni}} to atgriež.
   - {{ui:Pievienot plakni}} pārgriež kasti ar vēl vienu plakni. {{ui:Virsmas}} ir virziens, kurā nogrieztā puse ir vērsta, grādos no X uz Y; {{ui:Slīpums}} ir cik tālu tas pagriežas augšup (0 vertikālai plaknei, 90 horizontālai); {{ui:Nobīde}} ir cik tālu plakne atrodas no kastes vidus, metros. × to noņem. Kastē var būt līdz 6 papildu plaknēm.
3. Kur tilpums griež cietus ķermeņus, griezuma virsmas tiek aizpildītas kā iepriekš, arī tur, kur divas kastes saskaras kāpnēs.

:::tip
Ja kontūra pazūd un nekas nepaliek, slīpumi vai plaknes neatstāj nekā tajā kastē; josla to saka. Pasliecieties virsmu atpakaļ vai mainiet plaknes nobīdi.
:::

## Ēka, kas pagriezta savā vietā

Daudzi modeļi novieto ēku leņķī pret faila asīm (patiesie ziemeļi, kopīgās koordinātas). Kad sienas iet leņķī, jauns griezums sākas taisni pret ēku: {{ui:Priekšpuse}}, {{ui:Sāns}} un kaste iet pa tās pašas sienām, un griezuma joslā ir ieslēgta {{ui:Taisni attiecībā pret ēku}}. Noklikšķiniet to, lai izmantotu modeļa asis, un vēlreiz, lai atgrieztos (statusa rindā teikts, par cik ēka pagriezta). Ar **Iestatījumi › BimCraft › Ēka, kas pagriezta savā vietā › Kā novietots vietā** griezumi un skati sākas modeļa asīs. Skatiet [Iestatījumi](topic:settings).

## Ko jūs redzēsiet

- **Augša** saglabā to, kas atrodas zem griezuma, tāpēc jūs skatāties lejup telpās. Nobīde tiek mērīta uz augšu no modeļa apakšas.
- **Priekšpuse** saglabā to, kas atrodas aiz griezuma, redzams no priekšpuses; **Sāns** saglabā to, kas atrodas aiz tā, redzams no sāna. Nobīde tiek mērīta no modeļa priekšpuses vai sāna.
- Plāns šaura krāsaina kontūra rāda, kur atrodas plakne.
- Kur plakne griež sienu, plāksni vai citu cietu ķermeni, griezuma virsma ir aizpildīta tumšā krāsā, kā zīmēts griezums. {{ui:Aizpildījums}} joslā to ieslēdz un izslēdz.
- Skata kubs apakšējā labajā stūrī pagriež modeli, lai skatītu griezumu no jebkuras puses.
- Klikšķināšana atlasa to, ko redzat: nogriezto daļu atlasīt nevar.

## Biežākās kļūdas

- **Nekas nemainījās.** Griezums var būt virs jumta vai ārpus modeļa. Velciet slīdni vai ierakstiet mazāku nobīdi.
- **Nobīde atgriezās.** Attālums aiz modeļa tiek pārvietots līdz tā galam, un statusa rindā tas tiek teikts.
- **Problēma parāda tikai daļu no tilpuma.** Problēma (BCF) patur vienu kasti ar slīpajām virsmām un plaknēm: tilpuma pirmo kasti. Statusa rinda to saka, kad izveidojat problēmu.
- **Griezums ir tukšs.** {{ui:Aizpildījums}} joslā ir izslēgts: noklikšķiniet to, lai aizpildītu sienu, plākšņu un citu cietu ķermeņu griezuma virsmas.
- **Aizpildītais griezums izskatās raibs vai trūkst gabala.** Aizpildīšanai vajadzīgi slēgti cietie ķermeņi; elements, kura forma failā nav slēgta (viena lapa, koku lapotne), paliek neaizpildīts, nevis tiek pārkrāsots. Elements, kas sastāv no daļām dažādās krāsās (rāmis un stikls), tiek aizpildīts, kad tā daļas saskaras.
- **Kur ir griezuma josla?** Tā atrodas 3D skata augšdaļā, ko tā griež: 3D pusē {{ui:Sadalīt}} un zem zīmēšanas joslas {{ui:Plāns}}, ja redzams tikai plāns. Īsā skatā tā ritinās.

## Tālāk

- [Rādīt un slēpt stāvus, telpas un malas](topic:storeys-and-spaces)
- [Skatiet DWG vai DXF zīmējumu 3D](topic:dwg-in-3d) — zīmējumiem 3D ir tā pati griezuma plakne
