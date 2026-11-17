---
title: Umiestnenie pohľadu a otvorenie jeho výkresu
summary: Umiestnite značku pohľadu na pôdorys, nasmerujte ju tak, ako má pohľad vyzerať, potom nájdite jeho výkres v prehliadači projektu, upravte ho v ňom a umiestnite na list. Postupy pre rozloženia s pásom kariet aj pre klasické rozloženie.
keywords: pohľad, výška, značka pohľadu, označenie pohľadu, umiestniť pohľad, nový pohľad, vytvoriť pohľad, vonkajší pohľad, bočný pohľad, predný pohľad, pohľad z bodu, kde je môj pohľad, otvoriť pohľad, pohľad na liste, prevrátiť pohľad, premenovať pohľad, severný pohľad, dláždiť pohľady, rozdeliť pohľad, pôdorys a 3D vedľa seba
from: a7cfd2b9
---

## Čo budete robiť

Vytvoríte vlastný pohľad: výkres budovy videnej z bodu, ktorý zvolíte, v smere, ktorý zvolíte. Stačia dve kliknutia na pôdorys. Výkres sa potom zobrazí spolu s ostatnými pohľadmi budovy.

:::note
Štyri strany už existujú. Každá budova má pohľady Sever, Východ, Juh a Západ v {{ui:Prehliadač projektu}} pod {{ui:Pohľady}} bez umiestňovania čohokoľvek. Umiestnite vlastný pohľad, keď chcete pohľad z iného miesta: kolmo na šikmé krídlo, z vnútra nádvoria alebo na jednu stenu vnútri miestnosti.
:::

## Kde je nástroj

- Rozloženia s pásom kariet: {{ui:Pohľad}} › **Vytvoriť** › {{ui:Výška}}.
- Klasické rozloženie: zapnite {{ui:Kresliť}}, potom {{ui:Zostava}} › {{ui:Výška}}.
- Ľubovoľný štýl ponuky: príkaz sa volá Výška; paleta príkazov ho nájde a riadok príkazov prijíma ELEVATION.

## Postup

1. Vyberte {{ui:Výška}}. Pohľad sa umiestňuje na pôdorys, takže ak ste boli v 3D zobrazení, BimCraft zobrazí pôdorys podlažia, na ktorom ste boli. Ukazovateľ hovorí **Kliknite, kde pohľad stojí**.
2. Kliknite na miesto, odkiaľ sa pohľad berie. Pri vonkajšom pohľade kliknite mimo budovy, kúsok od steny, ktorú chcete vidieť.
3. Ukazovateľ teraz hovorí **Kliknite na smer pohľadu**. Pohybujte sa smerom k budove: šípka ukazuje smer a krátka čiara cez prvé kliknutie je hrana, z ktorej sa pohľad pozerá. Kliknite.
4. Na pôdorysu sa objaví kruh s číslom a ukazovateľom. To je značka pohľadu. Prvá je 1, ďalšia 2.
5. Dokončite stlačením klávesu Esc, alebo pokračujte a umiestnite ďalší.

Umiestnenie značky je jeden krok: {{key:Mod+Z}} ju vráti späť.

## Otvorenie výkresu

Pôdorys zostane pred vami aj po druhom kliknutí. Výkres je v {{ui:Prehliadač projektu}}:

1. Otvorte {{ui:Pohľady}}. Váš pohľad je uvedený za štyrmi stranami ako **Výška 1**.
2. Kliknite na tlačidlo s ceruzkou {{ui:Upraviť v tomto pohľade}} na jeho riadku, aby ste videli výkres a mohli v ňom pracovať: presúvať steny, dvere, okná a podlažia, pridávať poznámky a kóty. Pozrite [Úprava v pohľadoch a rezoch](topic:edit-in-elevations).
3. Kliknite na samotný riadok, aby ste otvorili sadu výkresov, alebo pridajte pohľad na list vlastného výkresu. Pozrite [Pohľady a listy](topic:views-and-sheets).

V klasickom rozložení je prehliadač projektu v ľavom paneli, keď je {{ui:Kresliť}} zapnuté. V rozloženiach s pásom kariet je to karta {{ui:Prehliadač projektu}} v časti Vlastnosti.

## Čo pohľad zobrazuje

- Všetko pred značkou, pokiaľ budova siaha. Nič za ňou.
- Podlažia s ich názvami a výškami.
- Ak značka stojí vnútri budovy, všetko, v čom stojí, sa tam prereže ako pri reze. Pre čistý vonkajší pohľad stojte vonku.

## Zmena

Vyberte značku na pôdorysu (kliknite na jej kruh nástrojom {{ui:Vybrať}}). Vlastnosti obsahujú:

- {{ui:Označenie}}: jej číslo alebo vlastný názov, najviac 8 znakov.
- {{ui:Prevrátiť pohľad}}: pozerať z rovnakého miesta opačným smerom.
- {{ui:Pozerať až po}}: dokedy pred značkou pohľad siaha. 0 zobrazí všetko.

Stlačením klávesu Delete odstránite značku aj jej výkres. Späť ich vráti.

:::tip
Ak chcete pri práci vidieť naraz pôdorys a 3D zobrazenie, použite {{ui:Pohľad}} › **Okná** › {{ui:Dláždiť pohľady}} v rozloženiach s pásom kariet, alebo {{ui:Rozdeliť}} v klasickom rozložení. Kliknutie na kartu pohľadu sa vráti na jeden pohľad.
:::

## Obmedzenia

- Značku zatiaľ nie je možné na pôdoryse ťahať ani otáčať. Odstráňte ju a umiestnite znova, alebo použite {{ui:Prevrátiť pohľad}}.
- V zozname pohľadov, ktoré môžete pridať na list, je vlastný pohľad uvedený spolu s rezmi.
- Značky dverí a okien sa kreslia na štyroch bočných pohľadoch, nie na pohľade, ktorý ste umiestnili.

## V IFC

Značka sa v súbore uloží ako IfcAnnotation s názvom "Elevation 1" a typom objektu "Elevation marker", v podlaží, na ktorom bola umiestnená. Iný program ju zobrazí ako anotáciu; samotný výkres vytvorí BimCraft z modelu zakaždým znova.
