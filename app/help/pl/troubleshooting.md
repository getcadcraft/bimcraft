---
title: Rozwiązywanie problemów
summary: Komunikaty wyświetlane przez BimCraft, ich przyczyny i co zrobić, przy otwieraniu plików, folderów, modeli 3D, rysunków i edycji.
keywords: problem, błąd, nie działa, nie można otworzyć, nie udało się, niekompletny, uszkodzony, wolno, awaria, pusty, brakujący, komunikat, pomoc
from: 1e5a79fc
---

Komunikaty pojawiają się w pasku stanu u dołu sceny, na czerwono, gdy coś się nie udało. Znajdź poniżej swój komunikat.

## Otwieranie plików

**"*nazwa* nie jest plikiem IFC, RVT, RFA, DWG ani DXF."**
BimCraft nie rozpoznał pliku. Sprawdź rozszerzenie i to, czy plik nie jest pusty. Pliki PDF, obrazy i pliki biurowe się nie otwierają.

**".ifczip nie jest jeszcze obsługiwany. Zapisz lub wyeksportuj model jako zwykły plik .ifc."** (dotyczy także `.ifcxml`)
Rozpakuj `.ifczip` (to zwykłe archiwum zip zawierające `.ifc`) lub wyeksportuj zwykły IFC.

**"… to plik projektu, którego BimCraft jeszcze nie odczytuje."**
Plik `.pln`, `.pla`, `.tpl` lub `.bpn`. Wyeksportuj z niego IFC lub DWG i otwórz ten plik: zob. [Otwieranie plików projektu .pln i .pla](topic:pln-project-files).

**"Nie udało się odczytać tego pliku IFC."**
Plik IFC jest uszkodzony albo w rzeczywistości nie jest IFC. Otwórz go w edytorze tekstu: prawdziwy plik IFC zaczyna się od `ISO-10303-21;`. Wyeksportuj go ponownie.

**"Ten plik jest niekompletny: ma … MB, ale jego własny indeks wskazuje na dane co najmniej do … MB w głąb. …"**
Plik projektu lub rodziny został ucięty podczas kopiowania, wysyłania lub synchronizacji. Plik na dysku w chmurze, który jest „tylko online”, wygląda tak samo. Plik otwarty sam w sobie się otwiera, z tym komunikatem na górze karty i tekstem „Pokazano to, co udało się odzyskać; skopiuj oryginał ponownie, aby zobaczyć pełny model.”: karta pokazuje tylko te części, których każdy bajt jest w pliku, a resztę wymienia pod **Nie ma w pliku**. Udostępnij plik offline w dysku w chmurze albo skopiuj oryginał ponownie i otwórz go. W folderze BimCraft pokazuje najnowszą kompletną kopię zapasową.

**"… Spis treści pliku też jest w brakującej części, więc nic z niego nie da się otworzyć."**
Plik został ucięty tak wcześnie, że nie ma nawet jego spisu treści. Z tej kopii nic nie da się odzyskać. Skopiuj oryginał ponownie i otwórz go.

**"Ten złożony plik nie ma strumienia BasicFileInfo, więc nie jest plikiem Revit."**
Plik jest złożonym plikiem innego rodzaju (stare dokumenty biurowe używają tego samego kontenera). Sprawdź, czy wybrano właściwy plik.

**"Wciąż pracuję nad poprzednim…"**
BimCraft nadal zajmuje się poprzednim plikiem lub folderem. Poczekaj, aż pasek stanu się zakończy, a potem spróbuj ponownie.

**Okno wyboru plików wyszarza mój plik.**
Okno oferuje tylko `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` i `.dxf`. Zamiast tego przeciągnij inne pliki na stronę, a BimCraft powie, czy potrafi je odczytać.

## Otwieranie folderów

**"Ten folder ma więcej niż 20,000 plików. Wybierz mniejszy folder, na przykład jeden projekt."**
Wybrano folder zbyt wysoko w hierarchii, na przykład cały dysk. Wybierz jeden folder projektu.

