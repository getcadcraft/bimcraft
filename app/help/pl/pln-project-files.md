---
title: Otwieranie plików projektów .pln i .pla
summary: Co BimCraft robi dziś z plikami .pln, .pla, .tpl i .bpn oraz jak wyeksportować z nich IFC i DWG, aby model i rysunki otworzyły się tutaj.
keywords: pln, pla, tpl, bpn, plik projektu, archiwum, szablon, kopia zapasowa, eksport ifc, eksport dwg, tłumacz, strefy, układy
from: 41fb921d
---

## Co zrobisz

Wczytasz do BimCraft projekt zapisany jako `.pln` (projekt), `.pla` (archiwum z jego biblioteką), `.tpl` (szablon) lub `.bpn` (kopia zapasowa). To własne pliki Archicad.

## Co otwiera się dziś

- **Same pliki projektów jeszcze się nie otwierają.** Ich format nie jest opublikowany, a BimCraft jeszcze go nie odczytuje. Po otwarciu jednego z nich BimCraft to zgłasza i wskazuje tę stronę.
- **BimCraft sprawdza pierwsze bajty pliku.** Projekty Archicad od wersji 17 zaczynają się tą samą krótką sygnaturą, więc BimCraft może z pewnością stwierdzić, że plik jest projektem Archicad. Plik o nazwie Archicad, który tak się nie zaczyna, prawdopodobnie został przemianowany, jest uszkodzony lub pochodzi ze starszej wersji. Sygnatura nie odróżnia projektu, archiwum i szablonu.
- **Eksport IFC otwiera się w pełni**: model w 3D, kondygnacje, strefy jako przestrzenie, dane elementów, zestawy właściwości i klasyfikacje, ze wszystkimi narzędziami BimCraft.
- **Eksport DWG otwiera się** w widoku 2D, z warstwami i układami, oraz w {{ui:3D}}. Aby go edytować, użyj {{ui:Edytuj w CadCraft}}.

Albo wczytaj cały projekt jako jedno archiwum zip, wraz z jego widokami, układami i grupami właściwości: zobacz [Otwieranie pakietu projektu](topic:open-project-bundle).

## Eksport IFC (model)

1. Otwórz projekt w Archicad.
2. Wybierz **Plik > Zapisz jako** i jako typ pliku wskaż **IFC**.
3. Wskaż tłumacza IFC (nazwa Archicad dla zestawu ustawień eksportu IFC). Do BimCraft pasuje **IFC4 Reference View** lub **IFC2X3 Coordination View 2.0**. Plik IFC4X3 też się otworzy.
4. Wybierz, co wyeksportować: cały projekt albo tylko elementy widoczne na kondygnacjach, które oglądasz.
5. Zapisz, a następnie kliknij {{ui:Wybierz plik}} w BimCraft i wskaż plik `.ifc`.

Przed eksportem sprawdź te ustawienia tłumacza:

- **Strefy**: wyeksportuj je, aby pomieszczenia trafiły jako przestrzenie. Kliknij {{ui:Przestrzenie}} w BimCraft, aby je zobaczyć.
- **Właściwości i klasyfikacje**: wyeksportuj je, aby pojawiły się w {{ui:Właściwości}} i mogły być użyte w {{ui:Znajdź}}, {{ui:Kolor}} i {{ui:Sumy ilości}}.
- **Zwykły `.ifc`**, nie `.ifczip` ani `.ifcxml`. BimCraft otwiera tylko zwykły `.ifc`.

## Eksport DWG (rysunki)

1. Otwórz rzut, przekrój lub układ, który chcesz.
2. Wybierz **Plik > Zapisz jako** i jako typ pliku wskaż **DWG**.
3. Wskaż tłumacza DXF-DWG i zapisz.
4. Dla całego zestawu arkuszy zapisz układy z Layout Book albo opublikuj je jako DWG.
5. Otwórz `.dwg` w BimCraft. Rysunki dołączone przez eksport otworzą się razem z nim, gdy są w tym samym folderze; zobacz [Dołączone rysunki i obrazy](topic:dwg-linked-files).

## Rozwiązywanie problemów

- **"… jest projektem Archicad: wskazują na to jego pierwsze bajty."** Wyeksportuj IFC lub DWG, jak opisano wyżej, i otwórz ten plik.
- **"… ma nazwę jak plik Archicad, ale nie zaczyna się jak on."** Sprawdź, skąd plik pochodzi: może to inny rodzaj pliku z nową nazwą (spróbuj otworzyć go pod jego prawdziwym rozszerzeniem), kopia, która nie została ukończona, albo projekt z wersji wcześniejszej niż 17. Jeśli możesz, otwórz go w Archicad, a następnie wyeksportuj IFC lub DWG.
- **Model otwiera się bez pomieszczeń.** Strefy nie zostały wyeksportowane. Włącz je w tłumaczu IFC i wyeksportuj ponownie.
- **Otwory nie są wycięte.** BimCraft mówi o tym w sekcji **Jeszcze nie narysowano** w panelu {{ui:Plik}}. Wyeksportuj ponownie; jeśli nadal tak jest, otwórz model w programie, który go utworzył, i sprawdź tam otwory.
- **Tekst w DWG wygląda inaczej.** Eksport może zachować czcionki, których BimCraft nie ma; BimCraft rysuje tekst prostą czcionką bezszeryfową.

Zobacz też [Uzyskiwanie pliku projektu w 3D przez IFC](topic:rvt-to-ifc) oraz [Co BimCraft odczytuje z każdego formatu](topic:file-formats).
