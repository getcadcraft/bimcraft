---
title: Wyślij element do PartCraft i przywróć go
summary: Wybierz podporę, wspornik, balustradę lub urządzenie, zaprojektuj je jako część w PartCraft z otaczającym budynkiem i zaakceptuj nowy kształt z powrotem w modelu.
keywords: partcraft, część, wyślij, łącze, element, podpora, wspornik, ogrodzenie, balustrada, urządzenie, projekt, tam i z powrotem, zaakceptuj, zmieniony, łącza części
from: 4ce2f449
---

## Co zrobisz

Zaprojektuj jeden element budynku jako część: wyślij go do PartCraft, zmień tam (wytnij, dodaj, nawierć, zmień rozmiar) i przenieś nowy kształt z powrotem do modelu.

## Kroki

1. Wybierz jeden element w modelu: element ogólny, urządzenie, kolumnę, belkę, balustradę lub mebel.
2. Wybierz na pasku narzędzi {{ui:Łącza części}}, a następnie {{ui:Wyślij do PartCraft}}. PartCraft otworzy się w nowej karcie z elementem jako częścią. Elementy w odległości do 3 m są narysowane obok na szaro, abyś mógł zaprojektować część na miejscu. Nie można ich tam zmieniać.
3. Zmień część w PartCraft. W PartCraft wybierz {{ui:Plik}} › {{ui:Eksportuj}} › {{ui:Zapisz z powrotem w BimCraft}}. Możesz zapisywać tyle razy, ile chcesz.
4. Z powrotem w BimCraft przycisk {{ui:Łącza części}} pokazuje liczbę, a karta wymienia element jako {{ui:Zmieniono w PartCraft}} wraz ze zmianą rozmiaru i objętości opisaną słowami.
5. Wybierz {{ui:Pokaż}}, aby go obejrzeć, a następnie {{ui:Zaakceptuj}}, aby nadać elementowi nowy kształt, lub {{ui:Zachowaj moje}}, aby zostawić go bez zmian.

## Co powinieneś zobaczyć

- Akceptacja to jeden krok cofania. Element zachowuje swoje miejsce, GlobalId, typ, materiał i właściwości. Wymieniane jest tylko jego ciało.
- Element otrzymuje zestaw właściwości {{ui:CadCraft_PartLink}} z łączem, jego stanem i wersją.
- {{ui:Wyślij ponownie}} otwiera ten sam element w PartCraft jeszcze raz, przy tym samym łączu.

## Dobrze wiedzieć

- Ściany, podłogi, dachy, drzwi, okna, schody, rampy i przestrzenie są rysowane narzędziami budowlanymi z zarysu i odbudowywane po każdej zmianie. Bryła z innej aplikacji zostałaby nadpisana, dlatego takie elementy są odrzucane z podaniem powodu.
- Kształt wraca jako siatka (triangulacja IFC), a nie jako elementy cechowe części. Historia części pozostaje w PartCraft.
- Jeśli element zmienił się w modelu po wysłaniu, karta mówi o tym przed akceptacją: akceptacja zastępuje te zmiany.
- Nic nie jest przesyłane na serwer. Obie aplikacje są stronami jednej witryny i przekazują element między sobą w tej przeglądarce. Obie muszą być otwarte w tej samej przeglądarce.
- Element musi zamknąć się w bryłę w PartCraft. Element, którego kształt ma duże otwarte luki, zostaje tam odrzucony wraz z liczbą otwartych krawędzi.
- Aby zaakceptować, ustaw jako aktywny model, który zawiera element.
