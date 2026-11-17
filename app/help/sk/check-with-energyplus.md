---
title: Kontrola vykurovania a chladenia v EnergyPlus
summary: Zapíšte model ako súbor EnergyPlus alebo na ňom spustite EnergyPlus verzie 26.2.0 v prehliadači a porovnajte jeho návrhové zaťaženia s rýchlou pomôckou pre vykurovanie a chladenie. Druhý názor na skorý návrh, nie výpočet na účely súladu.
keywords: energyplus, energetická simulácia, návrhový deň, zaťaženie vykurovaním, zaťaženie chladením, súbor počasia, epw, idf, tepelná zotrvačnosť, ročná energia, simulovať
from: b82a5bf2
---

## Čo budete robiť

Panel **Kontrola s EnergyPlus** zapíše otvorený model ako vstupný súbor EnergyPlus (IDF): jedna zóna na miestnosť, steny, podlahy, strechy a okná s ich súčiniteľmi U, výmena vzduchu a ideálne vykurovanie a chladenie. Tento súbor môžete vždy **uložiť** a spustiť vo vlastnom EnergyPlus.

Ak nastavíte aj motor, panel môže simulovať priamo na mieste a vypíše návrhové vykurovanie a chladenie podľa EnergyPlus vedľa rýchlej pomôcky, miestnosť po miestnosti.

Toto je pomôcka pre návrh. Energetické normy, certifikácia a stavebné povolenia vyžadujú schválený nástroj a údaje o klíme, ktoré vyžaduje, a výsledok musí preskúmať osoba, ktorá za ňho zodpovedá.

## Nastavenie motora

BimCraft neobsahuje EnergyPlus. Je to veľký balík WebAssembly (asi 6 MB komprimovaný plus dátový súbor 4,6 MB), takže ho hostujete sami a adresu napíšete do panela. Stránka ho načíta, až keď stlačíte tlačidlo simulácie, nikdy nie pri spustení. Adresa musí byť https, cesta na tejto stránke alebo localhost.

## Návrhové dni alebo rok

- **Simulovať návrhové dni** nevyžaduje súbor počasia. Spustí studený zimný deň bez slnka a horúci jasný letný deň pri teplotách zo vstupov pre vykurovanie a chladenie na karte Denné svetlo a vypíše zaťaženie každej miestnosti vo wattoch.
- **Simulovať rok** vyžaduje súbor počasia vo formáte EPW, ktorý vyberiete. Pridá osoby, osvetlenie a zariadenia z tých istých vstupov (vždy zapnuté, pretože žiadny plán sa nevymýšľa) a vypíše energiu vykurovania a chladenia každej miestnosti v kWh. Súbory počasia majú vlastné licencie, takže použite iba ten, ktorý smiete používať.

## Tepelná zotrvačnosť

Zaškrtnite **Dať stenám so známymi vrstvami tepelnú zotrvačnosť** a steny, strechy a podlahy, ktorých vrstvy materiálu sú známe, sa zapíšu vrstvu po vrstve, s hustotou a špecifickým teplom prevzatými z krátkej tabuľky typických hodnôt podľa názvu materiálu. Vrstvy sa berú najprv zvonku, v poradí, v akom ich súbor uvádza. Prvky bez vrstiev zostanú pri svojom súčiniteli U bez zotrvačnosti.

## Čítanie porovnania

Obe metódy odpovedajú na mierne odlišné otázky. Rýchla pomôcka zachováva každý prvok; súbor EnergyPlus spriemeruje súčinitele U každej miestnosti podľa druhu plochy. Rozdiel väčší ako 15 % v návrhovom vykurovaní miestnosti sa uvedie ako poznámka v paneli ⚠ s oboma hodnotami. Chladenie sa podľa návrhu líši viac: rýchla pomôcka počíta špičku zo slnka v jeden dátum, zatiaľ čo EnergyPlus dimenzuje na svoj vlastný návrhový deň.
