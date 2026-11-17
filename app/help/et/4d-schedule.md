---
title: Esita ehitusgraafik mudelil
summary: Ava ülesannete loend CSV-failina, seo iga ülesanne omaduse järgi elementidega ja liigu kuupäevade vahel, et näha, mis on valmis, mis on pooleli ja mida pole veel alustatud.
keywords: 4d, graafik, ehitusjärjestus, ajatelg, faasistamine, ajakava, gantt, ülesanded, kuupäevad, simulatsioon, edenemine, ehitatud, csv, etapp, faas, tööpakett, wbs, rühm
from: 1b985a64
---

## Mida teed

Jälgi, kuidas hoone üles kerkib: graafiku iga ülesanne on seotud elementidega, mida see ehitab, ja kuvatakse päev päeva haaval.

## Sammud

1. Ava IFC-mudel ja ava vasakpaneelil {{ui:4D graafik}}.
2. Klõpsa {{ui:Laadi alla mall}}, et saada ülesannete loend korruse kohta ühe nädalaga, ja muuda seda tabelarvutusprogrammis. Või kirjuta oma.
3. Klõpsa {{ui:Ava ülesannete loend…}} ja vali CSV-fail.
4. Lohista kuupäevaliugurit või klõpsa {{ui:Esita}}.

## Ülesannete loend

CSV-fail, mille päisereas on veerud **Task**, **Start**, **Finish**, **Field** ja **Value**. Töötavad nii komad kui semikoolonid.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Kirjuta kuupäevad kujul YYYY-MM-DD.
- Rida seob ülesande iga elemendiga, mille **Field** väärtus on täpselt selle **Value**. Väli on omadus, nagu Storey, Class, Name, Type, Material, Tag või GlobalId, või mis tahes omadus, mis on kirjutatud oma hulga ja nime järgi: `Pset_WallCommon.FireRating`.
- Korda ülesannet mitmel real samade kuupäevadega, et siduda sellega rohkem elemente.

## Etapid ja tööpaketid

Lisa veerg **Stage**, veerg **Package** või mõlemad, et koondada ülesanded etappidesse ja tööpakettidesse. Ka Phase ja WBS töötavad veergude nimedena.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Ülesanne kuulub ühte etappi ja ühte paketti. Kui sama ülesande hilisem rida nimetab teise, loetletakse see rida koos rea numbriga ja jäetakse välja.
- Sama paketi nimi kahes etapis on kaks paketti.

Kui loendis on rühmad, ilmub kuupäeva kohale loend {{ui:Näita}}. Vali etapp või pakett ja see esitatakse ühe tervikuna:

- liugur ja {{ui:Esita}} töötavad rühma esimesest algusest viimase lõpuni,
- loetletakse ja värvitakse ainult rühma ülesanded ning kõik rühmast väljaspool on läbipaistvad,
- loendi all olev rida ütleb, mitu selle rühma ülesannet on sel kuupäeval tehtud, pooleli ja veel ees,
- {{ui:Vali selle elemendid}} valib kõik rühma elemendid, et neid {{ui:Näita}}, {{ui:Lõige}} või loendi jaoks kasutada.

Vali **Kõik ülesanded**, et näha uuesti kogu graafikut.

## Mida peaksid nägema

- **Valmis**: elemendid, mille kõik ülesanded on lõpetatud, oma värvides.
- **Pooleli**: elemendid, mille ülesanne sel päeval käib, okerkollases värvis. Ülesanne käib alates algus- kuni lõppkuupäevani.
- **Pole alustatud**: läbipaistvad.
- Elemendid, mida ükski ülesanne ei hõlma, jäävad nii nagu on. Loend näitab, mitu elementi iga ülesanne leidis. Read, mida ei saanud lugeda või mis ei leidnud midagi, on loetletud oma rea numbriga.

## Seosed, Gantti diagramm ja MS Project

- Ava Microsoft Project XML-fail (`.xml`) või CSV, millel on veerg `Predecessors`. Seosed võivad olla lõpp-algus, algus-algus, lõpp-lõpp või algus-lõpp, igaüks päevades ette või taha nihutatud.
- Ülesannete loendi all joonistab Gantti diagramm iga ülesande ribana ja seosed nooltega. Kriitilisel teel olevad ülesanded on punased. Seoste ring või olematu eelkäija on loetletud paneelil.
- {{ui:Salvesta MS Project XML-ina}} ja {{ui:Salvesta CSV seostega}} kirjutavad graafiku tagasi koos seostega.

## Edasi

- [Leia elemendid klassi, nime või omaduse järgi](topic:find)
- [Värvi elemendid omaduse järgi](topic:color-by-property)
