---
title: Varianty hmoty vedľa seba
summary: Uchovajte viac variantov hmoty v tom istom modeli, nastavte jeden ako aktuálny, overte ho voči stavebným čiaram a vecným bremenám pozemku, prevezmite hmotu z ModelCraft a rozpracujte vybraný variant na steny a stropy.
keywords: hmota, hmoty, variant, varianty, sada variantov, schéma, koncept, konceptuálny návrh, etapa 2, alternatívy, porovnanie variantov, aktuálny variant, stavebná hmota, potlačenie, ťahanie, modelcraft, civilcraft, hrubá podlahová plocha, pôdorysná plocha, objem, rozpracovať hmotu, vecné bremeno, stavebná čiara, odstup
from: 69a01459
---

## Čo urobíte

Uchovajte varianty hmoty konceptu v jednom modeli namiesto v samostatných súboroch: viac hmôt budov vedľa seba, jedna z nich je **aktuálny variant** a ostatné sa uchovajú na porovnanie.

Variant hmoty je hmota budovy: obrys zdvihnutý do výšky s určitým počtom podlaží. Ešte to nie sú steny. Môžete uchovať koľko chcete, zoskupené do **sád variantov** (varianty jednej sady sú navzájom alternatívy).

## Uchovanie variantu

1. Otvorte {{ui:Program miestností na hmotu}}, zadajte program miestností a obrys a vyberte {{ui:Nájsť varianty}}.
2. Vyberte jeden z uvedených variantov.
3. V časti {{ui:Varianty hmoty v modeli}} zadajte názov pre {{ui:Sada variantov}}, ak ho chcete, a vyberte {{ui:Uchovať vybraný variant}}.

Variant sa objaví v modeli ako stavebná hmota a v zozname, s podlažiami, pôdorysnou plochou, hrubou podlahovou plochou a objemom. Nič sa nestavia. Ďalší uchovajte rovnakým spôsobom.

Prvý variant sady je jej aktuálny variant. Každý krok je jeden krok späť.

## Aktuálny variant

Jeden variant každej sady je aktuálny. To znamená dve veci:

- **Jeho podlažia sa počítajú ako podlahové plochy budovy.** Aktuálny variant má jeden priestor na podlažie nesúci hrubú plochu toho podlažia, takže čokoľvek, čo číta podlahové plochy, vidí platný variant a žiadny iný.
- **Overuje sa voči pozemku.** Ak je mimo hranice pozemku, na stavebnej čiare alebo na vecnom bremene, v {{ui:Problémy}} sa zobrazí upozornenie s jeho názvom. Je to len upozornenie: nič sa neodmieta. Varianty, ktoré nie sú aktuálne, sa neoverujú.

Vyberte {{ui:Nastaviť ako aktuálny}} pri inom variante, aby ste ho zmenili.

{{ui:Skryť varianty, ktoré nie sú aktuálne}} skryje ostatné v 3D pohľade. Platí to len pre tento prehliadač a nie je to uložené v súbore.

## Hmota z ModelCraft

V ModelCraft, {{ui:Exportovať}} › {{ui:Hmota do BimCraft…}} pošle každú skupinu alebo komponent ako jeden variant. BimCraft otvorí súbor so zoznamom variantov.

Ak ich chcete priniesť do modelu, ktorý je už otvorený, vyberte {{ui:Pridať varianty hmoty zo súboru}} a vyberte súbor `.ifc`. Jeho hmoty sa priniesú ako varianty jednej sady, v jednom kroku späť, a stoja tam, kde boli modelované. Súbor stavebných hmôt z CivilCraft funguje rovnako.

Variant označený "(tvar zjednodušený)" nebol v ModelCraft obyčajným rovným kvádrom (ustupuje, sklon alebo nie je uzavretý). Jeho hmota tu je obrys jeho základne zdvihnutý do jeho výšky. Jeho podlahové plochy a jeho objem sú tie, ktoré sa merajú z pevného telesa samotného.

## Rozpracovanie vybraného variantu

Vyberte {{ui:Rozpracovať}} pri variante. Stane sa z neho úrovne (pridané až do jeho počtu podlaží), steny okolo jeho obrysu na každom podlaží a podlahová doska na každom z nich, v jednom kroku späť. Variant opustí zoznam; ostatné varianty zostanú, ako boli. Strecha zatiaľ nie je.

{{ui:Premenovať}} zmení názov variantu, {{ui:Odstrániť}} ho odstráni z modelu. Odstránenie aktuálneho variantu urobí prvý ďalší variant sady aktuálnym.

## Čo by ste mali vidieť

- Každý uchovaný variant ako blok v 3D pohľade a riadok v zozname.
- "(aktuálny)" pri jednom variante každej sady.
- Upozornenie v {{ui:Problémy}}, keď aktuálny variant prekračuje hranicu pozemku, stavebnú čiaru alebo vecné bremeno.

## Dobre vedieť

- V súbore IFC je variant proxy prvok budovy s sadou vlastností `CadCraft_SiteMass` (jeho sada variantov, názov variantu a to, či je aktuálny, sú v tejto sade). Podlažia aktuálneho variantu sú priestory typu `MassingFloor`. Iné programy čítajú proxy ako všeobecný prvok.
- Uchovanie variantu nikdy nepridá úrovne; rozpracovanie áno.
- Asistent môže vypísať uchované varianty, uchovať jeden, nastaviť jeden ako aktuálny, premenovať, rozpracovať alebo odstrániť.
