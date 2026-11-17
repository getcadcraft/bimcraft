---
title: Balíčky pro klienta, zprávy o fázi a porovnání variant
summary: Vytvořte z modelu balíček pro klienta nebo zprávu o fázi s variantami hmoty porovnanými podle plochy a nákladů, podlahovými plochami, výkresy s jejich revizemi a historií vydání. Každý údaj drží prvky, ze kterých vychází.
keywords: balíček pro klienta, prezentace, zpráva o fázi, zpráva, porovnání variant, varianty, porovnat varianty, plocha a náklady, náklad na variantu, bez sazby, hmota, podlahové plochy, seznam výkresů, historie vydání, údaje, propojené údaje
from: f6679bf5
---

## Co uděláte

Sestavte balíček pro klienta nebo zprávu o fázi z modelu v jeho aktuálním stavu a porovnejte uchované varianty hmoty vedle sebe podle plochy a nákladů.

## Postup

1. V levém panelu otevřete **Balíček pro klienta a zpráva o fázi**.
2. Vyberte **Otevřít v Dokumentech** vedle Balíčku pro klienta nebo Zprávy o fázi. Dokument se objeví v Dokumentech z modelu, kde můžete změnit jeho text.
3. V náhledu klikněte na údaj, abyste vybrali prvky, na nichž stojí.
4. Zvolte **Sestavit balíček**. Uloží se jeden zip: dokument jako PDF, obrázek 3D pohledu a `figures.csv`, který vypisuje každý údaj s GlobalId jeho prvků.

## Pole

Tato pole můžete použít v jakémkoli dokumentu.

| Pole | Co vytiskne |
|---|---|
| `{{stage}}` | Fáze projektu z podrobností výkresu. |
| `{{options}}` | Uchované varianty hmoty vedle sebe: podlaží, výška, půdorysná plocha, hrubá podlahová plocha, obálka a náklady. |
| `{{areas}}` | Podlahová plocha podle úrovně, z místností. |
| `{{sheets}}` | Listy s revizí, na které každý stojí, a kdy byl naposledy vydán. |
| `{{issues}}` | Historie vydání a záznam změn výkresů. |
| `{{changes}}` | Co se změnilo od posledního vydání, list po listu. |

## Jak se náklady počítají

Náklady pocházejí jen z ceníku vašeho projektu (Energy/Cost, 5D cost). Nic za vás nevypočítáváme.

- Položka ceníku oceňuje variantu jen tehdy, když její třídy uvádějí `IfcBuildingElementProxy`.
- Podlahovou plochu oceňuje položka, jejíž slova uvádějí použití varianty, například kancelář. Bez ní se použije položka se slovy hrubá podlahová plocha nebo budova hmota. Položka po m² používá hrubou podlahovou plochu. Položka po m³ používá objem.
- Obálku (obvod krát výška) oceňuje položka se slovem obálka nebo fasáda.
- Varianta bez odpovídající položky ukáže **Bez sazby**. Celková částka se ukáže, jen když každá požadovaná část má sazbu.

## Dobré vědět

- Varianty si ponechte tlačítkem **Ponechat jako variantu** v seznamu hmot programu místností. Viz Hmotové varianty.
- PDF nemůže vybírat prvky. Mimo BimCraft nese `figures.csv` odkaz z každého údaje na jeho prvky.

## Ještě není hotovo

- Listy a nakreslené pohledy se do dokumentu nevkládají. Balíček obsahuje jen obrázek 3D pohledu.
