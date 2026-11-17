---
title: Odhad tepelných a chladicích zátěží
summary: Tepelná ztráta každé místnosti, její vytápění za rok podle denostupňů a její špička chlazení, z hranic místnosti v modelu a součinitelů prostupu tepla každého prvku, se všemi vstupy na očích. Pomůcka pro návrh, nikoli výpočet shody.
keywords: energie, vytápění, chlazení, tepelná ztráta, tepelná zátěž, chladicí zátěž, součinitel U, součinitel prostupu tepla, denostupně, HDD, větrání, výměna vzduchu, vnitřní zisky, sluneční zisk, lambda, tepelná vodivost, izolace, předběžný návrh, analýza, místnosti, prostory
from: ec312d20
---

Na kartě {{ui:Denní světlo}} otevřete po {{ui:Vypočítat}} sekci {{ui:Tepelné a chladicí zátěže}} a klikněte na {{ui:Vypočítat zátěže}}. Každá místnost dostane svou **tepelnou ztrátu** v návrhový studený den, své **vytápění za rok** a svou **špičku chlazení** v horký den. Nic se nenahrává; v modelu se nic nezmění, pokud nezadáte součinitel U.

:::warning
Jde o **pomůcku pro návrh, nikoli o výpočet shody**: ustálený odhad se všemi vstupy na obrazovce. **Nejde** o metodu ISO 52016-1, nejde o simulaci ani o energetický štítek; nedimenzuje kotle, tepelná čerpadla ani chillery. Výsledky zkontrolujte a zařízení dimenzujte s odborným projektantem.
:::

## Co ohraničuje každou místnost

BimCraft to najde přímo v modelu, takže funguje IFC z libovolného programu (nepotřebuje hranice prostorů, které některé programy exportují). Z každé části vlastního povrchu místnosti se díváme přímo ven:

- první stěna, okno, dveře, podlaha, střecha, obklad, zavěšená fasáda nebo nosník, na který narazíme, **ohraničuje** tuto část;
- hned za tímto prvkem je buď **jiná místnost** (počítá se jako soused na stejné teplotě: žádná ztráta), **nic** (venku), nebo, pod podlahou nejnižšího podlaží, **terén**;
- otevřený průchod do jiné místnosti se počítá jako soused; část, která nenarazí vůbec na nic (do 1.5 m do stran nebo dolů, do 8 m nahoru), se uvede u místnosti a vynechá se.

Okna a dveře převezmou svou velikost z IFC (celková šířka × výška) ze stěny, ve které sedí. Kliknutím na místnost v tabulce zobrazíte každý prvek, který ji ohraničuje, s jeho plochou, součinitelem U a tím, odkud součinitel U pochází.

## Součinitele U

U každého prvku BimCraft použije v tomto pořadí:

1. **Vlastní součinitel U z IFC** — `ThermalTransmittance` v běžné sadě vlastností prvku (například `Pset_WallCommon`) nebo v jeho typu. Většina návrhových programů jej umí zapsat.
2. **Jeho vrstvy materiálu** — 1 ÷ (vnitřní odpor povrchu + tloušťka každé vrstvy ÷ její tepelná vodivost λ + vnější odpor povrchu), s obvyklými odpory povrchu (0.13 a 0.04 m²K/W u stěn; uvnitř 0.10 nahoru, 0.17 dolů). Typické hodnoty pro začátek (minerální vlna 0.035, cihla 0.77, beton 1.4…); v {{ui:Tepelná vodivost materiálů}} zadejte hodnoty výrobce a každý součinitel U z těchto vrstev se přepočítá.
3. **Typická hodnota** (stěny 0.3, střechy 0.2, podlahy 0.25, okna 1.4, dveře 1.6 W/m²K), označená jako typická; zadejte svou.

Součinitel U zadaný v detailu místnosti se zapíše do běžné sady vlastností prvku jako `ThermalTransmittance` (jeden krok; {{key:Mod+Z}} jej vrátí). Pokud sadu sdílí více prvků (například jeden typ stěny), změní se všechny společně a stavový řádek uvede, kolik jich je.

## Vytápění

- **Tepelná ztráta** = Σ U × A × (vnitřní − vnější) pro vše směrem ven + Σ U × A × (vnitřní − zemina) pro podlahy na terénu + 0.335 × výměny vzduchu za hodinu × objem místnosti × (vnitřní − vnější). 0.335 Wh na m³ na kelvin je hustota vzduchu (1.2 kg/m³) násobená jeho tepelnou kapacitou (1005 J/kgK).
- **Vytápění za rok** = (ztráta místnosti na stupeň směrem ven, přes konstrukci a vzduch, plus její ztráta do terénu přepočtená na stejný rozdíl) × **denostupně** × 24 ÷ 1000, v kWh. Zadejte denostupně pro dané místo, nebo použijte {{ui:Načíst denostupně z CSV…}} (jeden řádek na den nebo měsíc; sečte se poslední číslo v každém řádku). Používejte denostupně se základní teplotou, kterou udává váš zdroj: tato základní teplota už počítá s volným teplem lidí, světel a slunce.

## Chlazení

**Špička chlazení** = teplo přes konstrukci a vzduch při letní návrhové teplotě + lidé (plocha na osobu × teplo na osobu) + osvětlení a zařízení na m² podlahy + **slunce**: špička {{ui:Slunce okny v daném dni}} pro danou místnost. Nejprve spočítejte slunce za horkého dne; dokud to neuděláte, slunce se počítá jako 0 a sekce to uvádí. Špičky jednotlivých částí se sečtou, i když nastanou v různé hodiny, což mírně nadhodnotí výsledek.

## Co model vynechává

- Metody ISO 52016-1 po měsících a hodinách (placená norma), teplo uložené v hmotě budovy, tepelné mosty, výkon topných a chladicích systémů a klimatické soubory.
- Sousední místnosti se berou na stejné teplotě; nevytápěné prostory se nemodelují.

Viz také [Odhad denního světla v každé místnosti](topic:daylight-factor).
