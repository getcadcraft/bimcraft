---
title: Dołączanie innych modeli do koordynacji
summary: Pokaż obok swojego inny model IFC przez odwołanie (nigdy nie scalany), umieść go według wspólnych współrzędnych, współrzędnych mapy lub dwóch punktów, przyciągaj się do niego podczas rysowania i wczytaj ponownie, gdy zmieni się jego plik.
keywords: dołączenie, dołączony model, odwołanie, xref, koordynacja, federacja, konstrukcja, instalacje, konsultant, wspólne współrzędne, współrzędne mapy, wczytaj ponownie, zwolnij, odwołanie do dokumentu, IfcDocumentReference
from: 3e0f1eab
---

## Czego dokonasz

Rysuj względem modelu konsultanta (konstrukcji, instalacji, istniejącego budynku) bez kopiowania czegokolwiek do własnego pliku.

**Dołączony model** jest pokazywany w widoku 3D i przecinany na rzutach, ale nigdy nie jest zmieniany ani zapisywany w twoim modelu. Twój model zachowuje tylko łącze: nazwę pliku i miejsce, w którym ma się znajdować.

## Dołącz model

1. W sekcji {{ui:Dołączone modele}} w lewym panelu kliknij {{ui:Dołącz model…}} i wybierz plik IFC. Model pojawia się od razu, a jego wiersz pokazuje **Pokazany**.
2. Wybierz, gdzie ma być, w {{ui:Umieszczenie}}:
   - **Wspólne współrzędne** (na początek): jego współrzędne są twoje, jak wtedy, gdy oba modele wytyczono z tego samego punktu początkowego.
   - **Współrzędne mapy**: współrzędne mapy obu plików ustawiają je w jednej linii (oba wymagają konwersji na mapę; BimCraft informuje, gdy jednego z nich brakuje).
   - **Przez dwa punkty…**: kliknij punkt na dołączonym modelu, a potem miejsce, w którym ma być w twoim; następnie drugą parę. Łącze jest przesuwane i obracane (wokół pionu), aby pasowało.
3. Każda zmiana łącza i umieszczenia to jeden krok: {{key:Mod+Z}} cofa ją.

## Praca z modelem

- Rzuty pokazują dołączony model przecięty na wysokości cięcia poziomu cienkimi liniami, a narzędzie {{ui:Ściana}} oraz inne narzędzia rysunkowe przyciągają się do jego narożników i krawędzi.
- Wybieraj jego elementy w widoku 3D, aby odczytać właściwości. Dołączonego modelu nie edytujesz, więc jego przycisk opcji w {{ui:Modele}} jest wyłączony.
- **Plik się zmienił?** Gdy przeglądarka może obserwować plik (plik otwarty przez jej okno wyboru pliku lub w Studio), BimCraft sam wczytuje łącze ponownie kilka sekund po ponownym zapisaniu pliku i o tym informuje. W przeciwnym razie kliknij {{ui:Wczytaj ponownie}}.
- {{ui:Zwolnij}} ukrywa model i zwalnia pamięć; łącze zostaje w twoim modelu. {{ui:Wczytaj…}} pokazuje go ponownie (wybierasz plik, bo przeglądarka nie może sama otworzyć pliku po jego nazwie).
- Znak × usuwa łącze z twojego modelu.

## Co powinieneś zobaczyć

- W pliku IFC: IfcDocumentReference dla każdego łącza (nazwa pliku), powiązany z projektem, oraz miejsce w zestawie właściwości projektu CadCraft_Links. Po ponownym otwarciu modelu jego łącza są wymienione jako **Nie wczytano**, dopóki ich nie wczytasz.

:::note
Sprawdzenia kolizji, Porównaj i Znajdź mogą korzystać z wczytanego łącza jak z każdego innego otwartego modelu: zobacz [Oglądanie kilku modeli IFC razem](topic:several-models).
:::
