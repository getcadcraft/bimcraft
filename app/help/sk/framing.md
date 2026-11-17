---
title: Konštrukcia stien, podláh a striech
summary: Vytvorte stojky, pásnice, preklady, trámy, krokvy alebo väzníky z modelu a ponechajte ich v ňom; vytvoria sa znova, keď sa zmenia steny, otvory, podlahy alebo strecha, a výkaz Rezivo je rezný zoznam.
keywords: TJI, I-trám, tabuľka rozpätí trámov, načítať tabuľku, konštrukcia, rám, stojka, pásnica, horná pásnica, preklad, hlavná stojka, pomocná stojka, lemovanie, krátka stojka, parapet, blokovanie, roh, kalifornský roh, T-spoj, trám, obvodový trám, lemovací trám, krokva, valbová krokva, údolová krokva, pomocná krokva, hrebeňová doska, stropný trám, kliešte, väzník, rezivo, rezný zoznam, board feet, 2x4, 2x6, rozostup, osová vzdialenosť
from: 76d0ffb5
---

## Čo urobíte

Zostavte konštrukciu budovy z toho, čo ste nakreslili. BimCraft rozloží stojky, pásnice a preklady v stenách, trámy v podlahách a krokvy (alebo väzníky) v streche, rozmerí ich podľa predvolených tabuliek označených ako predvolené, ponechá ich s modelom a vytvorí ich znova vždy, keď sa zmení to, čo rámujú. Výkaz **Rezivo** je rezný zoznam.

## Vytvorenie konštrukcie

1. Na podlaží otvorte {{ui:Zostava}} a vyberte {{ui:Konštrukcia}}.
2. Vyberte **rozostup** (16" alebo 24" osová vzdialenosť; 400 alebo 600 mm), **rohy** (trojstojkové alebo kalifornské), **Krokvy** alebo **Väzníky** pre strechy a či steny dostanú rad **blokovania** v polovici výšky. Pre podlahy vyberte **Rezivo** alebo **TJI (predbežné)** a nastavte smer trámov na automatický, pôdorysnú os X alebo pôdorysnú os Y.
3. Kliknite na **Vytvoriť konštrukciu každej steny** alebo kliknite na jednu stenu, podlahu alebo strechu (na podlaží, na ktorom strecha leží), aby ste vytvorili len tú jednu.

Vypnite **Zobraziť konštrukciu**, aby sa skryli všetky kusy konštrukcie, ako vrstva; **Priehľad** skryje steny, podlahy a strechy, ktoré sú zarámované, aby ste videli len konštrukciu.

## Čo dostanete

- **Steny**: spodná pásnica (rezaná pri dverách), dvojitá horná pásnica, stojky na rozvrhu od začiatku steny, hlavné a pomocné stojky a preklad pri každých dverách a oknách, krátke stojky nad prekladmi a pod oknami, hrubý parapet pod oknami, rohy tam, kde sa steny stretávajú (stena, ktorá prechádza, dostane rohové stojky), dve podporné stojky, kde do steny T-spojom napája iná stena, a blokovanie medzi stojkami.
- **Podlahy**: trámy cez kratšiu stranu podlahy predvolene, alebo pozdĺž vami zvolenej osi pôdorysu; obvodové trámy okolo okraja a dvojité lemovacie trámy a preklady okolo schodiskovej šachty, pričom trámy, ktoré cez ňu prechádzajú, sú skrátené (koncové trámy). Režim TJI zvolí najmenšiu uvedenú radu a výšku, ktorá pri zvolenom rozostupe pokryje nameranú voľnú svetlosť rozpätia.
- **Strechy**: bežné krokvy kolmé na každý okap, pomocné krokvy tam, kde ich valby a údolia režú, valbové a údolové krokvy, hrebeňové dosky, stropné trámy na pásnicach a kliešte — alebo jednoduché väzníky v rozostupe, jeden kus za druhým.

## Zmena

Vyberte ľubovoľný kus konštrukcie v 3D zobrazení alebo v strome modelu. **Vlastnosti** ukazujú jeho konštrukciu: zmeňte rozostup, typ a smer trámov podlahy, rohy, blokovanie alebo konštrukciu strechy. Posúvanie stien, dverí a okien alebo zmena podlahy či strechy vytvorí konštrukciu znova automaticky.

Ak chcete zachovať kus, ktorý ste umiestnili zámerne, keď sa konštrukcia vytvára znova, vyberte ho a zvoľte **Ponechať tento kus pri opätovnom vytvorení konštrukcie**. Ponechaný kus zostane tam, kde je; keď sa konštrukcia okolo neho zmení, je označený, aby ste ho mohli skontrolovať.

