---
title: Práce na jednom modelu společně přes Live TeamWork
summary: Co se v BimCraft mění, když jste v relaci Live TeamWork v CadCraft Studio: úpravy všech na stejném modelu IFC, vaše vlastní zpět a připojení z prohlížeče ve stejné síti.
keywords: live, live teamwork, studio live, společně, spolupracovat, relace, sdílet živě, připojit se, ifc, vlastnosti, přejmenovat, kurzor, ukazatel, vidět se navzájem, jména, barva, výběr, zpět, hostitel
from: 32061b72
---

## Co se dozvíte

Co se stane s modelem IFC, když na něm několik lidí upravuje zároveň. CadCraft Studio spustí a připojí relaci Live TeamWork (Sdílet, Připojit se); tato stránka se týká samotného modelu.

## Všichni upravují najednou

Model hostitele se načte každému, kdo se připojí. Přejmenovávejte prvky, měňte jejich hodnoty vlastností, vkládejte, nahrazujte nebo odebírejte položky knihovny a prvky jako obvykle. Vaše úpravy se zobrazí ihned; úpravy ostatních se objeví chvíli poté, co je provedou. Když úprava změní to, co vidíte (prvek byl vložen nebo odebrán), BimCraft model překreslí a zachová váš pohled.

- **Dva lidé změní jeden prvek:** platí pozdější změna na stejném řádku modelu. Sada vlastností sdílená několika prvky se zkopíruje pro prvek, který upravujete, jako vždy, takže ostatní si zachovají své hodnoty.
- **Prvek, který někdo právě odstranil,** už nelze upravit: vaše úprava se vrátí zpět a stavový řádek vysvětlí proč.
- Nové řádky modelu každého člověka dostanou vlastní čísla, takže dva lidé nikdy nedostanou stejné.

## Vidíte se navzájem

Každý účastník relace má vlastní barvu. Ve 3D zobrazení vidíte ukazatel každého člověka jako šipku v jeho barvě se jménem vedle, na prvku, na který ukazuje, a přerušovaný rámeček v jeho barvě kolem každého prvku, který vybral.

Ukazatele, jména a výběry platí jen pro relaci: nikdy se neukládají do souboru a nedostanou se do něčí historie zpět. Plynule se posouvají k místu, kde je každý člověk, takže zůstávají plynulé i na pomalém připojení.

## Zpět vrací vaši vlastní práci

{{ui:Zpět}} vrátí vaši poslední úpravu a úpravy ostatních nechá být. Pokud někdo od té doby změnil tutéž věc, nic se nevrátí a stavový řádek ukáže, kdo to byl.

## Připojení z prohlížeče

Kolega bez Studia může naskenovat obrázek pod kódem hostitele telefonem, tabletem nebo počítačem ve stejné síti. BimCraft se otevře v prohlížeči a jakmile hostitel člověka pustí dál, otevře model hostitele. Pozvánkový odkaz umožní připojit se z jiné sítě: hostitel potřebuje místo v tarifu Team Cloud Plan pro aplikaci, všichni ostatní se připojují zdarma, a odkaz funguje jen dokud je relace hostitele otevřená.

## Konec relace

Model ukládá jen hostitel. Všichni ostatní si ponechají neuloženou kopii: pokud ji chcete zachovat, použijte Uložit jako IFC.

:::note
Sdílen je pouze první model na scéně. Otevření jiného souboru během relace opustí relaci v tomto okně.
:::
