---
title: Automaticky vést vzduchotechniku, odpady, vodu a potrubí chladiva
summary: V kontrole kolizí BimCraft najde trasu kolem otevřeného modelu pro vzduchotechniku, gravitační odvod, studenou a teplou vodu a rozdělená nebo vícenásobně rozdělená potrubí chladiva a nakreslí vedení s tvarovkami jedním krokem zpět. Pomůcka pro kreslení: velikosti, spády a kontroly vycházejí z tabulek v programu a z čísel, která zadáte; nic zde netvrdí, že návrh vyhovuje předpisu.
keywords: automatické vedení, autoroute, vedení vzduchotechniky, vedení potrubí, odvod, gravitace, stoupačka, odvětrání, sifon, voda, teplá voda, zpětná smyčka, cirkulace, chladivo, rozdělený, vícenásobný rozdělený, VRF, ekvivalentní délka, odbočková sada, odbočka
from: 5841d513
---

## Co budete dělat

Nechte BimCraft navrhnout síť vedení mezi přípojkami, které už v modelu jsou, kolem stěn a trámů, a potom to zkontrolujte podle čísel, která vidíte.

## Postup

1. Otevřete model a kontrolu kolizí. Pod **Automaticky vést vzduchotechniku** vyberte vzduchotechnickou jednotku a její koncové prvky, nebo pod **Automaticky vést ostatní systémy** vyberte systém.
2. **Gravitační splaškový odvod.** Zadejte polohu odtoku a, pokud je máte, polohy stoupaček. Zaškrtněte **Vést všechna podlaží najednou**, aby se vzalo každé podlaží s vybavením: odvody každého podlaží se napojí na stoupačku ve své úrovni a stoupačka vede od místa nad nejvyšším výtokem až k její patě. Stiskněte {{ui:Vést trasu}}.
3. **Sifon k odvětrání.** Panel vypisuje vzdálenost od každého sifonu k jeho odvětrání. Do **Největší vzdálenost od sifonu k odvětrání** zadejte nejvíce, které váš předpis dovoluje; každé zařízení za touto hodnotou je uvedeno jako nehotové, s překročením v milimetrech. Zaškrtněte **Odvětrat stoupačkou**, když zařízení nemají vlastní odvětrávací odbočku: vzdálenost se pak měří ke stoupačce. BimCraft nemá tabulku předpisu pro tento případ: číslo zadáte vy.
4. **Studená a teplá voda.** Vyberte zdroj, zadejte tlak u zdroje a tlak, který potřebujete u zařízení. Zaškrtněte **Teplá voda**, vyberte teplou přípojku ohřívače a zaškrtněte **Vratná smyčka**, aby vratné vedení skončilo u přípojky **teplé zpátečky** ohřívače, nebo u jiné přípojky, kterou vyberete (ta skončí 150 mm před koncem, otevřeně, abyste ji mohli připojit).
5. **Rozdělené, vícenásobně rozdělené a VRF.** Vyberte venkovní jednotku, zaškrtněte vnitřní jednotky a u každé zadejte výkon. Zadejte limity z údajů vašeho výrobce. Zadejte **ekvivalentní délku** oblouku a odbočkové sady (hodnoty výrobce) a nejdelší a celková délka se zkontrolují podle ekvivalentních délek.
6. Stiskněte {{ui:Vést trasu}}. Panel napíše, kolik vedení nakreslil, a také cokoli, co nedokázal, a proč. {{ui:Zpět}} vezme všechno zpět jedním krokem.

## Co byste měli vidět

Potrubí s koleny, T-kusy a redukcemi; odvody, které klesají alespoň o nejmenší spád pro svou velikost; odvětrávací odbočky u zařízení; chladivová vedení jako dvojice kapalinové a plynové trubky, která se v každém rohu otáčí stejným směrem, s označenou odbočkovou sadou tam, kde odbočka odchází od hlavní trasy.

## Dobré vědět

- Tam, kde se odvod napojí na jiný odvod, model nakreslí T-kus. Půdorys tato místa pojmenuje jako šikmé odbočky pod 45 stupňů, abyste tvarovku mohli změnit.
- Teplá voda použije vlastní teplou přípojku zařízení, když ji jeho rodina má, a jinak přípojku 100 mm vedle studené.
- Vedení chladiva začínají mezi dvěma přípojkami každé jednotky. Když jsou přípojky jedné jednotky příliš blízko u sebe pro oblouk, dvojice zůstane vystředěna mezi nimi.
- Vodní síť používá křivku odběru a třecí hodnoty ukázané ve výpočtech; před spolehnutím na tlaky je nahraďte hodnotami svého předpisu.
- Velké domy mohou trvat půl minuty nebo déle, hlavně kvůli teplé síti.
- Jde o pomůcku pro kreslení. Kvalifikovaná osoba ověří velikosti, spády, odvětrání a tlaky podle platného předpisu.

## Dál

[Kontrola kolizí](topic:clash-check) · [Kontrola potrubí a vzduchotechniky vůči konstrukci](topic:mep-against-structure) · [Napojení potrubí na zařízení](topic:mep-connections)
