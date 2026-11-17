---
title: "Klimatické scenáre: záplavy, teplo a lesné požiare v rokoch 2050 a 2080"
summary: Znova spustite simuláciu záplav, ročnú energiu a orientačný odhad lesných požiarov s budúcou klímou (scenáre SSP2-4.5 a SSP5-8.5, roky 2050 a 2080) z dátového balíka klímy, zobrazené vedľa súčasnosti.
keywords: klíma, klimatická zmena, budúcnosť, 2050, 2080, ssp, cmip6, scenár, hladina mora, záplava, teplo, súbor počasia, epw, morfovanie, energyplus, lesný požiar, požiar krovín, požiarne počasie
from: 224ecd08
---

Klimatické údaje pochádzajú z **dátového balíka**, nie z aplikácie. Zapnite doplnok {{ui:Climate futures}} v Nastavenia › Doplnky, alebo načítajte vlastný súbor balíka v bloku {{ui:Climate future}}.

:::warning
Balík, ktorý prichádza s doplnkom, je **ukážka**: tri miesta (Denver, Miami, Johannesburg), jeden klimatický model, päť rokov v každom 20-ročnom období. Slúži na vyskúšanie nástrojov, **nie na návrh**. Panel to počas používania uvádza tučným písmom. Úplný balík (mnoho modelov, všetky roky, viac miest) sa zostavuje pomocou `tools/climate/build-pack.mjs` z údajov NASA NEX-GDDP-CMIP6.
:::

## Výber budúcnosti

V ľavom paneli {{ui:Hazard playback}} vyberte **Scenár** (SSP2-4.5, stredná cesta, alebo SSP5-8.5, vysoké emisie) a **Rok** (2050 znamená 2041-2060, 2080 znamená 2071-2090; obe voči 1995-2014). **Miesto** je miesto balíka najbližšie k lokalite modelu (zemepisná šírka a dĺžka IfcSite), alebo to, ktoré vyberiete. Ak je ďaleko od každého miesta, použijú sa globálne priemerné zmeny balíka a panel to uvedie.

## Záplava, súčasnosť vedľa budúcnosti

Keď vyberiete scenár, nastavte **Typ záplavy**: pobrežná (pridá zvýšenie hladiny mora), riečna alebo silný dážď (hlbšia o zmenu dažďa v najmokrejší deň), alebo oboje. Stlačte **Spustiť**: záplava sa prehrá ako predtým a tabuľka zobrazí súčasnú a budúcu záplavu vedľa seba (výška vody, miestnosti, ktoré zmoknú, najhlbšia voda). Predpoklady sú uvedené pod ňou:

- pobrežná hladina stúpa o celé zvýšenie hladiny mora; vzdutie hladiny a vlny sa nemenia;
- prietok rieky stúpa jedna ku jednej s dažďom v najmokrejší deň a hĺbka nasleduje prietok na mocninu 0.6 (Manningova rovnica pre široké koryto);
- obe časti sa jednoducho sčítajú.

## Teplo: budúci súbor počasia

Vyberte druh {{ui:Heat: future weather file}}, vyberte súbor počasia `.epw` súčasnosti a stlačte {{ui:Make the future weather file}}. Súbor sa **morfuje** po mesiacoch zverejnenou metódou posunu a natiahnutia (Belcher, Hacker a Powell 2005): priemer mesiaca sa oteplí o zmenu balíka, horúce popoludnia o zmenu dennej maximálnej teploty a studené noci o zmenu dennej minimálnej teploty; relatívna vlhkosť sa posúva o zmenu balíka a rosný bod sa prepočíta. Tlak a vietor zostávajú, ako boli. Tabuľka porovnáva priemerné a najvyššie teploty, návrhové teploty pre chladenie 0.4 % a vykurovanie 99.6 %, hodiny pri 30 °C a 35 °C a stupňodni.

{{ui:Save the future weather file}} ho uloží; {{ui:Use it in the energy check}} ho odovzdá kontrole EnergyPlus (karta Energia). Budúci súbor je ten istý typický rok, len teplejší: nepridáva nové vlny horúčav.

## Energetický rok, súčasnosť vedľa budúcnosti

V kontrole EnergyPlus na karte Energia (doplnok s vlastným motorom) vyberte súčasný súbor počasia, potom scenár a rok v jej bloku {{ui:Climate future}} a stlačte {{ui:Simulate a year: present and future}}: rok sa spustí na súčasnom súbore a na jeho morfovanej budúcnosti a vykurovanie a chladenie každej miestnosti sa uvedú vedľa seba.

## Expozícia lesným požiarom (iba orientačný odhad)

Vyberte druh {{ui:Wildfire exposure (screening only)}}: najbližšia vegetácia, svah od nej nahor k budove a vzdialenosť k nej. Výsledok je pásmo od veľmi nízkeho po extrémne, súčasné aj budúce.

:::warning
**Iba orientačný odhad.** Toto je naša vlastná relatívna stupnica, ktorá má zistiť, či lokalita potrebuje riadne posúdenie rizika požiaru, a nie hodnotenie podľa predpisov ani úroveň ohrozenia od požiaru krovín (BAL). Násobí váhu pre vegetáciu, faktor svahu (požiar sa zrýchli zhruba dvojnásobne na každých 10 stupňov stúpania, počítané najviac do 20 stupňov), faktor vzdialenosti (10 m delené vzdialenosťou, najviac 1) a zmenu indexu požiarneho počasia v balíku.
:::

## Odkiaľ sú čísla

- **Teplota, vlhkosť, slnečný svit, zrážky, požiarne počasie:** NASA NEX-GDDP-CMIP6, denne zmenšený výstup modelov CMIP6. Výstup každého modelu je pod licenciou CC BY 4.0. Zmena požiarneho počasia je Canadian Fire Weather Index počítaný deň po dni z počasia modelu (s dennou vlhkosťou namiesto vlhkosti na poludnie).
- **Zvýšenie hladiny mora:** globálny priemer IPCC AR6 (nie miestny; zdvíhanie alebo klesanie pôdy v ňom nie je), pokiaľ balík neobsahuje miestne údaje.
- Balík uvádza svoj zdroj, licenciu a dátum; panel ich zobrazuje.
