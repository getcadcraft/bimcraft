---
title: Klassifikasiekodes (Uniclass, OmniClass, UniFormat)
summary: Gee elke element en tipe 'n klassifikasiekode, kies watter stelsels 'n projek gebruik, soek die Uniclass-tabelle wat saam met die program kom, laai jou kantoor se eie gelisensieerde tabelle, en wys die kodes in skedules. Die kodes word in die IFC-lêer geskryf vir ander sagteware.
keywords: klassifikasie, klassifiseer, kode, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabel, elementkode, tipekode, standaardkode, IfcClassification, IfcClassificationReference, cobie, skedulekolom, csv, lisensie
from: 222b94cd
---

## Wat jy gaan doen

Plaas 'n klassifikasiekode op mure, vloere, dakke, deure, vensters en alles anders in die model, in tot drie stelsels langs mekaar: Uniclass, OmniClass en UniFormat. Ander dissiplines en ander sagteware steun op die kode, nie op die naam nie, daarom word die kodes in die IFC-lêer gestoor as klassifikasieverwysings wat enige BIM-program lees.

## Gee 'n element 'n kode

1. Kies 'n element (of verskeie) en maak **Eienskappe** oop. Maak die {{ui:Klassifikasie}}-afdeling oop.
2. Tik die kode in die blokkie van sy stelsel en druk Enter. Met 'n kodelys gelaai, tik deel van 'n kode of 'n paar woorde ("gordynmuur") en kies uit die passings: die kode se titel word vir jou ingevul.
3. {{ui:Van toepassing op}} sê waarheen die kode gaan: **Hierdie element**, of **Sy tipe (elke element van die tipe)**. 'n Kode op 'n muurtipe word deur elke muur van daardie tipe gelees, ook die wat jy later teken.
4. {{ui:Maak skoon}} haal 'n kode weg.

Onder elke kode sê die afdeling waar dit vandaan kom: op hierdie element gestel, uit sy tipe, of die projekstandaard vir sy klas. 'n Element se eie kode wen altyd van sy tipe s'n, en die tipe s'n van 'n standaard. Met verskeie elemente gekies, sê 'n blokkie "wissel" as hulle nie een kode deel nie; die tik van een gee dit aan almal. Elke verandering is een ontdoen-stap.

'n Kode kan altyd getik word, of 'n lys gelaai is of nie. As dit nie soos 'n kode van daardie stelsel lyk nie, of nie in die gelaaide lys is nie, sê 'n wenk dit, en die kode word behou soos jy dit getik het.

## Kies die projek se stelsels

Maak **Data** op die modelbalk oop en kies {{ui:Klassifikasie}} (of {{ui:Projekklassifikasie…}} in die Eienskappe-afdeling).

- Merk die stelsels wat hierdie projek gebruik. Eienskappe wys dan net dié.
- **Uniclass**: die Elemente/funksies- (EF), Stelsels- (Ss) en Produkte- (Pr) tabelle kom saam met die program. Hulle is © NBS, gelisensieer onder Creative Commons Attribution-NoDerivatives 4.0, en word onveranderd oorgegee. Die dialoog wys elke tabel se uitgawe en die dag waarop dit gelees is. Dit is nie die nuutste tabelle nie: die uitgewer gee elke kwartaal nuwes op sy eie webwerf uit.
- **OmniClass** en **UniFormat**: geen kodelys kom met die program nie, omdat hul uitgewer nie toelaat dat die tabelle sonder lisensie oorgegee word nie. Tik enige kode, of laai jou kantoor se eie gelisensieerde tabel.
- {{ui:Laai 'n tabel (CSV)…}} lees jou kantoor se eie tabel uit 'n CSV-lêer met 'n kodekolom en 'n titelkolom ('n kopreël met die naam Code, Number of Identifier en Title, Name of Description word self gevind; sonder een word die eerste twee kolomme gebruik). Die tabel bly in hierdie blaaier en word nooit in die projeklêer gesit nie. Slegs die kodes wat jy toewys, word in die lêer gestoor. Jy kan 'n nuwer Uniclass-tabel op dieselfde manier laai.
- {{ui:Gee elemente 'n standaardkode volgens hul klas}} gee elke muur, vloer, dak, deur, venster, trap, helling, kolom, balk en meubelstuk 'n beginner-Uniclass-kode uit die Elemente/funksies-tabel wanneer dit nie sy eie het nie. Elemente wat jy daarna teken, kry dit ook.
- {{ui:Wys die kodes as kolomme in die skedules}} voeg een kolom per stelsel by die Deure-, Vensters-, Mure volgens tipe- en Vertrekke-skedules en hul CSV. 'n Ry van verskeie elemente wys "wissel" wanneer hul kodes verskil.

## Goed om te weet

- Die standaardkodes is CadCraft se eie beginkeuse, nie die uitgewer s'n nie, en is nog nie deur 'n praktisyn nagegaan nie. Kontroleer hulle teen jou projek se standaard.
- In die lêer is 'n standaard 'n werklike klassifikasie, gemerk met die verhoudingsnaam "CadCraft default", en dit verdwyn sodra die element of sy tipe sy eie kode kry.
- Kodes wat 'n ingevoerde lêer reeds het, word gelees en gewys, wat ook al die ander program se spelling vir die stelsel se naam was. Kodes van enige ander stelsel ('n kantoor se eie) word gelys en laat staan.
- Die kodes word weer gelees wanneer die lêer weer oopgemaak word, hier of in 'n ander program. Hulle word ook saam met die IFC5 alpha (IFCX)-uitvoer gedra wanneer daardie laboratoriumopsie aan is, behalwe 'n kode wat op 'n dak gestel is.
- Nog nie gebou nie: 'n boom om 'n tabel vlak-vir-vlak deur te blaai, kodes op verdiepings en vertrekke as projekstandaarde, en 'n kode nagaan teen die uitgawe wat in die lêer genoem word.
