---
title: Ekran BimCraft
summary: Przegląd każdego paska, panelu i przycisku według jego nazwy na ekranie oraz tego, jak ekran zmienia się dla każdego rodzaju pliku.
keywords: ekran, układ, panele, pasek narzędzi, interfejs, ui, przegląd, panel właściwości, przeglądarka, pasek aplikacji
from: 2eb01ec2
---

Ekran BimCraft ma pasek u góry i trzy obszary pod nim: panel po lewej, scenę pośrodku i panel {{ui:Właściwości}} po prawej. To, co pojawia się w każdym obszarze, zależy od tego, co otwarto: model IFC, plik projektu lub rodziny, rysunek albo folder.

## Pasek aplikacji

Cienki pasek u góry należy do strony CadCraft, a nie do samego BimCraft. Od lewej do prawej:

- Znak CadCraft: prowadzi do strony głównej CadCraft.
- Nazwa aplikacji i menu wersji. W kompilacji dla zespołu pokazuje, którą kompilację uruchamiasz, i pozwala przełączyć się na wydaną wersję.
- {{ui:O BimCraft}}: strona aplikacji na stronie internetowej.
- {{ui:Ustawienia}}: własne ustawienia BimCraft i te wspólne dla wszystkich aplikacji. Zobacz [Ustawienia BimCraft](topic:settings).
- {{ui:Pełny ekran}}: przełącza tryby ekranu. Zobacz poniżej [Tryby ekranu](topic:workspace#screen-modes).
- {{ui:Papier}} i {{ui:Model}}: jasny i ciemny motyw. Widok 3D i rysunki 2D podążają za wybranym motywem.

## Lewy panel

Lewy panel zawsze zaczyna się od **Otwórz plik lub folder**:

- Obszar upuszczania, {{ui:Wybierz plik albo upuść tutaj plik lub folder}}. Kliknij go, aby wybrać jeden plik, albo upuść na nim plik lub folder (albo gdziekolwiek na stronie).
- {{ui:Otwórz folder}}: wybierz cały folder projektu. Zobacz [Otwórz cały folder projektu](topic:open-project-folder).
- {{ui:Ostatnie foldery}}: pojawia się w Chrome i Edge po otwarciu folderu oknem wyboru folderu lub przez upuszczenie. Kliknij „Otwórz ponownie” i nazwę folderu, aby otworzyć go jeszcze raz, albo mały ×, aby o nim zapomnieć.

Pod nim sekcje pojawiają się zależnie od sytuacji:

| Sekcja | Kiedy się pokazuje | Co zawiera |
|---|---|---|
| {{ui:Zmiany}} | Otwarty jest model IFC | Twoje niezapisane zmiany, od najnowszej, z {{ui:Cofnij}} i {{ui:Zapisz jako IFC}} |
| {{ui:Plik}} | Otwarty jest model lub karta pliku | Informacje o pliku: rozmiar, schemat lub wydanie, projekt, autor, liczba elementów |
| {{ui:Rysunek}} | Otwarty jest DWG lub DXF | Format, jednostki, liczby obiektów i warstw, arkusze, rysunki dołączone, wyposażenie |
| {{ui:Folder}} | Otwarty jest folder | Liczby plików i modeli, rozmiar, znalezione problemy |
| {{ui:Wróć do folderu}} | Plik otwarto z folderu | Wraca do raportu o folderze |
| {{ui:Warstwy}} | Otwarty jest rysunek | Pole wyboru dla każdej warstwy, z {{ui:Włącz wszystkie}} i {{ui:Wyłącz wszystkie}} |
| {{ui:Kondygnacje}} | Otwarty jest model IFC | Pole wyboru dla każdej kondygnacji, najwyższa pierwsza |
| {{ui:Elementy}} | Otwarty jest model IFC | Ile elementów każdego rodzaju zawiera model (30 najczęstszych) |

## Scena

Środek ekranu pokazuje otwarty plik.

- **Pusta**: „Otwórz model budynku.” z {{ui:Wybierz plik}} i {{ui:Otwórz folder}} oraz krótkim opisem każdego formatu.
- **Model IFC**: widok 3D z paskiem narzędzi u góry, w nazwanych grupach jak w aplikacji rysunkowej CadCraft, z ikoną każdego narzędzia nad jego nazwą: {{ui:Widok}} ({{ui:Dopasuj}}, {{ui:Z góry}}, {{ui:Z przodu}}, {{ui:Z boku}}, {{ui:Krawędzie}}, {{ui:Przestrzenie}}); {{ui:Edycja}} ({{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}}, {{ui:Wklej}} i {{ui:Więcej}}, zobacz [Kopiuj, wklejaj i duplikuj elementy biblioteki](topic:copy-paste)); {{ui:Model}} ({{ui:Jednostki}} i {{ui:Rysuj}}); {{ui:Biblioteka}} ({{ui:Biblioteka}}, {{ui:Wyposażenie}}, {{ui:Aktualizacje}}, {{ui:Autorzy}}); {{ui:Przegląd}} ({{ui:Pokaż}}, {{ui:Przekrój}}, {{ui:Spacer}}, {{ui:Zmierz}}; zobacz [Przetnij model IFC płaszczyzną przekroju](topic:section-plane)); oraz {{ui:Wyniki}} (render, widok na żywo, VR, eksporty, malowanie i zapisane widoki). Przy włączonym {{ui:Rysuj}} pasek Rysowania pod nim wygląda tak samo: {{ui:Widok}} (poziom i rodzaj rzutu), {{ui:Rysuj}}, {{ui:Edycja}} i {{ui:Biblioteka}}. W prawym dolnym rogu jest kostka widoku. Zobacz [Otwórz model IFC i rozejrzyj się w 3D](topic:open-ifc-model). {{ui:Ustawienia}}, {{ui:Ogólne}} wybiera ikony, etykiety lub oba na tych przyciskach, pokazuje lub ukrywa nazwy grup, a kliknięcie paska narzędzi prawym przyciskiem pozwala ułożyć jego narzędzia i grupy. W niskim oknie pasek narzędzi usuwa nazwy pod ikonami.
- **Plik projektu lub rodziny**: karta pliku z obrazem podglądu, informacjami o projekcie i powiązanymi plikami. Zobacz [Odczytaj plik projektu lub rodziny](topic:read-rvt-file).
- **DWG lub DXF**: rząd kart ({{ui:Model}}, potem po jednej na arkusz, potem {{ui:Wyposażenie}}, gdy rysunek ma oznaczone wyposażenie, {{ui:3D}}, {{ui:Dopasuj}} i {{ui:Widok wydruku}}), rysunek oraz współrzędne X i Y na żywo w rogu. Zobacz [Obejrzyj rysunek DWG lub DXF](topic:view-dwg) i [Zobacz rysunek DWG lub DXF w 3D](topic:dwg-in-3d).
- **Folder**: raport o folderze z polem {{ui:Zacznij tutaj}} i tabelami modeli, powiązań, modeli IFC i rysunków. Zobacz [Otwórz cały folder projektu](topic:open-project-folder).

**Wiersz stanu** na dole sceny mówi, co robi BimCraft („Czytam model…”, „Buduję geometrię: 1200 z 5400 elementów”), a na czerwono, co poszło nie tak. Komunikaty o powodzeniu znikają po kilku sekundach.

## Panel Właściwości

Prawy panel pokazuje:

- Dla modelu IFC: kliknięty element z jego nazwą, typem, znacznikiem, GlobalId i każdym zestawem właściwości. Wartości, które możesz zmienić, wyglądają jak przyciski. Zobacz [Pola panelu Właściwości](topic:properties-panel).
- Dla rysunku: jak się poruszać, rysunki dołączone i obrazy rysunku oraz czy każdy został znaleziony, a także listę tego, co **Jeszcze nie narysowano**.
- Dla karty pliku lub folderu: krótką wskazówkę, co otworzyć dalej.

## Na małym ekranie

Gdy okno jest węższe niż ekran laptopa, BimCraft układa swoje obszary jeden pod drugim: scena na górze, potem panele. Przewiń stronę, aby dotrzeć do paneli. Na telefonie tworzą jedną kolumnę, na tablecie dwie.

## Tryby ekranu

Przycisk {{ui:Pełny ekran}} na pasku aplikacji albo {{key:Ctrl+Shift+F}} na każdej platformie przełącza trzy tryby:

1. Normalny.
2. Pełny ekran, z widocznymi paskami.
3. Pełny ekran z ukrytym paskiem aplikacji. Przesuń wskaźnik na górną krawędź albo stuknij tam, aby go przywrócić.

Naciśnij {{key:Esc}}, aby wrócić do normalnego. Przeglądarki bez obsługi pełnego ekranu (na przykład na iPhonie) przełączają tylko między normalnym a ukrytymi paskami.

## Zobacz także

- [Klawisze i mysz](topic:keyboard)
- [Pliki, które BimCraft otwiera i zapisuje](topic:files)
