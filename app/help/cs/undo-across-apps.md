---
title: Zpět napříč aplikacemi v CadCraft Studio
summary: Uvnitř Studia BimCraft předává Studiu každý dokončený krok, takže Studio může vrátit zpět váš poslední krok v tom okně, ve kterém jste naposledy pracovali.
keywords: zpět, studio, napříč aplikacemi, zpět v projektu, historie, žurnál, okno
from: c66dd0c1
---

## Co to dělá

V CadCraft Studio každé okno aplikace oznamuje Studiu, kdy je krok dokončen (nakreslená stěna, sada stěn přijatá ze skenu). Studio uchovává tyto kroky v pořadí, v jakém jste pracovali, a může požádat okno, které vytvořilo poslední z nich, aby ho vrátilo zpět, pomocí vlastní funkce zpět tohoto okna. Ctrl+Z uvnitř BimCraft zůstává vlastní funkcí BimCraft a je rovněž oznamováno Studiu.

## Co je dobré vědět

- Studio požádá okno o vrácení zpět, jen pokud je jeho seznam změn přesně v takovém stavu, v jakém jej krok zanechal. Po {{ui:Uložit}} (což začne nový seznam změn) nebo po přepnutí modelu, který upravujete, BimCraft odpoví, že se seznam změnil, a Studio toto okno přeskočí. Nic se nevynucuje.
- Vrácení účinků jedné aplikace v jiné zatím ještě není hotovo.
- Mimo Studio se nic nemění.
- Položka nabídky Studia, která žádá o vrácení zpět, je součástí sestavení Studia; do té doby se kroky hlásí, ale žádná položka nabídky je nepoužívá.

## Dále

- [Pracovat živě s ostatními](topic:work-live)
