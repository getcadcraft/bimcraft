---
title: Otwórz cały folder projektu
summary: Wskaż BimCraft folder projektu, aby od razu zobaczyć wszystkie modele, ich kopie zapasowe i połączenia, a pole Zacznij tutaj zasugeruje, nad którym plikiem pracować.
keywords: folder, katalog, folder projektu, dysk sieciowy, serwer, zacznij tutaj, który plik, kopie zapasowe, połączenia, xref, ostatnie foldery, przeciągnięcie folderu
from: 16fbdce2
---

## Co zrobisz

Otwierasz cały folder projektu, taki jak ten, który dostałeś do zlecenia, i pozwalasz BimCraft go uporządkować: które modele tam są, które kopie są kopiami zapasowymi, co do czego się odwołuje, które pliki są uszkodzone i który plik najprawdopodobniej chcesz otworzyć.

Odczytywane są tylko te kilka kilobajtów, których potrzebuje każda karta modelu, więc folder na dysku sieciowym albo zsynchronizowany folder w chmurze to w porządku.

## Kroki

:::chromium
1. Kliknij {{ui:Otwórz folder}} po lewej stronie (albo na środku pustego ekranu).
2. Wybierz folder projektu w oknie, które się otworzy, i kliknij **Wybierz** (albo **Prześlij** lub **Otwórz**, zależnie od systemu).
3. Kliknij **Wyświetl pliki**, gdy przeglądarka zapyta: „Zezwolić witrynie na wyświetlanie plików?”. To tylko pozwala karcie odczytać folder; nic nie jest przesyłane.
4. Poczekaj, aż pasek stanu policzy: „Odczyt folderu: … plików”, a potem „Sprawdzanie plików Revit: … z …”.
:::

:::firefox
1. Kliknij {{ui:Otwórz folder}} po lewej stronie (albo na środku pustego ekranu).
2. Wybierz folder projektu w oknie, które się otworzy, i potwierdź. Firefox może poprosić o potwierdzenie, że strona może odczytać pliki folderu; nadal pozostają one na twoim komputerze.
3. Poczekaj, aż pasek stanu pokaże „Odczyt folderu: … plików”, a potem „Sprawdzanie plików Revit: … z …”.
:::

:::safari
1. Kliknij {{ui:Otwórz folder}} po lewej stronie (albo na środku pustego ekranu).
2. Wybierz folder projektu w oknie, które się otworzy, i kliknij **Prześlij**. Mimo nazwy nic nie opuszcza twojego Maca: pliki są tylko przekazywane karcie.
3. Poczekaj, aż pasek stanu pokaże „Odczyt folderu: … plików”, a potem „Sprawdzanie plików Revit: … z …”.
:::

Możesz też **przeciągnąć folder** z {{pick:mac=Finder|windows=Eksploratora plików|linux=twojego menedżera plików}} na stronę. Przeciągnięty folder otwiera się bez pytania o uprawnienia w każdej przeglądarce.

## Czego się spodziewać

Raport folderu wypełnia środek ekranu:

- Nazwę folderu, liczby modeli, rysunków CAD, modeli IFC i plików oraz łączny rozmiar.
- Czerwone lub bursztynowe uwagi, jeśli jakieś pliki są niekompletne albo jakichś połączonych plików brakuje w folderze.
- Pole {{ui:Zacznij tutaj}}: plik, który BimCraft proponuje otworzyć, wraz z powodami.
- **Modele**: jeden wiersz na model, z jego kopiami zapasowymi pogrupowanymi pod nim.
- **Połączone i przywołane pliki**, **Modele IFC**, **Rysunki CAD** i **Odłożone**, jeśli w folderze są jakieś.

Po lewej panel {{ui:Folder}} podsumowuje wszystko; **Problemy** pokazuje „Brak”, gdy każda kopia jest w porządku.

## Użyj pola Zacznij tutaj

Pole nazywa jeden plik i mówi, dlaczego, na przykład:

- „Najnowsza zapisana praca w tym folderze (3 mar 2025).”
- „*Consultant.rvt* jest połączony z innymi modelami, więc jest tłem, a nie plikiem do edycji.”
- „*Tower.rvt* wygląda na oczywisty wybór, ale jest uszkodzony; jego ostatnia dobra kopia pochodzi z …”
- „To jest model centralny: w Revit otwórz go przez „Create New Local” i pracuj na lokalnej kopii.”

1. Przeczytaj powody.
2. Kliknij {{ui:Otwórz jego kartę}}, aby przeczytać kartę tego pliku, albo {{ui:Pokaż na liście}}, aby znaleźć jego wiersz w **Modele**.
3. Zanim na tym polegasz, sprawdź u osoby, która ostatnio pracowała nad projektem. Pole też o tym mówi: to najlepsze przypuszczenie oparte na nazwach, datach i połączeniach.

## Otwieraj pliki z raportu

1. Kliknij nazwę modelu, aby otworzyć jego kartę. Karta sprawdza każde połączenie względem folderu.
2. Kliknij {{ui:Wróć do}} i nazwę folderu na górze karty (albo {{ui:Wróć do folderu}} po lewej), aby wrócić.
3. Kliknij dowolny plik IFC pod **Modele IFC**, aby otworzyć go w 3D.
4. Kliknij dowolny plik DWG lub DXF pod **Rysunki CAD**, aby otworzyć go w 2D. Jego połączone rysunki i obrazy są automatycznie znajdowane w folderze.

## Otwórz folder ponownie później

:::chromium
Foldery otwarte przez {{ui:Otwórz folder}} albo przeciągnięte są wymienione po lewej pod {{ui:Ostatnie foldery}}. Kliknij {{ui:Otwórz ponownie}} i nazwę folderu, aby otworzyć go ponownie bez wybierania. Po ponownym uruchomieniu przeglądarki Chrome lub Edge zapyta jeszcze raz; wybierz „Zezwalaj przy każdej wizycie”, aby przestało pytać. Lista jest przechowywana tylko w tej przeglądarce i nigdzie nie jest wysyłana. Kliknij ×, aby usunąć folder z listy.
:::

:::firefox safari
Ta przeglądarka nie zapamiętuje folderów między wizytami. Wybierz folder ponownie przez {{ui:Otwórz folder}} albo przeciągnij go.
:::

## Częste błędy

- **Wybranie zbyt dużego folderu.** Ponad 20,000 plików: „Ten folder ma więcej niż 20,000 plików. Wybierz mniejszy folder, na przykład jeden projekt.” Wybierz folder projektu, a nie cały dysk.
- **Wybranie folderu nadrzędnego dla kilku projektów.** Pole {{ui:Zacznij tutaj}} wybiera wtedy między projektami. Wybierz jeden projekt.
- **Foldery własne Revit wyglądają na ignorowane.** Foldery `*_backup`, `*_log` i `Revit_temp` to pliki porządkowe; są wymienione pod **Odłożone** i nie są odczytywane.
- **Oczekiwanie, że model otworzy się w 3D z jego karty.** Plik projektu to tylko karta. Otwórz jego eksport IFC.
- **Telefony i tablety.** Wiele mobilnych przeglądarek w ogóle nie pozwala wybierać folderów. Użyj komputera.

Zobacz [Sprawdzanie folderu pod kątem uszkodzonych kopii, brakujących połączeń i pozostałości](topic:check-folder-health) oraz [Raport folderu: role, statusy i połączenia](topic:folder-roles).
