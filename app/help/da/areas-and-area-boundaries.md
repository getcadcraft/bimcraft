---
title: Arealer og arealgrænser
summary: Mål bruttobygningsareal eller udlejeligt areal inden for grænselinjer, du tegner eller henter fra væggene, og list arealerne i en liste.
keywords: areal, arealer, arealgrænse, arealordning, bruttobygningsareal, bruttoetageareal, GFA, udlejelig, arealplan, arealliste, vælg vægge, ikke lukket
from: c79f96d2
---

## Hvad du skal gøre

Tegn grænserne for en arealordning, placér arealer inden for dem, og læs summerne.

## Hvor værktøjerne er

- Båndlayouts: {{ui:Arkitektur}} › **Rum og areal** › {{ui:Areal}} og {{ui:Arealgrænse}}.
- Klassisk layout: tegnelinjen › menuen {{ui:Rum}}.

## Trin

1. Vælg {{ui:Arealgrænse}}. I rækken vælger du {{ui:Ordning}}: Bruttobygning eller Udlejelig. Hver ordning har sine egne grænser.
2. Vælg, hvordan linjerne laves i {{ui:Lav ved}}:
   - **Tegn**: klik punkt for punkt.
   - **Vælg vægge: midterlinje**: klik på en væg, og dens midterlinje bliver en grænse.
   - **Vælg vægge: den klikkede flade**: klik på en væg på den side, du ønsker; den flade er grænsen. Ved bruttobygningsareal klikker du på ydersiden af de ydre vægge.
3. Vælg {{ui:Areal}}. Vælg samme ordning, skriv et navn, nummer eller en type, hvis du vil, og klik inde i grænserne.
4. Arealet måles med det samme. Vælg det for at ændre dets navn, nummer eller type i Egenskaber.

## Hvad følger hvad

- En grænse, der er lavet ved at vælge en væg, følger den væg: flytter du væggen, måles arealet igen i samme trin.
- En grænse, du har tegnet, bliver, hvor du tegnede den.
- Flader på vægge, der mødes i et hjørne, mødes der også, så fire valgte vægge lukker et areal uden huller.
- Arealgrænser vises på planen, mens et rum- eller areal-værktøj er i din hånd, så de ikke roder planen resten af tiden.

## Hvis grænserne ikke lukker

Arealet bliver stadig placeret. Det siger **Ikke lukket** og måler intet, før grænserne lukker om det. Dette er en anbefaling: intet bliver afvist.

## Listen

Venstre panel › {{ui:Lister}} › **Arealer**: ordning, nummer, navn, type, etage, areal og omkreds, med en sum. Et klik på en række vælger arealet. {{ui:Download CSV}} giver den samme tabel.

## I IFC'en

Et areal er en IfcSpace uden krop: PredefinedType GFA for bruttobygningsordningen, USERDEFINED med ObjectType Rentable for udlejeligt. Det bærer GrossFloorArea og GrossPerimeter og intet nettoareal, så det ikke forveksles med et rum. En grænse er en IfcVirtualElement.

## Ikke lavet endnu

- Egne ordninger (kun Bruttobygning og Udlejelig).
- Farvefyld efter arealtype.
- Regler, der placerer grænsen for dig, fx "til glaslinjen".

Se også [Rum og rumadskillere](topic:rooms-and-separators), [Rum- og arealmærker](topic:room-and-area-tags).
