---
title: Z pliku projektu do BimCraft przez IFC
summary: Ustawienia eksportu IFC, które najlepiej otwierają się w BimCraft (wersja, zestawy właściwości, ilości podstawowe, pomieszczenia, modele połączone, współrzędne), jak otworzyć wynik i co eksport zachowuje.
keywords: eksport, eksport ifc, rvt do ifc, konwersja, 3d, geometria, ifc2x3, ifc4, widok koordynacyjny, widok referencyjny, widok przekazania projektu, zestawy właściwości, ilości podstawowe, pomieszczenia, przestrzenie, połączone pliki, wspólne współrzędne, punkt pomiarowy, punkt bazowy projektu, ustawienia
from: 3efd5fc9
---

## Co zrobisz

Zamień plik projektu w plik IFC, który możesz obracać, sprawdzać, kontrolować i edytować w BimCraft. BimCraft nie odczytuje jeszcze modelu 3D wewnątrz pliku `.rvt`, więc eksport odbywa się w programie, w którym plik powstał (Revit); BimCraft otwiera wynik.

## Kroki

1. Otwórz projekt w programie, w którym powstał. Karta BimCraft podaje wydanie, w którym go zapisano.
2. Otwórz widok 3D pokazujący to, co chcesz wyeksportować.
3. Wybierz **Plik > Eksportuj > IFC**.
4. W oknie eksportu wybierz konfigurację (lub **Zmień konfigurację…**) z poniższymi ustawieniami.
5. Wybierz folder i nazwę pliku, a następnie wyeksportuj.
6. W BimCraft kliknij {{ui:Wybierz plik}} i wskaż nowy plik `.ifc`. Modele połączone wyeksportowane jako osobne pliki otwierają się w tej samej scenie za pomocą {{ui:Dodaj model}}.

## Ustawienia, które najlepiej otwierają się tutaj

| Ustawienie w eksporterze | Wybierz | Dlaczego |
|---|---|---|
| Wersja IFC | **IFC4 Reference View** do oglądania, sprawdzania i zestawiania ilości; **IFC2X3 Coordination View 2.0**, gdy inni potrzebują IFC2X3 | Oba otwierają się w pełni. **IFC4 Design Transfer View** również się otwiera, z dokładniejszymi kształtami, ale plik jest większy i wolniejszy. |
| Typ pliku | **IFC** (zwykły) | BimCraft nie otwiera `.ifczip` ani `.ifcxml`. |
| Faza / widoczne elementy | Fazę, którą masz na myśli, oraz **Eksportuj tylko elementy widoczne w widoku**, gdy widok 3D jest ustawiony pod to | Pomija to, co ukryto celowo. |
| Zestawy właściwości | **Eksportuj zestawy właściwości Revit** i **Eksportuj wspólne zestawy właściwości IFC** | Stają się zestawami właściwości, które BimCraft pokazuje w {{ui:Właściwości}}, i z których korzystają {{ui:Znajdź}}, {{ui:Kolor}} i {{ui:Sprawdzanie modelu}}. |
| Ilości podstawowe | **Eksportuj ilości podstawowe** | {{ui:Sumy ilości}} i zestawienia z nich korzystają (długości, powierzchnie, objętości) zamiast zgadywać. |
| Pomieszczenia i powierzchnie | **Eksportuj pomieszczenia w widokach 3D** (lub opcję Pomieszczenia / Przestrzenie) | Pomieszczenia trafiają jako przestrzenie: kliknij {{ui:Przestrzenie}}, aby je zobaczyć. |
| Pliki połączone | **Eksportuj połączone pliki jako osobne IFC** | Każde połączenie staje się własnym plikiem; otwórz je razem za pomocą {{ui:Dodaj model}}, a ułożą się we właściwym miejscu. |
| Baza współrzędnych | **Współdzielone współrzędne** (lub punkt pomiarowy) | Plik zawiera wtedy swoje położenie na mapie (IfcMapConversion), dzięki czemu działają Zmierz › Lokalizacja, warstwy mapy na gruncie i chmury punktów umieszczone według współrzędnych mapy. Punkt bazowy projektu trzyma model blisko początku układu, ale bez jego położenia na mapie. |
| Dzielenie ścian i słupów według poziomów | Włączone, gdy zestawiasz ilości dla każdej kondygnacji | Część każdej kondygnacji jest osobnym elementem. |

## Co zobaczysz

Model w 3D, z kondygnacjami pobranymi z poziomów projektu oraz informacjami o projekcie w panelu {{ui:Plik}}. **Wyeksportowano z** wskazuje eksporter.

## Co eksport zachowuje, a czego nie

- **Zachowane**: geometria, kondygnacje, rodzaje elementów, nazwy, typy, większość parametrów (jako zestawy właściwości), ilości podstawowe, jeśli o nie poproszono, pomieszczenia jako przestrzenie oraz położenie na mapie przy współdzielonych współrzędnych.
- **Niezachowane**: widoki, arkusze, adnotacje, rodziny jako edytowalne rodziny, zestawy robocze i opcje projektowe. Plik IFC to migawka elementów modelu, a nie projektu. Arkusze eksportuj jako DWG i otwórz go w widoku 2D.

## Częste błędy

- **Brak parametrów w BimCraft.** Włącz powyższe opcje zestawów właściwości i wyeksportuj ponownie.
- **Brak pomieszczeń.** Włącz opcję pomieszczeń, a następnie kliknij {{ui:Przestrzenie}}.
- **Zapis jako `.ifczip`.** Wybierz zwykły IFC albo rozpakuj `.ifczip`.
- **Brak położenia na mapie.** Eksportuj ze współdzielonymi współrzędnymi; sprawdź, czy ustawiono punkt pomiarowy projektu.
- **Oczekiwanie, że zmiany wrócą.** Zmiany zapisane w BimCraft trafiają do nowego pliku IFC, a nie do pliku projektu.
