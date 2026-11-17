---
title: Zmiana ściany, drzwi lub okna
summary: Kliknij narysowaną ścianę, drzwi lub okno i zmień jego typ, rozmiar, wysokość lub położenie we Właściwościach albo przeciągnij je w rzucie; każda zmiana to jeden krok cofania.
keywords: wyprostuj kąty, kwadrat, 90, kąt prosty, skos, kąt, ortogonalnie, rozmiar pomieszczenia, powierzchnia wewnętrzna, powierzchnia zewnętrzna, mierz od, odległość przesunięcia, wpisana odległość, zakrzywiona, łuk, wysokość łuku, promień, linia lokalizacyjna, wyrównanie, zmiana, edycja, właściwości, typ ściany, grubość, długość, wysokość, przesunięcie podstawy, góra, poziom, odwróć, zewnątrz, rozmiar drzwi, rozmiar okna, parapet, odległość, przesuń, uchwyt, przeciągnij, zmień typ, kilka
from: 63052d5d
---

## Co zrobisz

Zmień to, co narysowałeś: wskaż ścianę, drzwi lub okno, a następnie wpisz nową liczbę we **Właściwościach** albo przeciągnij je w rzucie. Rzut i widok 3D podążają za zmianą, narożniki łączą się ponownie, a drzwi i okna pozostają w swoich ścianach.

## Zmiana ściany

1. Przy włączonych {{ui:Rysuj}} i {{ui:Zaznacz}} kliknij ścianę w rzucie (albo w widoku 3D).
2. **Właściwości** pokazują pole z liczbami ściany. Zmień jedną i naciśnij {{key:Enter}}:
   - **Typ ściany**: inny z typów startowych. Wraz z nim zmieniają się grubość i warstwy.
   - **Grubość**: dowolna grubość. Typ zachowuje pozostałe warstwy, a jego warstwa główna (słupki lub bloczek) przejmuje różnicę, np. „Exterior 2×6, 200 mm”.
   - **Mierz od**: **Oś środkowa**, **Powierzchnia wewnętrzna** lub **Powierzchnia zewnętrzna**. **Długość** i **Rozmiar pomieszczenia** są odczytywane i ustawiane od tej wartości. Powierzchnia zewnętrzna to to, co pokazują wymiary rzutu.
   - **Długość**: koniec ściany przesuwa się wzdłuż swojej linii. Ściana połączona na tym końcu przesuwa się prostopadle do siebie i zachowuje swój kąt.
   - **Rozmiar pomieszczenia** (gdy po drugiej stronie pomieszczenia stoi równoległa ściana): wpisz żądany rozmiar. Ta ściana przesuwa się prostopadle, a połączone ściany rozciągają się, by podążyć.
   - **Przesuń prostopadle**: wpisz, o ile przesunąć ścianę prostopadle do siebie: zwykła liczba przesuwa ją na zewnątrz, liczba z minusem do środka.
   - **Kąt do połączonej ściany**: kąt do ściany połączonej na jej początku. Wpisz 90, aby ustawić go prostopadle. Ściana niepołączona z niczym pokazuje **Kierunek**, w stopniach od wschodu.
   - {{ui:Wyprostuj kąty}}: przywraca ściany połączone z tą do kątów prostych, wzdłuż kierunku, w którym biegnie większość ich długości. Działa na całym połączonym pomieszczeniu lub układzie, niezależnie od tego, którą ścianę wskażesz. Ściana odchylona o więcej niż 10 stopni od kąta prostego zostaje bez zmian, więc ściana ustawiona pod 45 stopni jest bezpieczna. Jedno {{ui:Cofnij}} cofa wszystko.
   - **Wysokość ściany**: **Do poziomu powyżej** podąża za tym poziomem, **Do poziomu 3** (i każdego wyższego) tworzy ścianę przechodzącą przez poziomy pośrednie; wpisanie wysokości określa, o ile poniżej albo powyżej tego poziomu znajduje się góra. **Stała wysokość** zachowuje wpisaną liczbę. **Przechodzi przez** wypisuje poziomy, przez które przechodzi taka ściana: jest rysowana jaśniej w ich rzutach, pomieszczenia tam przylegają do niej, a drzwi i okna można w niej umieszczać z tych rzutów. Jest przesuwana i kształtowana na poziomie, na którym się zaczyna.
   - **Przesunięcie podstawy**: o ile nad poziomem zaczyna się ściana. Jej góra pozostaje tam, gdzie była.
   - **Strona zewnętrzna**: {{ui:Odwróć}} przenosi warstwy zewnętrzne na drugą powierzchnię.
   - **Linia lokalizacyjna**: **Oś środkowa**, **Powierzchnia zewnętrzna**, **Powierzchnia wewnętrzna**, **Lewa powierzchnia** lub **Prawa powierzchnia**. Zmiana jej niczego nie przesuwa. Później, gdy ściana zgrubieje (przez typ lub **Grubość**) albo jej zewnętrzna strona zostanie odwrócona, linia lokalizacyjna pozostaje na miejscu, a ściana rośnie lub odwraca się wokół niej. Prosta ściana stykająca się z nią w narożniku podąża za nią, więc narożnik nadal się zamyka. Linia lokalizacyjna wskazanej ściany jest rysowana w rzucie linią przerywaną. Wskaż kilka ścian, aby ustawić ją dla wszystkich.
   - **Wysokość łuku** (ściany zakrzywione): o ile środek odchyla się od linii prostej. 0 czyni ją prostą; wartość ujemna odchyla ją na drugą stronę. Promień jest pokazywany obok.
