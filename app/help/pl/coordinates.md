---
title: Współrzędne w BimCraft
summary: Gdzie pracujesz: położenie wskaźnika w rzucie i widoku 3D, poziom, na którym jesteś, początek projektu oraz punkt pomiarowy terenu.
keywords: współrzędne, gdzie jestem, położenie, wskaźnik, odczyt, x y z, poziom, kondygnacja, początek projektu, początek, punkt bazowy, punkt pomiarowy, teren, współrzędne mapy, wschodnie, północne, georeferencja, jednostki, lokalizacja
from: 84df5245
---

## Co zrobisz

Sprawdzisz na pierwszy rzut oka, na którym poziomie rysujesz, jak daleko wskaźnik jest od początku projektu i gdzie znajduje się punkt pomiarowy terenu.

## Gdzie wyświetlane są liczby

- **Nad widokiem 3D** (w prawym dolnym rogu, obok kostki widoku): przesuń wskaźnik nad model. Ramka pokazuje poziom, na którym leży punkt, i jego wysokość nad podłogą tego poziomu, a następnie **X, Y i Z**. Nad pustą przestrzenią odczytywany jest punkt na podłodze najniższego poziomu.
- **W rzucie** (w prawym dolnym rogu, gdy {{ui:Rysuj}} jest włączone): poziom pokazany w rzucie, wysokość jego podłogi oraz **X i Y** wskaźnika, gdy znajduje się nad rzutem.
- Gdy plik ma przeliczenie mapy (został wyeksportowany ze współrzędnymi mapy), obie ramki dodają **współrzędne wschodnie i północne** na siatce mapy, w {{ui:Jednostkach}} wybranych przez Ciebie (zawsze z zapisaną obok jednostką; stopy i cale są pokazywane jako dziesiętne stopy). Rysunek (DWG lub DXF) zachowuje własne jednostki: odczyt wskaźnika podaje ich nazwę i nigdy nie są przeliczane.

Każda wartość X, Y i Z jest mierzona od **początku projektu**, w {{ui:Jednostkach}} wybranych na pasku narzędzi (stopy i cale, cale, dziesiętne stopy, milimetry, centymetry lub metry). Dodatnia oś Y wskazuje północ modelu, która nie zawsze jest północą geograficzną. Współrzędne wschodnie i północne na mapie stosują ten sam wybór (stopy i cale są pokazywane jako dziesiętne stopy). Gdy jednostka systemu mapy różni się od wybranej, jest podawana w nawiasie za liczbami, na przykład *(US survey feet)*, aby geodeta widział, w jakiej jednostce zapisany jest sam system.

## Dwa znaczniki

- **Początek projektu** (czerwone koło z krzyżykiem): punkt 0, 0, 0, od którego mierzone są wszystkie współrzędne w modelu.
- **Punkt pomiarowy** (niebieskie koło z trójkątem): punkt odniesienia terenu, dla którego podano szerokość i długość geograficzną, wysokość lub współrzędne mapy. W widoku 3D wskaż go, aby odczytać, gdzie się znajduje.

Gdy teren leży na początku projektu, jak w nowym budynku narysowanym tutaj, jeden znacznik pokazuje oba punkty. Kliknij przycisk celownika w dowolnej ramce, aby ukryć lub pokazać znaczniki. BimCraft zapamiętuje Twój wybór w tej przeglądarce.

## Co powinieneś zobaczyć

- Liczby zmieniają się wraz z ruchem wskaźnika, a ramka w rzucie podaje nazwę poziomu wybranego na liście poziomów.
- Znaczniki pozostają na miejscu podczas obracania, przesuwania i powiększania widoku.

:::tip
Aby odczytać szerokość i długość geograficzną punktu, użyj {{ui:Zmierz}} › {{ui:Położenie}}: zobacz [Pomiar odległości, pól powierzchni i położeń w 3D](topic:measure).
:::

:::touch
Na ekranie dotykowym ramka 3D nic nie pokazuje, dopóki nie użyjesz myszy lub pióra. Palec przesuwa widok.
:::
