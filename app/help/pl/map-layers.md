---
title: Mapa na gruncie pod modelem
summary: Połóż mapę ulic lub zdjęcie lotnicze na gruncie pod modelem IFC z georeferencją, z kafelków mapy, usług mapowych lub obrazu z plikiem świata.
keywords: mapa, warstwy mapy, podkład mapowy, zdjęcie lotnicze, satelita, działka, grunt, kafelki, xyz, wms, wmts, usługa mapowa, plik świata, georeferencja, ifcmapconversion, rzutowy układ współrzędnych, epsg, kontekst działki
from: 84e2e9df
---

## Czego dokonasz

Zobacz model na jego miejscu: mapa ulic działki lub zdjęcie lotnicze na gruncie pod nim.

## Kroki

1. Otwórz model IFC, który ma swoje położenie na mapie (konwersję na mapę, IfcMapConversion, z rzutowym układem współrzędnych). Programy eksportujące zapisują ją, gdy ustawione są współrzędne projektu (punkt geodezyjny, wspólne współrzędne).
2. Wybierz {{ui:Pokaż}} › {{ui:Warstwy mapy…}}. Okno podaje układ modelu, na przykład EPSG:28356. Model bez konwersji na mapę nie może mieć warstw mapy: okno to mówi.
3. Włącz {{ui:Warstwy mapy z internetu}}. Do tego momentu żaden serwer nie jest pytany. Po włączeniu dodane przez ciebie serwery widzą obszar wokół modelu i twój adres internetowy, nigdy sam model.
4. W {{ui:Dodaj warstwę}} wybierz kafelki (adres z `{z}`, `{x}` i `{y}`), usługę WMS, WMTS lub ArcGIS ({{ui:Pobierz warstwy}}, potem wybierz jedną) albo obraz z plikiem świata.
5. Zamknij okno. Mapa leży na gruncie tuż pod najniższym punktem modelu, na obszarze jego rzutu oraz tyle samo dookoła.

:::note
Mapa jest tylko na ekranie; nie jest zapisywana w pliku IFC. Lista warstw jest przechowywana w tej przeglądarce. Korzystaj wyłącznie z usług mapowych, których warunki na to pozwalają.
:::
