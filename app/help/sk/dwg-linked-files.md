---
title: Nájdenie prepojených výkresov a obrázkov
summary: Zobrazte prepojené výkresy (externé referencie, alebo xrefy) a obrázky z popisového poľa, a to otvorením priečinka výkresu alebo ručným pridaním súborov.
keywords: xref, externá referencia, prepojený výkres, pripojiť, prekrytie, obrázok, logo, popisové pole, chýbajúci xref, etransmit, správca referencií
from: 5593d4b1
---

## Čo budete robiť

Doplňte výkres: zobrazte výkresy, na ktoré odkazuje (externé referencie, alebo xrefy), a obrázky, ktoré používa, napríklad logo v popisovom poli.

## Jednoduchý spôsob: otvorte priečinok

1. Kliknite na {{ui:Open a folder}} a vyberte priečinok, ktorý obsahuje výkres a jeho odkazy, napríklad celý priečinok `Cad` projektu.
2. V správe priečinka prejdite na **Výkresy CAD**.
3. Kliknite na výkres.
4. Pozrite sa na panel {{ui:Properties}} vpravo, pod **Prepojené výkresy** a **Obrázky**.

BimCraft hľadá každý prepojený výkres podľa jeho názvu ("*name*.dwg"), najprv v rovnakom priečinku ako výkres, potom kdekoľvek v priečinku, ktorý ste otvorili. Obrázky sa hľadajú rovnako a aj podľa podobného názvu: export eTransmit alebo Revit často pridá názov projektu pred názov, takže `logo.png` sa nájde ako `Tower-logo-5425051.png`.

## Druhý spôsob: pridajte súbory ručne

1. Otvorte výkres samostatne.
2. Vpravo pod **Prepojené výkresy** kliknite na {{ui:Add linked drawings…}}. Pod **Obrázky** je tlačidlo {{ui:Add pictures…}}; obe otvoria ten istý výber.
3. Vyberte prepojené súbory `.dwg` a súbory obrázkov. Môžete vybrať naraz viac.
4. Počkajte, kým BimCraft výkres znova otvorí s nimi.

## Čo by ste mali vidieť

Každý prepojený výkres a obrázok je uvedený so štítkom:

| Štítok | Znamená |
|---|---|
| **Zobrazené** | Nájdené a nakreslené. Cesta pod ním ukazuje, odkiaľ pochádza, alebo "pridané vami". |
| **Zobrazené, podobný názov** | Obrázok nájdený podľa podobného názvu. Skontrolujte, či je správny. |
| **Nenájdené** | Nie je v priečinku ani v súboroch, ktoré ste pridali. Chýbajúci obrázok sa zobrazí ako prázdny rámik. |
| **TIFF sa v prehliadači nedá zobraziť** | Obrázok je súbor TIFF, ktorý prehliadače nevykresľujú. Uložte ho ako PNG s rovnakým názvom a pridajte ho. |
| **Nepodarilo sa prečítať** | Súbor sa našiel, ale nedal sa otvoriť ako obrázok. |

Panel {{ui:Drawing}} vľavo ukazuje "*n* z *m* načítaných" pre prepojené výkresy. Hladiny prepojených výkresov sa objavia v {{ui:Layers}} ako "*link name*|*layer*".

## Časté chyby

- **Otvorenie len výkresu.** "Tento výkres zobrazuje len svoj vlastný obsah, kým sa nepridajú jeho prepojené výkresy. Otvorenie celého priečinka projektu ich nájde automaticky."
- **Otvorenie príliš malého priečinka.** Ak sú odkazy v susednom priečinku, otvorte nadradený priečinok.
- **Premenované odkazy.** BimCraft páruje prepojené výkresy podľa názvu. Odkaz premenovaný na disku sa nenájde; pridajte ho ručne.
- **Odkazy na odkazy.** BimCraft načíta výkresy, na ktoré otvorený výkres odkazuje. Výkresy prepojené vnútri nich sa nehľadajú, takže v tejto verzii sa zvyčajne nezobrazia.
