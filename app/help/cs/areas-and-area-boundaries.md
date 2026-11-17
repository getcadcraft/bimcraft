---
title: Plochy a hranice ploch
summary: Změřte hrubou plochu budovy nebo pronajímatelnou plochu uvnitř hranic, které nakreslíte nebo převezmete ze stěn, a vypište plochy do tabulky.
keywords: plocha, plochy, hranice plochy, schéma ploch, hrubá plocha budovy, hrubá podlahová plocha, GFA, pronajímatelná, půdorys ploch, tabulka ploch, výběr stěn, neuzavřeno
from: c79f96d2
---

## Co provedete

Nakreslete hranice schématu ploch, umístěte do nich plochy a přečtěte součty.

## Kde jsou nástroje

- Pásová rozvržení: {{ui:Architektura}} › **Místnost a plocha** › {{ui:Plocha}} a {{ui:Hranice plochy}}.
- Klasické rozvržení: lišta Kreslení › nabídka {{ui:Místnosti}}.

## Postup

1. Zvolte {{ui:Hranice plochy}}. V řádku zvolte {{ui:Schéma}}: Hrubá plocha budovy, nebo Pronajímatelná plocha. Každé schéma má vlastní hranice.
2. Zvolte, jak vytvořit čáry v {{ui:Vytvořit podle}}:
   - **Kreslit**: klikejte bod za bodem.
   - **Vybrat stěny: osa**: klikněte na stěnu a její osa je hranicí.
   - **Vybrat stěny: kliknutá líc**: klikněte na stěnu na straně, kterou chcete; ta líc je hranicí. Pro hrubou plochu budovy klikněte na vnější stranu vnějších stěn.
3. Zvolte {{ui:Plocha}}. Zvolte stejné schéma, napište název, číslo nebo typ, pokud chcete, a klikněte dovnitř hranic.
4. Plocha se hned změří. Vyberte ji a změňte její název, číslo nebo typ ve **Vlastnostech**.

## Co na čem závisí

- Hranice vytvořená výběrem stěny sleduje tu stěnu: přesunete-li stěnu, plocha se přeměří ve stejném kroku.
- Hranice, kterou jste nakreslili, zůstane tam, kde jste ji nakreslili.
- Líce stěn, které se stýkají v rohu, se tam také stýkají, takže čtyři vybrané stěny uzavřou plochu bez mezer.
- Hranice ploch se zobrazují v půdorysu, když máte aktivní nástroj pro místnost nebo plochu, takže jinak nezahlcují půdorys.

## Pokud se hranice neuzavřou

Plocha je přesto umístěna. Má označení **Neuzavřeno** a nic neměří, dokud hranice kolem ní neuzavřou. Je to jen rada: nic se neodmítne.

## Rozpis

Levý panel › {{ui:Rozpisy}} › **Plochy**: schéma, číslo, název, typ, podlaží, plocha a obvod, se součtem. Klik na řádek vybere plochu. {{ui:Stáhnout CSV}} vytvoří stejnou tabulku.

## V IFC

Plocha je IfcSpace bez tělesa: PredefinedType GFA pro schéma hrubé plochy budovy, USERDEFINED s ObjectType Rentable pro pronajímatelnou. Nese GrossFloorArea a GrossPerimeter a žádnou čistou plochu, aby ji nebylo možné zaměnit s místností. Hranice je IfcVirtualElement.

## Ještě není hotovo

- Vlastní schémata (jen Hrubá plocha budovy a Pronajímatelná plocha).
- Barevná výplň podle typu plochy.
- Pravidla, která hranici umístí za vás, například "k linii zasklení".

Viz také [Místnosti a oddělovače místností](topic:rooms-and-separators), [Značky místností a ploch](topic:room-and-area-tags).