**"Przeglądarka nie udzieliła dostępu do *nazwa*. Wybierz go ponownie w Otwórz folder."**
Kliknięto {{ui:Otwórz ponownie}} przy ostatnim folderze, a uprawnienie przeglądarki zostało odmówione albo wygasło. Wybierz folder ponownie albo przeciągnij go.

**Przeglądarka mówi, że pliki zostaną „przesłane”.**
To słownictwo samej przeglądarki na przekazanie plików stronie. BimCraft nigdzie ich nie wysyła. Aby tego uniknąć, przeciągnij folder.

**Na telefonie lub tablecie nic się nie dzieje.**
Wiele mobilnych przeglądarek nie pozwala wybierać folderów. Otwórz pojedyncze pliki albo użyj komputera.

## Silnik IFC ładuje się za pierwszym razem

**Pasek stanu zostaje na „Uruchamianie silnika IFC…” albo pokazuje błąd, na przykład "Failed to fetch".**
Nie udało się pobrać silnika IFC. Możesz być offline albo zaporę sieciową lub blokator treści coś blokuje.

:::offline
Jesteś offline. Jeśli przycisk na pasku aplikacji nie mówi {{ui:Gotowe offline}}, silnik IFC nigdy nie został zapisany w tej przeglądarce. Połącz się ponownie, otwórz plik jeszcze raz, a potem kliknij {{ui:Zapisz do pracy offline}}, aby działał offline następnym razem. Zob. [Praca online i offline](topic:online-offline).
:::

:::online
Odśwież stronę i spróbuj ponownie. W sieci firmowej poproś zespół IT o zezwolenie na pliki `.wasm` tej strony.
:::

## Zapisywanie do pracy offline

**Przycisk pokazuje {{ui:Nie udało się zapisać}}.**
Niektóre pliki się nie pobrały, zwykle dlatego, że połączenie zostało przerwane. Sprawdź połączenie i kliknij przycisk ponownie. Poprzednia kopia offline zostaje zachowana, aż nowa będzie kompletna.

**Przycisk pokazuje {{ui:Tryb offline niedostępny}}.**
To okno nie może zachować kopii offline, na przykład okno prywatne albo zarządzany komputer służbowy. Zob. [Praca offline](common:offline).

**Przycisk długo pokazuje „Zapisywanie *n* z *m*”.**
Kopia BimCraft ma około 11 MB, z czego większość to silnik IFC. Zostaw kartę otwartą, aż pokaże {{ui:Gotowe offline}}.

**BimCraft otworzył się offline, ale wygląda na nieaktualny.**
Zapisana kopia pochodzi z wcześniejszej wizyty. Gdy jest połączenie, kliknij {{ui:Gotowe offline}} i wybierz {{ui:Zapisz ponownie (pobierz najnowszą wersję)}}.

## Widok 3D

**Model nie jest tam, gdzie się spodziewano, albo jest malutki.**
Naciśnij {{key:F}} lub kliknij {{ui:Dopasuj}}. Dopasuj zawsze obejmuje wszystko w modelu, w tym kondygnacje, które odznaczono, i luźne elementy daleko od budynku, więc budynek może wyglądać mały. Przybliż od tego miejsca.

**Kliknięcie niczego nie zaznacza.**
Trzymaj mysz nieruchomo podczas klikania: lekkie przeciągnięcie obraca widok. Elementów z odznaczonych kondygnacji nie można zaznaczyć. Przy włączonym {{ui:Przestrzenie}} półprzezroczyste przestrzenie są zaznaczane przed tym, co jest w środku.

**Przycisk {{ui:Krawędzie}} jest wyszarzony: „Krawędzie są wyłączone dla bardzo dużych modeli”.**
Model ma więcej niż 1,5 miliona trójkątów. Krawędzie są wyłączone, aby oszczędzić pamięć.

