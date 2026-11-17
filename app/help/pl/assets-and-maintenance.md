---
title: Zachowaj dane zasobów i zapis konserwacji w modelu
summary: Używaj przekazanego modelu IFC do zarządzania budynkiem: producent, model, numer seryjny, gwarancja i okres eksploatacji wyposażenia i instalacji oraz zapis wykonanych przeglądów, wszystko zapisane w IFC.
keywords: przekazanie, zaświadczenie o zakończeniu budowy, pozwolenie na użytkowanie, powykonawczy, pakiet odbiorowy, zasoby, rejestr zasobów, facility management, fm, eksploatacja, konserwacja, serwis, gwarancja, numer seryjny, kod kreskowy, producent, model, okres eksploatacji, cobie, bliźniak cyfrowy, po terminie, termin, zlecenie pracy
from: b84ac492
---

Karta {{ui:Zasoby}} w prawym panelu zamienia otwarty model IFC w zapis wyposażenia budynku. Wszystko jest zapisywane w samym IFC, we własnych zestawach właściwości i zadaniach IFC, więc następny program, który otworzy plik, również to odczyta. Nic nie jest przesyłane i nie jest potrzebny serwer: zapisz IFC, aby to zachować.

## Co jest na liście

- Wyposażenie i armatura: meble, armatura sanitarna, oprawy oświetleniowe, urządzenia, terminale powietrzne, zawory, pompy, wentylatory, kotły, zbiorniki, gniazda, rozdzielnice, windy i podobne elementy oraz elementy biblioteki z danymi wyposażenia.
- Każdy inny element, który **śledzisz**: wskaż go w modelu (drzwi, ścianę, pompę narysowaną jako zwykły obiekt) i kliknij {{ui:Śledź zaznaczone}}.
- Wszystko, co już ma dane zasobu lub zadanie konserwacji, zapisane tutaj albo przez inny program.

Najpierw to, co jest po terminie, potem to, co wymaga wykonania w ciągu 30 dni. Filtruj po nazwie, znaczniku, producencie, modelu lub numerze seryjnym, po poziomie, albo zaznacz {{ui:Tylko po terminie albo w ciągu 30 dni}}.

## Dane zasobu

Kliknij zasób na liście (albo wskaż go w modelu), aby otworzyć jego dane: producent, model, odniesienie do modelu, numer seryjny, kod kreskowy, dzień montażu, numer gwarancji i jej początek oraz koniec, a także okres eksploatacji w latach. {{ui:Zapisz dane}} zapisuje je jednym krokiem ({{key:Mod+Z}} cofa to). Zostaw pole puste, aby usunąć tę wartość.

## Dokumenty

Pod danymi {{ui:Dokumenty}} wypisuje instrukcje, gwarancje, zdjęcia, certyfikaty i rysunki powiązane z zasobem. Wybierz rodzaj, nadaj tytuł (albo zostaw puste: wtedy używana jest nazwa pliku) i wskaż, gdzie dokument się znajduje:

- **adres internetowy** (`https://…`): dostaje link Otwórz, który otwiera się w nowej karcie;
- albo **nazwa pliku lub ścieżka** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, udział sieciowy): trzymaj pliki obok IFC, w tym samym folderze albo w podfolderze, aby nazwy nadal działały po przekazaniu folderu. BimCraft pokazuje nazwę; otwórz plik z folderu.

Pliki same nigdy nie są przesyłane ani kopiowane do IFC: zapisywany jest tylko link. Adres internetowy z hasłem oraz każdy link, który nie jest adresem internetowym ani plikiem (np. `javascript:`), zostaje odrzucony. {{ui:Usuń}} zdejmuje dokument z zasobu (jeden krok; {{key:Mod+Z}} cofa to).

Dokumenty, które inny program umieścił na elemencie, też są wypisane. Dokumenty przypisane do **typu** elementu pojawiają się przy każdym elemencie tego typu i tak to oznaczają; zmieniaj je tam, gdzie typ został utworzony.

W IFC każdy dokument to odwołanie do dokumentu IFC powiązane z elementem, z rodzajem zachowanym na tym powiązaniu, zarówno w IFC4, jak i IFC2X3.

## Zapis konserwacji

