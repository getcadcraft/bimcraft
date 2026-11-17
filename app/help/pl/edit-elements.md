---
title: Usuwanie, wycinanie, kopiowanie i wklejanie elementów budynku
summary: Wybierz ściany, drzwi, meble lub cokolwiek innego w modelu IFC; usuń je, wytnij albo skopiuj i wklej tam, gdzie klikniesz, w miejscu lub na innej kondygnacji.
keywords: usuń, usuwanie, wytnij, kopiuj, wklej, duplikuj, przesuń, zaznacz wszystko, wybierz wszystko, element budynku, ściana, drzwi, okno, schody, otwór, cofnij
from: d9eec37f
---

## Co zrobisz

Zmienisz zawartość modelu IFC: usuniesz elementy, których nie chcesz, skopiujesz ścianę lub zestaw mebli w inne miejsce albo przeniesiesz elementy, wycinając je i wklejając. Każda zmiana to jeden krok, który można cofnąć, a zapis tworzy nowy plik, więc oryginał pozostaje bez zmian.

## Kroki

1. Otwórz model IFC. Zobacz [Otwieranie modelu IFC i oglądanie go w 3D](topic:open-ifc-model).
2. Wybierz, co chcesz zmienić: kliknij element, przytrzymaj {{key:Mod}} lub {{key:Shift}} i klikaj, aby wybrać więcej, albo naciśnij {{key:Mod+A}} ({{ui:Więcej}}, {{ui:Zaznacz wszystko}}), aby wybrać wszystkie widoczne elementy.
3. Następnie:
   - **Usuwanie:** naciśnij {{key:Delete}} albo wybierz {{ui:Więcej}}, {{ui:Usuń}}.
   - **Kopiowanie:** naciśnij {{key:Mod+C}} lub kliknij {{ui:Kopiuj}}.
   - **Wycinanie:** naciśnij {{key:Mod+X}} albo wybierz {{ui:Więcej}}, {{ui:Wytnij}}. Elementy znikną i możesz je wkleić.
4. Aby wkleić, naciśnij {{key:Mod+V}} lub kliknij {{ui:Wklej}}. Przezroczysta bryła o rozmiarze skopiowanego elementu podąża za wskaźnikiem na kondygnacji wybranej w pasku umieszczania. Naciśnij {{key:R}}, aby obrócić ją o 90°, a następnie kliknij miejsce, w którym ma się znaleźć. Każde kliknięcie umieszcza kolejną kopię; naciśnij {{key:Esc}}, aby przestać.
5. Możesz też nacisnąć {{key:Mod+Shift+V}} ({{ui:Więcej}}, {{ui:Wklej w miejscu}}): po wycięciu elementy wracają dokładnie tam, gdzie były; po skopiowaniu kopia pojawia się tuż obok oryginałów.
6. Kliknij {{ui:Zapisz jako IFC}}, aby pobrać edytowany model.

## Co idzie razem z elementem

- **Części:** schody zabierają swoje biegi, ściana osłonowa swoje panele, a każdy element złożony z części zabiera je wszystkie.
- **Otwory:** ściana zabiera otwory wycięte w niej. Usunięcie drzwi lub okna usuwa też otwór, który wypełniały, więc ściana się zamyka, jak w programie do projektowania. Usunięcie ściany narysowanej w BimCraft usuwa także jej drzwi i okna oraz łączy pozostałe ściany. Usunięcie ściany z pliku utworzonego gdzie indziej zostawia jej drzwi i okna na miejscu.
- **Dane:** kopia ma ten sam typ, materiały, zestawy właściwości i ilości co oryginał oraz nowy GlobalId. Późniejsza zmiana wartości w kopii nie wpływa na oryginał.
- **Elementy z biblioteki** zachowują swoje dane z biblioteki; kopia dostaje następny wolny numer elementu, a wycięty element po wklejeniu zachowuje swój numer.

## Co powinieneś zobaczyć

- Komunikat „Usunięto: …” lub „Wklejono: …” na liście {{ui:Zmiany}}. {{key:Mod+Z}} cofa ostatnią zmianę; {{key:Mod+Y}} przywraca ją ponownie.
- Po usunięciu pasek stanu podaje, ile części i otworów także zostało usuniętych.
- Wklejone elementy są zaznaczone, więc możesz wkleić je w miejscu ponownie, aby utworzyć rząd, albo je usunąć.

## Dobrze wiedzieć

- Kopie używają tej samej geometrii co oryginał (IFC pozwala elementom ją współdzielić), więc plik rośnie bardzo niewiele.
- Elementy budynku wklejają się do modelu, z którego je skopiowano, w tej samej karcie. Aby użyć umieszczonych elementów z biblioteki w innym modelu, kopiuj po jednym elemencie: zobacz [Kopiowanie, wklejanie i duplikowanie elementów z biblioteki](topic:copy-paste).
- Kondygnacji, przestrzeni, budynków i terenu nie można usuwać ani kopiować. Zamiast tego wybierz elementy, które się w nich znajdują. Pomieszczenie narysowane w BimCraft powstaje z otaczających je ścian: usuń ścianę, aby połączyć dwa pomieszczenia.
- Ścian, drzwi i okien narysowanych narzędziami BimCraft do ścian, drzwi i okien nie można jeszcze kopiować, wycinać ani duplikować; pasek stanu to podaje. Narysuj je ponownie. Usuwanie działa.
- Kopiowanie zapisuje też w schowku nazwy i właściwości skopiowanych elementów jako tekst, aby wkleić je do arkusza kalkulacyjnego lub wiadomości e-mail.

## Częste błędy

- **{{ui:Usuń}} jest wyszarzone.** Nic nie jest zaznaczone albo zaznaczone są tylko kondygnacje lub przestrzenie. Najedź na przycisk, aby zobaczyć powód.
- **Wklejanie zgłasza, że elementy pochodzą z innego modelu.** Od skopiowania otworzyłeś inny model. Otwórz ponownie pierwszy model i skopiuj elementy tam.
- **Wklejona kopia jest na innym piętrze.** O tym, dokąd trafi, decyduje {{ui:Kondygnacja}} na pasku umieszczania; wybierz kondygnację przed kliknięciem.

## Powiązane

- [Ukrywanie, izolowanie i przezroczystość elementów](topic:hide-and-isolate)
- [Klawisze i mysz](topic:keyboard#edit)
