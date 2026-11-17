---
title: "Kopiowanie, wklejanie i duplikowanie elementów biblioteki"
summary: "Skopiuj umieszczony element biblioteki i wklej go tam, gdzie klikniesz, w miejscu obok oryginału lub do innego modelu; skopiuj właściwości dowolnego innego elementu jako tekst; cofnij i ponów."
keywords: kopiuj, wklej, duplikuj, schowek, wklej w miejscu, wytnij, usuń, zaznacz wszystko, cofnij, ponów, menu edycji, więcej, element biblioteki, umieszczanie, powtórz, macierz
from: 6ac15931
---

## Co zrobisz

Dodasz kolejne kopie elementu, który już umieściłeś: drugi stół roboczy, rząd zlewów. Ten temat dotyczy **umieszczonych elementów biblioteki**, czyli elementów, które BimCraft zapisał w modelu. Jeden z nich można wkleić do dowolnego modelu, nawet w innej karcie. Ściany, drzwi i każdy inny element kopiuje się, wycina, wkleja i usuwa tak samo w obrębie własnego modelu: zobacz [Usuwanie, wycinanie, kopiowanie i wklejanie elementów budynku](topic:edit-elements).

Polecenia znajdują się na pasku narzędzi nad modelem: {{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}}, {{ui:Wklej}} oraz {{ui:Więcej}}, czyli menu z pozycjami {{ui:Wytnij}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Wklej w miejscu}}, {{ui:Duplikuj}}, {{ui:Usuń}}, {{ui:Zaznacz wszystko}} i {{ui:Odznacz wszystko}}. Polecenie, którego nie można teraz wykonać, jest wyszarzone. Najedź na nie, aby przeczytać powód, albo kliknij je, a wiersz stanu poda przyczynę.

## Kroki

1. Otwórz model IFC z elementem biblioteki albo najpierw umieść taki element. Zobacz [Umieszczanie wyposażenia i mebli z biblioteki](topic:place-from-library).
2. Kliknij element w widoku 3D. Jego właściwości pokazują pole **Element biblioteki**.
3. Kliknij {{ui:Kopiuj}} lub naciśnij {{key:Mod+C}}.
4. Kliknij {{ui:Wklej}} lub naciśnij {{key:Mod+V}}. Otworzy się pasek umieszczania, a za wskaźnikiem podąża półprzezroczyste pudełko, obrócone tak jak oryginał.
5. Naciśnij {{key:R}}, aby obrócić element o 90°, {{key:Tab}}, aby przyciągnąć jego tył do ściany, albo wpisz X i Y na pasku umieszczania.
6. Kliknij, gdzie ma trafić kopia. Każde kliknięcie umieszcza kolejną kopię. Naciśnij {{key:Esc}}, aby przerwać.
7. Kliknij {{ui:Zapisz jako IFC}}, aby pobrać edytowaną kopię modelu.

## Wklej w miejscu

{{ui:Więcej}}, {{ui:Wklej w miejscu}} lub {{key:Mod+Shift+V}} wkleja bez klikania, w tych samych współrzędnych X i Y oraz obrócony tak samo:

- **Do tego samego modelu, na tej samej kondygnacji**: dwa elementy w dokładnie jednym miejscu nie miałyby sensu, więc kopia trafia tuż obok oryginału, w odległości szerokości elementu plus 100 mm wzdłuż jego własnej szerokości. Wklej w miejscu ponownie z nowej kopii, aby zrobić rząd.
- **Na inną kondygnację lub do innego modelu**: dokładnie te same X, Y i obrót. BimCraft używa kondygnacji o tej samej nazwie. Jeśli takiej nie ma, wybiera kondygnację o najbliższej wysokości. Wiersz stanu podaje, która to.

## Duplikuj

{{ui:Więcej}}, {{ui:Duplikuj}} lub {{key:Mod+D}} kopiuje wskazany element i od razu zaczyna jego wklejanie. To jeden krok zamiast dwóch.

## Do innego modelu lub innej karty

To, co kopiujesz, zachowuje się w tej przeglądarce, więc możesz otworzyć inny model IFC albo BimCraft w innej karcie i tam wkleić element. Drugi model potrzebuje samego elementu biblioteki. BimCraft go ma, gdy element został umieszczony, wymieniony lub zaktualizowany w tej karcie. Element umieszczony w wcześniejszej sesji można wkleić ponownie tylko w jego własnym modelu. W innym modelu umieść go z karty {{ui:Biblioteka}}.

## Czego powinieneś się spodziewać

- Kopia w modelu, zaznaczona, z tym samym elementem biblioteki, licencją, danymi wyposażenia, ilością i notatką co oryginał oraz **następnym wolnym numerem elementu**. Numer zmienisz we Właściwościach, w sekcji `CadCraft_Placement`.
- Wpis „Umieszczono: *element* (element *n*)” na liście zmian. {{key:Mod+Z}} cofa go, a {{key:Mod+Y}} przywraca ponownie.

## Dobrze wiedzieć

- Kopie współdzielą typ oryginału, więc wszystkie używają jednego zestawu geometrii, tak jak przy dwukrotnym umieszczeniu tego samego elementu.
- {{ui:Cofnij}} i {{ui:Ponów}} obejmują każdą zmianę: edytowane wartości, umieszczenia, wklejenia, wymiany i aktualizacje. Ponów przywraca umieszczenie w tym samym miejscu. Nowa zmiana czyści to, co można było ponowić.
- W widoku 2D rysunku nie ma czego zaznaczyć, więc nie ma też czego kopiować. Aby zmienić rysunek, użyj {{ui:Edytuj w CadCraft}}, gdy się pojawi.

## Częste błędy

- **{{ui:Wklej}} mówi, że elementy pochodzą z innego modelu.** Ostatnio skopiowano element budynku albo kilka elementów. Takie wkleja się tylko do własnego modelu. Wybierz jeden umieszczony element biblioteki i skopiuj go.
- **{{ui:Wklej}} mówi, że kopia pochodzi z innego modelu bez swojego elementu biblioteki.** Umieść element z karty {{ui:Biblioteka}} raz w tej karcie, a potem skopiuj i wklej go.
- **{{key:Mod+C}} kopiuje tekst strony.** Tekst został zaznaczony na stronie. Najpierw kliknij model.

## Powiązane

- [Klawisze i mysz](topic:keyboard#edit)
- [Ustawienia BimCraft](topic:settings)
