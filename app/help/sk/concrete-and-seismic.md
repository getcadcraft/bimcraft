---
title: Kontrola betónových prvkov a tvorba seizmických zaťažení
summary: Nastavte výstuž betónových nosníkov a stĺpov otvoreného modelu, skontrolujte ich podľa ACI 318-19, vytvorte ekvivalentné bočné sily podľa ASCE 7-22 pre tuhé stropy a pozrite si posun podlaží. Pomôcka pre inžiniera na kontrolu.
keywords: betón, železobetón, ACI 318, ACI 318-19, výstuž, nosník, stĺp, šmyk, strmene, seizmický, zemetrasenie, ekvivalentná bočná sila, ELF, ASCE 7-22, posun, posun podlažia, stropy, tuhá membrána, hmotnosť podlažia, využitie, konštrukčný, inžinier, analýza
from: 2f342e72
---

Bloky {{ui:Betónové prvky}} a {{ui:Seizmické zaťaženia}} na karte {{ui:Analýza}} kontrolujú železobetónové nosníky a stĺpy otvoreného IFC a vytvárajú bočné sily zemetrasenia na podlažiach jeho rámu. Sú to tie isté bloky ako v DetailCraft, spúšťajú sa po analýze na karte {{ui:Analýza}} a ukladajú sa do IFC spolu s ostatnými nastaveniami analýzy.

:::warning
Výsledky sú **určené na kontrolu inžinierom**: pomôcka, kým ich nepreskúma inžinier. Kontroly betónu používajú sily prvého rádu (stĺp vráme, ktorý označíte ako nekývavý, sa navrhuje na svoj zväčšený moment), bez zväčšenia kývania, bez návrhu krútenia, bez seizmického detailovania (kapitola 18 ACI) a bez detailovania strmeňov. Seizmické zaťaženia nezahŕňajú súčiniteľ redundancie, vertikálny seizmický účinok, zosilnenie krútením ani účinky P-delta. **Zaťaženia vetrom zatiaľ nie sú hotové**: vetrové kapitoly normy nie sú v referenčných stranách projektu.
:::

## Čo BimCraft číta

Analýza číta nosníky, stĺpy a diagonály modelu s ich profilmi (pozri [Analýza konštrukčného rámu](topic:frame-analysis)). Blok {{ui:Betónové prvky}} uvádza každý prierez, ktorý používajú. Stlačte {{ui:Nastaviť ako betón…}} pri priereze, ktorý je betónový: BimCraft z plochy a tuhosti profilu vezme obdĺžnik (šírku b a hĺbku h, ktoré potom môžete zmeniť), takže prierez, ktorý nie je blízko obdĺžnika (valcovaný oceľový tvar), dá veľkosť, ktorú musíte opraviť, alebo sa nechá nedotknutý.

Prierez nastavený ako betón a každý prvok, ktorého materiál je pomenovaný ako betón, sa analyzuje ako betón: E = 4700 √f′c, 2400 kg/m³ a predvolene s **trhlinovými prierezmi** (stĺpy 0.70 Ig, nosníky 0.35 Ig; ACI 318-19 tabuľka 6.6.3.1.1(a)). Zvoľte {{ui:Hrubé prierezy}}, aby ste to vypli. Bez týchto nastavení sa model analyzuje presne ako predtým.

## Výstuž, kombinácie, kontrola

Zadajte krytie, horné, dolné a bočné pruty (alebo klietku stĺpa) a strmene každého prierezu, nastavte f′c, fy, fyt, K a kývavý alebo nekývavý. Zadajte druh zaťažovacích stavov, stlačte {{ui:Vytvoriť kombinácie}} (ASCE 7 §5.3.1) a potom {{ui:Skontrolovať betón}}: každý prvok dostane využitie, zafarbené na modeli. Prvky nad kapacitou a posun podlažia nad limitom sú uvedené v {{ui:Problémy}} s ich ustanovením; kliknutím na jeden ho vyberiete.

## Podlažia a seizmické zaťaženia

V bloku {{ui:Seizmické zaťaženia}} {{ui:Nájsť podlažia}} nájde úrovne, kde sa stretáva dva alebo viac nosníkov; každá sa stane tuhou membránou. {{ui:Vziať hmotnosti zo stavov}} načíta seizmickú hmotnosť každého podlažia zo stavov, ktorým dáte koeficient. Vyplňte SDS, SD1, S1, R, Ie, Cd, TL, systém a kategóriu rizika, potom stlačte {{ui:Vytvoriť seizmické stavy}} (ASCE 7-22 12.8: perióda, základná šmyková sila, rozdelenie po podlažiach, 5 % náhodné krútenie). Sily podlažia a kontrola posunu (12.12) sa zobrazia po výpočte. Rovnaká perióda a tuhosť podlažia napájajú zemetrasenie v [Prehrávanie záplavy, vetra alebo zemetrasenia](topic:hazard-playback), keď ako jeho zdroj vyberiete rám analýzy.

Betónové dosky a steny sa v analýze stanú doskami a blok {{ui:Výstuž dosiek}} vypočíta množstvo výstuže, ktoré na meter potrebujú. Podrobnosti každej kontroly sú v téme DetailCraft s rovnakým názvom.