Pod dokumentami {{ui:Zapisz wykonaną pracę}}: dzień wykonania, praca, kto ją wykonał, kiedy następny termin i uwagi. Każdy wpis to jeden krok; {{ui:Edycja}} i {{ui:Usuń}} zmieniają go później. Termin następnego wykonania najnowszego wpisu decyduje, czy zasób jest po terminie, czy wkrótce wymaga przeglądu.

## Jak to jest zapisane w IFC

- Producent i model w `Pset_ManufacturerTypeInformation`, numer seryjny, kod kreskowy i dzień montażu w `Pset_ManufacturerOccurrence`, gwarancja w `Pset_Warranty`, okres eksploatacji w `Pset_ServiceLife`, bezpośrednio na elemencie. Gdy typ elementu już ma producenta lub model, są one wyświetlane, dopóki nie wpiszesz własnych.
- Każdy wpis konserwacji to **zadanie** IFC rodzaju konserwacja, powiązane z elementem, z jego datami (w IFC4 także jako własne czasy zadania) i zestawem `CadCraft_Maintenance` z dniem, wykonawcą i dniem następnego terminu.
- Wartości wspólne z innym elementem są najpierw kopiowane: zmiana jednego zasobu nigdy nie zmienia jego sąsiadów.
- W starszych plikach IFC2X3 daty są zapisane jako tekst (YYYY-MM-DD); ta wersja wymaga tam osobnego rekordu daty, którego BimCraft nie zapisuje.

## Odczyty czujników

Otwórz {{ui:Wartości czujników}} i {{ui:Otwórz odczyty (CSV)…}}, aby wczytać odczyty wyeksportowane z systemu zarządzania budynkiem, rejestratora danych lub arkusza:

- **Pierwsza kolumna to czas**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` lub sekundy Unix. Czas bez strefy jest odczytywany w strefie czasowej komputera. Daty z dniem na początku, np. `23/10/2026`, nie są odczytywane (są dwuznaczne); eksportuj daty w formacie ISO.
- **Każda pozostała kolumna to jeden czujnik**, a nagłówek to **znacznik**, **nazwa** lub **GlobalId** jego zasobu. Nagłówek, który nie pasuje do żadnego zasobu albo pasuje do więcej niż jednego, jest wymieniany i pomijany. Kolumny rozdzielają przecinki, średniki lub tabulatory; przy średnikach i tabulatorach odczytywany jest też przecinek dziesiętny (`21,5`).
- Czasy lub wartości, których nie da się odczytać (słowo, jednostka wpisana w komórkę), są liczone i pomijane, nigdy nie są zgadywane.

Najnowszy odczyt pokazuje się w kolumnie {{ui:Odczyt}} listy i w bloku {{ui:Czujnik}} zasobu, z **wykresem** wszystkich odczytów (na telefonie wykresy czekają, aż dotkniesz {{ui:Pokaż wykres}}). Ustaw **dolny i górny limit** oraz jednostkę zasobu i kliknij {{ui:Zapisz limity}}: odczyt poza nimi oznacza zasób. Zaznacz {{ui:Pokaż na modelu}}, aby pomalować każdy zasób według jego odczytu: niebieski poniżej dolnego limitu, zielony w granicach, czerwony powyżej górnego, a dla zasobów bez limitów jedna niebieska skala od najniższego do najwyższego odczytu. Odczyt jest wtedy podpisany jako etykieta (do 60 etykiet, najpierw oznaczone).

**Odczyty zostają w tej karcie przeglądarki**: nie są zapisywane w IFC ani nigdzie wysyłane; następnym razem otwórz CSV ponownie. **Limity są zapisane w IFC** (zestaw `CadCraft_Sensor` na elemencie: Low, High, Unit), więc kolejna osoba, która otworzy plik, zobaczy te same oznaczenia.

## Odczyty na żywo

{{ui:Źródło na żywo}} odczytuje wartości w miarę ich pojawiania się, **bezpośrednio z tej przeglądarki do twojego systemu**. Nic nie przechodzi przez nasz serwer i nic nie jest zapisywane poza kartą przeglądarki. Nic się nie łączy po otwarciu pliku: robi to tylko {{ui:Połącz}}.

- **MQTT przez WebSockets**: adres nasłuchu WebSocket twojego brokera (`wss://broker.example.com:8884/mqtt`) oraz jeden lub więcej tematów z `{tag}` w miejscu znacznika zasobu, np. `site/{tag}/temperature` (BimCraft subskrybuje `site/+/temperature` i odczytuje znacznik z tematu każdej wiadomości). Tematy bez `{tag}` same nazywają czujnik. Wiadomość to albo zwykła liczba (`21.5`), albo JSON, np. `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (ustaw {{ui:Pole wartości w JSON}}, jeśli twoje pole nazywa się inaczej).
- **Zapytaj adres (HTTP)**: adres internetowy, pod którym odpowiada system zarządzania budynkiem albo twój mały skrypt, pytany co kilka sekund (co najmniej co 5). Może odpowiedzieć JSON-em kluczowanym znacznikiem (`{"AHU-1": 21.5}`), listą JSON (`[{"tag": "AHU-1", "value": 21.5}]`) albo CSV z odczytami jak wyżej. Jeśli nie odpowie, BimCraft czeka dwa razy dłużej przed kolejnym pytaniem, najwyżej pięć minut.

