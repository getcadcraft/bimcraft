---
title: Georefereerimine mis tahes projektsiooniga
summary: Ütle BimCraftile, millises kaardisüsteemis mudeli koordinaadid on — täieliku EPSG loendi, mis tahes UTM-tsooni või sinu määratletud projektsiooni järgi — ja kasuta seda asukoha, kaardikihtide ja punktipilvede jaoks.
keywords: projektsioon, koordinaatsüsteem, crs, epsg, utm, utm tsoon, oma projektsioon, proj4, proj-string, prj, wkt, georefereerimine, georefereerimine, kaardi teisendus, ifcprojectedcrs, minu projektsioonid, laiuskraad, pikkuskraad, idakoordinaat, põhjakoordinaat, lambert, gauss-kruger, riigi koordinaatvõrk, riigi ruudustik
from: 6894c1f2
---

Mõned plaanid on joonistatud kaardisüsteemis, mis ei ole lühikeses loendis: UTM-tsoon, riigi võrk või projektsioon, mille keegi on kirja pannud tekstilise definitsioonina. {{ui:Mõõda}} › {{ui:Koordinaatsüsteem…}} võimaldab sul öelda, millist mudel kasutab.

## Vali süsteem mudelile

1. Ava mudel, vali {{ui:Mõõda}} ja seejärel {{ui:Koordinaatsüsteem…}}.
2. Kirjuta otsinguväljale. Töötab mis tahes neist:
   - EPSG number: `32633` või `EPSG:2277`;
   - UTM-tsoon: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - sõnad nimest: `lambert 93`, `mga zone 56`, `texas central`;
   - projektsiooni definitsioon: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, valikuliselt nimega ees (`Minu võrk = +proj=…`);
   - `.prj`-faili tekst või kasuta {{ui:Laadi .prj-fail…}}.
3. Vali tulemus ja seejärel {{ui:Kasuta seda süsteemi}}.

Valik salvestatakse mudelisse (projekti omadusekogumina nimega `CadCraft_CRS`), nii et see avaneb koos mudeliga. Salvesta mudel, et seda säilitada. {{ui:Eemalda mudelist}} läheb tagasi selle juurde, mida fail ütleb.

Kui sinu definitsioon annab samad koordinaadid mis mõni loetletud EPSG süsteem, ütleb BimCraft seda ja kasutab selle koodi; kui mitu loetletud süsteemi jagavad sama matemaatikat, nimetab ta ka teised.

## Minu projektsioonid

Definitsiooni, mille kleebid, või `.prj`-faili, mille laadid, saab salvestada nupuga {{ui:Hoia Minu projektsioonides}}. Loend on selles seadmes (selles brauseris) ja pakutakse järgmisel korral, kui avad valija.

## Mis seda kasutab

- {{ui:Mõõda}} › {{ui:Asukoht}} teisendab valitud punkti laiuskraadiks ja pikkuskraadiks mudeli süsteemi kaudu. Varem peatus see märkusega, kui fail nimetas oma kaardisüsteemi ilma EPSG koodita; kui valik on salvestatud, annab see vastuse.
- Mudeli all olevad kaardikihid kasutavad sama süsteemi. Teises süsteemis olev punktipilv või maastikufail pakutakse mudeli süsteemis (vt allpool).
- {{ui:Sätted}} › {{ui:BimCraft}} › {{ui:Asukoht}} › {{ui:Vali mõni muu süsteem…}} seab, mida {{ui:Asukoht}} lisaks näitab: laiuskraadi ja pikkuskraadi mis tahes loetletud geograafilises süsteemis või idakoordinaadi ja põhjakoordinaadi mis tahes projitseeritud süsteemis, lisaks mudeli enda omale.

## Mudel, mis pole veel kaardil

Kui failil ei ole kaardi teisendust, avab süsteemi valimine akna {{ui:Paiguta see mudel kaardile}}. Selle saad avada ka menüüst {{ui:Mõõda}} › {{ui:Kaardi algpunkt…}}.

