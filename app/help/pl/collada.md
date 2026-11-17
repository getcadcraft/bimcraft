---
title: Eksportuj model jako Collada lub dla Google Earth
summary: Zapisz otwarte modele IFC jako plik Collada (.dae) dla Blendera i innych programów 3D albo jako pakiet Google Earth (.kmz) umieszczony tam, gdzie model leży na mapie.
keywords: collada, dae, kmz, kml, google earth, blender, eksport, geolokalizacja, georeferencja, szerokość geograficzna, długość geograficzna, lokalizacja, programy 3D
from: 81cfec09
---

{{ui:Collada}} na pasku narzędzi (albo {{ui:Eksportuj Collada (.dae, .kmz)…}} w menu Plik w stylach menu i wstążki) zapisuje otwarte dane jako Collada 1.4.1: każdy wyświetlany model, a modele połączone zapisywane są tam, gdzie je umieszczono.

## Eksport

1. Wybierz {{ui:Collada}}.
2. Wybierz format:
   - {{ui:Plik Collada (.dae), dla Blendera i innych programów 3D}}.
   - {{ui:Pakiet Google Earth (.kmz): model umieszczony tam, gdzie leży na mapie}}. Oferowany tylko wtedy, gdy model ma lokalizację.
3. Wybierz opcje, a następnie {{ui:Eksportuj}}. Plik zostanie pobrany, a pasek stanu poda, ile elementów trafiło do pliku.

| Opcja | Działanie |
|---|---|
| {{ui:Zapisz lokalizację w pliku}} | Dodaje szerokość i długość geograficzną, wysokość oraz kierunek początku pliku do .dae |
| {{ui:Wysokość}} | {{ui:Na gruncie: poziom 0 modelu leży na terenie}} albo {{ui:Własna wysokość modelu nad poziomem morza}} |
| {{ui:Uwzględnij pomieszczenia i przestrzenie}} | Przestrzenie też trafiają do pliku (domyślnie są pomijane) |
| {{ui:Uwzględnij ukryte elementy}} | Ukryte elementy też są zapisywane (domyślnie zapisywane jest tylko to, co widać) |

## Co znajduje się w pliku

| W modelu | W pliku Collada |
|---|---|
| Budynek, kondygnacje | Zagnieżdżone węzły, kondygnacje w kolejności wysokości; elementy bez kondygnacji pod „Nieumieszczone” |
| Każdy element | Jeden węzeł z własną siatką, nazwany jak w modelu (jego nazwa, a w razie jej braku klasa i znacznik) |
| Klasa, GlobalId, typ predefiniowany | W dodatkowych danych węzła (profil IFC) z dokładną nazwą (profil ModelCraft) |
| Kolory | Materiały z przezroczystością |
| Jednostki i osie | Metry, oś Z w górę. Poziom 0 modelu na pierwszym planie leży na wysokości 0 |

Model pozostaje blisko początku układu na gruncie, dzięki czemu programy pracujące w pojedynczej precyzji wyświetlają go bez drgań. ModelCraft zapisuje swoje pliki Collada tym samym zapisywaczem i otwiera te pliki z nazwami elementów.

## Skąd bierze się lokalizacja

Lokalizację podaje model na pierwszym planie, w ten sam sposób, w jaki {{ui:Zmierz}} wyznacza szerokość i długość geograficzną punktu:

- Konwersja mapy (IFC4 IfcMapConversion lub zestawy właściwości IFC2X3) poprzez układ współrzędnych modelu. Układ wybrany dla modelu ma pierwszeństwo przed tym, który podaje plik.
- W przeciwnym razie szerokość i długość geograficzna terenu (przybliżona, wystarczająca w obrębie terenu).

Kierunek jest mierzony, a nie zakładany: uwzględnia obrót mapy, północ geograficzną i zbieżność południków mapy. Aby nadać modelowi lokalizację, użyj {{ui:Początek na mapie…}} w {{ui:Zmierz}}.

## W innych programach

- **Google Earth** odczytuje .kmz: model pojawia się w lokalizacji, obrócony na północ. Zwykły .dae nie zawiera miejsca, z którego Google Earth odczytuje lokalizację; użyj .kmz.
- **Blender** (4.x i wcześniejsze): Plik, Importuj, Collada (.dae). Każdy element wczytuje się jako osobny obiekt ze swoim materiałem. Lokalizacja zapisana jest w dodatkowych danych pliku, których Blender nie odczytuje. Blender 5.0 zrezygnował z wbudowanego importera Collada; w nim użyj zamiast tego {{ui:USD}} albo eksportu glTF, albo otwórz .dae w Blenderze 4.5 i zapisz jako .blend.

Nasze testy sprawdzają każdy plik względem schematu Collada 1.4.1 i odczytują go niezależnym czytnikiem Collada. Nie otwierano go jeszcze w Blenderze ani w Google Earth.
