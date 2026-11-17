---
title: Kontrola modelu ve VR brýlích
summary: Procházejte model IFC ve skutečné velikosti ve VR brýlích: skákejte, otáčejte se, měřte, rozřízněte jej, umísťujte problémy BCF s obrázkem, zobrazte jej jako stolní model a potkejte ostatní z živé relace.
keywords: vr, virtuální realita, brýle, webxr, xr, pohlcující, quest, oculus, vive, index, pico, procházet, procházka, teleportace, revize návrhu, koordinace, revize, měření, řez, problém, problémy, bcf, stolní model, měřítkový model, přítomnost, avatary, živě, společně
from: 8994b36d
---

{{ui:VR}} na panelu nástrojů vás umístí do modelu ve VR brýlích, ve skutečné velikosti. Stojíte tam, kde je kamera 3D pohledu, na podlaze pod ní, a díváte se stejným směrem. Brýle zobrazují to, co 3D pohled: skrytá podlaží, prvky a modely zůstávají skryté a malované materiály se přenesou. Nic se nenahrává: prohlížeč to vykresluje na tomto počítači (nebo v prohlížeči samotných brýlí).

## Co potřebujete

- Brýle, které prohlížeč umí ovládat (WebXR): vestavěný prohlížeč samostatných brýlí, nebo Chrome či Edge na PC s připojenými brýlemi.
- Otevřený model IFC na zabezpečené stránce (https), jak je tomu na tomto webu.

Když brýle nejsou k dispozici, {{ui:VR}} je našedlé a říká proč.

## Spuštění

1. Nastavte 3D pohled tam, kde chcete začít: v místnosti, nebo venku s pohledem na budovu.
2. Klikněte na {{ui:VR}} na panelu nástrojů.
3. Nasaďte brýle.

Nabídka je na hřbetu vaší levé ruky. Namiřte na ni pravým ovladačem a stiskněte spoušť pro výběr tlačítka. (Pokud máte jen jednu ruku, nabídka se vznáší před místem, kde jste začínali.)

## Pohyb

- **Skok:** v {{ui:Posunout}} namiřte na podlahu a stiskněte spoušť; přistanete tam. Nebo zatlačte páčku dopředu pro namíření a pustěte ji, abyste skočili. Přistát lze jen na podlahách, deskách a terénu (plochy směřující nahoru), nikdy na stěně.
- **Otočení:** zatlačte páčku doleva nebo doprava: pokaždé se otočíte o 30°.
- **Chůze:** ve vašem hracím prostoru prostě jděte.

## Měření

Vyberte {{ui:Měřit}}, pak stiskněte spoušť na dvou bodech. Mezi nimi se zobrazí vzdálenost v metrech. Bod blízko rohu se přichytí k rohu.

## Rozříznutí

Vyberte {{ui:Řez}} a stiskněte spoušť na ploše:

- na stěně (nebo čemkoli, co není podlaha): vše mezi vámi a touto plochou se odřízne, takže vidíte dovnitř. Funguje to nejlépe zvenku nebo napříč místností;
- na podlaze, shora: řez plánem 1.2 m nad touto podlahou, takže stěny ukážou svou spodní část.

{{ui:Vymazat}} odstraní řez a měření. Pokud [řezná rovina](topic:section-plane) model řeže ve chvíli spuštění, brýle začnou s ní.

## Umístění problému

Vyberte {{ui:Problém}} a stiskněte spoušť tam, kde je problém. Číslovaný špendlík ho označí a problém se přidá na kartu {{ui:Problémy}} jako téma BCF, s obrázkem toho, co jste viděli, a kamerou tam, kde jste stáli, v souřadnicích modelu. Uložte je spolu s ostatními [problémy](topic:issues-bcf) jako soubor BCF; jiné nástroje pro koordinaci je otevřou ve stejném pohledu.

Komentář k problému přidejte až po odchodu z VR, na kartě {{ui:Problémy}}: psaní v brýlích ještě není hotovo.

## Zobrazení jako stolní model

{{ui:Stolní model}} zmenší model tak, aby se vešel na stůl před vámi; obejděte jej, nebo jej otočte páčkou. {{ui:V plné velikosti}} vás vrátí tam, kde jste byli.

## S ostatními, živě

V [živé relaci](topic:work-live) každý ve VR vidí ostatní jako hlavu a dvě ruce ve vlastní barvě, s jejich jménem, a tečku tam, kam každý míří. Změny, které kdokoli provede, se do vašich brýlí dostanou během okamžiku. Lidé u stolu zatím v brýlích nejsou vidět.

## Odchod

Vyberte {{ui:Odejít z VR}} (nebo sundejte brýle a relaci tam ukončete). 3D pohled na obrazovce se přesune tam, kde byla vaše hlava.

:::note
Testováno na emulátoru brýlí, zatím ne na všech brýlích. Velký model může brýle zadrhávat: nejdřív skryjte podlaží nebo modely, které nepotřebujete ([skrytí a izolace](topic:hide-and-isolate)).
:::
