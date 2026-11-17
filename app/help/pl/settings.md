---
title: Ustawienia BimCraft
summary: Wybierz, czy pomieszczenia i przestrzenie mają być widoczne, czy rysowane są krawędzie i w jakim widoku otwiera się model, oraz zacznij umieszczanie z włączonym przyciąganiem do ściany.
keywords: ustawienia, preferencje, opcje, przestrzenie, pomieszczenia, ifcspace, krawędzie, linie, wydajność, duży model, widok otwarcia, kamera, widok z góry, przyciąganie do ściany, przyciąganie
from: 4416e64f
---

Otwórz {{ui:Ustawienia}} kołem zębatym na pasku aplikacji lub {{key:Mod+,}}. Pierwsza karta, {{ui:BimCraft}}, zawiera ustawienia tej aplikacji; {{ui:Ogólne}} zawiera ustawienia, które współdzielą wszystkie aplikacje CadCraft (motyw, pasek narzędzi, panele). Ustawienia BimCraft istnieją tylko w tej aplikacji: zmienia się je tutaj, a ta przeglądarka je zapamiętuje. {{ui:Resetuj ustawienia BimCraft}} na dole okna przywraca je, wraz ze wspólnymi, do wartości początkowych.

## Menu, klawisze i mysz

Styl menu (własny pasek narzędzi BimCraft, pasek menu do projektowania wnętrz, wstążka BIM lub wiersz poleceń w stylu rysunkowym), własne klawisze i menu oraz to, co robią kółko myszy i przyciski myszy. Zobacz [Menu, klawisze i mysz](topic:menus-keys-and-mouse).

## Po otwarciu modelu

- **Pokazuj pomieszczenia i przestrzenie** (na początku wyłączone): pomieszczenia i przestrzenie są półprzezroczystymi bryłami, które mogą zasłaniać ściany za nimi, dlatego na początku są ukryte. Przycisk {{ui:Przestrzenie}} nad modelem nadal włącza je i wyłącza dla otwartego modelu.
- **Krawędzie**: {{ui:Krawędzie włączone}} (ustawienie początkowe) rysuje linie krawędzi, które nadają wygląd rysunkowy. {{ui:Tylko małe modele}} rysuje je tylko w modelach poniżej 300,000 trójkątów, co przyspiesza przełączanie dużych modeli. {{ui:Krawędzie wyłączone}} uruchamia każdy model bez nich. Przycisk {{ui:Krawędzie}} nadal przełącza je dla otwartego modelu. Powyżej 1,5 miliona trójkątów krawędzie są zawsze wyłączone.

## Rysunki otwierają się w

Sposób, w jaki najpierw pojawia się rysunek DWG lub DXF: {{ui:3D (najszybciej)}} (ustawienie początkowe) rysuje nawet duży rysunek szybko, albo {{ui:Model (2D)}} otwiera płaski widok przestrzeni modelu. Karty nad rysunkiem przełączają w dowolnym momencie między {{ui:Model}}, arkuszami a {{ui:3D}}. Rysunek bez niczego w przestrzeni modelu albo przeglądarka, która nie pokazuje 3D, zawsze otwiera się w 2D.

## Widok początkowy

Kamera, z jaką otwiera się model: {{ui:Dopasuj}} (ustawienie początkowe, cały model z rogu), {{ui:Góra}}, {{ui:Przód}} lub {{ui:Z boku}}. Przyciski nad modelem zmieniają widok w dowolnym momencie.

**Budynek obrócony na terenie**: wiele modeli trafia z budynkiem ustawionym pod kątem do osi pliku (przy współrzędnych geodezyjnych lub wspólnych). {{ui:Prostopadle do budynku}} (ustawienie początkowe) pokazuje taki budynek ustawiony prosto: {{ui:Dopasuj}}, {{ui:Góra}}, {{ui:Przód}}, {{ui:Z boku}}, ściany kostki widoku i każdy nowy przekrój podążają za jego ścianami, a kompas kostki widoku nadal wskazuje północ modelu. {{ui:Tak, jak umieszczono na terenie}} zachowuje osie pliku. Budynek, którego ściany biegną wzdłuż osi, wygląda tak samo w obu przypadkach.

