---
title: Een geplaatst item wisselen en items uit de bibliotheek bijwerken
summary: Vervang één geplaatst bibliotheekitem door een ander en behoud de plaats en het itemnummer, en controleer de bibliotheek op nieuwere versies van alles in het model.
keywords: wisselen, vervangen, vervangen door, bijwerken, nieuwere versie, op updates controleren, bibliotheek, ingetrokken, licentiewijziging, itemnummer
from: 8bdfe01d
---

## Wat u gaat doen

Verander van gedachten over een item zonder het opnieuw te verplaatsen, en houd de bibliotheekitems in een model actueel.

## Eén item wisselen

1. Klik op een geplaatst bibliotheekitem in het model.
2. Klik in {{ui:Eigenschappen}} op {{ui:Item vervangen…}} in het vak **Bibliotheekitem**. Het tabblad {{ui:Bibliotheek}} opent.
3. Zoek het nieuwe item en klik op de kaart.
4. Klik op {{ui:Vervangen … door dit}}.

Het element behoudt zijn plaats, draaiing, verdieping, itemnummer, hoeveelheid en notities. Zijn type, vorm en itemgegevens veranderen naar het nieuwe item. Items die op dezelfde manier zijn geplaatst, delen één type, net als bij het plaatsen.

Een item met varianten (zie [Een bibliotheekitem met varianten plaatsen en wisselen](topic:library-variants)) toont bij het wisselen zijn andere varianten bovenaan het tabblad {{ui:Bibliotheek}}: één klik per variant.

Wanneer het nieuwe item een ander soort ding is, bijvoorbeeld een spoelbak in plaats van een tafel, verandert de IFC-klasse van het element mee (hier van meubelelement naar sanitair terminal), zodat andere software het goed verwerkt. Het blijft hetzelfde element, met dezelfde GlobalId, dus links ernaar blijven werken. {{key:Mod+Z}} zet de oude klasse terug met het oude item.

## Op updates controleren

1. Klik op {{ui:Updates}} in de werkbalk (of op {{ui:Op updates controleren}} in het vak van een bibliotheekitem).
2. Lees de lijst: elk bibliotheekitem in het model met zijn versie in het model, de nieuwste versie en een status: **Actueel**, **Nieuwere versie**, **Ingetrokken** of **Niet gevonden**. Er staat ook bij wat er is veranderd (geometrie, gegevens, licentie of een fix).
3. Klik op {{ui:Bijwerken}} in een rij, of op {{ui:Alles bijwerken}}.

## Wat u zou moeten zien

- "Bijgewerkt: *n* plaatsingen. Plaatsingen, itemnummers, hoeveelheden en notities blijven behouden."
- "Bijgewerkt: *item*"-regels in de lijst met wijzigingen. {{key:Mod+Z}} maakt elk ervan ongedaan.

## Goed om te weten

- Alleen items uit de bibliotheek kunnen worden gecontroleerd. Items uit bestanden hebben geen bibliotheek-id.
- Wanneer een licentie is gewijzigd, behoudt de kopie die u al hebt geplaatst de licentie waarmee hij kwam totdat u hem bijwerkt.
- Een **Ingetrokken** item wordt niet aangeboden voor nieuwe plaatsingen. Eén dat om auteursrechtelijke redenen is ingetrokken, kan helemaal niet worden gedownload; vervang het met {{ui:Item vervangen…}}.
- Een geplaatste variant blijft die variant wanneer de nieuwere versie van het item die nog heeft; anders krijgt hij de standaardvariant van het item.
- Bij het controleren worden alleen de item-id's en versies verstuurd, nooit uw model.
