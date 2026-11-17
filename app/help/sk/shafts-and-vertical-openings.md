---
title: Šachty a otvory cez podlažia
summary: Šachta je jeden obrys, ktorý prerezáva každé podlažie, strop a strechu medzi dvoma úrovňami. Vertikálny otvor prerezáva jeden z nich. Otvor v stene prerezáva múr.
keywords: šachta, výťahová šachta, šachta výťahu, otvor pre schodisko, stúpačka, vertikálny otvor, otvor v podlahe, otvor v strope, otvor v streche, svetlík, diera v podlahe, otvor v stene, IfcOpeningElement, odpočet, čistá plocha
from: 8e9e1641
---

## Čo urobíte

Vyrežte výťahovú šachtu cez budovu jedným náčrtom, vyrežte dieru v jednom podlaží a prečítajte si, čo bolo odobraté z plôch.

## Kde sú nástroje

- Pásové rozloženia: {{ui:Architektúra}} › **Otvor** › {{ui:Šachta}}, {{ui:Vertikálny otvor}} a {{ui:Otvor v stene}}.
- Klasické rozloženie: panel Kresliť › ponuka {{ui:Miestnosti}} (Šachta, Vertikálny otvor) a › ponuka {{ui:Múry}} (Otvor v stene).

## Šachta

1. Otvorte pôdorys úrovne, na ktorej šachta začína. Vyberte {{ui:Šachta}}.
2. V riadku vyberte {{ui:Základná úroveň}} a {{ui:Horná úroveň}} a odsadenia, ak začína alebo končí nad nimi alebo pod nimi.
3. Kliknite na rohy obrysu. Kliknite znova na prvý roh, dvakrát kliknite alebo stlačte {{key:Enter}}, aby ste dokončili.
4. Každé podlažie, strop a strecha medzi dvoma výškami sa prerežú. Stavový riadok povie, koľko ich bolo.

Šachta je jeden celok. Vyberte jej obrys na ktorejkoľvek úrovni, ktorou prechádza: Vlastnosti obsahujú jej názov, úrovne a odsadenia, čo prerezáva a odobratú plochu. Keď ju zmeníte, každý otvor sa prispôsobí. Keď ju zmažete, zmiznú všetky otvory. Každá z týchto akcií je jeden krok späť.

Šachta ďalej reže: podlažie vytvorené neskôr medzi jej úrovňami sa prereže bez vyžiadania a podlažie, ktoré zmažete, sa z nej vyradí.

Podlažie, na ktorom šachta stojí, sa neprerezáva (jeho horná hrana je základ). Ak ho chcete prerezať aj, zadajte základu záporné odsadenie. Ak chcete prejsť cez strechu, zadajte hornej úrovni kladné odsadenie.

## Vertikálny otvor

1. Vyberte {{ui:Vertikálny otvor}}. V riadku vyberte, čo sa má prerezať: podlažie, strop alebo strechu.
2. Kliknite na rohy obrysu a dokončite ako vyššie.
3. Podlažie, strop alebo strecha tejto úrovne pod obrysom sa prerežú. Patrí to jednému prvku: keď zmažete podlažie, otvor zmizne s ním.

## Otvor v stene

{{ui:Otvor v stene}} je nástroj z [Tvarovanie múru](topic:wall-shape): kliknite na múr v pôdoryse alebo na dva rohy na jeho ploche v 3D.

## Množstvá

Podľa pravidla merania pre podlahy je čistá plocha prvku jeho hrubou plochou zníženou o to, čo bolo z neho vyrezané. Šachta alebo vertikálny otvor je odpočet na každom podlaží a strope, ktoré prerezáva; tabuľky {{ui:Podlahy a povrchy}} a množstvá IFC ukazujú rovnaké čísla. Na streche je odpočet plochou povrchu strechy: pôdorysná plocha delená kosínusom sklonu.

Obrys, ktorý presahuje okraj, odpočíta len časť, ktorá leží na prvku.

## Ak nič nie je odrezané

Šachta bez ničoho v ceste sa aj tak vytvorí a povie to: prereže to, čo sa tam neskôr postaví. Vertikálny otvor potrebuje niečo pod sebou; keď tam nič nie je, stavový riadok to povie a nič sa nevytvorí.

## V IFC

Každý rez je IfcOpeningElement s IfcRelVoidsElement na prvok, ktorý prerezáva, takže každý program IFC zobrazí dieru. Strecha sa prerezáva plochu po ploche. Samotná šachta je IfcGroup svojich otvorov.

## Ešte nie je hotové

- Zakrivené obrysy.
- Múry šachty: nakreslite ich nástrojom Múr.
- Úprava obrysu ťahaním jeho rohov (zmeňte ho vo Vlastnostiach, alebo zmažte a nakreslite znova).
- Vlastnosti nakresleného podlažia zobrazujú plochu len zníženú o jeho vlastné otvory; tabuľky a množstvá IFC zahŕňajú aj šachtu.

Pozri aj [Miestnosti a oddeľovače miestností](topic:rooms-and-separators).
