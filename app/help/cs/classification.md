---
title: Klasifikační kódy (Uniclass, OmniClass, UniFormat)
summary: Přiřaďte každému prvku a typu klasifikační kód, zvolte, které systémy projekt používá, prohledejte tabulky Uniclass dodávané s aplikací, načtěte vlastní licencované tabulky své kanceláře a zobrazte kódy v tabulkách. Kódy se zapisují do souboru IFC pro jiný software.
keywords: klasifikace, klasifikovat, kód, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabulka, kód prvku, kód typu, výchozí kód, IfcClassification, IfcClassificationReference, cobie, sloupec tabulky, csv, licence, licenční
from: 222b94cd
---

## Co uděláte

Přidejte klasifikační kód stěnám, podlahám, střechám, dveřím, oknům a čemukoli dalšímu v modelu, a to až ve třech systémech vedle sebe: Uniclass, OmniClass a UniFormat. Ostatní profese a jiný software spoléhají na kód, ne na název, takže kódy se ukládají do souboru IFC jako klasifikační odkazy, které čte jakýkoli BIM program.

## Přiřazení kódu prvku

1. Vyberte prvek (nebo více) a otevřete **Vlastnosti**. Otevřete sekci {{ui:Klasifikace}}.
2. Napište kód do pole jeho systému a stiskněte Enter. Když je načten seznam kódů, napište část kódu nebo několik slov („curtain wall“, tedy záclonová stěna) a vyberte ze shod: název kódu se vyplní za vás.
3. {{ui:Platí pro}} říká, kam kód patří: **Tento prvek**, nebo **Jeho typ (každý prvek daného typu)**. Kód u typu stěny čte každá stěna tohoto typu, i ty, které nakreslíte později.
4. {{ui:Vymazat}} kód odebere.

Pod každým kódem sekce uvádí, odkud pochází: nastaven na tomto prvku, z jeho typu, nebo jako výchozí kód projektu pro jeho třídu. Vlastní kód prvku má vždy přednost před kódem jeho typu a kód typu před výchozím. Když je vybráno více prvků, pole s hláškou „varies“ (různé) znamená, že nesdílejí jeden kód; napsání jednoho kódu jej přiřadí všem. Každá změna je jeden krok zpět.

Kód lze vždy napsat, ať je seznam načten, nebo ne. Pokud nevypadá jako kód daného systému, nebo není v načteném seznamu, nápověda to řekne a kód se ponechá tak, jak jste jej napsali.

## Volba systémů projektu

Otevřete **Data** na liště modelu a zvolte {{ui:Klasifikace}} (nebo {{ui:Klasifikace projektu…}} v sekci Vlastnosti).

- Zaškrtněte systémy, které projekt používá. Vlastnosti pak ukazují jen ty.
- **Uniclass**: tabulky Prvky/funkce (EF), Systémy (Ss) a Produkty (Pr) se dodávají s aplikací. Jsou © NBS, licencované Creative Commons Attribution-NoDerivatives 4.0, a předávají se beze změny. Dialog ukazuje edici každé tabulky a den, kdy byla načtena. Nejsou to nejnovější tabulky: vydavatel vydává nové každé čtvrtletí na svých stránkách.
- **OmniClass** a **UniFormat**: seznam kódů s aplikací nedodáváme, protože vydavatel nedovoluje tabulky předávat bez licence. Napište libovolný kód, nebo načtěte licencovanou tabulku své kanceláře.
- {{ui:Načíst tabulku (CSV)…}} načte tabulku vaší kanceláře ze souboru CSV se sloupcem kódu a sloupcem názvu. Hlavičkový řádek s názvem Code, Number nebo Identifier a Title, Name nebo Description se najde sám; bez něj se použijí první dva sloupce. Tabulka zůstává v tomto prohlížeči a nikdy se nevkládá do souboru projektu. Do souboru se ukládají jen kódy, které přiřadíte. Novější tabulku Uniclass můžete načíst stejně.
- {{ui:Přiřadit prvkům výchozí kód podle jejich třídy}} dá každé stěně, podlaze, střeše, dveřím, oknu, schodišti, rampě, sloupu, nosníku a kusu nábytku výchozí kód Uniclass z tabulky Prvky/funkce, pokud žádný vlastní nemá. Prvky, které nakreslíte později, ho dostanou také.
- {{ui:Zobrazit kódy jako sloupce v tabulkách}} přidá jeden sloupec na systém do tabulek Dveře, Okna, Stěny podle typu a Místnosti i do jejich CSV. Řádek více prvků ukáže „varies“ (různé), když se jejich kódy liší.

## Dobré vědět

- Výchozí kódy jsou vlastní výchozí volbou CadCraft, ne vydavatele, a nezkontroloval je praktik. Porovnejte je se standardem vašeho projektu.
- V souboru je výchozí hodnota skutečnou klasifikací označenou názvem vztahu „CadCraft default“. Odejde ve chvíli, kdy prvek nebo jeho typ dostane vlastní kód.
- Kódy, které už importovaný soubor má, se načtou a zobrazí, ať je název systému v souboru napsán jakkoli, jak ho použil jiný program. Kódy jakéhokoli jiného systému (vlastního systému kanceláře) se vypíšou a nechají se být.
- Kódy se po znovuotevření souboru načtou zde nebo v jiném programu. Přenášejí se také do exportu IFC5 alfa (IFCX), je-li zapnuta tato laboratorní volba, kromě kódu nastaveného na střeše.
- Ještě není hotovo: strom pro procházení tabulky úroveň po úrovni, kódy na podlažích a v místnostech jako výchozí hodnoty projektu a kontrola kódu proti edici uvedené v souboru.
