---
title: Odczytaj plik projektu lub rodziny
summary: Otwórz plik .rvt, .rfa, .rte lub .rft i odczytaj wydanie, współpracę, informacje o projekcie, parametry rodziny, dowiązania i obraz podglądu, bez programu, który go utworzył.
keywords: rvt, rfa, rte, rft, plik projektu, rodzina, wydanie, wersja, która wersja, kompilacja, współpraca, centralny, informacje o projekcie, podgląd, miniatura, dowiązania
from: df3600e1
---

## Co zrobisz

Dowiesz się, co jest w pliku projektu lub rodziny, bez otwierania go w Revit: które wydanie go zapisało, czy jest współdzielony, jakie są informacje o projekcie i do czego się odwołuje. Przydatne, gdy plik przychodzi od kogoś innego i musisz wiedzieć, w jakim wydaniu go otworzyć.

## Kroki

1. Kliknij {{ui:Wybierz plik}}.
2. Wybierz plik `.rvt`, `.rfa`, `.rte` lub `.rft`.
3. Poczekaj chwilę. Wiersz stanu mówi „Odczytywanie pliku…”, a potem „Otwarto *nazwa pliku*”.
4. Spójrz na górę karty: obraz podglądu zapisany w pliku, rodzaj pliku i wydanie, w którym go zapisano, oraz nazwę projektu.
5. Przewiń w dół, aby przeczytać sekcje karty.

## Co powinieneś zobaczyć

Karta pośrodku, z tymi sekcjami, gdy plik je zawiera:

| Sekcja | Co mówi |
|---|---|
| Plik | Nazwa pliku, rozmiar, rodzaj (projekt, szablon projektu, rodzina lub szablon rodziny), wydanie i kompilacja, w których zapisano, współpraca, ścieżka modelu centralnego, gdzie ostatnio zapisano, kto zapisał, ustawienia regionalne i GUID dokumentu |
| Informacje o projekcie | Pola projektu, takie jak nazwa, numer, klient, adres i status. Pola nadal ustawione na domyślne wartości nowego projektu są pomijane. |
| Rodzina, Rodzina: … | Dla rodziny: jej nazwa, kategoria, wydanie, ostatnia aktualizacja i parametry, grupa po grupie |
| Powiązane i przywołane pliki | Każdy dowiązany model, dowiązanie CAD, obraz i tabela notatek, na który wskazuje plik, wraz z zapisaną ścieżką |

Po lewej panel {{ui:Plik}} powtarza kluczowe fakty i dodaje **Odczytano**: ile pliku BimCraft faktycznie odczytał, zwykle około 40 KB z pliku o wielu megabajtach. Po prawej panel {{ui:Właściwości}} informuje, że właściwości elementów wymagają modelu 3D.

## Dlaczego nie ma 3D

Model 3D i elementy w pliku projektu są zapisane w nieudokumentowanym formacie. BimCraft odczytuje tylko te części pliku, które są udokumentowane lub wyraźnie czytelne: informacje o pliku, informacje o projekcie, dane rodziny, listę dowiązań i obraz podglądu. Nie zgaduje reszty. Aby zobaczyć model w 3D i odczytać właściwości elementów, wyeksportuj IFC z programu, który utworzył plik. Zobacz [Uzyskiwanie pliku projektu w 3D przez IFC](topic:rvt-to-ifc).

## Częste błędy

- **Oczekiwanie 3D.** Zobacz wyżej.
- **Dowiązania pokazują tylko zapisaną ścieżkę.** Plik otwarty samodzielnie nie może sprawdzić, czy jego dowiązania istnieją. Otwórz zamiast tego folder, w którym leży, a BimCraft oznaczy każde dowiązanie jako znalezione lub nie: [Otwieranie całego folderu projektu](topic:open-project-folder).
- **„Ten plik jest niekompletny…”** Plik został ucięty podczas kopiowania, przesyłania lub synchronizacji. Plik na dysku w chmurze, który nadal jest „tylko online”, też tak robi. BimCraft mimo to go otwiera i pokazuje tylko to, co odzyskał: bursztynowe ostrzeżenie na górze karty, sekcję **Odzyskano z tego pliku** z częściami, których każdy bajt jest w pliku, oraz **Nie ma w pliku** dla reszty. Nic nie jest uzupełniane za brakującą część, więc wydanie, obraz podglądu lub informacje o projekcie mogą brakować, jeśli były zapisane za miejscem cięcia. Jeśli ucięta została nawet lista zawartości pliku, nic nie da się otworzyć. Skopiuj oryginał ponownie i otwórz go, aby uzyskać pełny plik.
- **„Brak obrazu podglądu w tym pliku”.** Niektóre pliki są zapisane bez niego. To normalne.
- **Otwarcie kopii zapasowej przez pomyłkę.** Pliki nazwane jak `Tower.0004.rvt` to numerowane kopie zapasowe. Otwarcie folderu grupuje je z ich modelem.
