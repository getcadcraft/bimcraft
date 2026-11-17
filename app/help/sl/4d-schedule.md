---
title: Predvajajte gradbeni razpored na modelu
summary: Odprite seznam nalog kot CSV, povežite vsako nalogo z elementi prek lastnosti in se premikajte po datumih, da vidite, kaj je zgrajeno, kaj je v teku in kaj se še ni začelo.
keywords: 4d, razpored, zaporedje gradnje, časovnica, faziranje, program, gant, naloge, datumi, simulacija, napredek, zgrajeno, csv, etapa, faza, delovni sklop, wbs, skupina
from: 1b985a64
---

## Kaj boste naredili

Spremljajte, kako stavba raste: vsaka naloga v razporedu je povezana z elementi, ki jih gradi, prikazana dan za dnem.

## Koraki

1. Odprite IFC model in v levem podoknu odprite {{ui:4D schedule}}.
2. Kliknite {{ui:Download a template}} za seznam nalog s tednom na etažo in ga spremenite v preglednici. Ali pa napišite svojega.
3. Kliknite {{ui:Open a task list…}} in izberite CSV.
4. Povlecite drsnik datuma ali kliknite {{ui:Play}}.

## Seznam nalog

CSV z glavno vrstico in stolpci **Task**, **Start**, **Finish**, **Field** in **Value**. Delujeta tako vejice kot podpičja.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Etaža 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Streha | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Streha | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Datume zapisujte kot `YYYY-MM-DD`.
- Vrstica poveže nalogo z vsakim elementom, katerega **Field** ima točno to **Value**. Polje je lastnost, na primer Storey, Class, Name, Type, Material, Tag ali GlobalId, ali katera koli lastnost, zapisana z naborom in imenom: `Pset_WallCommon.FireRating`.
- Isto nalogo ponovite v več vrsticah z istimi datumi, da jo povežete z več elementi.

## Etape in delovni sklopi

Dodajte stolpec **Stage**, stolpec **Package** ali oba, da naloge zberete v etape in delovne sklope. Tudi **Phase** in **WBS** delujeta kot imena stolpcev.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Plošča etaže 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Konstrukcija | Skelet |
| Zidovi etaže 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Konstrukcija | Skelet |
| Vrata | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Notranja oprema | Mizarska dela |

- Naloga pripada eni etapi in enemu sklopu. Če pozneje vrstica iste naloge navede drugo, je ta vrstica navedena s številko vrstice in izpuščena.
- Isto ime sklopa v dveh etapah sta dva sklopa.

Ko ima seznam skupine, se nad datumom prikaže seznam {{ui:Show}}. Izberite etapo ali sklop in se predvaja kot ena celota:

- drsnik in {{ui:Play}} tečeta od prvega začetka skupine do zadnjega konca,
- na seznamu in v modelu so prikazane samo naloge skupine, vse zunaj skupine je prosojno,
- vrstica pod seznamom pove, koliko nalog skupine je na tistem datumu končanih, v teku in še pred nami,
- {{ui:Select its elements}} izbere vse elemente skupine za {{ui:Show}}, {{ui:Section}} ali razpredelnico.

Izberite **Vse naloge**, da znova vidite celoten razpored.

## Kaj naj vidite

- **Zgrajeno**: elementi, katerih naloge so vse končane, v svojih barvah.
- **V teku**: elementi z nalogo, ki tisti dan poteka, v oker barvi. Naloga poteka od datuma začetka do datuma konca.
- **Še ni začeto**: prosojno.
- Elementi brez naloge ostanejo, kakršni so. Seznam pove, koliko elementov je našla vsaka naloga. Vrstice, ki jih ni bilo mogoče prebrati ali niso našle ničesar, so navedene s številkami vrstic.

## Povezave, Ganttov diagram in MS Project

- Odprite datoteko Microsoft Project XML (`.xml`) ali CSV s stolpcem `Predecessors`. Povezave so lahko konec-začetek, začetek-začetek, konec-konec ali začetek-konec, vsaka s prehitevanjem ali zamikom v dnevih.
- Pod seznamom nalog Ganttov diagram nariše vsako nalogo kot vrstico, s puščicami za povezave. Naloge na kritični poti so rdeče. Zanka povezav ali predhodnik, ki ne obstaja, sta navedena v podoknu.
- {{ui:Save as MS Project XML}} in {{ui:Save CSV with links}} zapišeta razpored nazaj s povezavami.

## Naprej

- [Najdite elemente po razredu, imenu ali lastnosti](topic:find)
- [Obarvajte elemente po lastnosti](topic:color-by-property)
