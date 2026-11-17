---
title: Úroveň rozpracovanosti (LOD) a kontroly míľnikov
summary: Priraďte prvkom úroveň rozpracovanosti, zistite, odkiaľ pochádza, skontrolujte model voči úrovni, ktorú míľnik vyžaduje, a opravte chýbajúce značky a nepomenované miestnosti. Každá kontrola len upozorňuje; nič sa neblokuje.
keywords: lod, úroveň rozpracovanosti, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, míľnik, tabuľka míľnikov, kontroly modelu, chýbajúce značky, nepomenované miestnosti, všeobecné v skorej fáze, trieda ifc, klasifikácia
from: 2091c79b
---

## Čo budete robiť

Určte, do akej miery je každý prvok rozpracovaný, a potom skontrolujte celý model voči tomu, čo vyžaduje projektový míľnik.

## Postup

1. Vyberte prvok (alebo viacero prvkov) a otvorte {{ui:Vlastnosti}}. Nájdite {{ui:Úroveň rozpracovanosti}}.
2. Vyberte úroveň zo zoznamu. Každá úroveň je pomenovaná podľa svojho významu a zahŕňa aj nižšie úrovne. Jeden krok späť zruší celý výber.
3. Pozrite si, odkiaľ úroveň pochádza: z tohto prvku, z jeho typu alebo z značky overenej na mieste.
4. Ak chcete model skontrolovať, otvorte {{ui:Kontroly modelu}} vľavo a potom {{ui:míľniky LOD}}. Vyberte míľnik a tabuľku (východiskovú tabuľku alebo vlastný súbor CSV či JSON, ktorý nahráte tlačidlom {{ui:Zaťaženie}}).
5. Kliknite na {{ui:Skontrolovať model}}. Súhrny a riadok pre každý riadok tabuľky ukazujú, čo dosiahlo svoju úroveň a čo nie; zistenia sa zobrazia aj v zozname problémov.
6. Pod {{ui:Chýbajúce značky a nepomenované miestnosti}} kliknite na {{ui:Nájsť ich}}, podľa potreby upravte návrhy a kliknite na {{ui:Použiť}}.

## Čo by ste mali vidieť

- Úroveň, ktorú ste zvolili pre prvok, s jeho triedou IFC a klasifikačnými kódmi vedľa nej.
- Súhrny a riadky pre míľnik. Tabuľka nikdy nemení význam úrovne: stupnica je pevná, tabuľka len určuje, akú úroveň míľnik vyžaduje.
- „Zostať všeobecný v skorých fázach“: rada ponechať prvky všeobecné pri skorom míľniku. Ide len o odporúčanie.

## Dobré vedieť

- Nič tu vás neblokuje. Model pod úrovňou, ktorú míľnik vyžaduje, sa uvedie v zozname, ale nie je odmietnutý.
- Tri časti úrovne (geometria, informácie, dokumentácia) možno nastaviť každú zvlášť; značka ukazuje splnené, pod úrovňou alebo neuvedené.