## Umieszczanie elementów biblioteki

**Zacznij z włączonym {{ui:Przyciąganie do ściany}}** (na początku wyłączone): gdy zaczyna się umieszczanie lub wklejanie elementu biblioteki, jego tylna część przyciąga się do najbliższej ściany, zwrócona w stronę pomieszczenia. {{key:Tab}} lub {{ui:Przyciąganie do ściany}} na pasku umieszczania wyłącza to na chwilę. Kondygnacja bez ścian zaczyna bez tej funkcji.

## Pudło przekroju

{{ui:Zapas wokół zaznaczenia}} to odstęp, jaki {{ui:Pudło przekroju wokół zaznaczenia}} zostawia z każdej strony wybranych elementów, w milimetrach: na początku 300, do 5000. Zobacz [Przecięcie modelu IFC płaszczyzną przekroju](topic:section-plane).

## Położenie

{{ui:Szerokość i długość geograficzna w}} wybiera układ, w jakim {{ui:Zmierz}} › {{ui:Położenie}} podaje szerokości i długości geograficzne: WGS 84 (EPSG:4326, ustawienie początkowe, tak jak używają GPS i mapy internetowe), {{ui:Własne datum pliku}} albo jeden z ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 i CGCS2000. Własny układ mapy i datum pliku są zawsze też pokazane. Zobacz [Pomiar odległości, pól powierzchni i położeń w 3D](topic:measure).

## Wskaźnik w rogu

Co znajduje się w prawym dolnym rogu widoków 3D (model IFC oraz rysunek przełączony na 3D): {{ui:Kostka widoku}} (ustawienie początkowe), {{ui:Ikona osi}} (mały X, Y i Z) albo {{ui:Brak}}. Zmiana następuje od razu. Widok rysunku 2D nigdy go nie pokazuje.

Na kostce widoku kliknij ścianę, krawędź lub narożnik, aby spojrzeć z tej strony, przeciągnij kostkę, aby ją obracać, przeciągnij pierścień, aby obrócić widok, a kliknij domek, aby wrócić do widoku początkowego.

## Nazwa przy problemach

Po zalogowaniu problemy noszą nazwę konta, a BimCraft o nic nie pyta: ta część pokazuje {{ui:Z konta użytkownika (<name>)}}. {{ui:Użyj innego imienia}} otwiera pole na inną nazwę, która ma pierwszeństwo, dopóki nie zostanie wybrane {{ui:Użyj nazwy z mojego konta}}. Po wylogowaniu formularz problemu pyta o nazwę jak dotąd. Zobacz [Problemy i pliki BCF](topic:issues-bcf).

## Asystenci

**Zezwól asystentom AI i skryptom na używanie BimCraft** (na początku wyłączone): asystent na tym komputerze może dotrzeć do otwartego modelu przez CadCraft Studio: **Odczyt** znajduje elementy i czyta ich właściwości, **Zmień widok** izoluje, ukrywa i pokazuje je. **Aktywność** wypisuje jego wywołania. Zobacz [Asystent AI pracujący z modelem](topic:assistants).

:::note
Pozostałe ustawienia obowiązują, gdy model się otwiera lub zaczyna się umieszczanie. Model już otwarty zachowuje swój wygląd, dopóki nie zostaną użyte przyciski paska narzędzi lub model nie zostanie otwarty ponownie.
:::

## Powiązane

- [Kopiowanie, wklejanie i duplikowanie elementów biblioteki](topic:copy-paste)
- [Umieszczanie wyposażenia i mebli z biblioteki](topic:place-from-library)
- [Ekran BimCraft](topic:workspace)
- [Asystent AI pracujący z modelem](topic:assistants)
