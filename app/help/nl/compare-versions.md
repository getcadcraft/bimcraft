---
title: Twee versies van een model vergelijken
summary: Open twee versies van hetzelfde IFC-model en zie welke elementen zijn toegevoegd, verwijderd en gewijzigd, gekoppeld via hun GlobalId's, met een CSV van elke wijziging.
keywords: vergelijken, verschil, versies, revisie, wijzigingen, toegevoegd, verwijderd, gewijzigd, verplaatst, globalid, guid, wat er veranderd is
from: cfca6971
---

## Wat u gaat doen

Zie wat er is veranderd tussen het model dat u had en het model dat u is toegestuurd: welke elementen nieuw zijn, welke verdwenen zijn, welke zijn verplaatst of nieuwe eigenschapswaarden hebben gekregen.

## Stappen

1. Open de nieuwere versie, klik dan op {{ui:Een model toevoegen…}} en kies de oudere. Zie [Meerdere IFC-modellen samen bekijken](topic:several-models).
2. Open in {{ui:Modellen}} {{ui:Versies vergelijken}}.
3. Kies de {{ui:Oudere versie}} en de {{ui:Nieuwere versie}}.
4. Klik op {{ui:Vergelijken}}.
5. Klik op een element in een lijst om het te kiezen en de eigenschappen te zien. Klik op {{ui:CSV downloaden}} voor elke wijziging, eigenschap voor eigenschap.
6. Klik op {{ui:Wissen}} om terug te gaan naar de normale weergave.

## Wat u ziet

- **Toegevoegde** elementen in blauw, uit de nieuwere versie.
- **Verwijderde** elementen in rood, uit de oudere versie.
- **Gewijzigde** elementen in oker, uit de nieuwere versie. Elk zegt wat er is veranderd: eigenschappen, een verplaatsing met hoeveel, of een nieuwe vorm.
- Alles wat gelijk is, doorzichtig.

## Goed om te weten

- Elementen worden gekoppeld via hun GlobalId. Een programma dat elementen bij elke export een nieuwe GlobalId geeft, zorgt dat elk element verwijderd en opnieuw toegevoegd lijkt.
- Posities worden vergeleken waar de modellen in de scène staan. Als een versie bewust is verplaatst, lijnt u ze eerst uit met {{ui:Verplaatsen}} in {{ui:Modellen}}.
- Een GlobalId die twee keer in één model voorkomt, wordt buiten de vergelijking gelaten. [Een model controleren op veelvoorkomende problemen](topic:model-checks) vindt die.

## Volgende

- [Issues en BCF-bestanden](topic:issues-bcf)
- [Hoeveelheden optellen per eigenschap](topic:quantity-totals)