3. Każda zmiana to jeden krok w **Zmianach**; {{ui:Cofnij}} go cofa.

## Przeciąganie ściany w rzucie

Gdy jedna ściana jest wskazana, pokazuje trzy uchwyty: kwadrat na każdym końcu i koło pośrodku.

- Przeciągnij koniec, aby wydłużyć, skrócić lub obrócić ścianę. Przyciąga się jak narzędzie Ściana i łapie kąt prosty do ściany połączonej na drugim końcu, gdy jesteś w odległości 3 stopni; {{key:Shift}} utrzymuje ją na osiach rzutu.
- Ściany połączone na przeciąganym końcu zachowują swój kąt: ich końce przesuwają się wzdłuż własnych linii, by spotkać nową linię ściany, więc nic nie jest pochylone. Przytrzymaj {{key:Mod}}, aby przeciągać swobodnie (koniec połączonej ściany idzie za twoim i ta ściana się obraca), albo {{key:Alt}}, aby rozłączyć połączenia przy tej ścianie.
- Przeciągnij środek, aby przesunąć całą ścianę prostopadle do siebie, niezależnie od kierunku przeciągania. Jej narożniki przesuwają się wzdłuż połączonych ścian, więc te ściany zachowują swój kąt.
- Przytrzymaj {{key:Mod}} podczas przeciągania środka, aby przesunąć swobodnie, gdy chcesz złamać kąt. {{ui:Wyprostuj kąty}} go przywraca.
- Gdy trzymasz uchwyt, wpisz odległość i naciśnij {{key:Enter}} (albo puść): ściana przesunie się dokładnie o tyle, w tym kierunku, w którym przeciągałeś. {{key:Esc}} anuluje przesunięcie.
- Wskazana zakrzywiona ściana pokazuje uchwyty na końcach i okrągły uchwyt pośrodku łuku. Przeciągnij okrągły uchwyt, aby ją wygiąć.
- Drzwi i okna pozostają w ścianie. Ściana zbyt krótka na to, co w niej jest, zostaje odrzucona z komunikatem „Nie mieści się w tej ścianie.”

## Zmiana drzwi lub okna

1. Kliknij drzwi lub okno w rzucie.
2. We **Właściwościach**: **Typ** (inne drzwi lub okno tego samego rodzaju), **Szerokość**, **Wysokość**, **Parapet** (okna), **Od początku** i **Od końca** (odległość od każdego końca powierzchni ściany do jej krawędzi), **Zawiasy** {{ui:Odwróć}} (drzwi jednoskrzydłowe i okna skrzydłowe; drzwi przesuwne, kieszeniowe, stodolne i harmonijkowe mają zamiast tego **Otwiera się do**; okna stałe, wiszące i obrazowe oraz drzwi dwuskrzydłowe nie mają tego), oraz **Kierunek otwarcia** (drzwi) lub **Strona ramy** (okna) {{ui:Odwróć}}.
3. Albo przeciągnij je wzdłuż ściany lub na inną ścianę: zobacz [Drzwi i okna](topic:doors-and-windows).

## Zmiana kilku naraz

Wskaż kilka ścian (albo kilka drzwi lub okien), klikając z {{key:Shift}} lub {{key:Mod}}. **Właściwości** oferują to, co mają wspólne: **Zmień typ…**, wysokość, rozmiar. Jedna zmiana ustawia wszystkie, a jedno {{ui:Cofnij}} cofa całość.

## Warto wiedzieć

- Liczby są pokazywane w jednostkach wybranych w {{ui:Jednostki}} na pasku narzędzi.
- Ściany, drzwi i okna z innych programów pokazują swoje dane IFC we **Właściwościach** jak dotąd, bez tego pola.
