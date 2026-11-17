---
title: Kontrola vytápění a chlazení pomocí EnergyPlus
summary: Zapište model jako soubor EnergyPlus, nebo na něm v prohlížeči spusťte EnergyPlus verze 26.2.0 a porovnejte jeho návrhová zatížení s rychlou pomůckou pro vytápění a chlazení. Druhý názor pro ranou fázi návrhu, nikoli výpočet pro posouzení shody.
keywords: energyplus, energetická simulace, návrhový den, zatížení vytápěním, zatížení chlazením, meteorologický soubor, epw, idf, tepelná hmotnost, roční energie, simulace
from: b82a5bf2
---

## Co uděláte

Panel **Kontrola pomocí EnergyPlus** zapíše otevřený model jako vstupní soubor EnergyPlus (IDF): jednu zónu na místnost, stěny, podlahy, střechy a okna s jejich součiniteli prostupu tepla (U), výměnu vzduchu a ideální vytápění a chlazení. Tento soubor můžete vždy **uložit** a spustit ve svém vlastním EnergyPlus.

Pokud také nastavíte motor, panel může simulovat přímo na místě a vypíše návrhové vytápění a chlazení z EnergyPlus vedle rychlé pomůcky, místnost po místnosti.

Tato pomůcka slouží k návrhu. Energetické předpisy, certifikace a povolení vyžadují schválený nástroj a klimatická data, která tento nástroj vyžaduje, a výsledek musí zkontrolovat osoba, která za něj ručí.

## Nastavení motoru

BimCraft EnergyPlus neobsahuje. Jde o velký build WebAssembly (asi 6 MB komprimovaně a navíc datový soubor 4.6 MB), takže ho hostujete sami a jeho adresu zadáte do panelu. Stránka ho načte, až když stisknete tlačítko simulace, nikdy ne při spuštění. Adresa musí být https, cesta na tomto webu nebo localhost.

## Návrhové dny, nebo rok

- **Simulovat návrhové dny** nepotřebuje meteorologický soubor. Simuluje chladný zimní den bez slunce a horký jasný letní den při teplotách ze vstupů vytápění a chlazení na kartě Denní světlo a vypíše zatížení každé místnosti ve wattech.
- **Simulovat rok** potřebuje meteorologický soubor ve formátu EPW, který vyberete. Přidá osoby, osvětlení a zařízení ze stejných vstupů (vždy zapnuté, protože se žádný rozvrh nevymýšlí) a vypíše energii vytápění a chlazení každé místnosti v kWh. Meteorologické soubory mají vlastní licence, používejte jen takové, které smíte použít.

## Tepelná hmotnost

Zaškrtněte **Přiřadit stěnám se známými vrstvami tepelnou hmotnost**. Stěny, střechy a podlahy, jejichž materiálové vrstvy jsou známé, se zapíší vrstvu po vrstvě, s hustotou a měrným teplem převzatými z krátké tabulky typických hodnot podle názvu materiálu. Vrstvy se berou nejdříve zvenku, v pořadí, v jakém je soubor uvádí. Prvky bez vrstev zůstanou u svého U bez hmotnosti.

## Čtení porovnání

Obě metody odpovídají na mírně odlišné otázky. Rychlá pomůcka zachovává každý prvek; soubor EnergyPlus průměruje U každé místnosti podle druhu povrchu. Rozdíl větší než 15 % v návrhovém vytápění místnosti je uveden jako poznámka v panelu ⚠ s oběma hodnotami. Chlazení se podle návrhu liší více: rychlá pomůcka spočítá špičku ze slunce k jednomu datu, zatímco EnergyPlus dimenzuje podle svého vlastního návrhového dne.
