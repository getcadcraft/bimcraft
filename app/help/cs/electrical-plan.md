---
title: Elektrický plán
summary: Umisťujte zásuvky, vypínače, svítidla, senzory, rozvodné krabice a rozvaděče do půdorysu se stejnými symboly jako v doplňku Elektro CadCraft, propojujte vypínače se svítidly, která rozsvěcují, a vypisujte zařízení a okruhy v rozpisech.
keywords: elektro, elektrický plán, zásuvka, dvojitá zásuvka, vypínač, střídavý vypínač, stmívač, svítidlo, stropní svítidlo, vestavné svítidlo, downlight, pohybový senzor, rozvodná krabice, rozvaděč, rozvodnice, okruh, zatížení, watty, ampéry, vodič vypínače, rozpis zařízení, rozpis rozvaděče
from: f7de1947
---

## Co provedete

Nakreslete elektrický plán domu v modelu: zásuvky, vypínače a rozvaděče na stěnách, svítidla a senzory na stropě. Každé zařízení je skutečný elektrický prvek v souboru IFC s označením, okruhem a zatížením a vypínače si pamatují svítidla, která rozsvěcují.

## Umístění zařízení

1. Na podlaží otevřete {{ui:Build}} a vyberte {{ui:Electrical}}.
2. Vyberte zařízení: zásuvky (silnoproud, data, telefon, audio-video), vypínače a senzory (včetně termostatu a časovače), svítidla, detektory a alarmy, rozvodnou krabici, rozvaděč nebo podrozvaděč.
3. Zadejte **Okruh**, pokud ho znáte (libovolný název: 1, 2, A-3). Pole **Montážní výška** nechte prázdné pro obvyklou výšku daného zařízení.
4. Klikněte do půdorysu. Zásuvky, vypínače a rozvaděče se umístí na líc nejbližší stěny, otočené do místnosti; svítidla, senzory a rozvodné krabice se umístí na strop v místě kliknutí.

Zařízení se označí již při umísťování: **R** pro zásuvky, **S** pro vypínače, **L** pro svítidla, **M** pro pohybové senzory, **J** pro rozvodné krabice, **P** pro rozvaděče. Zařízení na stěně se pohybuje spolu se stěnou, když stěnu přesunete.

Raději procházíte podle obrázku? Otevřete **Paletu symbolů** z {{ui:Build}}, najděte zařízení podle názvu, označte hvězdičkou ta, která používáte, a umístěte je jedním kliknutím: viz [Paleta symbolů](topic:symbol-palette).

## Propojení vypínačů se svítidly

1. Vyberte vypínač (nebo pohybový senzor) a v **Vlastnostech** klikněte na **Propojit svítidla**.
2. Klikněte na každé svítidlo, které rozsvěcí. Propojené svítidlo odpojíte kliknutím na něj znovu.
3. Stiskněte {{key:Enter}} nebo klikněte na **Hotovo**.

Plán vykreslí přerušovanou křivku od vypínače ke každému jeho svítidlu. V **Vlastnostech** svítidla je vidět, které vypínače ho rozsvěcují.

## Místnost, ve které zařízení stojí

Každé zařízení ví, ve které místnosti stojí. Zařízení na stěně je v místnosti, do které je obrácené; stropní zařízení je v místnosti, nad kterou se nachází. **Vlastnosti** ukazují **Místnost** a rozpis **Elektrická zařízení** má sloupec **Místnost** (číslo a název, například 101 Kuchyně).

Údaj zůstává aktuální: přejmenujete-li nebo přečíslujete místnost, přesunete zařízení nebo přesunete stěnu, místnost se změní ve stejném kroku. Zařízení na vnější straně budovy nebo v prostoru, který není místností, hlásí, že není v místnosti.

Místnost se zapisuje i do souboru, do sady vlastností zařízení `CadCraft_Location` (Room, RoomNumber, RoomName), takže ji mohou použít Najít, Obarvit podle vlastnosti a rozpis značek, a stejně tak i jiný program. Symboly v půdorysu a prvky propojené se symbolem dostanou stejnou sadu; viz [Paleta symbolů](topic:symbol-palette).

## Nechte asistenta umístit zařízení

S připojeným asistentem (Nastavení › Asistenti, s povolenými úpravami) můžete zařízení popsat slovy: „umísti dvojzásuvku každé 2 m podél stěn obývacího pokoje, 300 mm nad podlahou, na okruhu 3“, nebo „přidej stropní svítidlo s vypínačem u dveří“. Asistent používá pět nástrojů: `devices_add`, `device_change`, `lights_set`, `devices_delete` a `devices_list`. Vytvářejí stejná zařízení jako nástroj Elektro, na stejných stěnách a se stejnými značkami, okruhy, zatíženími a výškami; každé volání je jeden krok zpět.

Zařízení nikdy nedostane druh, který nástroj Elektro nemá: neznámý druh je odmítnut a asistent dostane seznam. Zásuvka nebo vypínač musí ležet do 600 mm od líce stěny, stejně jako kliknutí, jinak je volání odmítnuto a nic se neumístí. Výchozí výšky jsou v milimetrech: 300 pro zásuvky, 1100 pro vypínače; stropní zařízení visí od stropu.

## Změna a výpis

Vyberte zařízení a změňte jeho značku, okruh, zatížení (watty) a montážní výšku. Vyberte více zařízení a přiřaďte je všechna najednou na jeden okruh. {{key:Delete}} zařízení odstraní; smazané svítidlo se odebere z vypínačů, které ho ovládaly.

V {{ui:Schedules}} vyberte **Elektrická zařízení** pro všechna zařízení s jejich podlažím, okruhem, zatížením, výškou a svítidly, která každý vypínač rozsvěcí, nebo **Okruhy** pro zařízení každého okruhu, celkové zatížení a proud. Obojí je i na listu rozpisů sady výkresů: viz [Pohledy, řezy a listy](topic:sheets).

:::note
Montážní výšky a zatížení jsou plánovací výchozí hodnoty (zásuvka 16" nad podlahou a 200 W, vypínač ve výšce 48", stropní svítidlo 60 W), nejde o návrh: elektrikář nebo inženýr dimenzuje okruhy a kontroluje normy.
:::

:::tip
Symboly jsou stejné jako ty, které doplněk Elektro CadCraft kreslí na instalační plány, takže plán z kterékoli aplikace se čte stejně.
:::
