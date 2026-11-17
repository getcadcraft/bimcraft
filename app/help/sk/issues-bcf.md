---
title: Problémy a súbory BCF
summary: Uložte pohľad na model ako problém — kameru, vybrané prvky, skryté prvky a rez — zdieľajte ho ako súbor BCF s inými koordinačnými nástrojmi a otvorte ich súbory BCF, aby ste videli ich problémy.
keywords: bcf, bcfzip, problém, problémy, téma, pohľad, správa o kolíziách, koordinácia, komentár, snímka, otvoriť bcf, uložiť bcf, export, import
from: 2a6cf201
---

## Čo urobíte

Ukážte na problém v modeli a uchovajte pohľad, ktorý ho zobrazuje, potom ho odovzdajte v súbore BCF, formáte, ktorý čítajú a zapisujú iné koordinačné nástroje.

## Postup

1. Otvorte model IFC a nastavte pohľad: otočte ho, vyberte zapojené prvky, skryte to, čo prekáža, a rozrežte ho rovinou alebo škatuľou rezu.
2. Kliknite na kartu {{ui:Problémy}} vpravo, potom na {{ui:Nový problém z tohto pohľadu}}.
3. Zadajte názov a komentár, ak chcete; vyberte stav; uveďte svoje meno alebo e-mail (ak ste prihlásení, doplní sa názov vášho účtu; pozri [Nastavenia BimCraft](topic:settings#your-name-on-issues)). Kliknite na {{ui:Vytvoriť problém}}.
4. Kliknite na {{ui:Zobraziť}} pri probléme, aby sa jeho pohľad vrátil.
5. Kliknite na {{ui:Uložiť BCF}}, čím stiahnete všetky problémy ako jeden súbor `.bcf`.
6. Ak chcete vidieť problémy, ktoré vytvoril niekto iný, kliknite na {{ui:Otvoriť BCF…}} a vyberte jeho súbor `.bcf` alebo `.bcfzip`.

## Čo by ste mali vidieť

- Každý problém v zozname s obrázkom svojho pohľadu, názvom, stavom, autorom a dátumom.
- {{ui:Zobraziť}} vráti kameru, vybrané prvky, to, čo bolo skryté (alebo jediné zobrazené veci), a rez. Prvky sa nájdu podľa ich GlobalId vo všetkých otvorených modeloch; riadok so stavom povie, ak niektoré chýbajú.
- Rovina alebo škatuľa rezu z iného nástroja sa zobrazí, keď zodpovedá osiam modelu; naklonené alebo ďalšie roviny sa vrátia ako objem rezu (až 6 rovín). Problém si ponechá prvú škatuľu objemu zloženého z viacerých škatúľ.

## Dobré vedieť

- Súbor je BCF 2.1 a uchováva pohľad v súradniciach samotného modelu, takže ostatné nástroje umiestnia kameru na rovnaké miesto.
- Problémy zostanú na tejto karte, kým ich neuložíte. Otvorenie iného modelu zoznam zachová; pred zobrazením problémov otvorte model, ku ktorému patria.
- Ortogonálna (paralelná) kamera z iného nástroja sa zobrazí perspektívnou kamerou tohto prehliadača, odsunutou tak, aby rovnaká časť modelu vyplnila pohľad.

## Časté chyby

- **Zobraziť presunulo kameru niekam divne.** Problém bol vytvorený v inom modeli alebo s inými súradnicami. Najprv otvorte správny model.
- **Súbor sa neotvorí.** Nie je to súbor BCF zip alebo je poškodený; riadok so stavom povie, prečo.

## Ďalej

- [Skrytie, izolácia a priehľadné zobrazenie prvkov](topic:hide-and-isolate)
- [Rozrezanie modelu IFC rovinou rezu](topic:section-plane)
