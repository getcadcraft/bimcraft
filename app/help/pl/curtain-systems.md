---
title: "Systemy ścian osłonowych: przeszklone ściany na siatce, ze słupkami"
summary: "Narysuj system ściany osłonowej jak ścianę albo ułóż go na płaskiej ścianie (face), a potem ustaw jego linie siatki i słupki. Zapisuje się jako IfcCurtainWall z taflami i słupkami."
keywords: system ściany osłonowej, ściana osłonowa, siatka ściany osłonowej, słupek, przeszklenie, witryna, szklana ściana, panel, tafla, według ściany, face, bryła, linia siatki, rozstaw, profil, rygiel, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Co zrobisz

Zbudujesz przeszkloną ścianę z tafli między słupkami, zmienisz miejsca linii siatki i wybierzesz, które linie mają słupek.

## Kroki

1. Włącz **Rysuj** i otwórz menu **Buduj** (w układzie wstążki: karta Architektura).
2. Wybierz **System ściany osłonowej**. W jego wierszu ustaw górę (poziom powyżej albo wysokość), linię co określoną odległość wzdłuż systemu, linię co określoną odległość w górę (zostaw puste, jeśli ma jej nie być), to, czy ma słupki, oraz profil słupka.
3. Kliknij, gdzie system się zaczyna i gdzie się kończy, tak jak przy rysowaniu ściany. Shift utrzymuje kąt prosty.
4. Aby zmienić siatkę, wybierz **Siatka ściany osłonowej** i kliknij system:
   - **Dodaj linię**: pionowa linia pojawia się w miejscu kliknięcia. Dla linii poziomej najpierw wpisz jej wysokość w polu **Na**.
   - **Przesuń linię**: kliknij linię, a potem miejsce, gdzie ma trafić.
   - **Usuń linię**: kliknij linię.
   - **Ustaw wg rozstawu**: wpisz rozstaw w polu **Co**, a potem kliknij system.
5. Aby zmienić słupki, wybierz **Słupek** i wskaż, czego dotyczy: pionową linię, którą klikniesz, poziomą linię na wysokości, obwód albo każdą linię. Wybierz **Umieść słupki** lub **Usuń słupki** oraz profil, a potem kliknij system.
6. Zaznacz system, aby zobaczyć wszystko we **Właściwościach**: każdą linię siatki z jej położeniem, znacznik słupka i przycisk do jego usunięcia, rozstaw, obwód, profil oraz grubość tafli.

## Według ściany (face)

**Wg ściany (face)** tworzy system ściany osłonowej na płaskiej ścianie (face), którą klikniesz w widoku 3D. Jego wiersz ma te same ustawienia siatki i słupków.

- Działa na każdej płaskiej ścianie (face) dowolnego elementu widocznego w widoku 3D: bryły zabudowy, ściany, podłogi, płaszczyzny dachu, słupa albo umieszczonego elementu. Ściana może być pionowa, pochylona lub pozioma.
- System przejmuje kontur ściany. Szczyt trójkątny lub inny nietypowy kształt przycina do niego tafle i słupki.
- Zamiast systemu może powstać **ściana**, wzdłuż podstawy pionowej ściany, na całą jej wysokość. Ściana w tym trybie zawsze stoi pionowo, więc ściana pochylona lub pozioma nie może jej przyjąć.
- Nie tworzy dachu. Dach w BimCraft wylicza się z konturu kondygnacji i spadku, a nie z pojedynczej ściany (face).
- Zakrzywiona ściana to wiele małych płaskich ścian. Jedno kliknięcie bierze jedną z nich.
- Ściana z otworami: system obejmuje zewnętrzny kontur ściany.

## Jak to się liczy

- **Pole brutto** to kontur systemu.
- **Pole przeszklenia** to tafle takie, jakie wychodzą: każda tafla traci połowę szerokości słupka z jednej strony przy słupku siatki, a pełną szerokość przy słupku obwodowym.
- Pionowy słupek biegnie od obwodu do obwodu. Poziomy słupek zatrzymuje się przy każdym pionowym słupku i na obwodzie. Słupki obwodowe leżą wewnątrz konturu. Gdy dwa się spotykają, bardziej pionowy biegnie na wylot. Połączenia są cięte prostopadle, a nie na ukos.
- **Zestawienia** mają listę **Systemy ścian osłonowych** z tymi liczbami, gdy model taki system zawiera.

## W pliku IFC

IfcCurtainWall na swojej kondygnacji, złożony z jednego IfcPlate (panel ściany osłonowej) na każdą taflę i jednego IfcMember (słupek) na każdy odcinek słupka. Każdy ma własny kształt, materiał i podstawowe wielkości.

## Dobrze wiedzieć

- Każdy rozmiar powstaje zgodnie z życzeniem. Odrzucany jest tylko kontur bez pola, bo nie ma wtedy czego tworzyć.
- System narysowany jak ściana zachowuje wysokość, z jaką został narysowany. Jeśli później przesuniesz poziom, ustaw jego wysokość ponownie we Właściwościach.
- Narzędzie Przesuń nie przenosi jeszcze systemu ściany osłonowej. Usuń go i narysuj ponownie albo zmień jego siatkę w miejscu.
- {{ui:Cofnij}} cofa każdy krok: cały system, jedną zmianę siatki, jedną zmianę słupków.
