---
title: Kształt ściany: przyłączenie, profil, pochylenie i otwory
summary: Przyłącz górę ściany do dachu, stropu lub sufitu, nadaj jej własny zarys widziany z boku, pochyl ją albo wytnij otwór bez drzwi i okna, we Właściwościach, w elewacji lub przekroju, w widoku czołowym ściany albo w 3D. Każda zmiana to jeden krok cofnięcia.
keywords: przyłącz, przyłącz górę, przyłącz podstawę, dach, płyta, sufit, szczyt, profil, edytuj profil, zarys elewacji, schodkowy, attyka, pochylenie, pochylona, nachylona, skos, zwężona, podwójne pochylenie, otwór, otwór w ścianie, dziura, przejście, bez drzwi, uchwyty, elewacja, przekrój, 3D, widok czołowy, zakrzywiona ściana, kopia
from: f558b269
---

## Co zrobisz

Zmień kształt ściany powyżej i poniżej rzutu: jej górna krawędź może podążać za dachem, płytą stropową lub sufitem, może mieć własny zarys widziany z boku, może być pochylona i mieć otwory bez drzwi ani okna. Rzut ściany, jej narożniki i linia lokalizacji zostają bez zmian.

## Gdzie to zrobisz

- **Właściwości**: przy włączonym {{ui:Rysuj}} i {{ui:Zaznacz}} kliknij jedną narysowaną ścianę. **Właściwości** pokazują wiersze ściany, potem **Kształt**, gdzie wszystko wpisujesz.
- **Elewacja lub przekrój**: ołówek w przeglądarce projektu ({{ui:Edytuj w tym widoku}}) otwiera widok; wybierz tam ścianę i przeciągnij jej uchwyty. Zobacz „W elewacji lub przekroju” poniżej.
- **Widok czołowy ściany**: {{ui:Ściany}} › {{ui:Edytuj profil}}, potem kliknij ścianę w rzucie. Działa dla każdej ściany, także takiej, na którą żaden widok nie patrzy prosto, oraz dla ściany zakrzywionej (pokazanej rozwiniętą).
- **Rzut i widok 3D**: cztery polecenia w {{ui:Ściany}} (grupa Edycja): {{ui:Przyłącz górę / podstawę}}, {{ui:Edytuj profil}}, {{ui:Pochylenie}} i {{ui:Otwór w ścianie}}. Zobacz „W rzucie i w 3D” poniżej.

Niezależnie od sposobu to ta sama zmiana: jeden krok w **Zmiany**, a {{ui:Cofnij}} go cofa.

Proste i zakrzywione ściany przyjmują każde narzędzie kształtu. Na ścianie zakrzywionej odległości biegną wzdłuż jej łuku.

## Przyłącz górę lub podstawę

- **Przyłącz górę**: wybierz dach, płytę stropową lub sufit. Górna krawędź ściany podąża za spodem wybranego elementu, prosto nad każdym narożnikiem ściany. Pod dachem spadzistym ściana dostaje pochyłą górę, a tam, gdzie dach zmienia płaszczyznę (kalenica albo połać narożna), górna krawędź ściany wygina się razem z nim.
- **Przyłącz podstawę**: wybierz płytę stropową lub sufit. Podstawa ściany podąża za jego górną płaszczyzną.
- Tam, gdzie nic nie ma nad (lub pod) fragmentem ściany, ten fragment zachowuje własną wysokość.
- Połączenie zostaje: zmień spadek lub okap dachu albo wysokość sufitu, a przyłączone ściany podążą za zmianą w tym samym kroku.
- Wybierz **Własna wysokość**, aby zwolnić.

## Edytuj profil

{{ui:Edytuj profil…}} otwiera zarys ściany widziany z boku:

