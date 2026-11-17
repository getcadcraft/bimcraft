---
title: Spoole rur stalowych i arkusze spoolów
summary: Podziel trasę rurociągu stalowego na spoole o największej długości i w spoinach montażowych, które umieścisz; ponumeruj je i pobierz arkusz każdego spoolu (widok 3D, długości cięcia, kształtki, spoiny, zestawienie materiałów) jako PDF i CSV; kanały dostają listę cięcia prostych odcinków.
keywords: spool, spoole, arkusz spoolu, izometria, produkcja, prefabrykacja, spoina montażowa, spoina warsztatowa, spoina doczołowa, długość cięcia, lista cięcia, zestawienie materiałów, bom, rura stalowa, schedule 40, numer linii, lista cięcia kanałów, elementy przewodów
from: 539f51de
---

## Co zrobisz

Zamień trasę rurociągu stalowego w elementy, które warsztat spawa, a monter wstawia: spoole nie dłuższe niż wybrana długość, dzielone w miejscach spoin montażowych, które umieścisz, każdy z własnym arkuszem.

Tylko **stalowe rury spawane doczołowo** są cięte na spoole (rozmiary rur ASME B36.10M, kolana w długim promieniu ASME B16.9). Rury miedziane, PVC i PEX mają połączenia, które nie są spoinami doczołowymi, więc ich trasy nie mają spoolów.

## Podziel trasę na spoole

1. Wybierz stalową trasę rury. We {{ui:Właściwości}} zaznacz **Podziel na spoole**.
2. **Najdłuższy spool**: największa długość osi, jaką może mieć jeden spool (na początek 6 m, około 20 ft).
3. **Numer linii**: część numeru każdego spoolu. Nowo podzielona trasa dostaje następny wolny numer swojego systemu.

Spoole numeruje się wzdłuż trasy od jej pierwszego punktu: `CHW-12-S01`, `CHW-12-S02` … (system, numer linii, spool). Spool rośnie element po elemencie; element, który sprawiłby, że byłby za długi, zaczyna następny, a prosty odcinek dłuższy niż spool jest cięty tam, gdzie spool jest pełny.

## Umieść spoiny montażowe

1. Otwórz {{ui:Kompilacja}} i wybierz {{ui:Spoina montażowa}}.
2. Kliknij na rurze ze spoolami w miejscu spoiny montażowej. Wewnątrz prostego odcinka rura zostaje tam przecięta; wewnątrz kształtki lub zaworu spoina przesuwa się do bliższego połączenia.

Właściwości pokazują spoiny montażowe trasy, każdą z przyciskiem {{ui:Usuń}}. Każda zmiana to jeden krok {{ui:Cofnij}}.

## Arkusze spoolów

We Właściwościach trasy ze spoolami:

- {{ui:Arkusze spooli (PDF)}}: jedna strona na spool. Po lewej spool w widoku izometrycznym 30°: jego proste odcinki ponumerowane, spoiny warsztatowe jako kropki, spoiny montażowe oznaczone FW oraz północ planu. Po prawej numer spoolu, rozmiar, grubość ścianki (schedule) i długość, potem jego **długości cięcia**, **kształtki**, **spoiny** (spoina doczołowa warsztatowa w każdym połączeniu wewnątrz spoolu, spoina montażowa tam, gdzie spool styka się z następnym) oraz **zestawienie materiałów** z masą rury (masa ASME B36.10M, gładkie końce).
- {{ui:Lista spooli (CSV)}}: to samo, blok na każdy spool.

:::note
Długości cięcia są od końca do końca, tak jak narysowano: nie odejmuje się szczeliny korzenia ani naddatku na spoinę. Kolana mają długi promień B16.9; trójniki, redukcje i zawory są ogólne, dobierane według rury, a nie według B16.9 ani producenta, i arkusz to mówi. Masy kształtek nie są podane. Pomoc w kreśleniu i koordynacji, do sprawdzenia przez inżyniera.
:::

## W pliku IFC

Każda część trasy ze spoolami niesie **CadCraft_Spool** z jej SpoolId, trasą, numerem spoolu na trasie oraz miejscem, w którym zaczyna się i kończy wzdłuż trasy. Trasa zachowuje swoje reguły (najdłuższy spool, spoiny montażowe, numer linii) we własnym zestawie, więc spoole wracają takie same po ponownym otwarciu pliku.

## Kanały: lista cięcia

Otwórz {{ui:Kompilacja}} i kliknij {{ui:Lista cięcia przewodów}}: CSV prostych odcinków kanałów według systemu, kształtu i rozmiaru, każdy prosty odcinek pocięty na elementy o **Długości elementu** z paska {{ui:Kanał}} (na początek 1500 mm, około 5 ft), oraz reszta. Podane są tylko długości: bez szwów, grubości blachy i łączników.
