---
title: Klasifikačné kódy (Uniclass, OmniClass, UniFormat)
summary: Priraďte každému prvku a typu klasifikačný kód, vyberte, ktoré systémy projekt používa, vyhľadajte v tabuľkách Uniclass dodaných s aplikáciou, načítajte vlastné licencované tabuľky vašej kancelárie a zobrazte kódy v tabuľkách. Kódy sa zapisujú do súboru IFC pre iný softvér.
keywords: klasifikácia, klasifikovať, kód, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabuľka, kód prvku, kód typu, predvolený kód, IfcClassification, IfcClassificationReference, cobie, stĺpec tabuľky, csv, licencia
from: 222b94cd
---

## Čo budete robiť

Umiestnite klasifikačný kód na steny, podlahy, strechy, dvere, okná a čokoľvek iné v modeli, a to až v troch systémoch vedľa seba: Uniclass, OmniClass a UniFormat. Iné profesie a iný softvér sa spoliehajú na kód, nie na názov, takže kódy sa ukladajú do súboru IFC ako klasifikačné odkazy, ktoré číta akýkoľvek BIM program.

## Priradenie kódu prvku

1. Vyberte prvok (alebo viacero) a otvorte **Vlastnosti**. Otvorte sekciu {{ui:Classification}}.
2. Napíšte kód do poľa jeho systému a stlačte Enter. Ak je načítaný zoznam kódov, napíšte časť kódu alebo pár slov („fasádna stena“) a vyberte zhodu: názov kódu sa doplní za vás.
3. {{ui:Applies to}} určuje, kam kód patrí: **Tento prvok**, alebo **Jeho typ (každý prvok daného typu)**. Kód na type steny číta každá stena tohto typu, aj tie, ktoré nakreslíte neskôr.
4. {{ui:Clear}} kód odstráni.

Pod každým kódom sekcia uvádza, odkiaľ pochádza: nastavený na tomto prvku, z jeho typu alebo projektová predvolená hodnota pre jeho triedu. Vlastný kód prvku má vždy prednosť pred kódom jeho typu a kód typu pred predvolenou hodnotou. Keď sú vybraté viaceré prvky, pole s textom „rôzne“ znamená, že nemajú spoločný kód; zadanie jedného ho priradí všetkým. Každá zmena je jeden krok späť.

Kód sa dá vždy napísať, či je zoznam načítaný alebo nie. Ak nevyzerá ako kód daného systému alebo nie je v načítanom zozname, zobrazí sa nápoveda a kód sa ponechá tak, ako ste ho napísali.

## Výber systémov projektu

Otvorte **Údaje** na paneli modelu a vyberte {{ui:Classification}} (alebo {{ui:Project classification…}} v sekcii Vlastnosti).

- Zaškrtnite systémy, ktoré tento projekt používa. Vlastnosti potom zobrazia iba tie.
- **Uniclass**: tabuľky Prvky/funkcie (EF), Systémy (Ss) a Produkty (Pr) sú dodané s aplikáciou. Sú © NBS, licencované Creative Commons Attribution-NoDerivatives 4.0 a odovzdávané nezmenené. Dialóg zobrazuje vydanie každej tabuľky a deň, kedy bola načítaná. Nie sú to najnovšie tabuľky: vydavateľ každý štvrťrok vydáva nové na svojej stránke.
- **OmniClass** a **UniFormat**: zoznam kódov s aplikáciou nedodávame, pretože vydavateľ nepovoľuje tabuľky odovzdávať bez licencie. Napíšte ľubovoľný kód alebo načítajte licencovanú tabuľku vašej kancelárie.
- {{ui:Load a table (CSV)…}} načíta tabuľku vašej kancelárie zo súboru CSV so stĺpcom kódov a stĺpcom názvov (riadok hlavičky s názvom Code, Number alebo Identifier a Title, Name alebo Description sa nájde sám; bez neho sa použijú prvé dva stĺpce). Tabuľka zostáva v tomto prehliadači a nikdy sa nevkladá do súboru projektu. Do súboru sa ukladajú iba kódy, ktoré priradíte. Novšiu tabuľku Uniclass môžete načítať rovnakým spôsobom.
- {{ui:Give elements a default code by their class}} dá každej stene, podlahe, streche, dverám, oknu, schodisku, rampe, stĺpu, nosníku a kusu nábytku počiatočný kód Uniclass z tabuľky Prvky/funkcie, keď žiadny vlastný nemá. Prvky, ktoré nakreslíte neskôr, ho tiež dostanú.
- {{ui:Show the codes as columns in the schedules}} pridá jeden stĺpec za systém do tabuliek Dvere, Okná, Steny podľa typu a Miestnosti a do ich CSV. Riadok s viacerými prvkami zobrazí „rôzne“, keď sa ich kódy líšia.

## Dobré vedieť

- Predvolené kódy sú vlastný počiatočný výber CadCraft, nie vydavateľa, a neoverila ich žiadna odborná osoba. Skontrolujte ich podľa štandardu vášho projektu.
- V súbore je predvolená hodnota skutočná klasifikácia označená názvom vzťahu "CadCraft default" a odíde, hneď ako prvok alebo jeho typ dostane vlastný kód.
- Kódy, ktoré už importovaný súbor obsahuje, sa čítajú a zobrazujú, nech iný program použil akýkoľvek pravopis názvu systému. Kódy akéhokoľvek iného systému (vlastného systému kancelárie) sa uvedú a ponechajú bez zmeny.
- Kódy sa znova načítajú, keď sa súbor otvorí znova, tu alebo v inom programe. Prenášajú sa aj do exportu IFC5 alpha (IFCX), keď je táto laboratórna voľba zapnutá, okrem kódu nastaveného na streche.
- Ešte nie je hotové: strom na prechádzanie tabuľky po úrovniach, kódy na podlažiach a miestnostiach ako projektové predvolené hodnoty a kontrola kódu voči vydaniu uvedenému v súbore.
