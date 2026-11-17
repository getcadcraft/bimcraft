---
title: Parcela, stavba na njej in njeni nivoji
summary: Narišite obris parcele, postavite in zasukajte stavbo na parceli, dodajte nivoje pri danih višinah ali razdelite višino stavbe, ter rišite na izbranem nivoju.
keywords: parcela, tloris parcele, linija gradbene meje, odmik, služnost, pravica prehoda, lastninska meja, parcela, zemljišče, meja, postavitev stavbe, zasuk stavbe, postavi stavbo, nivoji, etaže, nadstropja, dodaj nivoje, razdelitev višine, višina od etaže do etaže, IfcSite, IfcBuilding, IfcBuildingStorey, prostorska struktura
from: 48d10c1e
---

## Kaj boste naredili

Nastavite dele modela IFC, ki držijo vse ostalo: parcelo, stavbo na njej in njene nivoje.

Model je urejen kot **parcela**, ki vsebuje **stavbo**, ta pa svoje **nivoje** (etaže); zidovi, tla in vse drugo pripadajo nivoju. {{ui:Datoteka}} › {{ui:Nova stavba}} nastavi vse tri. Model iz drugega programa, ki ima stavbo, ni pa parcele, dobi parcelo ob prvem risanju: stavba se postavi nanjo tam, kjer je že bila.

## Narišite parcelo

1. Vklopite {{ui:Risanje}}, nato izberite {{ui:Zgradba}} › {{ui:Parcela}}.
2. Kliknite oglišča parcele (orodje se lovi kot orodje Zid). Prvo oglišče kliknite znova, dvokliknite ali pritisnite {{key:Enter}}, da končate. {{key:Backspace}} vzame nazaj oglišče.
3. Vrstica prikaže površino parcele. Če jo želite spremeniti, jo narišite znova.

Tloris vsake etaže prikaže obris parcele kot lastninsko mejo.

## Postavite stavbo na parcelo

Ob vklopljeni {{ui:Parcela}} vpišite stavbino **X** in **Y** na parceli ter njen **Zasuk** v stopinjah, ali kliknite {{ui:Postavi stavbo s klikom}} in kliknite, kam gre izhodišče stavbe. Vse v stavbi (nivoji, zidovi, mreže, vse, kar ste narisali) se premakne z njo; parcela in njen obris ostaneta. Tlorisi še naprej prikazujejo vsak nivo pravokotno na stavbo.

## Gradbene linije in služnosti

Gradbene linije in služnosti (služnosti, pravice prehoda) so na parceli narisane kot omejitve. **Opozarjajo, nikoli ne blokirajo**: zid čez eno od njih se nariše, kot ste zahtevali, opozorilo, ki poimenuje zid in linijo ali služnost, pa se pojavi v Težavah. Premaknite zid nazaj in opozorilo izgine. Opozorilo se lahko sprejme z razlogom (na primer z odstopanjem, ki ga je dovolil organ).

- **Gradbena linija iz odmikov.** {{ui:Zgradba}} › {{ui:Gradbena linija}}, nato {{ui:Odmiki}}: vpišite, za koliko linija zaide v notranjost od vsake meje parcele. Meje so med orodjem oštevilčene na tlorisu. Linija se izračuna iz teh razdalj in sledi obrisu parcele, če jo narišete znova s tolikimi mejami. Razdalje so vaše, prebrane iz vašega lastninskega lista ali prostorskega načrta; BimCraft jih ne vpiše.
- **Narisana gradbena linija.** Ob vklopljeni {{ui:Gradbena linija}} kliknite njene točke in končajte z dvoklikom ali {{key:Enter}}. Končajte na prvi točki za zaprto linijo: površina znotraj je tam, kjer je dovoljeno graditi, in zid z delom zunaj nje dobi opozorilo. Odprta linija opozori samo na zid, ki jo seka.
- **Služnost.** {{ui:Zgradba}} › {{ui:Služnost}}: izberite njeno vrsto, vpišite njeno ime, registrirano oznako in širino, nato kliknite njeno srednjo črto in končajte (pas) ali jo zaprite na prvi točki (površina). Zid z delom na njej dobi opozorilo na vsakem nivoju.
- Ploskev, ki leži točno na liniji, se dotika, ne seka (toleranca je 1 mm).
- Trenutna različica mase v vsakem nizu možnosti se preveri enako kot zidovi: masa zunaj meje, čez gradbeno linijo ali na služnosti dobi opozorilo. Glejte [Možnosti mas, postavljene drugo ob drugi](topic:massing-options).
- Izberite eno z {{ui:Izberi}}, da spremenite njeno ime, oznako, vrsto ali širino, jo premaknete ali izbrišete.

Narisane so na tlorisu vsakega nivoja, na listih in v PDF tlorisa: gradbene linije črtkano, služnosti pikčasto, vsaka z oznako. V datoteki IFC je vsaka označba (IfcAnnotation, vrsta BuildingLine ali Servitude) na parceli, z njeno črto kot navadno krivuljo, ki jo drugi programi lahko preberejo. Preverjanje uporablja pravi obris vsakega zidu na tlorisu, z njegovimi stiki, kot so narisani; ukrivljeni zid se preveri glede na lastno debelino okoli svoje srednje črte.

## Dodajte nivoje

V podoknu {{ui:Nivoji}} {{ui:Dodaj nivo na vrh}} doda enega, {{ui:Dodaj nivo spodaj}} doda enega pod najnižjim (klet, pri negativni koti). {{ui:Dodaj nivoje …}} doda več naenkrat:

- **Pri teh višinah**: vpišite višine nad najnižjim nivojem, ločene z vejicami (na primer `12', 24', 36'`). Višine, pri katerih nivo že obstaja, se preskočijo.
- **Razdelitev višine stavbe**: vpišite višino stavbe in število nivojev. Nivoji, ki jih imate, se premaknejo na nove višine od najnižjega navzgor, manjkajoči se dodajo, tisti nad njimi pa ostanejo, kjer so.

Zidovi, ki segajo do nivoja nad njimi, mu sledijo, prav tako stebri in rampe.

{{ui:Kopiraj ta nivo …}} (isto podokno) kopira narisano na nivoju, ki ga gledate, na drug nivo ali na nov nivo na vrhu, da lahko tloris ene etaže gre po stavbi navzgor v enem koraku. Glejte [Rišite zidove](topic:draw-walls).

## Rišite na nivoju

Vsako orodje {{ui:Risanje}} deluje na nivoju, izbranem na seznamu nivojev tlorisa (ali izbranem v podoknu {{ui:Nivoji}}): narisano pripada temu nivoju.

## Kaj boste videli

- Vsaka od teh sprememb je en korak: {{key:Mod+Z}} jo razveljavi.
- V datoteki IFC: parcela (IfcSite) z obrisom in površino, stavba (IfcBuilding), postavljena nanjo, in nivoji (IfcBuildingStorey) v stavbi.

Glejte tudi [Koordinate v BimCraft](topic:coordinates) za izhodišče projekta in geodetsko točko.
