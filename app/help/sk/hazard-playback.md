---
title: Prehrajte povodeň, vietor alebo zemetrasenie na budove
summary: Stúpanie vody cez miestnosti, tlak vetra na každé podlažie alebo otrasy podlaží pri zemetrasení, prehrávané na pôdoryse alebo pohľade s časovým posúvačom. Jednoduché modely so zoznamom predpokladov; nie kontrola normy ani statický návrh.
keywords: riziko, povodeň, vietor, zemetrasenie, seizmický, odchýlka podlažia, kývanie, základová šmyková sila, hladina vody, klíma, scenár, hladina mora, prehrávanie, podlažie, perióda
from: ff0d34d1
---

Sekcia {{ui:Prehrávanie rizika}} v ľavom paneli prehráva riziko na otvorenom modeli IFC. Nič v modeli sa nemení.

:::warning
Sú to **jednoduché modely, na ktorých vidno, čo riziko urobí s týmto usporiadaním**, nie štúdia povodne, kontrola normy pre vietor ani statický návrh. Každý výsledok uvádza svoje predpoklady.
:::

## Povodeň

Nastavte najvyššiu hladinu vody nad najnižším podlažím a minúty na stúpanie, zotrvanie a klesanie. Voda vteká do miestnosti cez otvor, ktorého prah už prekročila, a miestnosti spojené s mokrými miestnosťami otvormi pod hladinou vody stoja na rovnakej úrovni (kvázistatický prístup). Tabuľka uvádza, kedy sa každá miestnosť prvýkrát namočí a aká je hlbka; pôdorys to prehrá. Zadajte najviac vody, ktorú miestnosť môže prijať, a miestnosti nad touto hodnotou sú upozornenia. **Klimatické scenáre:** nahrajte vlastný súbor scenára (JSON alebo CSV s rokom, zvýšením hladiny mora a faktorom povodne) a zvoľte rok. Alebo zapnite doplnok Klimatické scenáre a zvoľte scenár a rok: povodeň sa spustí dvakrát, súčasný stav vedľa budúceho (pozri „Klimatické scenáre: povodeň, horúčava a lesný požiar v rokoch 2050 a 2080“). Druhy Vystavenie lesnému požiaru a Teplo: súbor budúceho počasia sú v tom istom zozname.

## Vietor

Tlak sa riadi podľa ½ρV², pričom rýchlosť rastie s výškou. Sila na podlažie je tento tlak násobený súčiniteľom poryvu, oboma tlakovými súčiniteľmi, šírkou a výškou podlažia. Dostanete šmykovú silu, prevracajúci moment a kývanie.

## Zemetrasenie

Šmykový model budovy: hmotnosť na každé podlažie (pôdorysná plocha × kilogramy na meter štvorcový, ktoré nastavíte), rovnaká tuhosť v každom podlaží prispôsobená prvej perióde, ktorú zadáte (desatina sekundy na podlažie, ak pole necháte prázdne, a program to oznámi), tlmenie a modelovaný pohyb podložia (impulz alebo filtrovaný šum) pri špičkovom zrýchlení, ktoré zvolíte. Výsledkom je odchýlka každého podlažia, zrýchlenia podláh a základová šmyková sila; pohľad zobrazí kývanie, nakreslené väčšie, než je v skutočnosti. Zadajte povolený pomer odchýlky a podlažia nad ním sú upozornenia. Výpočet je pružný: nič sa neporuší ani nepraská.

## Tuhosť podlaží z analytického rámu

Pri zemetrasení alebo kývaní vetrom zvoľte **Analytický rám** ako zdroj tuhosti namiesto zadania periódy. Každé podlažie sa postupne vychýli do strany, rám (nosníky, stĺpy, stužidlá, dosky) sa vyrieši a tuhosť podlaží so všetkým spolupracujúcim určuje priebeh výpočtu. Hmotnosť je vlastná hmotnosť prvkov plus zaťaženie podlahy na meter štvorcový, ktoré nastavíte v pôdorysnom boxe každého podlažia. Zobrazí sa skutočná prvá perióda. Výpočet je pružný: nič sa neporuší a krútenie sa nemodeluje. Pri vetre sú sily na podlažia stále predpokladané (mocninový profil, váš súčiniteľ poryvu a pevné tlakové súčinitele, nie norma pre vietor); len kývanie sa určí z rámu riešením jeho celej matice tuhosti voči týmto silám. Model vyžaduje IFC s rámom, ktorý karta Analýza dokáže prečítať.

## Jednotky

Hĺbky vody, kývanie a odchýlky podlaží po podlažiach, vzdialenosti a plochy sa zobrazia v {{ui:Jednotky}}, ktoré ste zvolili. Sily (kN), časy a zrýchlenia si ponechávajú svoje jednotky a hodnota, ktorú zadáte do poľa označeného v metroch, zostáva v metroch. To platí aj pre výsledky evakuácie, denného svetla, vykurovania a chladenia a zariadenia interiéru: dĺžky, plochy a objemy sa riadia vašou voľbou; tlak, prietok, teplota, energia a výkon sa nikdy neprevádzajú.
