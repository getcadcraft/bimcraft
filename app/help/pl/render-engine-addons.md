---
title: Dodaj silnik renderowania za pomocą dodatku
summary: Co dodatek może dodać do listy Silnik okna Renderuj, jakie uprawnienie potrzebuje do uruchomienia programu oraz co Studio sprawdza i o co pyta.
keywords: dodatek, addon, silnik, silnik renderowania, programista, engine.run, uprawnienie, program, skrypt, podpisany, studio, api
from: 06295376
---

Dodatek (Ustawienia › Dodatki) może dodać silnik do listy Silnik okna {{ui:Renderuj}}. Pełny tekst dla autorów dodatków to rozdział 16 specyfikacji dodatków; w skrócie:

- Dodatek rejestruje silnik z identyfikatorem zaczynającym się od jego własnego, nazwą, opcjonalnymi ustawieniami i **albo** programem do uruchomienia, **albo** funkcją w JavaScript, która rysuje obraz.
- Silnik uruchamiający program wymaga uprawnienia **`engine.run`**, pokazywanego przed instalacją i w Ustawieniach. Działa tylko w Studio; w przeglądarce pojawia się jako plik do zapisania.
- Dodatek podaje nazwę programu (zwykłą nazwę pliku, nigdy powłokę), skrypt, który znajduje się **w podpisanym dodatku**, oraz argumenty złożone z symboli zastępczych i zwykłych słów. Studio odnajduje program albo raz prosi o wskazanie go.
- Za pierwszym razem, gdy dodatek uruchamia program, **Studio pyta w swoim oknie dialogowym**: który dodatek, który program oraz że skrypt może wszystko, co program. Zezwalaj tylko dodatkom, którym ufasz. Twoja odpowiedź jest zapamiętywana dla tego dodatku i programu.
- Pakiet (scena jako USD i plik ustawień, wraz z plikiem glTF, gdy dodatek o niego poprosi) oraz skrypt dodatku trafiają do nowego tymczasowego folderu, program działa tam, a obraz wraca oznaczony nazwą silnika dodatku.

:::note
Dodatki mogą dodawać silniki renderowania tylko z API dodatków 1.4. Przykład krok po kroku dla renderera działającego z wiersza poleceń, o otwartym kodzie, znajduje się w jego własnym repozytorium; nie został jeszcze uruchomiony w tym rendererze.
:::
