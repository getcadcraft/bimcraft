---
title: "Predvolené pravidlá: nastavte, s čím sa nová budova začína"
summary: Raz povedzte, s akým typom steny, podlažiami, prvým listom, značkami LOD, jednotkami a nástrojom sa začína nová budova, pre metrické aj palcové projekty, a zdieľajte pravidlá v kancelárii ako malý súbor.
keywords: predvolené, predvolené hodnoty, predvolené pravidlá, pravidlo, kancelárska norma, kancelárske predvolené hodnoty, šablóna, nová budova, prvý typ steny, metrická stena, murivo, LOD, úroveň vypracovania, prvý list, papier, mierka, podlažia, výška podlažia, názvy podlaží, nástroj stena, jednotky, zdieľanie, export, import, json
from: 42379aa5
---

## Čo budete robiť

Povedzte BimCraft, s čím by sa nová budova mala začať, aby nikto v kancelárii nemusel meniť tie isté veci zakaždým znova. Toto je doplnok: je vypnutý, kým ho nezapnete, a pravidlo, ktoré nenastavíte, ponechá predvolenú hodnotu BimCraft presne taká, aká je.

:::note
Sú to predvolené hodnoty pre **nové** budovy a **nové** veci. Projekt, ktorý ste už začali, sa nemení.
:::

## Postup

1. Otvorte Nastavenia, prejdite na {{ui:Doplnky}} a zapnite {{ui:Predvolené pravidlá}}.
2. V Nastaveniach otvorte kartu **BimCraft** a v zozname vľavo vyberte {{ui:Predvolené pravidlá}}.
3. Nastavte pravidlá, ktoré chcete. Každé začína na **vlastnej hodnote BimCraft**, s tým, čo to je, v zátvorkách. Pravidlo s políčkom **Metrické** a **Imperiálne** nastaví jednu hodnotu pre každý druh projektu; vyplňte iba tie, ktoré potrebujete.
4. Tlačidlo Uložiť neexistuje: každá zmena sa uloží hneď, ako ju urobíte. Hodnota, ktorú nemožno použiť, sa odmietne slovami a stará hodnota zostane.
5. Kliknite na {{ui:Nová budova}}. Dialóg sa vyplní z vašich pravidiel a pri každej hodnote, ktorú pravidlo nastavilo, je uvedené **z vašich Predvolených pravidiel**. Ktorúkoľvek z nich môžete ešte zmeniť pred {{ui:Vytvoriť}}.

## Pravidlá

- **Jednotky novej budovy**: jednotky sa po vytvorení prepnú na túto hodnotu.
- **Počet podlaží**, **Názvy podlaží** a **Výška podlažia**. V názve `{n}` počíta 1, 2, 3; `{n0}` počíta 0, 1, 2; `{nn}` a `{nn0}` robia to isté s dvoma číslicami. Takže `Podlažie {nn0}` dá Podlažie 00, Podlažie 01, Podlažie 02.
- **Prvý typ steny**: čo nástroj Stena nakreslí ako prvé. Kancelária pre metrické projekty môže začať s Exterior masonry 300 mm, zatiaľ čo palcové projekty si ponechajú Exterior 2×6.
- **Značka LOD na štartovacích typoch stien**: úroveň vypracovania (LOD 100 až 500), ktorú ukazuje deväť štartovacích typov všade, kde je typ uvedený. Pozri [Zostavy stien](topic:wall-assemblies).
- **LOD novo vytvoreného typu steny**: značka, ktorú nový typ dostane v editore typov. Môžete ju tam zmeniť.
- **Prvý list**: jeho papier, mierka, číslo listu a názov (použite `{level}` pre názov najnižšieho podlažia), alebo žiadny prvý list.
- **Veľkosti anotácií na papieri** (Nastavenia › Globálne › Predvolené pravidlá): výšky kancelárie v milimetroch tak, ako sa tlačia, pre poznámky, text kót, značky, názvy miestností, písmená bublín mriežky, nadpisy pohľadov a text tabuliek. Nová budova ich prevezme pri vytvorení a uchová vo svojom súbore. Pozri [Kreslenie v plnej veľkosti, anotácia podľa mierky](topic:annotation-sizes).
- **Nástroj aktívny po vytvorení**: Vybrať, ako to BimCraft robí sám, alebo Stena, takže prvé dva kliky na pôdoryse už nakreslia stenu.

## Rozloženie tabuliek: kancelárska norma

V **Nastavenia › Globálne › Predvolené pravidlá**, v časti **Rozloženie tabuľky (kancelárska norma)**, nastavte, ako sa každá tabuľka zoskupuje, či má medzisúčty a celkový súčet, jej názov a veľkosť písmen nadpisov stĺpcov. Každá tabuľka, ktorá si vlastné nedefinuje, ich prevezme bez ohľadu na to, kto ju nastavuje. Pozri [Rozloženie, uloženie a export tabuľky](topic:schedule-layouts).

## Zdieľanie v kancelárii

1. V Nastaveniach otvorte kartu **Globálne** a vyberte {{ui:Predvolené pravidlá}}.
2. Ak chcete, napíšte **Názov kancelárie**. Zapíše sa do súboru.
3. Kliknite na {{ui:Uložiť do súboru}}. Dostanete malý súbor končiaci na `.ccdefaults.json`.
4. Na inom počítači zapnite doplnok, otvorte to isté miesto a kliknite na {{ui:Načítať zo súboru}}. Pravidlá zo súboru nahradia tie na tomto počítači.

Karta Globálne tiež obsahuje **Systém jednotiek nového projektu**, ktorý platí pre každú aplikáciu s týmto doplnkom, a {{ui:Obnoviť všetky pravidlá}}. {{ui:Obnoviť vlastné predvolené hodnoty BimCraft}} na karte BimCraft vymaže iba tie BimCraft.

## Dobré vedieť

- Súbor je obyčajný, otvorený JSON: zoznam názvov pravidiel a hodnôt. Pravidlo, ktoré súbor uvádza a táto verzia nepozná, sa vynechá a v správe sa uvedie; ostatné sa načítajú.
- Pravidlá sú uložené v tomto prehliadači pre každú aplikáciu CadCraft na tomto počítači. Nie sú uložené v súbore budovy a medzi počítačmi sa nesynchronizujú: použite súbor.
- LOD značka štartovacieho typu pochádza z pravidla na tomto počítači. Typ, ktorý vytvoríte ako kópiu štartovacieho, nesie svoju značku v súbore budovy.
- BimCraft nemá nastavenie presnosti, takže tu nie je žiadne pravidlo presnosti.
- Budova začatá zo šablóny prináša vlastné podlažia a listy šablóny. Pravidlo typu steny a jednotiek sa stále uplatňuje.
- Vypnite doplnok a všetko je zase vlastné BimCraft. Vaše pravidlá sa uchovajú pre prípad, že ho znova zapnete.