Każdy odczyt trafia do zasobu, którego znacznik, nazwa lub GlobalId wskazuje, dokładnie tak jak kolumna CSV; nazwy, które nie pasują do żadnego zasobu, są wypisywane. Odczyty dołączają do {{ui:Wartości czujników}}: lista, wykresy, limity i kolory na modelu działają tak samo.

**Twoje hasło lub token** wpisuje się na jedno połączenie: jest przekazywane do połączenia, a pole jest czyszczone; nigdy nie jest zapisywane w tej przeglądarce ani w IFC. Token idzie jako standardowy nagłówek `Authorization: Bearer` i nie są wysyłane żadne pliki cookie.

{{ui:Zachowaj te ustawienia w IFC}} zapisuje adres, tematy, pole wartości i częstotliwość pytań w modelu (zestaw `CadCraft_Feed` w projekcie; nie ma pola na hasło), więc kolejna osoba otwierająca plik wpisuje tylko własny login i klika {{ui:Połącz}}. Nie wpisuj hasła ani klucza w samym adresie: adres z nazwą użytkownika i hasłem zostaje odrzucony.

:::note
**Czego potrzebuje twój broker lub adres.** Strona w przeglądarce może rozmawiać tylko z serwerem, który na to pozwala:
- Strona jest bezpieczna (https), więc przeglądarka łączy się tylko z adresami `wss://` i `https://` — z wyjątkiem twojego komputera (`localhost`), gdzie `ws://` i `http://` działają do testów.
- Adres HTTP musi zezwalać na żądania z tej strony (CORS: nagłówek `Access-Control-Allow-Origin`, a `Authorization` wśród dozwolonych nagłówków, jeśli używasz tokenu).
- Większość brokerów (Mosquitto, EMQX, HiveMQ i inne) oferuje nasłuch WebSocket; często jest wyłączony, dopóki go nie włączysz. BimCraft obsługuje MQTT 3.1.1.
:::

Gdy BimCraft jest zamknięty, **nie ma alertów**: limity oznaczają zasób, gdy model jest otwarty z podłączonym źródłem. Całodobowe monitorowanie budynku wymaga serwera, którego BimCraft nie uruchamia.

## Arkusz COBie

**COBie** to arkusz przekazania, o który prosi wielu inwestorów i zespołów zarządzania obiektem (opublikowany przez National BIM Standard w USA; BS 1192-4 w Wielkiej Brytanii). Otwórz {{ui:Arkusz COBie}} w karcie:

- {{ui:Zapisz jako COBie (.xlsx)}} zapisuje arkusze COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document i Attribute — z modelu i danych zasobów: budynek, jego poziomy i pomieszczenia (pola z obmiarów modelu), każdy zasób jako komponent z numerem seryjnym, dniem montażu, początkiem gwarancji, znacznikiem i kodem kreskowym, jego typ z producentem, modelem, okresem eksploatacji i długością gwarancji, systemy, do których należy, zapis konserwacji jako zadania oraz powiązane dokumenty. Każdy komponent niesie GlobalId elementu z IFC. Wpisz swój adres e-mail do kolumny "created by" COBie albo zostaw puste (wtedy pojawi się n/a). Wartości, których model nie ma, mają **n/a**; kolumny kategorii zawierają klasę IFC, a nie kod OmniClass.
- {{ui:Wczytaj arkusz COBie…}} wczytuje go z powrotem, z BimCraft lub z innego programu, i **najpierw wypisuje każdą zmianę**: który zasób, która wartość, z czego na co oraz nowe dokumenty. {{ui:Zastosuj}} zapisuje je wszystkie jednym krokiem ({{key:Mod+Z}} cofa to). Wiersze są dopasowywane po GlobalId, potem po nazwie komponentu. Wiersze, które nie pasują do niczego w modelu, są wypisywane, nie dodawane.

