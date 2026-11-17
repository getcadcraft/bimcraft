---
title: Scalanie zmian dwóch osób w jednym modelu
summary: Pozwól git, Fossil lub Mercurial scalić dwie edytowane kopie tego samego modelu IFC obiekt po obiekcie, aby dwie osoby mogły rysować jeden budynek i połączyć pracę.
keywords: scalanie, git, fossil, mercurial, kontrola wersji, konflikt, trójstronne, scalanie cadcraft, gitattributes, ifc, globalid, zespół, dwie kopie, gałęzie
from: 50733df8
---

Dwie osoby biorą kopię tego samego budynku: jedna rysuje skrzydło wschodnie, druga zachodnie, a później kopie muszą stać się jedną. Jeśli dotknęły różnych obiektów, może to zrobić program zamiast człowieka.

## Jak to działa

Każda ściana, drzwi, poziom, pomieszczenie i zestaw właściwości w pliku IFC ma GlobalId, który się nie zmienia. Scalanie wyszukuje obiekty po tym identyfikatorze, a nie po numerze, który plik im nadaje (`#123`), bo numery zmieniają się przy zapisie przez program. Części dołączone do obiektu, które nie mają własnego identyfikatora (umieszczenia, kształty, jednostki), są porównywane według tego, co zawierają.

Obie kopie muszą mieć tę samą wersję IFC (2x3, 4 lub 4.3). Scalanie zachowuje plik w takim, jaki jest, z jego kolejnością i numerami, i dodaje to, co nowe, więc różnica git po scaleniu pokazuje tylko to, co scalanie zmieniło.

## Konfiguracja

Git potrzebuje dwóch wierszy, raz w każdym repozytorium:

```
# .gitattributes
*.ifc merge=cadcraft

# raz, na każdym komputerze
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita uruchom `cadcraft merge <base> <ours> <theirs>`. Fossil i Mercurial przyjmują te same trzy pliki w swoim ustawieniu narzędzia scalania. Nic nie jest przesyłane; wszystko działa na tym komputerze.

## Zasady

- Zmiana atrybutu tylko po jednej stronie zostaje przyjęta. Ta sama zmiana po obu stronach zostaje przyjęta raz.
- Ten sam atrybut zmieniony na dwa sposoby (ten sam poziom przemianowany na dwa sposoby) to **konflikt**: zostaje wersja lokalna, a raport wymienia obie. Otwórz wynik i popraw go ręcznie.
- Lista rzeczy (ściany poziomu, właściwości zestawu) scala się jako zbiór: zostaje to, co dodała któraś strona, i znika to, co usunęła któraś strona. Dwie osoby, z których każda dodaje ściany do tego samego poziomu, nie powodują konfliktu.
- Obiekt dodany po którejkolwiek stronie zostaje, z kształtem i właściwościami. Usunięty po jednej stronie i nietknięty po drugiej: usunięty. Usunięty po jednej stronie i zmieniony po drugiej: usunięty i zgłoszony.
- Znacznik czasu i autor pliku oraz historia właściciela każdego obiektu pozostają z wersji lokalnej.

Geometria scala się w całości: kształt ściany pochodzi z jednej strony i nigdy nie jest mieszany punkt po punkcie. Spakowane pliki IFC i IFCX nie są scalane. Po scaleniu otwórz wynik w BimCraft i przejrzyj panel {{ui:Problemy}}, zanim zapiszesz.
