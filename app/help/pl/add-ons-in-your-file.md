---
title: Dodatki używane w pliku
summary: BimCraft zapisuje w pliku IFC, które dodatki do niego zapisały, i przy otwieraniu proponuje dodanie brakujących.
keywords: dodatek, addon, ten plik używa, brakujący dodatek, trusscraft, biblioteka, zapis, cadcraft_addons
from: 9d9500d8
---

## Co robi

Gdy dodatek zapisuje coś w modelu (np. kratownicę albo odcinek rurociągu), BimCraft zapisuje dodatek i jego wersję w projekcie IFC, w zestawie właściwości o nazwie CadCraft_AddOns. Zapis powstaje w tym samym kroku cofania co zmiana dodatku, więc cofnięcie zmiany cofa także zapis. Inne programy ignorują ten zestaw właściwości; to, co narysował dodatek, pozostaje w pliku w każdym przypadku.

## Kroki

1. Otwórz plik IFC, do którego utworzenia pomógł dodatek.
2. Jeśli dodatek użyty w pliku nie jest włączony, nad modelem pojawia się uwaga, która wskazuje, które dodatki, z przyciskiem dodania ich z konta w bibliotece.
3. Dodaj je albo zamknij uwagę. Model otwiera się w obu przypadkach.

## Częste błędy

- **Uwaga się nie pojawia.** Nie jesteś zalogowany na swoje konto w tej karcie albo plik nie zawiera zapisu (powstał przed wprowadzeniem zapisów albo w innym programie).
- **Lista zmian pokazuje "undefined".** Naprawiono: etykiety pokazują teraz nazwę dodatku.

## Dalej

- [Umieszczanie wyposażenia i mebli z biblioteki](topic:place-from-library)
