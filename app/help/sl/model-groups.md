---
title: Skupine modela
summary: Izbrane elemente združite v eno poimenovano skupino, skupino znova postavite drugje in spremenite eno kopijo, da se spremenijo vse.
keywords: skupina, skupina modela, združevanje, razdruževanje, primerek, kopija, ponavljanje, tipična enota, polje, stanovanje, urejanje skupine, IfcGroup
from: 121c5027
---

## Kaj boste naredili

Združite tipično polje, ga postavite večkrat in spremenite vse kopije s spremembo ene.

## Kje je orodje

- Postavitev s trakom: {{ui:Arhitektura}} › **Model** › {{ui:Skupina modela}}.
- Klasična postavitev: vrstica Risanje › meni {{ui:Prostori}} › Skupina modela.

## Koraki

1. Z orodjem Izberi izberite elemente: kliknite enega, nato Ctrl+klik ali Shift+klik na druge.
2. Izberite {{ui:Skupina modela}}. Takoj postanejo skupina. Najprej v vrstici vpišite {{ui:Ime skupine}}, da jo poimenujete, ali ga vpišite pozneje, da jo preimenujete.
3. Pritisnite {{ui:Postavi še enega}} in kliknite, kjer naj kopija stoji: njen spodnji levi kot gre na kliknjeno točko.
4. Spremenite katerokoli kopijo: premaknite konec zidu, spremenite velikost vrat, izbrišite steber. Vsaka druga kopija skupine se spremeni v istem koraku, en ukaz Razveljavi pa povrne vse nazaj.
5. Dokler imate v roki {{ui:Skupina modela}}, klik na element izbere celotno njegovo skupino.

## Druge možnosti

- {{ui:Dodaj izbrane}}: doda več elementov skupini, ki ste jo nazadnje izbrali.
- {{ui:Razdruži}}: ta kopija postane navadni elementi. Druge kopije ostanejo skupina.
- Celotno kopijo premaknite z orodjem Premakni: je ista skupina na novem mestu; druge se ne premaknejo.
- Izbrišete elemente kopije in kopija izgine.

## Kaj je lahko v skupini

Zidovi z vrati in okni, stebri ter narisane plošče lahko znova postavite in ohranite enake. Skupina lahko vsebuje tudi druge elemente, vendar je potem ni mogoče znova postaviti; vrstica pove, zakaj.

Kopije se premikajo, ne obračajo ali zrcalijo.

## V IFC

Skupina je IfcGroup z IfcRelAssignsToGroup na njene člane, ki ostanejo navadni zidovi, stebri in plošče. Vsaka kopija ene skupine nosi isti ID definicije.

## Še ni izdelano

- Obračanje ali zrcaljenje kopije.
- Stopnišča, strehe, sobne plošče in elementi knjižnice v skupini, ki je znova postavljena.
- Profil zidu, nagib in odprtine v zidu se ne prenesejo na kopije.
- Skupine znotraj skupin.

Glejte tudi [Premik, poravnava in razporeditev](topic:move-align-distribute).
