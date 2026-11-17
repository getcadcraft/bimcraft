---
title: Povrchové úpravy místností a rozpisy povrchových úprav
summary: Určete, čím je obložena podlaha, stěny a strop každé místnosti, přidejte zóny, například obkladovou stěnu, a získejte rozpisy povrchových úprav podle místností, stěn a zón s plochami, počty dlaždic včetně řezaných a objemy podkladů.
keywords: povrchová úprava, povrchové úpravy, rozpis povrchových úprav, povrchové úpravy místností, podlahová úprava, úprava stěny, úprava stropu, soklová lišta, dlaždice, řezané dlaždice, počet dlaždic, odpad, podklad, potěr, podkladová deska, omítka, zóna, obkladová stěna, pásmo, soklový obklad, mokré prostory, interiér, množství
from: 8c30498c
---

## Co budete dělat

Jednou řekněte BimCraftu, čím je každá místnost obložena. Rozpisy povrchových úprav pak uvedou plochy, dlaždice k objednání a objemy podkladů a mění se spolu s modelem.

## Postup

1. Zapněte {{ui:Kreslení}}, v levém panelu otevřete **Rozpisy** a klikněte na **Povrchové úpravy místností**.
2. Pod **Typy povrchových úprav** klikněte na **Přidat typ povrchové úpravy**. Zadejte název, druh (Dlaždice, Plošný materiál, Nátěr nebo Deska) a tloušťku. U dlaždice zadejte délku a šířku dlaždice, spáru a přídavek na odpad v procentech. Je-li pod povrchovou úpravou něco (potěr, podkladová deska, vrstva omítky), pojmenujte to pod **Podklad** a zadejte jeho tloušťku.
3. Pod **Místnosti** vyberte povrchovou úpravu podlahy, stěn a stropu každé místnosti. Má-li místnost soklovou lištu, zadejte její název a výšku.
4. Pod **Zóny** klikněte na **Přidat zónu** pro část místnosti, která dostane jinou úpravu:
   - zóna **stěny** je pás mezi dvěma výškami nad podlahou (obkladová stěna od 0 do 1200, soklový obklad). Je na každé stěně místnosti, nebo vyberte stěny této místnosti v modelu a kliknutím na tlačítko **Zapnout** je omezte jen na ně;
   - zóna **podlahy** nebo **stropu** je plocha, kterou zadáte. Odečte se od vlastní úpravy místnosti.
5. Klikněte na **Uložit**. Je to jeden krok v Zpět. Délky zadávejte v jednotkách projektu.

## Rozpisy

Do seznamu Rozpisů přibydou čtyři položky:

- **Povrchové úpravy podle místností**: každá místnost s podlahovou, stěnovou a stropní úpravou, jejich plochami a soklem s délkou.
- **Povrchové úpravy podle stěn**: každý úsek stěny na straně místnosti a pás, který úprava pokrývá, s délkou, hrubou plochou, odpočty, čistou plochou a u dlaždic celými dlaždicemi, řezanými dlaždicemi a dlaždicemi k objednání.
- **Povrchové úpravy podle zón**: každá zóna s úpravou, čistou plochou, dlaždicemi a objemem podkladu.
- **Množství povrchových úprav**: jeden řádek na úpravu: čistá plocha, celé a řezané dlaždice, dlaždice k objednání, podklad a jeho objem a vlastní objem úpravy.

Seskupujte, sečtěte, ukládejte a exportujte je jako každý rozpis: viz [Rozvržení, uložení a export rozpisu](topic:schedule-layouts). Kliknutím na údaj vyberete, odkud pochází: odpočty stěny vyberou její dveře a okna.

## Jak se úpravy měří

- **Stěny**: každý úsek stěny na straně místnosti, jeho délka podél místnosti krát výška, kterou úprava pokrývá, zmenšená o část každých dveří a oken uvnitř této výšky. Stěna nižší než místnost se upraví až do své vlastní horní hrany. Metoda měření projektu rozhoduje, které otvory jsou příliš malé na odečtení ([Rozpisy](topic:plan-schedules-and-pdf)).
- **Podlahy a stropy**: místnost uvnitř líců stěn, zmenšená o ostrůvky v ní.
- **Soklová lišta**: délka stěn místnosti zmenšená o šířku jejích dveří.
- **Dlaždice**: kladou se jako mřížka od jednoho rohu plochy, mezi dlaždicemi je jedna spára. Dlaždice celá na ploše je celá dlaždice; dlaždice částečně na ní (u hrany, kolem otvoru) je řezaná dlaždice. Dlaždice k objednání jsou celé plus řezané, plus přídavek na odpad, zaokrouhlené nahoru. Každá řezaná dlaždice se počítá jako nová: zbytky se nepoužívají znovu.
- **Objem podkladu**: čistá plocha krát tloušťka podkladu.
- Počet označený **≈** se vypočítá z plochy místo po dlaždicích: plocha, z níž je odečtena zadaná zóna, nebo velmi velká plocha.

## Dobré vědět

- Povrchové úpravy se uchovávají v souboru budovy (sada vlastností `CadCraft_Finishes` na projektu). Každá místnost s úpravou dostane také standardní sadu vlastností IFC `Pset_SpaceCoveringRequirements`, takže názvy čtou i jiné programy.
- Kladení dlaždic začíná v rohu. Rozložení vycentrované do místnosti, vzor (rybí kost, vazba cihel) a opětovné použití zbytků se nepočítají.
- Zakřivená stěna a hranice místnosti, která není stěnou (oddělovač místností), se uvede jako **Jiná hranice** s délkou a bez otvorů.
- Položka **Úpravy**, která tu byla dříve, uvádí vrstvy úprav typů stěn; **Vrstvy: plocha a objem** vypisuje každou vrstvu každého vrstveného typu. Povrchové úpravy místností zde jsou to, co se na místnost nanáší nad tyto vrstvy.
- Asistent vám může povrchové úpravy nastavit příkazem `finishes_set`: viz [Nechte AI asistenta pracovat s vaším modelem](topic:assistants).
