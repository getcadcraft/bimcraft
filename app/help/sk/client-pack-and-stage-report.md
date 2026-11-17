---
title: Balíky pre klienta, správy o etape a porovnanie variantov
summary: Vytvorte z modelu balík pre klienta alebo správu o etape s variantmi hmoty porovnanými podľa plochy a nákladov, plochami podlaží, výkresmi s revíziami a históriou vydaní. Každá hodnota si uchováva prvky, ktoré za ňou stoja.
keywords: balík pre klienta, prezentácia, správa o etape, správa, porovnanie variantov, varianty, porovnať varianty, plocha a náklady, cena za variant, bez sadzby, hmota, plochy podlaží, zoznam výkresov, história vydaní, hodnoty, prepojené hodnoty
from: f6679bf5
---

## Čo budete robiť

Vytvorte balík pre klienta alebo správu o etape z modelu tak, ako je teraz, a porovnajte uložené varianty hmoty vedľa seba podľa plochy a nákladov.

## Postup

1. V ľavom paneli otvorte **Balík pre klienta a správu o etape**.
2. Vyberte **Otvoriť v Dokumentoch** vedľa Balík pre klienta alebo Správa o etape. Dokument sa objaví v Dokumentoch z modelu, kde môžete zmeniť jeho text.
3. V náhľade kliknite na údaj a vyberte prvky, ktoré za ním stoja.
4. Vyberte **Zostaviť balík**. Uloží sa jeden zip: dokument ako PDF, obrázok 3D pohľadu a `figures.csv`, ktorý vypisuje každý údaj s GlobalId jeho prvkov.

## Polia

Tieto môžete použiť v ľubovoľnom dokumente.

| Pole | Čo vytlačí |
|---|---|
| `{{stage}}` | Fáza projektu z údajov o výkrese. |
| `{{options}}` | Uložené varianty hmoty vedľa seba: podlažia, výška, pôdorysná plocha, hrubá podlahová plocha, obálka a náklady. |
| `{{areas}}` | Plocha podlaží podľa úrovní z miestností. |
| `{{sheets}}` | Listy s revíziou, v ktorej každý stojí, a dátumom posledného vydania. |
| `{{issues}}` | História vydaní a zoznam zmien výkresov. |
| `{{changes}}` | Čo sa zmenilo od posledného vydania, list po liste. |

## Ako sa oceňujú varianty

Náklady pochádzajú iba z cenníka vášho projektu (Energia/náklady, náklady 5D). Nič sa za vás neodhaduje.

- Cenový riadok ocení variant, iba ak jeho triedy uvádzajú `IfcBuildingElementProxy`.
- Plochu podlaží ocení riadok, ktorého slová pomenúvajú použitie variantu, napríklad kancelária. Bez neho sa použije riadok so slovami hrubá podlahová plocha alebo stavebná hmota. Riadok po m² používa hrubú podlahovú plochu. Riadok po m³ používa objem.
- Obálku (obvod krát výška) ocení riadok so slovom obálka alebo fasáda.
- Variant bez zodpovedajúceho riadku zobrazí **Bez sadzby**. Celková suma sa zobrazí, iba keď každá požadovaná časť má sadzbu.

## Dobré vedieť

- Varianty ponechajte tlačidlom **Ponechať ako variant** v zozname hmoty v programe pre priestorový program. Pozri Varianty hmoty.
- PDF nevie vyberať prvky. Mimo BimCraft `figures.csv` nesie odkaz z každého údaju na jeho prvky.

## Ešte nie je hotové

- Listy a nakreslené pohľady sa do dokumentu nevkladajú. Balík obsahuje iba obrázok 3D pohľadu.
