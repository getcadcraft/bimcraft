---
title: Dimenzovanie potrubí a VZT potrubí, plnenie káblov a osvetlenie
summary: Kontrolujte dimenzie prívodného potrubia a VZT potrubí s tlakovou stratou, veďte káble cez káblové žľaby a vedenia a zobrazte ich plnenie, a počítajte osvetlenosť v miestnostiach zo súborov IES alebo EULUMDAT. Predvolené hodnoty sú označené; zadajte hodnoty normy, ktorá platí.
keywords: dimenzovanie, dimenzovanie potrubia, dimenzovanie VZT potrubia, tlaková strata, zariaďovacie jednotky, odber, hunter, hazen-williams, rýchlosť, trenie, rovnaké trenie, tlak ventilátora, klapka, kritická cesta, káblový žľab, vedenie, plnenie, rozpis káblov, ies, ldt, eulumdat, fotometria, osvetlenosť, lux, rovnomernosť, výpočet osvetlenia, hustota výkonu, mep, výpočty, problémy
from: 9cb90815
---

## Čo budete robiť

Nakreslite potrubia, VZT potrubia, káblové žľaby a vedenia ako obvykle, potom otvorte panel **Výpočty**. Každá karta načíta model, zobrazí tabuľku a vypíše, čo je zle, ako {{ui:Problémy}} na paneli ⚠. Keď by veľkosť odstránila problém, **Použiť dimenzie** zmení úseky v jednom kroku, ktorý sa dá vrátiť tlačidlom {{ui:Späť}}.

Ide o pomôcky pri kreslení. Každá predvolená hodnota je na obrazovke označená a žiadna z nich nie je tabuľka normy: zadajte čísla z normy, podľa ktorej navrhujete, a výsledok nechajte skontrolovať inžinierom, ktorý za neho zodpovedá.

## Potrubia

1. Vyberte kľúč **systému** (studená voda je `cw`, teplá voda `hw`).
2. Nastavte najvyššiu rýchlosť a, ak chcete kontrolovať tlak, tlak na zdroji a najmenší tlak, ktorý zariaďovací predmet potrebuje.
3. Kliknite na {{ui:Skontrolovať}}.

Každé potrubie nesie odber zariaďovacích jednotiek pod ním. Odber pochádza z krivky zariaďovacích jednotiek voči prietoku, tak ako ju opísal Hunter. **Vstavaná krivka je príklad, nie tabuľka normy**; Problémy to uvádzajú, kým nezadáte vlastnú. Trenie je podľa Hazen–Williamsa, armatúry sú straty súčiniteľmi a stúpanie stojí 9.8 kPa na meter. Zariaďovacie jednotky predmetu vychádzajú z jeho druhu alebo z čísla, ktoré nastavíte nástrojom asistenta `loads_set`.

## VZT potrubia

Nastavte systém, mernú stratu trením (rovnaké trenie) alebo rýchlosť a prípadné straty na cievke, filtri alebo tlmiči. Koncové prvky preberajú prietok vzduchu z `loads_set` na difúzore. Tabuľka ukazuje rýchlosť a trenie na jednotlivý kus, **tlak ventilátora** na kritickej ceste a tlak, ktorý musí prevziať klapka každého ďalšieho koncového prvku. Straty tvarovkami používajú zaokrúhlené predvolené súčinitele, nie databázu tvaroviek.

## Káblové žľaby a vedenia

Kreslite ich nástrojom VZT potrubie: systémy **Káblový žľab** a **Vedenie** sa ukladajú ako nosiče káblov, takže ich iné programy čítajú ako žľaby a vedenia. Na karte Káble vložte zoznam káblov (označenie, vonkajší priemer v mm, počet, od, do). `from` a `to` sú označenie zariadenia alebo bod `x,y,z` v milimetroch. Káble idú najkratšou súvislou trasou cez žľaby a vedenia; každý úsek zobrazuje svoje plnenie oproti limitom, ktoré zadáte, a rozpis sa ukladá ako CSV s dĺžkou, ktorá zahŕňa percento rezervy a konce.

## Osvetlenie

Každému svietidlu priraďte jeho súbor IES (LM-63) alebo EULUMDAT nástrojom asistenta `photometry_set`. Zadajte cieľové hodnoty, rozstup mriežky a výšku pracovnej roviny. Výsledkom je iba **priama** osvetlenosť: žiadne odrazy medzi plochami a žiadne tiene, takže v miestnosti ide o dolnú hranicu.

## Požiarne sprinklery

Doplnok **Požiarne sprinklery** má vlastnú kartu; pozrite si jeho pomocníka.
