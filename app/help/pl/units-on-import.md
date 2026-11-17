---
title: Jednostki przy imporcie: plik podaje swoje jednostki albo zostaniesz zapytany
summary: Gdy importowany plik podaje swoje jednostki, BimCraft ich używa i o tym informuje. Gdy ich nie podaje, BimCraft pyta, zanim cokolwiek umieści, i zapamiętuje odpowiedź dla tego pliku.
keywords: jednostki, import, otwórz, OBJ, STL, DWG, DXF, IFC, chmura punktów, element biblioteki, milimetry, metry, cale, stopy, skala, zły rozmiar, za duży, za mały, 1000 razy, zapytaj, zapamiętane
from: f044e9bc
---

## Co zrobisz

Zaimportujesz plik i upewnisz się, że wejdzie we właściwym rozmiarze.

## Kroki

1. Otwórz lub dodaj plik jak zwykle: {{ui:Otwarty}}, {{ui:Pliki}} w Bibliotece, {{ui:Chmury punktów}} albo Buduj › Z rysunku.
2. Jeśli plik podaje swoje jednostki, nic nie jest pytane. Wiersz stanu mówi, jakie jednostki podaje plik.
3. Jeśli ich nie podaje, pojawi się okno dialogowe z polem **Jednostki pliku**. Wybierz, czym jest jedna jednostka w pliku, i kliknij {{ui:Użyj tych jednostek}}. Zanim odpowiesz, nic nie zostanie umieszczone.
4. {{ui:Anuluj}} (albo {{key:Esc}}) nie sprowadza niczego.

## Które pliki podają swoje jednostki

- **IFC**: podaje jednostkę długości, a "Otwarto" mówi, którą. Plik IFC, który nie podaje żadnej, jest pytany, zanim się otworzy; Twoja odpowiedź zostaje zapisana w modelu, więc po zapisaniu plik ją podaje.
- **DWG i DXF**: jednostki wstawiania rysunku. Rysunek bez nich jest pytany (pliki z Biblioteki, Buduj › Z rysunku, teren z warstwic).
- **Listy punktów** dla terenu: nie podają jednostek. Jesteś pytany.
- **Chmury punktów**: LAS i LAZ z układem współrzędnych, E57, PTX i PLY podają swoje. Pozostałe są pytane.
- **OBJ i STL**: nigdy nie podają jednostek. Jesteś pytany.
- **glTF i GLB**: metry, zgodnie z regułą samego formatu.
- **Obrazy**: nie mają własnego rozmiaru. Obraz jest dopasowany do widoku, a rozmiar ustawiasz przez **Skaluj dwoma punktami**. Podany rozmiar jest zapamiętany dla tego pliku: po ponownym umieszczeniu wejdzie w tym rozmiarze, a wiersz stanu to podaje.
- **Dodatek Chmury punktów**: pyta, gdy budujesz chmurę, której plik nie podaje jednostki, i podpisuje wartości chmury jednostką, którą ona niesie.

## Warto wiedzieć

- Odpowiedź jest zapamiętywana dla tego pliku (jego nazwa, rozmiar i data) na tym komputerze, we wszystkich aplikacjach CadCraft. Następnym razem, gdy ten sam plik zostanie zaimportowany, nie zostaniesz zapytany, a wiersz stanu poda, że użyto zapamiętanych jednostek.
- Aby zostać zapytanym ponownie: paleta poleceń ({{key:Mod+K}}) › **Pytaj ponownie o jednostki importowanych plików**.
- Lista jednostek, którą import już ma (Jednostki w Bibliotece, Jednostki na pasku chmury, Jednostki rysunku w Z rysunku), nadal zmienia jednostki po imporcie. Lista Jednostek narzędzia terenu jest teraz tylko tym, od czego zaczyna się pytanie.