**Karta zwalnia, bieleje albo pokazuje stronę awarii przeglądarki.**
Model jest za duży na pamięć, jaką przeglądarka przydziela karcie. Zamknij inne karty i przeładuj stronę. Wyeksportuj mniejszy IFC: jeden budynek, jedną branżę lub mniej kondygnacji. Zob. [Przeglądarki, urządzenia i pamięć](topic:platforms).

**Widok 3D pozostaje pusty.**
WebGL może być wyłączone lub zablokowane. W ustawieniach przeglądarki włącz akcelerację sprzętową (lub akcelerację grafiki) i uruchom przeglądarkę ponownie.

## Edycja IFC

**"Użyj liczby."** Wartość jest liczbowa. Wpisz zwykłą liczbę bez jednostek, na przykład `2.4`.

**"Użyj liczby całkowitej."** Wartość jest liczbą sztuk lub całkowitą. Usuń miejsca po przecinku.

**"Można edytować tylko właściwości z jedną wartością."** Listy, wyliczenia i wielkości są tylko do odczytu.

**{{key:Mod+S}} otwiera okno przeglądarki „Zapisz stronę”.**
Nie ma niezapisanych zmian, więc BimCraft przekazał klawisz przeglądarce. Zamknij okno.

**{{key:Mod+Z}} nic nie robi.**
Działa tylko wtedy, gdy są niezapisane zmiany i nie wpisuje się tekstu w polu. Po zapisie nie ma czego cofać.

**Lista {{ui:Zmiany}} nadal pokazuje edycje, mimo że je odrzucono i otwarto rysunek lub folder.**
Gdy na pytanie „Odrzucić je?” odpowiesz OK, a potem otworzysz coś innego niż model IFC, stare edycje zostają w pamięci, a {{ui:Zapisz jako IFC}} nadal by je zapisało. Aby naprawdę zacząć od nowa, otwórz ponownie oryginalny IFC albo przeładuj stronę.

**Edycja zmieniła więcej elementów, niż zaznaczono.**
Zmieniono właściwość w zestawie oznaczonym „(type)”. Właściwości typu dotyczą każdego elementu tego typu. Kliknij {{ui:Cofnij}}. Zob. [Zmiana właściwości typu dla każdego elementu danego typu](topic:type-vs-instance).

## Rysunki

**"*nazwa* nie można odczytać. Może być uszkodzony albo zapisany w formacie, którego czytnik jeszcze nie obsługuje (…)."**
Zapisz rysunek z programu, który go utworzył, jako starszy DWG (2018 lub wcześniejszy) albo jako DXF, i spróbuj ponownie.

**"Ten rysunek nie ma nic do pokazania."** albo **"*nazwa* to pusty rysunek: nie zawiera linii, tekstu ani bloków."**
Rysunek jest pusty albo zawiera tylko rzeczy, których BimCraft jeszcze nie rysuje (zob. **Jeszcze nie narysowane** po prawej).

**"Ten rysunek jest bardzo duży; pokazano tylko jego część."**
BimCraft przerwał rysowanie, aby pozostać responsywnym. Wyłącz warstwy, których nie potrzebujesz, albo otwórz potrzebne arkusze z mniejszego rysunku.

**Brakuje części arkusza.**
Mogą brakować rysunków dołączonych: zajrzyj pod **Rysunki dołączone** po prawej. Zob. [Znajdowanie dołączonych rysunków i obrazów](topic:dwg-linked-files). Warstwy mogą też być wyłączone: kliknij {{ui:Włącz wszystkie}}.

**Obraz pokazuje się jako pusta ramka.**
Nie znaleziono jego pliku albo to TIFF („TIFF nie może być wyświetlany w przeglądarce”). Dodaj kopię PNG lub JPEG przyciskiem {{ui:Dodaj obrazy…}}.

**Przewijanie gładzikiem powiększa zamiast przesuwać rysunek.**
Tak działają rysunki w BimCraft. Kliknij i przeciągnij, aby przesunąć.

## Nadal masz problem

Przeczytaj [Czego jeszcze nie zbudowano](topic:not-built-yet): szukanej rzeczy może nie być w tej wersji.
