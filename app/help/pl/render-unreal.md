---
title: Wysyłanie sceny do silnika gier
summary: Studio może zapisać scenę w projekcie Unreal Engine i utrzymywać ją w zgodzie przy każdym wysłaniu; Twoje własne zmiany są w warstwie, której CadCraft nigdy nie zapisuje. Wtyczka, która ją otwiera, nie jest jeszcze wydana.
keywords: unreal, unreal engine, silnik gier, łącze, wyślij, etap usd, projekt, na żywo, kamera cine, kolejka renderowania filmu
from: 154d55ef
---

W CadCraft Studio lista Silnik może zawierać **łącze** do projektu Unreal Engine. Działa tylko w jedną stronę: z CadCraft do Unreal.

## Wysyłanie sceny

1. Wybierz pozycję Unreal na liście Silnik. Za pierwszym razem Studio prosi o wskazanie folderu projektu (tego z plikiem `.uproject`); zapamiętuje go.
2. Kliknij {{ui:Wyślij}}. Studio zapisuje `CadCraft/<file name>/` wewnątrz projektu: scenę jako plik USD, plik ustawień, profile światła oraz dwa małe pliki warstw.
3. Zmień model, zapisz i wyślij ponownie. Zastępowane są tylko scena i plik ustawień.

## Twoje własne zmiany są bezpieczne

Etap, który otwiera Unreal, to mała warstwa główna tworzona raz, z dwiema warstwami pod nią: **Twoja** na górze (`<name>.user.usda`, na początku pusta, nigdy nie nadpisywana przez CadCraft) oraz scena CadCraft pod spodem. Zmiany zapisane w Twojej warstwie zostają po ponownym wysłaniu sceny. Światła i inne aktory, które umieścisz na poziomie Unreal, są poza etapem i także nie są ruszane.

## Bez Studio

W przeglądarce albo na komputerze, na którym Studio nie znajduje Unreal, wybierz **Folder projektu Unreal (.zip)** na liście Silnik i kliknij {{ui:Renderuj}}. Zapisuje on ten sam folder jako archiwum zip: rozpakuj go do folderu `CadCraft` projektu. Za pierwszym razem zostaw zaznaczone **Dołącz pliki sceny**; przy kolejnych zapisach wyłącz tę opcję, tak aby zip zawierał tylko scenę i plik ustawień, a Twoja warstwa nigdy nie była zastępowana.

:::note
Wtyczka Unreal, która otwiera etap, stosuje słońce, lampy, kamery i ekspozycję, śledzi każde wysłanie i renderuje kamerę, **nie jest jeszcze wydana** i nie została uruchomiona w Unreal. Do tego czasu Wyślij umieszcza pliki w projekcie, a narzędzia USD samego Unreal mogą je otworzyć. Pierwszym systemem jest Windows; macOS będzie następny.
:::
