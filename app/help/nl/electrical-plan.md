---
title: Het elektrische plan
summary: Plaats stopcontacten, schakelaars, lampen, sensoren, aansluitdozen en groepenkasten op het plan met dezelfde symbolen als de add-on Electrical van CadCraft, koppel schakelaars aan de lampen die ze aansturen, en zet apparaten en groepen in de staten.
keywords: elektrisch, elektrisch plan, stopcontact, wandcontactdoos, dubbel, schakelaar, wisselschakelaar, dimmer, lamp, plafondlamp, inbouwlamp, downlight, bewegingssensor, aansluitdoos, groepenkast, groep, belasting, watt, ampère, schakelaarleiding, apparatenstaat, groepenstaat
from: f7de1947
---

## Wat u gaat doen

Teken het elektrische plan van het huis in het model: stopcontacten, schakelaars en groepenkasten op de wanden, lampen en sensoren aan het plafond. Elk apparaat is een echt elektrisch element in het IFC-bestand, met zijn label, groep en belasting, en schakelaars onthouden welke lampen ze aansturen.

## Apparaten plaatsen

1. Open op een verdieping {{ui:Build}} en kies {{ui:Elektrisch}}.
2. Kies het apparaat: stopcontacten (voeding, data, telefoon, audio-video), schakelaars en sensoren (ook een thermostaat en een timer), lampen, detectoren en alarmen, een aansluitdoos, een groepenkast of een subgroepenkast.
3. Typ een **Groep** als u die kent (elke naam: 1, 2, A-3). Laat **Montagehoogte** leeg voor de gebruikelijke hoogte van dat apparaat.
4. Klik op het plan. Stopcontacten, schakelaars en groepenkasten komen op het vlak van de dichtstbijzijnde wand, met de voorkant naar de ruimte; lampen, sensoren en aansluitdozen komen aan het plafond waar u klikt.

Apparaten krijgen een label zodra u ze plaatst: **R** voor stopcontacten, **S** voor schakelaars, **L** voor lampen, **M** voor bewegingssensoren, **J** voor aansluitdozen, **P** voor groepenkasten. Apparaten aan een wand verschuiven mee als u de wand verplaatst.

Liever bladeren op afbeelding? Open het **Symbolenpalet** via {{ui:Build}} om een apparaat op naam te zoeken, markeer de apparaten die u gebruikt met een ster en plaats ze met één klik: zie [Het symbolenpalet](topic:symbol-palette).

## Schakelaars aan lampen koppelen

1. Kies een schakelaar (of een bewegingssensor) en klik op **Lampen koppelen** in **Eigenschappen**.
2. Klik op elke lamp die ze aanstuurt. Klik op een gekoppelde lamp nogmaals om de koppeling op te heffen.
3. Druk op {{key:Enter}} of klik op **Gereed**.

Het plan tekent een gestreepte kromme van de schakelaar naar elke lamp. In de **Eigenschappen** van een lamp ziet u welke schakelaars hem aansturen.

## De ruimte waarin een apparaat staat

Elk apparaat weet in welke ruimte het staat. Een apparaat aan een wand hoort bij de ruimte waar het naar kijkt; een plafondapparaat hoort bij de ruimte waar het boven hangt. **Eigenschappen** toont **Ruimte**, en de staat **Elektrische apparaten** heeft een kolom **Ruimte** (nummer en naam, zoals 101 Keuken).

De ruimte blijft actueel: hernoem of hernummer de ruimte, verplaats het apparaat of verplaats een wand, en de ruimte volgt in dezelfde stap. Een apparaat aan de buitenkant van een gebouw, of in een ruimte die geen ruimte is, meldt dat het in geen ruimte staat.

De ruimte wordt ook in het bestand geschreven, in de eigenschapsset `CadCraft_Location` van het apparaat (Room, RoomNumber, RoomName). Zo kunnen Zoeken, Kleur op eigenschap en een labelstaat ermee werken, en ook een ander programma. Plansymbolen en elementen die aan een symbool gekoppeld zijn, krijgen dezelfde set; zie [Symbolenpalet](topic:symbol-palette).

## Laat uw assistent ze plaatsen

Met een verbonden assistent (Instellingen › Assistenten, met bewerkingen toegestaan) kunt u apparaten in woorden vragen: "zet elke 2 m langs de wanden van de woonkamer een dubbel stopcontact, 300 mm hoog, op groep 3", of "voeg een plafondlamp toe met de schakelaar bij de deur". De assistent gebruikt vijf hulpmiddelen: `devices_add`, `device_change`, `lights_set`, `devices_delete` en `devices_list`. Ze maken dezelfde apparaten als het hulpmiddel Elektrisch, op dezelfde wanden en met dezelfde labels, groepen, belastingen en hoogtes, en elke aanroep is één stap ongedaan te maken.

Een apparaat krijgt nooit een soort die het hulpmiddel Elektrisch niet heeft: een onbekende soort wordt geweigerd en de assistent krijgt de lijst. Een stopcontact of schakelaar moet binnen 600 mm van een wandvlak staan, net als bij een klik, anders wordt de aanroep geweigerd en wordt er niets geplaatst. De standaardhoogtes zijn in millimeter: 300 voor stopcontacten, 1100 voor schakelaars; een plafondapparaat hangt aan het plafond.

## Wijzigen en lijsten

Kies een apparaat om het label, de groep, de belasting (watt) en de montagehoogte te wijzigen. Kies er meerdere om ze in één keer op dezelfde groep te zetten. Druk op {{key:Delete}} om er één te verwijderen; een verwijderde lamp wordt uit haar schakelaars gehaald.

In {{ui:Staten}} kiest u **Elektrische apparaten** voor elk apparaat met zijn verdieping, groep, belasting, hoogte en de lampen die elke schakelaar aanstuurt, of **Groepen** voor de apparaten per groep, met de totale belasting en stroomsterkte. Beide staan ook op het stateblad van de tekenset: zie [Gevels, doorsneden en bladen](topic:sheets).

:::note
Montagehoogtes en belastingen zijn planningswaarden (een stopcontact 16" hoog en 200 W, een schakelaar op 48", een plafondlamp 60 W), geen ontwerp: de elektricien of constructeur dimensioneert de groepen en controleert de voorschriften.
:::

:::tip
De symbolen zijn dezelfde als die de add-on Electrical van CadCraft op installatietekeningen tekent, dus een plan uit beide apps leest hetzelfde.
:::
