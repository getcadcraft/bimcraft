---
title: Oudit die model: vertrekke, etikette, LOD, botsings en koppelvlakke
summary: Voer gereedheidskontroles uit vir onbenoemde vertrekke, ontbrekende etikette, elemente onder die ontwikkelingsvlak wat die projekfase vra, botsings tussen dissiplines en LOD 350-koppelvlakke. Net advies: niks word geblokkeer nie.
keywords: oudit, kontrole, onbenoemde vertrek, ontbrekende etiket, merk, lod, ontwikkelingsvlak, mylpaal, fase, botsing, dissipline, koordinasie, koppelvlak, lod 350, opening, latei, kopbalk, deurvoering, mof, pyp, kanaal, probleme, kontrolleverslag, advies
from: cc83a14d
---

## Wat jy gaan doen

Kyk oor die hele model in een keer voordat jy dit uitreik. Die oudit voer gereedheidsreëlstelle uit en sit wat dit vind in die {{ui:Probleme}}-lys as advies. Niks word geblokkeer nie: jy los 'n bevinding op, of aanvaar dit met 'n rede, soos enige ander probleem.

## Stappe

1. Maak {{ui:Modelkontroles}} › {{ui:Oudit}} in die linkerpaneel oop, of {{ui:Gereedskap}} › {{ui:Oudit die model…}} (getik: `AUDIT`).
2. Kies die {{ui:Projekfase}}. Dit is dieselfde fase as in die tekeningbesonderhede.
3. Merk die reëlstelle om te laat loop.
4. Klik {{ui:Voer die oudit uit}}.
5. Lees die reël vir elke reëlstel, en maak dan {{ui:Maak die Probleemlys oop}}. 'n Klik op 'n bevinding kies sy element.
6. {{ui:Die kontrolleverslag}} laai die verslag af: elke bevinding, wie wat aanvaar het en waarom, en die reëlstelle wat geloop het.

## Die reëlstelle

- **Onbenoemde vertrekke**: 'n vertrek sonder 'n naam, of een wat steeds genoem word soos die program dit genoem het ("Room 3").
- **Ontbrekende etikette**: 'n deur of venster sonder 'n merk, 'n vertrek sonder 'n nommer, 'n elektriese toestel sonder 'n etiket.
- **Elemente onder die stadium se LOD**: elke muur, vloer, plafon, dak, deur en venster waarvan die LOD onder is wat die fase vra. 'n Element lees sy tipe se LOD-etiket; 'n veldgeverifieerde element is LOD 500. Elemente sonder 'n etiket word in een nota getel, omdat hulle nie nagegaan kan word nie.
- **Botsings tussen dissiplines**: elemente van twee dissiplines (argitektuur, struktuur, meganies, pyplegging, elektries, volgens IFC-klas) wat in mekaar inloop. 'n Dak wat op sy mure rus, word nie getel nie.
- **LOD 350-koppelvlakke**: elke deur en venster sit in 'n opening van sy muur, die opening pas binne die muur, twee openings oorvleuel nie, 'n opening wat breër as die limiet is, het 'n latei of kopbalk ('n element daaroor, of 'n nota op die deur of venster), en 'n pyp, kanaal of kabelrak wat 'n muur of plaat kruis, het 'n opening daar. Bevindings word per paar dissiplines getel.
- **Herkende elemente wat niemand nagegaan het nie**: mure, deure, vensters en vertrekke wat uit 'n PDF, 'n skandering of 'n tekening gelees is en wat nog ongeverifieer is. Sien [Merk elemente as nagegaan of veldgeverifieer](topic:verification).

## Die LOD wat elke fase vra

Maak {{ui:Die LOD wat elke fase vra}} oop om die tabel te sien of te verander.

:::note
Die tabel en die lateibreedte is CadCraft se beginwaardes. Hulle is nie uit 'n standaard geneem nie: 'n projek stel die LOD per fase in sy BIM-uitvoeringsplan. Stel hulle na joune. 'n Kantoor kan die tabel vir almal instel in Instellings › Default Policies › Audit; 'n verandering in die Audit-afdeling word op hierdie rekenaar behou.
:::

## Goed om te weet

- 'n Latei kan genoteer word in plaas van gemodelleer: kies die deur of venster en vul {{ui:Latei- of kopbalknota}} onder {{ui:Verifikasie}} in Eienskappe in.
- 'n Pyp wat deur 'n werklike opening gaan, kruis geen oppervlak nie en word nie gerapporteer nie. Een wat deur die muur gemodelleer is, word wel gerapporteer.
- Die botsingkontrole stop na 'n paar sekondes op 'n baie groot model en sê so. Vir 'n volledige kontrole van twee gekose stelle, gebruik [Vind botsings tussen elemente](topic:clash-check).
- Loop die oudit weer nadat jy die model verander. Aanvaarde bevindings bly aanvaar solank hul getalle nie verander nie.
- Dit lees die model. Dit vervang nie 'n koordinasiebeoordeling deur die mense wat verantwoordelik is nie.

## Volgende

- [Kontroleer 'n model vir algemene probleme](topic:model-checks)
- [Vind botsings tussen elemente](topic:clash-check)
- [Merk elemente as nagegaan of veldgeverifieer](topic:verification)
