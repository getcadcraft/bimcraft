---
title: Sprawdź elementy betonowe i utwórz obciążenia sejsmiczne
summary: Ustaw pręty belek i słupów betonowych otwartego modelu, sprawdź je według ACI 318-19, wyznacz zastępcze siły poziome według ASCE 7-22 na sztywnych stropach oraz zobacz dryf kondygnacji. Pomoc dla inżyniera do sprawdzenia.
keywords: beton, żelbet, ACI 318, ACI 318-19, zbrojenie, belka, słup, ścinanie, strzemiona, sejsmika, trzęsienie ziemi, zastępcza siła boczna, ELF, ASCE 7-22, dryf, dryf kondygnacji, stropy, sztywna tarcza, ciężar kondygnacji, wykorzystanie, konstrukcja, inżynier, analiza
from: 2f342e72
---

Bloki {{ui:Elementy betonowe}} i {{ui:Obciążenia sejsmiczne}} w karcie {{ui:Analiza}} sprawdzają żelbetowe belki i słupy otwartego modelu IFC oraz wyznaczają poziome siły trzęsienia ziemi działające na stropy jego ramy. Są to te same bloki co w DetailCraft; uruchamiane są po analizie z karty {{ui:Analiza}} i zapisywane w IFC razem z pozostałymi ustawieniami analizy.

:::warning
Wyniki są **do sprawdzenia przez inżyniera**: to pomoc, dopóki ktoś ich nie przejrzy. Sprawdzenia betonu używają sił I rzędu (słup w ramie uznanej za nieprzesuwną jest projektowany na swój wzmocniony moment), bez wzmocnienia od przesuwności, bez projektowania skręcania, bez szczegółów sejsmicznych (rozdział 18 ACI) i bez szczegółów strzemion. Obciążenia sejsmiczne pomijają współczynnik redundancji, pionowe oddziaływanie sejsmiczne, wzmocnienie skrętne i efekty P-delta. **Obciążeń wiatrem jeszcze nie zbudowano**: rozdziałów normy o wietrze nie ma na stronach odniesienia projektu.
:::

## Co odczytuje BimCraft

Analiza odczytuje belki, słupy i stężenia modelu wraz z ich profilami (zob. [Analiza ramy konstrukcyjnej](topic:frame-analysis)). Blok {{ui:Elementy betonowe}} wymienia wszystkie przekroje, których używają. Naciśnij {{ui:Ustaw jako beton…}} przy przekroju, który jest betonowy: BimCraft przejmuje prostokąt z pola powierzchni i sztywności profilu (szerokość b i wysokość h, które można potem zmienić), więc przekrój niezbliżony do prostokąta (walcowany profil stalowy) daje wymiar do poprawienia albo pozostaje bez zmian.

Przekrój ustawiony jako beton oraz każdy element, którego materiał nazywa się beton, jest analizowany jako beton: E = 4700 √f′c, 2400 kg/m³, i domyślnie z **przekrojami zarysowanymi** (słupy 0.70 Ig, belki 0.35 Ig; ACI 318-19 tabela 6.6.3.1.1(a)). Wybierz {{ui:Przekroje brutto}}, aby to wyłączyć. Bez tych ustawień model jest analizowany dokładnie tak jak wcześniej.

## Pręty, kombinacje, sprawdzenie

Podaj otulinę, pręty górne, dolne i boczne (albo koszyk słupa) oraz strzemiona każdego przekroju, ustaw f′c, fy, fyt, K oraz przesuwną lub nieprzesuwną. Nadaj przypadkom obciążeń ich rodzaj, naciśnij {{ui:Utwórz kombinacje}} (ASCE 7 §5.3.1), a następnie {{ui:Sprawdź beton}}: każdy element dostaje wykorzystanie, pokolorowane na modelu. Elementy przekraczające nośność oraz dryf kondygnacji powyżej limitu są wymienione w {{ui:Problemy}} wraz z punktem normy; kliknij jeden, aby zaznaczyć element.

## Stropy i obciążenia sejsmiczne

W bloku {{ui:Obciążenia sejsmiczne}} {{ui:Znajdź kondygnacje}} wyszukuje poziomy, na których zbiegają się dwie lub więcej belek; każdy staje się sztywną tarczą. {{ui:Przyjmij ciężary z przypadków}} odczytuje sejsmiczny ciężar każdego stropu z przypadków, którym nadano współczynnik. Uzupełnij SDS, SD1, S1, R, Ie, Cd, TL, układ i kategorię ryzyka, następnie {{ui:Utwórz przypadki sejsmiczne}} (ASCE 7-22 12.8: okres, siła podstawy, rozkład po kondygnacjach, 5 % przypadkowego skręcenia). Siły kondygnacji i sprawdzenie dryfu (12.12) pojawiają się po uruchomieniu. Ten sam okres i sztywność kondygnacji zasilają trzęsienie ziemi w [Odtwórz powódź, wiatr lub trzęsienie ziemi](topic:hazard-playback), gdy jako źródło wybierzesz ramę analizy.

Płyty stropowe i ściany z betonu stają się w analizie płytami, a blok {{ui:Zbrojenie płyt stropowych}} wylicza potrzebną stal na metr bieżący. Szczegóły każdego sprawdzenia są w temacie DetailCraft o tej samej nazwie.
