---
title: Rysunki paneli z drewna lub lekkiej stali cienkościennej
summary: Zbuduj z ścian, podłóg i dachów modelu panele z drewna lub lekkiej stali cienkościennej, zobacz każdy słupek, rygiel, nadproże, belkę i krokiew w skali, a listę cięcia zapisz jako CSV, a rysunki warsztatowe jako PDF.
keywords: panel, konstrukcja, rysunek warsztatowy, lista cięcia, lekka stal cienkościenna, słupek stalowy, LGS, drewno, belka stropowa, krokiew, nadproże, długości handlowe, PDF
from: c09f916e
---

## Otwórz panele

Wybierz {{ui:Rysunki paneli}} w menu {{ui:Kompilacja}} (albo wpisz {{cmd:PANELS}}). Lista zawiera każdą narysowaną ścianę, każdą podłogę i każdy dach modelu, każdy z polem wyboru. Ściany pojawiają się wraz z drzwiami i oknami jako otworami. Podłoga jest konstruowana jako prostokąt wokół swojego obrysu, z belkami biegnącymi krótszą stroną. Dach jest konstruowany jako szczyt nad obrysem swoich ścian, z kątem nachylenia dachu; lista to mówi, ponieważ dach czterospadowy lub złożony nie jest dachem dwuspadowym.

## Materiał, rozmiar i rozstaw

Wybierz {{ui:Materiał}}: **Drewno** albo **Lekka stal cienkościenna**. Elementy stalowe to słupki C, nazywane wysokością i grubością (na przykład C92-1.2), z prowadnicą dla rygli. {{ui:Wymiar elementu}} wybiera jeden rozmiar dla każdego zaznaczonego panelu, albo zostaw ustawienie Domyślny, aby przyjąć domyślne wartości dla każdego rodzaju panelu. {{ui:Rozstaw}} to odległość między słupkami, belkami lub krokwiami. Są to wartości startowe do ustawienia przez ciebie. Nie stanowią sprawdzenia zgodności z przepisami: czy słupek w danym rozstawie przeniesie daną ścianę, a nadproże daną rozpiętość, określają tabele przepisów (dodatek Przepisy budowlane zawiera tabele IRC) oraz twój inżynier.

## Co otrzymujesz

Pierwszy zaznaczony panel jest narysowany w skali w oknie dialogowym, z wymiarami. {{ui:Lista cięcia (CSV)}} zapisuje wszystkie elementy każdego panelu według oznaczenia, rozmiaru i długości oraz długości handlowe do zakupu. {{ui:Rysunki warsztatowe (PDF)}} zapisuje jedną stronę A3 dla każdego panelu, z każdym elementem oznaczonym i jego listą cięcia. {{ui:Rysunek (SVG)}} zapisuje pierwszy panel jako rysunek. Wszystko, czego program konstrukcyjny nie może zbudować (otwór zbyt blisko końca ściany, nadproże, które nie mieści się pod rygiel, albo element dłuższy niż najdłuższy dostępny odcinek), jest wymienione w **Problemy** oraz w oknie dialogowym.

## Czego nie robi

Panele są rysunkami tworzonymi z modelu za każdym razem, gdy o nie poprosisz: nic nie jest zapisywane w modelu, więc zawsze pasują do niego. Aby umieścić konstrukcję w modelu jako elementy, użyj {{ui:Konstrukcja}} dla ścian, podłóg i dachów z drewna.