- **Linia górna**: wiersze **Wzdłuż** (odległość od początku ściany) i **Wysokość** (nad podstawą ściany). Trzy wiersze 0 / 3000, 2500 / 4500, 5000 / 3000 tworzą szczyt na ścianie 5 m.
- **Linia dolna**: zostaw puste dla poziomej podstawy albo podaj wiersze dla ściany na schodkowym fundamencie.
- {{ui:Dodaj punkt}} dodaje wiersz, **Usuń** go usuwa. {{ui:Użyj tego profilu}} stosuje profil; {{ui:Przywróć prosty}} go usuwa.

Każda linia biegnie wzdłuż ściany jeden raz, od jej początku do końca; linia, która wraca do siebie, albo górna krawędź schodząca do podstawy, zostaje odrzucona. Gdy przyłączona jest też górna krawędź, używana jest niższa z dwóch.

## Pochyl ścianę

**Pochylenie**: **Pionowa**, **Pochylona** (obie ściany pochylone w tę samą stronę, grubość zostaje) albo **Podwójne pochylenie** (każda ściana ma własny kąt: ściana, która zwęża się lub poszerza w górę). Wpisz stopnie od pionu; kąt dodatni pochyla w lewo ściany, patrząc od jej początku. Ściana zostaje w miejscu narysowanym u podstawy; połączone z nią ściany nie pochylają się razem z nią.

## Otwory bez drzwi i okna

{{ui:Dodaj otwór}} wycina dziurę o szerokości 900 w środku ściany. Jego wiersz w **Otwory** ustawia **Od początku**, **Szerokość**, **Parapet** (od poziomu) i **Wysokość**; **Usuń** go wyjmuje. Otwór przechodzi przez całą ścianę, ilości ściany go pomijają, a rzut pokazuje przerwę tam, gdzie sięga do wysokości przecięcia rzutu. Gdy początek ściany przesuwa się wzdłuż jej osi, otwór zachowuje swoje miejsce; zmiana, która zostawiłaby go poza ścianą, zostaje odrzucona.

## W elewacji lub przekroju

Otwórz widok ołówkiem w przeglądarce projektu. Przy włączonym {{ui:Zaznacz i przesuń}}:

- **Profil**: kliknij ścianę zwróconą do widoku. Jej linie górna i dolna zmieniają kolor na niebieski, z kwadratowym uchwytem przy każdym punkcie i kropką w środku każdego odcinka.
  - Przeciągnij kwadrat, aby przesunąć ten punkt (dwa punkty końcowe przesuwają się tylko w górę i w dół).
  - Przeciągnij kropkę, aby przesunąć cały odcinek w górę lub w dół.
  - Kliknij dwukrotnie linię (lub kliknij ją prawym przyciskiem), aby dodać tam punkt; {{ui:Dodaj punkt (górny)}} i {{ui:Dodaj punkt (dolny)}} dodają go w środku najdłuższego odcinka.
  - Kliknij kwadrat i naciśnij {{key:Delete}} (lub kliknij go prawym przyciskiem), aby usunąć ten punkt. {{ui:Przywróć prosty}} usuwa profil.
  - Gdy punkt jest wybrany, wpisz jego **Wzdłuż** i **Wysokość** w pasku pod paskiem narzędzi.
- **Przyłącz**: pasek ma listy **Przyłącz górę** i **Przyłącz podstawę** dla wybranej ściany. Albo użyj narzędzia {{ui:Przyłącz górę}} lub {{ui:Przyłącz podstawę}}: kliknij ścianę lub ściany, potem dach, płytę albo sufit, pokazane jako przerywane ramki. Wszystkie wybrane ściany przyłączają się w jednym kroku.
- **Otwory w ścianach**: narzędziem {{ui:Otwór w ścianie}} przeciągnij prostokąt na licu ściany. Wróciwszy do {{ui:Zaznacz i przesuń}}, przeciągnij otwór, aby go przesunąć, przeciągnij jeden z jego ośmiu uchwytów, aby zmienić rozmiar, wpisz **Od początku**, **Szerokość**, **Parapet** i **Wysokość** w pasku albo naciśnij {{key:Delete}}, aby go usunąć.
- **Pochylenie**: ścianę, na którą widok patrzy wzdłuż (widzianą od końca, jako przekrój przez nią albo w elewacji od jej końca), też można kliknąć. Przeciągnij okrągły uchwyt u góry, aby ją pochylić, albo wybierz **Pionowa**, **Pochylona** lub **Podwójne pochylenie** w pasku i wpisz kąty.