## TJI podlahy z tabuľky, ktorú načítate

BimCraft neobsahuje tabuľky rozpätí výrobcov trámov (sú výrobcov a menia sa s každým vydaním). Vyberte konštrukciu podlahy, nastavte **Trámy podlahy** na **TJI (predbežné)** a vo **Vlastnostiach** zvoľte **Načítať tabuľku…**: súbor vo formáte `cadcraft-tji-table`, JSON alebo CSV, ktorý ste pripravili z aktuálnych tabuliek rozpätí výrobcu. Uvádza výrobcu, produkt a vydanie a odkiaľ čísla pochádzajú, a pre každý prípad zaťaženia (úžitkové zaťaženie, stále zaťaženie, limit priehybu, dĺžka uloženia) uvádza najväčšie voľné rozpätie každej rady a výšky pri každom rozostupe.

- BimCraft prevezme **voľné rozpätie** podlahy, zvolí najplytšiu výšku a v nej radu, ktorej uvedené rozpätie ju pokryje pri zvolenom rozostupe a prípade zaťaženia, a podlahu s ňou skonštruuje. Ak je rozpätie alebo rozostup mimo tabuľky, oznámi to a nič nezmení.
- Zaťaženia, limit priehybu, dĺžka uloženia, tabuľka a veta „Predbežné návrhové usmernenie; konečný výber vyžaduje tabuľky výrobcu a zaťaženia projektu“ sa vytlačia na výkaze Rezivo, zapíšu sa do modelu spolu s konštrukciou a zobrazia sa v paneli **Problémy** ako poznámka. Tabuľka označená ako príklad to uvedie vo varovaní.
- Ak je zapnutý doplnok **Stavebné predpisy**, jeho pravidlo pre trámy podlahy číta aj načítanú tabuľku; bez tabuľky sa TJI trámy z tejto kontroly vynechajú, ako predtým.
- Tabuľka zostáva v tomto prehliadači, kým ju nevymažete alebo nenačítate inú. Súbor: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: palce, stopy, psf; alebo `metric`: mm, metre, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) a `rows` (`series`, `depth`, `spans`: pre každé id prípadu rozostup a najväčšie voľné rozpätie, napríklad `"16": "15-6"`). V CSV sú tie isté údaje riadky `# key = value`, potom `series,depth,case,spacing,span`.
- Ak nie je načítaná žiadna tabuľka, rozloženie TJI sa odmietne a nič sa nezmení: **Načítajte tabuľku TJI: tabuľky výrobcu sú ich a nie sú zabudované.** Model zostavený staršou zabudovanou tabuľkou TJI (pred touto zmenou) si zachová každý trám, ktorý má; Vlastnosti a Problémy uvádzajú, že tabuľka je potrebná, a podlahu možno zostaviť znova, keď načítate jednu. Plné trámy z reziva fungujú ako doteraz.

Ide len o usmernenie pre rozloženie. Konečný výber trámov vyžaduje tabuľky výrobcu, zaťaženia projektu a inžiniera.

## Rezný zoznam

V paneli Tabuliek vyberte **Rezivo**: každý kus konštrukcie zoskupený podľa rozmeru a podľa dĺžky zásobníka, ktorú by ste kúpili (celé dĺžky po 2' od 8'; kroky po 600 mm pri milimetroch), s počtom kusov a board feet. **CSV** ho stiahne.

:::warning
Veľkosti hlavičiek, trámov, krokiev a stropných trámov pochádzajú z označených predvolených tabuliek pre typický jedno- alebo dvojpodlažný dom, nie z výpočtu. **Vlastnosti** uvedú, kedy je rozpätie alebo otvor mimo jeho tabuľky. Projektant alebo inžinier skontroluje rozpätia, zaťaženia a spoje.

Rozloženia TJI používajú iba tabuľku, ktorú načítate, a tú pripravíte z aktuálnych tabuliek rozpätí výrobcu; BimCraft žiadnu nedodáva. Návrh neoveruje uloženie, bodové zaťaženia, konzoly, otvory, preklady schodísk ani spoje a model I-profilu je schematický.
:::

## Čo sa ukladá

Každá zarámovaná stena, podlaha alebo strecha je zostava prvkov IFC („Konštrukcia“) zložená z prvkov IFC (stojky, pásnice, krokvy, kliešte, blokovanie, väzníky) a nosníkov (preklady, trámy, obvodové trámy, hrebeňové dosky), každý s rozmerom, dĺžkou a board feet.