1. Anna mudeli algpunkt süsteemi idakoordinaatidena ja põhjakoordinaatidena või sisesta laiuskraad ja pikkuskraad ning vali {{ui:Teisenda idakoordinaatideks ja põhjakoordinaatideks}}.
2. Anna pööre ruudustiku põhja suhtes (kraadides, vastupäeva; 0 tähendab, et mudeli Y-telg osutab ruudustiku põhja) ja algpunkti kõrgus.
3. Mõõtkava algab mudeli ja kaardi ühikute erinevusest (0,001 millimeetrimudelile meetrilisel ruudustikul). Muuda seda ainult kombineeritud maapinna-ruudustiku teguri jaoks.
4. Vali {{ui:Paiguta kaardile}}. Üks tagasivõtmise samm kirjutab IfcProjectedCRS-i ja IfcMapConversion-i (IFC4). Mudel ise ei liigu.

IFC2X3 fail ei sisalda kumbagi olemit. BimCraft kirjutab samad arvud viisil, mida see standard lubab: buildingSMART-i omadusekogumid `ePSet_MapConversion` ja `ePSet_ProjectedCRS` projektil, asukoha laiuskraad ja pikkuskraad ning tõeline põhi. Dialoog ütleb seda. Salvesta mudel, et seda säilitada.

## Mudel, mis on juba kaardil

Kui fail paigutab end juba kaardile ja sa valid teise süsteemi, küsib BimCraft:

- {{ui:Muuda ainult seda, mida Asukoht näitab}} säilitab faili enda georeferentsi ja kasutab sinu valikut {{ui:Asukoht}}, kaardikihtide ja punktipilvede jaoks (mudeli arvud loetakse siis uude süsteemi).
- {{ui:Liiguta mudel sellesse süsteemi}} kirjutab georeferentsi ümber: algpunkt läbib projektsiooni (idakoordinaadid, põhjakoordinaadid, kõrgus, pööre ja mõõtkava) ning IfcProjectedCRS (nimi, andmestik, projektsioon, tsoon, ühik) kirjutatakse ümber, nii et salvestatud IFC ütleb uue süsteemi. Koht maa peal jääb samaks: algpunkt säilitab oma laiuskraadi ja pikkuskraadi. Mudelis olevad elemendid ei muutu kunagi; muutub ainult georeferents.

Dialoog näitab enne valikut vana ja uut algpunkti. Sinna ja tagasi liikumine toob algpunkti tagasi millimeetri täpsusega.

## Punktipilved ja maastik teises süsteemis

Pilv või mõõdistusfail kannab oma süsteemi (LAS, LAZ, E57, GeoTIFF) või ei kanna üldse. Kui see erineb mudeli omast, pakub BimCraft {{ui:Projitseeri ümber mudeli süsteemi}}. Punktid liigutatakse partiidena (töötlejas, kui neid on palju, et leht jääks kasutatavaks), faili sinu arvutis ei puudutata ja olekuread ütlevad, mis tehti. Faili uuesti avamine viib tagasi selle enda süsteemi. Juba avatud pilve puhul teeb sama pilveriba {{ui:Projitseeri mudeli süsteemi…}}.

Kui fail ei nimeta süsteemi, küsib BimCraft {{ui:Mis süsteemis see fail on?}}: vali see nupuga {{ui:Vali süsteem…}} ja vastus jäetakse selle faili jaoks sellesse seadmesse meelde. {{ui:Säilita faili enda süsteem}} jätab punktid nii, nagu need on.

## Kui midagi on ligikaudne

Probleemid on loetletud dialoogis ja paneelis Probleemid, mitte kunagi vaikselt:

- Koht väljaspool ala, milleks süsteem on tehtud: arvud töötavad, kuid moonutus kasvab.
- Andmestiku nihked, mis vajavad ruudustikufaili (NADCON, NTv2 jms), ei ole saadaval. Teise andmestikuga süsteemid nihutatakse ruudustikuvaba nihkega, mida EPSG register loetleb, ja tulemus on ligikaudne sätestatud täpsuse piires, mida sõnum annab meetrites.
- Punkt, mida ei saa projitseerida, jäetakse välja ja loetakse; fail üle suuruspiiri lükatakse tagasi koos nimetatud piiriga.

:::tip
Kaardikoordinaadid vajavad kaardi teisendust. Fail ilma selleta paigutatakse kaardile funktsiooniga {{ui:Kaardi algpunkt…}}.
:::

:::note
Ruudustikufailita andmestike vahel liikumine on hea kuni mõne meetrini; asukoha tulemus ütleb, kui palju, kui kataloog seda teab.
:::
