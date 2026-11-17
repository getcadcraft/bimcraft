---
title: Faze projekta: od projektne naloge do navodil za gradbišče
summary: Začnite s projektno nalogo s ciljnimi površinami in med risanjem spremljajte, ali so dosežene ali premalo. Primerjajte konceptne možnosti z njo, povežite specifikacije in detajle s tipi ter pregledujte delavniške risbe in beležite gradbiščna navodila na elemente.
keywords: projektna naloga, razpredelnica prostorov, ciljna površina, doseženo, premalo, prostori, konceptne možnosti, možnosti, masa, proračun, specifikacija, spec, detajl, gradbeni detajl, tip, delavniška risba, pregled, odobri, ponovno oddaj, gradbiščno navodilo, revizija, vzrok, teren, faza
from: 0a49b852
---

## Kaj boste naredili

V enem podoknu obdelajte faze projekta: zapišite naročnikovo projektno nalogo kot prostore s ciljnimi površinami, primerjajte konceptne možnosti z njo, hranite specifikacijo in gradbene detajle pri tipih, h katerim spadajo, pregledujte delavniške risbe, ko se vrnejo od izvajalcev, in beležite gradbiščna navodila na elemente, ki jih spreminjajo.

## Koraki

1. V levem podoknu odprite **Faze projekta**, nato **Projektna naloga**.
2. Prilepite prostore, enega v vrstico: `Living; 1; 30` pomeni en prostor s 30 m². Število lahko izpustite. Izberite **Dodaj prostore**. Vnesite naročnika, lokacijo, proračun, toleranco in časovnico, nato izberite **Shrani projektno nalogo**.
3. Narišite stene. Vsak prostor, ki ga stene oblikujejo in ima ime iz projektne naloge (število za imenom, kot je „Spalnica 2“, se prezre), se šteje. **Razpredelnica prostorov** prikaže **Doseženo**, **Premalo**, **Preveč** ali **Ni narisano**, razlika pa je v m².
4. Za začetek novega projekta na ta način izberite **Začni nov projekt iz projektne naloge**. Odpre se nov model, po možnosti iz ene od shranjenih predlog, in projektna naloga se vstavi kot prvi korak.
5. Odprite **Možnosti glede na projektno nalogo**. Vsaka možnost mase, shranjena v modelu, je prikazana v istem merilu z bruto površino, zahtevo projektne naloge in številom prostorov projektne naloge, ki se prilegajo. **Zloži projektno nalogo tukaj** razporedi prostore po etažah možnosti, od najnižje, in pove, kaj se ne prilega. Strošek prihaja samo iz cenika projekta; če ni ustrezne vrstice, piše „Ni cene“.
6. Odprite **Tipi, specifikacije in detajli**. Vsak tip stene, vrat, okna in tal prikaže, ali ima besedilo specifikacije, povezane detajle ter kje se specifikacija, razpredelnice in risbe ne ujemajo. **Poveži detajl** doda datoteko DetailCraft ali CadCraft, naslov ali list tega modela.
7. Odprite **Delavniške risbe**. Izberite elemente v modelu, ki jih pokriva delavniška risba, nato **Prejmi jo**. Uporabite **Odobri**, **Z opombami** ali **Popravi** z imenom in opombo pregledovalca. **Ponovno oddano** ustvari naslednjo revizijo iste evidence in ohrani zgodovino pregledov. Stanje je zapisano tudi na vsak element.
8. Odprite **Gradbiščna navodila**. Izberite elemente, navedite vzrok ter z lastnimi besedami, kaj pomeni za stroške in čas, nato izberite **Zabeleži jo**. Ko je zadeva zabeležena, **Pojasni spremembe od te zadeve** pove, za katere spremenjene elemente velja navodilo in kateri so se spremenili brez zabeležene evidence.

## Dobro je vedeti

- Vsak korak je ena razveljavitev. Nič ni zavrnjeno: nedoseženo projektno nalogo, tip, ki ne ustreza svojemu besedilu, ali zamujeno delavniško risbo prikažemo kot opozorilo ali opombo v Težave.
- Prostori projektne naloge so prostori brez sten. Nosijo cilj, ne narisane površine, zato jih razpredelnice prostorov in COBie ne štejejo kot narisane prostore.
- Razporeditev samo zlaga prostore v etaže glede na površino. Ne riše sten.
- Besedilo specifikacije je napisano v Dokumenti iz modela. Tu se primerja samo z lastnimi merami modela: nikoli zate ne napiše klavzule standarda.
- Delavniške risbe in gradbiščna navodila so evidence v isti zgodovini kot podokno Zadeve in revizije, zato ju oba podokna prikazujeta.
- Stanje delavniške risbe je lastnost vsakega elementa (`CadCraft_ShopDrawing`), gradbiščno navodilo pa je `CadCraft_SiteInstruction`, zato ju lahko uporabite v Najdi in Obarvaj po lastnosti.
- Oznake, preverjene na terenu (faza 7), so v Lastnosti pod Preverjanje.
