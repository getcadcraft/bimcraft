---
title: Výkresy panelov z dreva alebo ľahkej tenkostennej ocele
summary: Zarámujte steny, podlahy a strechy modelu ako panely z dreva alebo ľahkej tenkostennej ocele, pozrite si každú stojku, podvalinu, nadpražie, trám a krokvu v mierke a uložte rezný zoznam ako CSV a dielenské výkresy ako PDF.
keywords: panel, konštrukcia, dielenský výkres, rezný zoznam, ľahká tenkostenná oceľ, oceľová stojka, LGS, drevo, trám, krokva, nadpražie, sklad, PDF
from: c09f916e
---

## Otvorenie panelov

Vyberte {{ui:Výkresy panelov}} v ponuke {{ui:Zostava}} (alebo napíšte {{cmd:PANELS}}). Zoznam obsahuje každú nakreslenú stenu, každú podlahu a každú strechu modelu, každú s políčkom. Steny prichádzajú so svojimi dverami a oknami ako otvormi. Podlaha je zarámovaná ako obdĺžnik okolo svojho obrysu, s trámami idúcimi kratšou stranou. Strecha je zarámovaná ako štít nad obrysom svojich stien, so sklonom strechy; zoznam to uvádza, lebo valbová alebo zložitá strecha nie je štít.

## Materiál, veľkosť a rozstup

Vyberte {{ui:Materiál}}: **Drevo** alebo **Ľahká tenkostenná oceľ**. Oceľové kusy sú C-stojky pomenované podľa hĺbky a hrúbky (napríklad C92-1.2), s profilom na podvaliny. {{ui:Veľkosť prvku}} zvolí jednu veľkosť pre každý zaškrtnutý panel, alebo ponechajte Predvolené, aby sa použili predvolené hodnoty každého druhu panela. {{ui:Rozstup}} je vzdialenosť medzi stojkami, trámami alebo krokvami. Sú to východiskové hodnoty, ktoré nastavíte vy. Nie je to kontrola podľa predpisov: či stojka pri tomto rozstupe unesie danú stenu a nadpražie pri danom rozpätí, určujú tabuľky predpisov (doplnok Stavebné predpisy obsahuje tabuľky IRC) a váš statik.

## Čo dostanete

Prvý zaškrtnutý panel je nakreslený v mierke v dialógu, s kótami. {{ui:Rezný zoznam (CSV)}} uloží kusy každého panela podľa značky, veľkosti a dĺžky, a dĺžky materiálu, ktoré treba nakúpiť. {{ui:Dielenské výkresy (PDF)}} uloží jednu stranu A3 pre každý panel, s každým kusom označeným a jeho rezným zoznamom. {{ui:Výkres (SVG)}} uloží prvý panel ako výkres. Čokoľvek, čo kód rámovania nájde a nedá sa zarámovať (otvor príliš blízko konca steny, nadpražie, ktoré sa nezmestí pod podvaliny, kus dlhší než najdlhší materiál), je uvedené v Problémoch aj v dialógu.

## Čo nerobí

Panely sú výkresy vytvorené z modelu vždy, keď si ich vyžiadate: do modelu sa nič nezapisuje, takže vždy zodpovedajú modelu. Ak chcete zarámovanie vložiť do modelu ako prvky, použite {{ui:Konštrukcia}} pre drevené steny, podlahy a strechy.
