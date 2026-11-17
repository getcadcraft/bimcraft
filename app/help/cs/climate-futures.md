---
title: "Klimatické budoucnosti: povodeň, teplo a požár v letech 2050 a 2080"
summary: Znovu spusťte výpočet povodně, energetického roku a orientační kontroly požáru s budoucím klimatem (scénáře SSP2-4.5 a SSP5-8.5, roky 2050 a 2080) z datového balíčku klimatu, zobrazený vedle současnosti.
keywords: klima, klimatická změna, budoucnost, 2050, 2080, ssp, cmip6, scénář, hladina moře, povodeň, teplo, meteorologický soubor, epw, morph, energyplus, požár, lesní požár, požární počasí
from: 224ecd08
---

Údaje o klimatu pocházejí z **datového balíčku**, ne z aplikace. Zapněte doplněk {{ui:Klimatické budoucnosti}} v Nastavení › Doplňky, nebo načtěte vlastní soubor balíčku v bloku {{ui:Klimatická budoucnost}}.

:::warning
Balíček, který je součástí doplňku, je **ukázkový**: tři místa (Denver, Miami, Johannesburg), jeden klimatický model a pět let v každém 20letém období. Slouží k vyzkoušení nástrojů, **není pro návrh**. Panel to při používání uvádí tučně. Úplný balíček (mnoho modelů, všechny roky, více míst) se sestavuje pomocí `tools/climate/build-pack.mjs` z dat NASA NEX-GDDP-CMIP6.
:::

## Výběr budoucnosti

V levém panelu v {{ui:Přehrání nebezpečí}} zvolte **Scénář** (SSP2-4.5, střední cesta, nebo SSP5-8.5, vysoké emise) a **Rok** (2050 znamená 2041–2060, 2080 znamená 2071–2090; obojí vůči 1995–2014). **Místo** je místo balíčku nejblíže k lokalitě modelu (zeměpisná šířka a délka IfcSite), nebo to, které vyberete. Pokud je daleko od všech míst, použijí se globální průměrné změny balíčku a panel to uvede.

## Povodeň, současnost vedle budoucnosti

Když je zvolen scénář, nastavte **Typ povodně**: pobřežní (přidá vzestup hladiny moře), říční, nebo přívalový déšť (hlubší o změnu deště nejmokřejšího dne), případně obojí. Stiskněte Spustit: povodeň se přehraje jako dříve a tabulka ukáže současnou a budoucí povodeň vedle sebe (výška vody, místnosti, které se zamočí, nejhlubší voda). Předpoklady jsou uvedeny pod ní:

- hladina u pobřeží stoupá o celý vzestup hladiny moře; přílivová vlna a vlny se nemění;
- průtok řeky roste jedna ku jedné s deštěm nejmokřejšího dne a hloubka sleduje průtok na mocninu 0.6 (Manningova rovnice pro široké koryto);
- obě části se prostě sečtou.

## Teplo: budoucí meteorologický soubor

Zvolte druh {{ui:Teplo: budoucí meteorologický soubor}}, vyberte současný soubor počasí `.epw` a stiskněte {{ui:Vytvořit budoucí meteorologický soubor}}. Soubor se **morfuje** měsíc po měsíci metodou publikovaného posunu a roztažení (Belcher, Hacker and Powell 2005): průměr měsíce se oteplí o změnu balíčku, horká odpoledne o změnu denního maxima a studené noci o změnu denního minima. Relativní vlhkost se posune o změnu balíčku a rosný bod se počítá znovu. Tlak a vítr zůstávají, jak byly. Tabulka porovnává průměrné a nejvyšší teploty, návrhové teploty pro chlazení 0.4 % a vytápění 99.6 %, hodiny při 30 °C a 35 °C a stupňodny.

{{ui:Uložit budoucí meteorologický soubor}} jej uloží; {{ui:Použít v energetické kontrole}} jej předá kontrole EnergyPlus (karta Energie). Budoucí soubor je stejný typický rok, jen teplejší: nepřidává nové vlny veder.

## Energetický rok, současnost vedle budoucnosti

V kontrole EnergyPlus na kartě Energie (vlastní doplněk s vaším vlastním motorem) vyberte současný meteorologický soubor, pak scénář a rok v jeho bloku {{ui:Klimatická budoucnost}} a stiskněte {{ui:Simulovat rok: současnost a budoucnost}}. Rok se spustí na současném souboru i na jeho morfované budoucnosti a vytápění a chlazení každé místnosti se vypíšou vedle sebe.

## Vystavení požáru (pouze orientačně)

Zvolte druh {{ui:Vystavení požáru (pouze orientačně)}}: nejbližší vegetace, svah od ní vzhůru k budově a vzdálenost k ní. Výsledkem je pásmo od velmi nízkého po extrémní, současné i budoucí.

:::warning
**Pouze orientačně.** Jde o naši vlastní relativní stupnici, která říká, zda lokalita potřebuje řádné posouzení požárního rizika. Nejde o hodnocení podle předpisu ani o úroveň ohrožení požárem (bushfire attack level). Násobí váhu vegetace, faktor svahu (oheň zhruba zdvojnásobí rychlost na každých 10 stupňů stoupání, počítáno až do 20 stupňů), faktor vzdálenosti (10 m dělené vzdáleností, nejvýše 1) a změnu indexu požárního počasí z balíčku.
:::

## Odkud čísla pocházejí

- **Teplota, vlhkost, sluneční svit, srážky, požární počasí:** NASA NEX-GDDP-CMIP6, denně zmenšený výstup modelů CMIP6. Výstup každého modelu je pod licencí CC BY 4.0. Změna požárního počasí je kanadský Canadian Fire Weather Index počítaný den po dni z počasí modelu (s denní vlhkostí místo vlhkosti v poledne).
- **Vzestup hladiny moře:** globální průměr IPCC AR6 (ne místní; zvedání nebo klesání země v něm není zahrnuto), pokud balíček neobsahuje místní údaje.
- Balíček uvádí svůj zdroj, licenci a datum; panel je zobrazuje.