Arkusz traktowany jest jako niezaufany: formuły nigdy nie są odczytywane ani uruchamiane (tylko wartość zapisana ostatnio w komórce); wartość, która sprawiłaby, że gwarancja kończy się przed początkiem, oraz link do dokumentu, który nie jest adresem internetowym ani nazwą pliku, są pomijane i liczone, a bardzo duże skoroszyty są odrzucane. Zadania COBie to zaplanowane prace typu, więc są zapisywane, ale nie są odczytywane z powrotem. W arkuszu zapisywanym przez BimCraft tekst, który arkusz mógłby uznać za formułę (zaczynający się od `=`, `+`, `-` lub `@`), jest oznaczony jako tekst.

Skoroszyt jest sprawdzany w naszych testach przy użyciu niezależnego czytnika arkuszy; nie przeszedł przez walidator COBie. Jeśli zespół odbiorczy uruchomi taki walidator, daj nam znać, co pokazuje.

## Dokumenty odbiorowe

Dokumenty, które trafiają do inwestora wraz z gotowym budynkiem, należą do projektu, a nie do jednego zasobu. Na karcie {{ui:Zasoby}} otwórz {{ui:Dokumenty odbiorowe}}:

1. {{ui:Dodaj dokument}}, wybierz rodzaj (zaświadczenie o zakończeniu budowy, pozwolenie na użytkowanie, gwarancja, instrukcja, rysunki powykonawcze, inne) i wpisz tytuł, datę wystawienia, wystawcę oraz numer referencyjny.
2. Wskaż, gdzie dokument się znajduje: adres internetowy, nazwa pliku trzymanego obok IFC albo {{ui:Załącz plik}}.
3. {{ui:Dodaj do listy}}. {{ui:Edycja}} i {{ui:Usuń}} zmieniają listę; każda zmiana to jeden krok, który możesz cofnąć.

{{ui:Zbuduj pakiet dokumentacji odbiorowej}} pobiera jedno archiwum zip: stronę tytułową z listą każdego dokumentu, tę samą listę co w arkuszu, skoroszyt COBie (dokumenty są na jego arkuszu Document, jako wiersze o Facility), model i każdy załączony plik. Zaświadczenie o zakończeniu budowy lub pozwolenie na użytkowanie, którego jeszcze nie ma na liście, jest wymienione na stronie tytułowej; pakiet i tak jest zbudowany.

Model w pakiecie to **model powykonawczy**: podaje, które elementy zmierzono na budowie. Wraz z nim, w folderze `as-built`: oświadczenie, lista każdego elementu z jego stanem weryfikacji, zestaw rysunków w obecnym stanie jako jeden PDF (rysunki powykonawcze) oraz dziennik zmian rysunków, gdy model ma wydane zestawy. Zobacz [Oznaczanie elementów jako sprawdzonych lub zweryfikowanych na budowie](topic:verification).

- W pliku IFC każdy dokument to IfcDocumentInformation powiązany z projektem (IfcRelAssociatesDocument), z tytułem, numerem referencyjnym, datą, wystawcą i miejscem, dzięki czemu inne programy go wypisują.
- Załączony plik jest zapisywany przez nazwę, rozmiar i SHA-256. Aby zachować sam plik razem z projektem, użyj {{ui:Zapisz projekt jako pakiet}} (.ccbundle zawiera model i załączone pliki; po otwarciu zostają przywrócone, każdy sprawdzany względem swojego zapisu). Zwykły zapis pyta, który wybierasz.
- Zwykły plik .ifc zachowuje zapis, a nie plik: po otwarciu użyj {{ui:Załącz plik ponownie}}. Ten sam plik zostanie rozpoznany; inny zastąpi zapis.

## CSV

{{ui:CSV}} zapisuje każdy zasób z jego danymi, każdy wpis konserwacji i każdy dokument, po jednym wierszu, do arkusza lub innego programu do konserwacji.

:::note
Jeszcze nie zbudowano: usługi hostowanej, która przechowuje odczyty i wysyła alerty, gdy BimCraft jest zamknięty, oraz odczytywania zadań COBie z powrotem. Zobacz [Jeszcze nie zbudowano](topic:not-built-yet).
:::