Wymiary przyciągają się do 10 mm; wpisz wartość, aby uzyskać coś dokładniejszego. Zakrzywioną ścianę można edytować w elewacji, gdy biegnie w jedną stronę przez widok; jej własny widok czołowy zawsze działa.

## W rzucie i w 3D

Otwórz {{ui:Ściany}} w grupie Edycja:

- {{ui:Przyłącz górę / podstawę}}: wybierz **Przyłącz górę** lub **Przyłącz podstawę** w wierszu narzędzia. Kliknij ścianę lub ściany (w rzucie albo w widoku 3D), potem to, do czego mają się przyłączyć: w 3D kliknij sam dach, płytę lub sufit; w rzucie kliknij punkt pod nim (gdy jest ich więcej, lista pyta, który).
- {{ui:Edytuj profil}}: w rzucie kliknij ścianę, aby otworzyć jej widok czołowy. W 3D kliknij ścianę: jej punkty profilu dostają uchwyty; przeciągnij jeden w płaszczyźnie ściany.
- {{ui:Pochylenie}}: kliknij ścianę (w rzucie lub 3D) i wpisz, o ile się pochyla.
- {{ui:Otwór w ścianie}}: w rzucie kliknij ścianę, w której ma być otwór; jego **Szerokość**, **Wysokość** i **Parapet** są w wierszu narzędzia. W 3D kliknij jeden narożnik na licu ściany, potem przeciwległy. Przy wybranej ścianie w 3D jej otwory mają uchwyty: narożniki zmieniają rozmiar, a środek przesuwa otwór.

Uchwyty 3D to uchwyty samego widoku 3D, więc czekają, gdy pudełko przekroju pokazuje swoje uchwyty.

## W rzucie

Pochyłą ścianę rysuje się tam, gdzie rzut ją przecina (1200 nad poziomem, chyba że widok stanowi inaczej): jej zarys jest przesunięty o tyle, ile się pochyla na tej wysokości, a podwójne pochylenie jest tam szersze lub węższe. Jej zarys na podłodze rysowany jest cienkimi liniami tego, co leży poniżej przecięcia. Narożniki, uchwyty i wymiary ściany zostają przy jej podstawie.

## Kopie

{{ui:Kopiuj ten poziom…}} i Przesuń z opcją **Kopiuj** zabierają profil ściany, pochylenie i otwory w ścianach. Ściana przyłączona do płyty lub sufitu zostaje przyłączona do skopiowanej płyty lub sufitu nowej kondygnacji; przyłączenie do dachu nie jest kopiowane wraz z kondygnacją (dachy nie są kopiowane). Kopia na tej samej kondygnacji zostaje przyłączona do tego samego dachu, płyty lub sufitu.

## W pliku

Ściana o kształcie zapisywana jest jako bryła wieloboczna (IfcFacetedBrep), którą inne programy odczytują tak, jak została narysowana; jej ustawienia są na ścianie (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Otwór to IfcOpeningElement w ścianie, niczym niewypełniony.

## Jeszcze nie zbudowano

- Profil z wystającymi częściami lub dziurami w zarysie (do dziur użyj otworów).
- W 3D: dodawanie lub usuwanie punktów profilu oraz pochylenie za pomocą uchwytu (użyj widoku czołowego ściany, elewacji lub przekroju albo wpisz wartości).
- {{ui:Przesunięcie}} z włączonym Kopiuj nie kopiuje kształtu ani otworów w ścianach (Przesuń z opcją Kopiuj już tak).
- Warstwy pochylonej ściany nie są rysowane w planach w szczegółowości Średniej i Dokładnej (rysowany jest jej zarys).
- Otwory, które nie są prostokątami.
