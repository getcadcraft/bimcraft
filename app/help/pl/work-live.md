---
title: Praca nad jednym modelem razem z Live TeamWork
summary: Co zmienia się w BimCraft podczas sesji Live TeamWork w CadCraft Studio: wspólne edycje tego samego modelu IFC, własne cofanie oraz dołączanie z przeglądarki w tej samej sieci.
keywords: live, live teamwork, studio live, razem, współpraca, sesja, udostępnij na żywo, dołącz, ifc, właściwości, zmień nazwę, kursor, wskaźnik, widzą się nawzajem, nazwy, kolor, zaznaczenie, cofnij, gospodarz
from: 32061b72
---

## Czego się dowiesz

Co dzieje się z modelem IFC, gdy kilka osób edytuje go jednocześnie. CadCraft Studio uruchamia i dołącza do sesji Live TeamWork (Udostępnij, Dołącz); ta strona dotyczy samego modelu.

## Wszyscy edytują jednocześnie

Model gospodarza trafia do każdego, kto dołączy. Zmieniaj nazwy elementów, wartości ich właściwości, umieszczaj, wymieniaj lub usuwaj elementy i elementy biblioteki jak zwykle. Twoje edycje widać od razu; edycje innych osób pojawiają się chwilę po ich wykonaniu. Gdy edycja zmienia to, co widzisz (umieszczony lub usunięty element), BimCraft odświeża model i zachowuje Twój widok.

- **Dwie osoby zmieniają jeden element:** późniejsza zmiana tej samej linii modelu obowiązuje. Zestaw właściwości współdzielony przez kilka elementów jest kopiowany dla edytowanego elementu, jak zawsze, więc pozostałe zachowują swoje wartości.
- **Element, który ktoś właśnie usunął,** nie może być już edytowany: Twoja edycja zostaje cofnięta, a pasek stanu podaje powód.
- Nowe linie modelu każdej osoby dostają własne numery, więc dwie osoby nigdy nie dostaną tego samego.

## Widoczność innych osób

Każda osoba w sesji ma własny kolor. W widoku 3D widzisz wskaźnik każdej osoby jako strzałkę w jej kolorze, z nazwą obok, na elemencie, na który wskazuje, oraz przerywaną ramkę w jej kolorze wokół każdego elementu, który zaznaczyła.

Wskaźniki, nazwy i zaznaczenia istnieją tylko w sesji: nigdy nie są zapisywane w pliku i nigdy nie trafiają do niczyjego cofania. Płynnie przesuwają się do miejsca, w którym jest każda osoba, dzięki czemu są płynne także przy wolnym połączeniu.

## Cofnięcie dotyczy tylko Twojej pracy

{{ui:Cofnij}} cofa Twoją ostatnią edycję i nie rusza zmian pozostałych osób. Gdy ktoś zmienił tę samą rzecz później, nic nie zostaje cofnięte, a pasek stanu podaje, kto to zrobił.

## Dołączanie z przeglądarki

Członek zespołu bez Studio może zeskanować obraz pod kodem gospodarza telefonem, tabletem lub komputerem w tej samej sieci. BimCraft otwiera się w przeglądarce i otwiera model gospodarza, gdy gospodarz Cię wpuści. Link zaproszenia pozwala dołączyć komuś z innej sieci: gospodarz potrzebuje stanowiska licencyjnego w planie Team Cloud Plan dla tej aplikacji, wszyscy inni dołączają za darmo, a link działa tylko wtedy, gdy sesja gospodarza jest otwarta.

## Gdy sesja się kończy

Tylko gospodarz zapisuje model. Pozostałe osoby zachowują niezapisaną kopię: jeśli chcesz ją zachować, użyj Zapisz jako IFC.

:::note
Udostępniany jest tylko pierwszy model na scenie. Otwarcie innego pliku podczas sesji kończy sesję w tym oknie.
:::
