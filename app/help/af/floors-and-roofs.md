---
title: Vertrekke, vloere, plafonne en dakke
summary: Vertrekke verskyn soos die mure hulle toesluit; gee 'n vertrek of die hele gebou 'n vloer en 'n plafon, en sit 'n walmdak of gewelddak op die mure. Alles volg wanneer die mure beweeg.
keywords: vertrek, vertrekke, ruimte, oppervlakte, omtrek, vloer, plaat, ondervloer, plafon, dak, walmdak, gewel-dak, helling, oorhang, dakrand, nok, vallei, 6/12
from: 1fb1813c
---

## Wat jy gaan doen

Voltooi die skil van die gebou. Vertrekke kom vanself uit die mure; vloere, plafonne en die dak neem elk een klik. Omdat hulle uit die mure gevind word, volg hulle wanneer die mure beweeg.

## Vertrekke

Elke ruimte wat deur getekende mure toegesluit is, is 'n vertrek. Dit verskyn sodra die laaste muur dit toesluit, met 'n nommer (101, 102 … op die eerste vlak, 201 … op die volgende) en 'n naam (**Vertrek 1**, **Vertrek 2** …), en sy oppervlakte wys in die middel daarvan op die plan.

- Met {{ui:Kies}} aan, klik binne 'n vertrek om dit te kies. In **Eienskappe** verander sy **Naam** (byvoorbeeld `Kitchen`) en **Nommer**; sy oppervlakte en omtrek word gewys.
- Skrap 'n muur tussen twee vertrekke en hulle word een; trek 'n muur oor 'n vertrek en dit word twee. 'n Vertrek behou sy naam en nommer terwyl die mure rondom dit beweeg.
- 'n Vertrek kan nie op sy eie geskrap word nie: dit is die ruimte wat die mure maak.

Oppervlaktes word binne die muurvlakke gemeet. Vertrekke word as IFC-ruimtes gestoor met hul vloeroppervlakte, omtrek, hoogte en volume, sodat die skedules hulle lees (sien [Tel hoeveelhede op, lys elemente en skeduleer ruimtes](topic:quantity-totals)).

## Vloere

1. Klik {{ui:Vloer}}.
2. Kies **Hierdie vertrek** of **Die hele gebou**, die **Soort** (houtvloer of betonblad) en die dikte.
3. Wys binne 'n vertrek (of enige plek binne die gebou). Wat die vloer sou dek, word uitgelig met sy oppervlakte.
4. Klik. Die vloer se bo-kant is die vlak se vloer; dit gaan af met sy dikte. 'n Vloer vir die hele gebou reik tot by die buitevlakke van die mure.

## Plafonne

1. Klik {{ui:Plafon}}.
2. Kies **Hierdie vertrek** of **Die hele gebou**, en sy **Hoogte** bo die vloer.
3. Wys binne en klik.
4. Om dit van onder te sien, met sy rooster en die ligte daarop, skakel die plan na sy plafonplan: sien [Aansigte, aansigreekse en jou eie blaaie](topic:views-and-sheets).

## 'n Dak

1. Op die vlak waarvan die mure die dak dra, klik {{ui:Dak}}.
2. Tik die **Helling** as 'n styging oor 12 (`6/12`) of in grade (`30`), en die **Oorhang**.
3. Kies die **Eindes**: **Walmdak** (elke sy hel), **Gewels aan die kort sye** of **Gewels aan die lang sye** ('n gebou met vier sye), of **Eenhellingdak**.
4. Wys binne die gebou: die dakrand en die nok verskyn op die plan. Klik.

Die dak sit op die mure, op die vlak bo hulle, en die onderkant ontmoet die buitevlak van die mure. Gewelpunte word gevul met 'n gewelmuur net so dik soos die muur onder. 'n L-, T- of U-vormige gebou kry 'n walmdak waarvan die vleuels in valleie ontmoet.

## Verander hulle

Kies 'n vloer, plafon of dak (in die 3D-aansig, die modelboom, of 'n dak deur binne sy omlyning op die vlak bo te klik) en verander dit in **Eienskappe**: 'n vloer se soort, dikte en hoe ver sy bo-kant bo die vlak is; 'n plafon se hoogte, dikte en **Patroon** (die rooster wat 'n plafonplan daarop trek: geen, 600 × 600, 600 × 1200, 2' × 2' of 2' × 4'); 'n dak se helling, oorhang, eindes en dikte. Elke verandering is een Ontdoen-stap.

## Gee 'n vloer, plafon of dak 'n tipe met lae

'n Vloer, 'n plafon en 'n dak kan 'n **tipe** kry, soos 'n muur: 'n benoemde opbou van lae, elk met sy materiaal en sy werklike dikte.

- **Wanneer jy dit plaas.** Die Vloer-, Plafon-, Dak- en Teken vloer-gereedskap het 'n **Tipe**-lys op hul ry. **Geen tipe** plaas dit soos voorheen, met sy eie dikte. 'n Tipe plaas dit so dik as die tipe se lae saam.
- **Later.** Kies die vloer, plafon of dak en kies **Tipe** in **Eienskappe**. Die element bly dieselfde element: sy plek, sy vertrek en sy data word behou, en niks word weer geteken nie. Net sy tipe, dikte en materiaal verander. So word 'n skets-element 'n ontwikkelde een: ruil sy generiese tipe vir 'n werklike een.
- **Wysig die tipe…** open die tipe-redigeerder op daardie tipe: lae van die **bo** af na onder, die kern, elke laag se funksie, en die tipe se LOD-etiket. Stoor verander elke element van die tipe in een stap, en een Ontdoen neem dit terug. As jy 'n beginnertipe verander, stoor 'n afskrif as jou eie tipe.
- Solank 'n element 'n tipe het, is sy **Dikte** die tipe s'n en kan dit nie getik word nie. Kies 'n ander tipe, of **Geen tipe**, om dit te verander.

Die beginnertipes is een **generiese** tipe vir elk (een laag van die generiese materiaal, geëtiketteer LOD 200) en twee gelaagde een (geëtiketteer LOD 300): 'n houtbalkvloer en 'n betonvloer met dekvloer; 'n houtdak en 'n plat betondak; 'n gipsbordplafon en 'n verlaagde teëlplafon. Dit is beginwaardes, nie getoetste konstruksies nie: kontroleer die lae voordat jy daarop staatmaak.

Die skedule **Lae: oppervlakte en volume** lys elke laag van elke tipe in gebruik; sien [Skedules, afmetings en PDF](topic:plan-schedules-and-pdf). Vloer-, dak- en plafontipes reis tussen projekte in 'n tipepakket of as 'n Biblioteek-item; sien [Tipepakkette](topic:type-packs).

## Goed om te weet

- Om mure te beweeg, by te voeg of te skrap, maak die vertrekke, vloere, plafonne en die dak daaroor weer.
- 'n Dak pas by enige omlyning. Om elke muur sy eie helling, gewel- of eenhellingeinde, 'n verhoogde plaat, fassie en sofiet te gee, of om 'n enkele dakvlak te teken, sien [Dakke: 'n helling vir elke muur, gewels, eenhellings en dakvlakke](topic:roofs).
- {{key:Delete}} skrap 'n gekose vloer, plafon of dak.
