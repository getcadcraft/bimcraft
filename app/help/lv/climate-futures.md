---
title: "Klimata nākotne: 2050. un 2080. gada plūdi, karstums un meža ugunsgrēki"
summary: Atkārtoti palaidiet plūdu, enerģijas gada un meža ugunsgrēka izvērtējumu ar nākotnes klimatu (scenāriji SSP2-4.5 un SSP5-8.5, gadi 2050 un 2080) no klimata datu paketes, rādot tagadni blakus nākotnei.
keywords: klimats, klimata izmaiņas, nākotne, 2050, 2080, ssp, cmip6, scenārijs, jūras līmenis, plūdi, karstums, laika fails, epw, morph, energyplus, meža ugunsgrēks, savvaļas ugunsgrēks, ugunsgrēka laika apstākļi
from: 224ecd08
---

Klimata skaitļi nāk no **datu paketes**, nevis no lietotnes. Ieslēdziet papildinājumu {{ui:Klimata nākotne}} sadaļā Iestatījumi › Papildinājumi vai ielādējiet savu paketes failu blokā {{ui:Klimata nākotne}}.

:::warning
Paketes, kas nāk kopā ar papildinājumu, ir **paraugs**: trīs vietas (Denvera, Maiami, Johannesburga), viens klimata modelis, pieci gadi katrā 20 gadu periodā. Tā ir paredzēta, lai izmēģinātu rīkus, **nevis projektēšanai**. Panelis to rāda treknā drukā, kamēr tas tiek lietots. Pilnu paketi (daudzi modeļi, visi gadi, vairāk vietu) veido ar `tools/climate/build-pack.mjs` no NASA NEX-GDDP-CMIP6 datiem.
:::

## Izvēlēties nākotni

Kreisā paneļa {{ui:Apdraudējuma atskaņošana}} izvēlieties **Scenāriju** (SSP2-4.5, vidējais ceļš, vai SSP5-8.5, augstas emisijas) un **Gadu** (2050 nozīmē 2041–2060, 2080 nozīmē 2071–2090; abi salīdzinājumā ar 1995–2014). **Vieta** ir paketes vieta, kas vistuvāk modeļa vietai (IfcSite platuma un garuma grādi), vai tā, ko izvēlaties. Ja vieta ir tālu no visām, tiek izmantotas paketes globālās vidējās izmaiņas, un panelis to norāda.

## Plūdi: tagadne blakus nākotnei

Kad scenārijs izvēlēts, iestatiet **Plūdu veidu**: piekrastes (pievieno jūras līmeņa paaugstināšanos), upju vai stipras lietusgāzes (dziļāk par izmaiņām visslapjākās dienas nokrišņos) vai abus. Nospiediet Palaist: plūdi notiek kā iepriekš, un tabulā blakus rāda tagadnes un nākotnes plūdus (ūdens līmeni, telpas, kurās ieplūst ūdens, dziļāko ūdeni). Zem tabulas uzskaitīti pieņēmumi:

- piekrastes līmenis paceļas par visu jūras līmeņa paaugstināšanos; viļņi un vētras uzplūdi netiek mainīti;
- upes plūsma paaugstinās tieši proporcionāli visslapjākās dienas nokrišņiem, un dziļums seko plūsmai pakāpē 0,6 (Manninga vienādojums platai gultnei);
- abas daļas vienkārši saskaitītas.

## Karstums: nākotnes laika fails

Izvēlieties veidu {{ui:Karstums: nākotnes laika fails}}, izvēlieties tagadnes `.epw` laika failu un nospiediet {{ui:Izveidot nākotnes laika failu}}. Fails tiek **morfēts** pa mēnešiem ar publicēto nobīdes un stiepšanas metodi (Belcher, Hacker un Powell 2005): mēneša vidējā temperatūra sasilst par paketes izmaiņu, karstās pēcpusdienas — par dienas maksimuma izmaiņu, aukstās naktis — par dienas minimuma izmaiņu; relatīvais mitrums mainās par paketes izmaiņu, un rasas punkts tiek aprēķināts no jauna. Spiediens un vējš paliek tādi paši. Tabulā salīdzina vidējo un karstāko temperatūru, 0,4 % dzesēšanas un 99,6 % apkures projektēšanas temperatūras, stundas pie 30 °C un 35 °C un dienu-grādus.

{{ui:Saglabāt nākotnes laika failu}} to saglabā; {{ui:Izmantot to enerģijas pārbaudē}} nodod to EnergyPlus pārbaudei (cilne Enerģija). Nākotnes fails ir tas pats tipiskais gads, tikai siltāks: tas nepievieno jaunus karstuma vilnus.

## Enerģijas gads: tagadne blakus nākotnei

EnergyPlus pārbaudē (papildinājums ar savu dzinēju cilnē Enerģija) izvēlieties tagadnes laika failu, tad scenāriju un gadu blokā {{ui:Klimata nākotne}} un nospiediet {{ui:Simulēt gadu: tagadne un nākotne}}: gads tiek palaists ar tagadnes failu un tā morfēto nākotni, un katras telpas apkure un dzesēšana tiek uzskaitītas blakus.

## Meža ugunsgrēka iedarbība (tikai izvērtējums)

Izvēlieties veidu {{ui:Meža ugunsgrēka iedarbība (tikai izvērtējums)}}: tuvākā veģetācija, slīpums no tās līdz ēkai un attālums līdz tai. Rezultāts ir josla no ļoti zemas līdz ekstrēmai, tagadnē un nākotnē.

:::warning
**Tikai izvērtējums.** Tā ir mūsu pašu relatīvā skala, lai noteiktu, vai vietai nepieciešams pilns ugunsgrēka novērtējums, nevis būvnormatīva vērtējums vai savvaļas ugunsgrēka uzbrukuma līmenis (bushfire attack level). Tā reizina veģetācijas svaru, slīpuma koeficientu (uguns ātrums aptuveni divkāršojas katrus 10 grādus augšup, skaitot līdz 20 grādiem), attāluma koeficientu (10 m dalīts ar attālumu, ne vairāk kā 1) un paketes izmaiņu Kanādas ugunsgrēka laika apstākļu indeksā.
:::

## Kur skaitļi iegūti

- **Temperatūra, mitrums, saules spožums, nokrišņi, ugunsgrēka laika apstākļi:** NASA NEX-GDDP-CMIP6, ikdienas samazinātās mēroga CMIP6 modeļa izvade. Katra modeļa izvade ir CC BY 4.0. Ugunsgrēka laika apstākļu izmaiņa ir Kanādas ugunsgrēka laika apstākļu indekss, aprēķināts katrai dienai no modeļa laika apstākļiem (ar dienas mitrumu pusdienlaika mitruma vietā).
- **Jūras līmeņa paaugstināšanās:** IPCC AR6 globālais vidējais (ne vietējais; zemes pacelšanās vai iegremdēšanās tajā nav iekļauta), ja vien pakete nesatur vietējos skaitļus.
- Pakete nosauc savu avotu, licenci un datumu; panelis tos parāda.
