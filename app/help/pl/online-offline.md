---
title: Tryb online i offline
summary: Co BimCraft wczytuje z serwisu, jak Zapisz do pracy offline sprawia, że modele IFC i rysunki DWG otwierają się bez połączenia, i dlaczego nic, co otwierasz, nigdy nie jest przesyłane.
keywords: offline, online, internet, połączenie, brak sieci, tryb samolotowy, wizyta na budowie, zapisz do pracy offline, gotowe offline, prześlij, prywatność, wasm, webassembly, silnik ifc, dwg, chmura
from: 39e5c7eb
---

BimCraft czyta twoje pliki w karcie przeglądarki. Otwieranie, sprawdzanie, edytowanie i zapisywanie nigdy nie wysyła twoich plików nigdzie, ani online, ani offline. [Praca offline](common:offline) wyjaśnia, jak działają kopie offline we wszystkich aplikacjach; ta strona opisuje to, co jest specyficzne dla BimCraft.

## Co BimCraft wczytuje z serwisu

| Część | Kiedy wczytuje się bez kopii offline | Rozmiar |
|---|---|---|
| Sama aplikacja, z przeglądarką 3D i kodem silnika IFC | Gdy otwierasz BimCraft | Kilka megabajtów |
| Część WebAssembly silnika IFC | Pierwszy plik IFC, który otwierasz w karcie: „Uruchamianie silnika IFC…” | Około 1,6 MB |

Rysunki DWG i DXF, pliki projektów i rodzin oraz foldery nie wymagają niczego dodatkowego: ich czytniki są częścią aplikacji.

## Zapisz BimCraft do pracy offline

1. Otwórz BimCraft, będąc online.
2. Kliknij {{ui:Zapisz do pracy offline}} na pasku aplikacji u góry.
3. Obserwuj, jak licznik na przycisku rośnie, na przykład „Zapisywanie 40 z 212”. Kopia BimCraft ma około 11 MB, ponieważ zawiera silnik IFC.
4. Poczekaj na {{ui:Gotowe offline}}.

Gdy pojawi się {{ui:Gotowe offline}}, modele IFC, rysunki DWG i DXF, pliki projektów, foldery i ta pomoc otwierają się bez połączenia. Nie musisz najpierw otwierać pliku IFC ani DWG, by „rozgrzać” czytniki.

Aby zaktualizować lub usunąć kopię, kliknij {{ui:Gotowe offline}} i wybierz {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} lub {{ui:Usuń kopię offline}}.

## Co mówi przycisk

| Przycisk | Znaczy |
|---|---|
| {{ui:Zapisz do pracy offline}} | Nie ma jeszcze kopii offline w tej przeglądarce. Kliknij, by ją zapisać |
| „Zapisywanie *n* z *m*” | Zapisywanie; zostaw kartę otwartą, aż się skończy |
| {{ui:Gotowe offline}} | Zapisano. Najedź kursorem, by zobaczyć, kiedy; kliknij, by otworzyć menu |
| {{ui:Nie udało się zapisać}} | Niektóre pliki się nie pobrały. Sprawdź połączenie i kliknij, by spróbować ponownie. Ostatnia dobra kopia, jeśli istnieje, zostaje zachowana |
| {{ui:Tryb offline niedostępny}} | To okno nie może przechowywać kopii offline (okno prywatne lub komputer zarządzany). Zob. [Praca offline](common:offline) |

:::offline
Jesteś offline.

- Jeśli przycisk pokazuje {{ui:Gotowe offline}}, każdy rodzaj pliku otwiera się jak zwykle.
- Jeśli nie, działa tylko to, co ta karta już wczytała: czytnik, który nigdy nie wczytał się w tej karcie, nie może się uruchomić, a otwieranie takiego pliku pokazuje błąd przeglądarki w wierszu stanu. Nie odświeżaj karty, dopóki nie wrócisz do połączenia.
:::

## Czego nigdy nie trzeba połączenia

Gdy BimCraft jest otwarty w karcie, te funkcje działają offline, nawet bez zapisanej kopii:

- Czytanie plików projektów i rodzin oraz sprawdzanie folderów.
- Wskazywanie elementów, odczytywanie właściwości i edycja wartości IFC w modelu, który jest już otwarty.
- {{ui:Zapisz jako IFC}} i {{ui:Pobierz CSV}}: oba to pobierania wykonywane w karcie.

## Czego jeszcze nie ma

- **Zapisywanie w chmurze.** Pliki są zapisywane tylko na twoim komputerze.

Zob. [Gdzie trafiają twoje pliki](common:your-files).
