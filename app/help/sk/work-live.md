---
title: Práca na jednom modeli spoločne s Live TeamWork
summary: Čo sa v BimCraft mení, keď ste v relácii Live TeamWork z CadCraft Studio: úpravy všetkých v tom istom modeli IFC, vaše vlastné vrátenie späť a pripojenie z prehliadača v tej istej sieti.
keywords: live, live teamwork, studio live, spolu, spolupracovať, relácia, zdieľať naživo, pripojiť sa, ifc, vlastnosti, premenovať, kurzor, ukazovateľ, vidieť sa navzájom, názvy, farba, výber, späť, hostiteľ
from: 32061b72
---

## Čo sa naučíte

Čo sa stane s modelom IFC, keď ho v tom istom čase upravuje viacero ľudí. CadCraft Studio spúšťa a pripája reláciu Live TeamWork (Zdieľať, Pripojiť sa); táto stránka sa venuje samotnému modelu.

## Všetci upravujú naraz

Model hostiteľa sa dostane ku každému, kto sa pripojí. Premenujte prvky, menite ich hodnoty vlastností, umiestňujte, vymieňajte alebo odstraňujte položky knižnice a prvky ako obvykle. Vaše vlastné úpravy sa zobrazia hneď; úpravy iných sa zobrazia chvíľu po tom, ako ich urobia. Keď úprava zmení to, čo vidíte (prvok bol umiestnený alebo odstránený), BimCraft model prekreslí a zachová váš pohľad.

- **Dvaja menia jeden prvok:** neskoršia zmena na tom istom riadku modelu platí. Súbor vlastností zdieľaný viacerými prvkami sa pre prvok, ktorý upravujete, skopíruje ako vždy, takže ostatné si zachovajú svoje hodnoty.
- **Prvok, ktorý niekto práve odstránil,** sa už nedá upravovať: vaša úprava sa vráti späť a stavový riadok uvedie dôvod.
- Nové riadky modelu každej osoby dostanú vlastné čísla, takže dvaja ľudia nikdy nedostanú to isté číslo.

## Vidíte sa navzájom

Každý v relácii má vlastnú farbu. V 3D pohľade vidíte ukazovateľ každej osoby ako šípku v jej farbe s menom vedľa, na prvku, na ktorý ukazuje, a prerušovaný rámček v jej farbe okolo každého prvku, ktorý vybrala.

Ukazovatele, mená a výbery platia iba pre reláciu: nikdy sa neukladajú do súboru a nikdy sa nedostanú do niečieho vrátenia späť. Plynule sa presúvajú k miestu, kde je každá osoba, takže sú plynulé aj na pomalom pripojení.

## Späť vracia iba vašu prácu

{{ui:Späť}} vráti vašu poslednú úpravu späť a úpravy ostatných nechá tak. Ak niekto medzitým zmenil tú istú vec, nič sa nevráti späť a stavový riadok uvedie, kto to bol.

## Pripojenie z prehliadača

Spoluhráč bez Studia môže naskenovať obrázok pod kódom hostiteľa telefónom, tabletom alebo počítačom v tej istej sieti. BimCraft sa otvorí v prehliadači a otvorí model hostiteľa, akonáhle vás hostiteľ pustí dnu. Odkaz s pozvánkou umožní pripojiť sa z inej siete: hostiteľ potrebuje miesto Team Cloud Plan pre aplikáciu, ostatní sa pripoja zadarmo a odkaz funguje iba dovtedy, kým je relácia hostiteľa otvorená.

## Keď relácia skončí

Model ukladá iba hostiteľ. Ostatní majú neuloženú kópiu: ak ju chcete zachovať, použite Uložiť ako IFC.

:::note
V scéne sa zdieľa iba prvý model. Otvorenie iného súboru počas relácie ukončí reláciu v tomto okne.
:::
