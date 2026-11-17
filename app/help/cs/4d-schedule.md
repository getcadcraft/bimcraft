---
title: Přehrání harmonogramu výstavby na modelu
summary: Otevřete seznam úkolů jako CSV, propojte každý úkol s prvky podle vlastnosti a procházejte termíny, abyste viděli, co je postaveno, co probíhá a co ještě nezačalo.
keywords: 4d, harmonogram, sled výstavby, časová osa, etapizace, program prací, gantt, úkoly, termíny, simulace, postup, postaveno, csv, etapa, fáze, balíček prací, wbs, skupina
from: 1b985a64
---

## Co provedete

Sledujte, jak budova roste: každý úkol v harmonogramu je propojen s prvky, které staví, a zobrazen den po dni.

## Postup

1. Otevřete model IFC a v levém panelu otevřete {{ui:Harmonogram 4D}}.
2. Klikněte na {{ui:Stáhnout šablonu}} a získáte seznam úkolů s týdnem pro každé podlaží, který upravíte v tabulkovém editoru. Nebo si napište vlastní.
3. Klikněte na {{ui:Otevřít seznam úkolů…}} a vyberte CSV.
4. Posuňte posuvník data, nebo klikněte na {{ui:Přehrát}}.

## Seznam úkolů

CSV s řádkem záhlaví a sloupci **Task**, **Start**, **Finish**, **Field** a **Value**. Funguje oddělení čárkami i středníky.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Data zapisujte ve tvaru YYYY-MM-DD.
- Řádek propojí úkol se všemi prvky, jejichž pole **Field** má přesně takovou hodnotu **Value**. Polem je vlastnost, například Storey, Class, Name, Type, Material, Tag nebo GlobalId, nebo libovolná vlastnost zapsaná jako sada a název: `Pset_WallCommon.FireRating`.
- Stejný úkol zapište na více řádcích se stejnými termíny, abyste k němu připojili více prvků.

## Etapy a balíčky prací

Přidejte sloupec **Stage**, sloupec **Package**, nebo oba, a seskupte úkoly do etap a balíčků prací. Také Phase a WBS fungují jako názvy sloupců.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Deska Level 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Konstrukce | Rám |
| Stěny Level 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Konstrukce | Rám |
| Dveře | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Dokončovací práce | Truhlářské práce |

- Úkol patří do jedné etapy a jednoho balíčku. Pokud pozdější řádek téhož úkolu uvede jiný, vypíše se tento řádek s číslem a vynechá se.
- Stejný název balíčku ve dvou etapách jsou dva různé balíčky.

Pokud seznam obsahuje skupiny, nad datem se objeví seznam {{ui:Zobrazit}}. Vyberte etapu nebo balíček a přehraje se jako celek:

- posuvník a {{ui:Přehrát}} běží od prvního začátku skupiny po poslední dokončení,
- vypsány a vykresleny jsou jen úkoly skupiny a vše mimo ni je průhledné,
- řádek pod seznamem říká, kolik úkolů skupiny je k danému dni hotových, probíhá a teprve přijde,
- {{ui:Vybrat jeho prvky}} vybere všechny prvky skupiny pro {{ui:Zobrazit}}, {{ui:Řez}} nebo rozpis.

Vyberte **Všechny úkoly**, abyste zobrazili celý harmonogram znovu.

## Co byste měli vidět

- **Postaveno**: prvky, jejichž úkoly jsou všechny dokončeny, ve svých vlastních barvách.
- **Probíhá**: prvky s úkolem, který daný den probíhá, v okrové barvě. Úkol probíhá od data začátku až do data dokončení včetně.
- **Nezahájeno**: průhledné.
- Prvky, které nejsou v žádném úkolu, zůstanou beze změny. Seznam ukazuje, kolik prvků každý úkol našel. Řádky, které nešlo přečíst, nebo které nenašly nic, jsou vypsány s čísly řádků.

## Vazby, Ganttův diagram a MS Project

- Otevřete soubor Microsoft Project XML (`.xml`) nebo CSV se sloupcem `Predecessors`. Vazby mohou být dokončení–zahájení, zahájení–zahájení, dokončení–dokončení nebo zahájení–dokončení, každá s předstihem nebo zpožděním ve dnech.
- Pod seznamem úkolů kreslí Ganttův diagram každý úkol jako pruh se šipkami vazeb. Úkoly na kritické cestě jsou červené. Smyčka vazeb nebo předchůdce, který neexistuje, se vypíše v panelu.
- {{ui:Uložit jako XML aplikace MS Project}} a {{ui:Uložit CSV s vazbami}} zapíšou harmonogram zpět i s jeho vazbami.

## Další

- [Najděte prvky podle třídy, názvu nebo vlastnosti](topic:find)
- [Obarvení prvků podle vlastnosti](topic:color-by-property)
