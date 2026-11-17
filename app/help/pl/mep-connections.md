---
title: Podłączanie rur i przewodów do wyposażenia
summary: Zacznij lub zakończ rurę albo przewód na przyłączu, aby przyjął jego rozmiar i system i pozostał do niego przypięty, a następnie sprawdź połączenia: otwarte przyłącza, niezgodności rozmiaru i systemu oraz przebiegi bez źródła.
keywords: mep, połączenie, połączenia, przyłącze, przyłącza, otwarte przyłącze, niezgodność rozmiaru, niezgodność systemu, źródło, sprawdź połączenia, przypięty, podążający, przesuń wyposażenie, ifcrelconnectsports, koordynacja
from: 29144fb0
---

## Co zrobisz

Połącz przebiegi z wyposażeniem, aby model był jednym połączonym systemem: wylot pompy z rurą, która z niego wychodzi, szyjka dyfuzora z przewodem odgałęźnym. Następnie pozwól BimCraft wypisać to, co nie jest połączone.

## Rysowanie z przyłącza

1. Wybierz {{ui:Rura}} lub {{ui:Kanał}}.
2. Przesuń wskaźnik na przyłącze elementu wyposażenia (małe kółka; otwarte przyłącze jest narysowane kolorem ostrzeżenia). Wskaźnik przyciąga się do niego i pokazuje **na przyłączu**.
3. Kliknij: przebieg zaczyna się na wysokości przyłącza i **przyjmuje jego rozmiar i system** (rura przyjmuje też typowy materiał tego systemu). Wiersz stanu mówi, co przyjęto.
4. Rysuj dalej jak zwykle. Zakończenie przebiegu na innym przyłączu także przypina ten koniec.

Koniec przebiegu na przyłączu jest **przypięty** do niego: przesuń lub obróć wyposażenie (we właściwościach), a koniec przebiegu pójdzie za nim; edytuj przebieg, a ten koniec pozostanie na przyłączu. Pozostałe narożniki przebiegu zostają tam, gdzie były, więc po dużym przesunięciu pierwszy odcinek może odejść od przyłącza pod kątem: przesuń również następny narożnik.

## Sprawdzanie połączeń

Otwórz {{ui:Kompilacja}} i kliknij {{ui:Sprawdź połączenia}}. Lista pod paskiem pokazuje:

| Wiersz | Co to znaczy |
|---|---|
| Przyłącze nie jest podłączone | Element wyposażenia ma połączenie, do którego nic nie jest narysowane |
| Nic na jego końcu | Przebieg kończy się w powietrzu |
| Połączone przyłącza o różnych rozmiarach | Przebieg jednego rozmiaru łączy się z przyłączem lub przebiegiem innego rozmiaru bez redukcji (nominalny rozmiar rury, kształt i boki przewodu) |
| Połączone przyłącza o różnych systemach | Na przykład powrotny przewód przy nawiewnym dyfuzorze |
| Rura połączona z przewodem | Spotykają się dwa połączenia różnych rodzajów |
| Brak wyposażenia w jego sieci, które by go zasilało | Nic, do czego przebieg jest połączony, nawet daleko wzdłuż trasy, nie ma wylotu. Odpływy, deszczówka i odpowietrzenia nie są o to sprawdzane: ich woda pochodzi z przyborów |
| Przypięty do przyłącza wyposażenia, którego nie ma już w modelu | Wyposażenie zostało usunięte; narysuj koniec ponownie albo usuń przebieg |

Najpierw są błędy. Kliknij wiersz, aby wybrać to, co nazywa. {{ui:Zamknij}} ukrywa listę. Sprawdzenie odczytuje model tak, jak został narysowany: sprawdza połączenia i rozmiary, nigdy przepływów, ciśnień ani równoważenia.
