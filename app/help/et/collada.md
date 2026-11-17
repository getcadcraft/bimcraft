---
title: Mudeli eksport Collada-na või Google Earthi jaoks
summary: Kirjuta avatud IFC-mudelid Collada (.dae) failina Blenderi ja teiste 3D-programmide jaoks või Google Earthi paketina (.kmz), mis asetub kaardil mudeli tegelikku kohta.
keywords: collada, dae, kmz, kml, google earth, blender, eksport, geolokatsioon, georefereerimine, laiuskraad, pikkuskraad, asukoht, 3D-programmid
from: 81cfec09
---

{{ui:Collada}} tööriistaribal (või menüü- ja ribastiilides failimenüüs {{ui:Ekspordi Collada (.dae, .kmz)…}}) kirjutab avatud sisu Collada 1.4.1 failina: iga kuvatava mudeli, ning ühendatud mudelid seal, kuhu need on paigutatud.

## Eksport

1. Vali {{ui:Collada}}.
2. Vali vorming:
   - {{ui:Collada fail (.dae), Blenderi ja teiste 3D-programmide jaoks}}.
   - {{ui:Google Earthi pakett (.kmz): mudel paigutatud kaardil oma kohale}}. Pakutakse ainult siis, kui mudelil on asukoht.
3. Vali suvandid ja seejärel {{ui:Ekspordi}}. Fail laaditakse alla ning olekuriba ütleb, mitu elementi sisse läks.

| Suvand | Mida see teeb |
|---|---|
| {{ui:Kirjuta asukoht faili}} | Lisab .dae-faili faili algpunkti laiuskraadi, pikkuskraadi, kõrguse ja suuna |
| {{ui:Kõrgus}} | {{ui:Maapinnal: mudeli tasand 0 on maapinnal}} või {{ui:Mudeli enda kõrgus merepinnast}} |
| {{ui:Kaasa ruumid ja alad}} | Ruumid lähevad ka sisse (vaikimisi need jäetakse välja) |
| {{ui:Kaasa peidetud elemendid}} | Peidetud elemendid kirjutatakse samuti (vaikimisi kirjutatakse ainult see, mis on nähtav) |

## Mis on failis

| Mudelis | Collada failis |
|---|---|
| Hoone, korrused | Pesastatud sõlmed, korrused kõrguse järjekorras; ilma korruseta elemendid rühmas „Paigutamata“ |
| Iga element | Üks sõlm oma võrgustikuga, nimetatud nagu mudelis (nimi, või kui seda pole, klass ja silt) |
| Klass, GlobalId, eelmääratud tüüp | Sõlme lisaandmetes (profiil IFC), täpse nimega (profiil ModelCraft) |
| Värvid | Materjalid, läbipaistvusega |
| Ühikud ja teljed | Meetrites, Z üles. Eesmise mudeli tasand 0 on kõrgusel 0 |

Mudel jääb maapinnal algpunkti lähedale, nii et programmid, mis töötavad ühekordse täpsusega, näitavad seda ilma värisemiseta. ModelCraft kirjutab oma Collada-failid sama kirjutajaga ja avab need elementide nimedega.

## Kust asukoht pärineb

Asukoha annab eesmine mudel samamoodi, nagu {{ui:Mõõda}} arvutab punkti laiuskraadi ja pikkuskraadi:

- Kaardi teisendus (IFC4 IfcMapConversion või IFC2X3 omadusehulgad) mudeli koordinaatsüsteemi kaudu. Mudeli jaoks valitud süsteem on olulisem kui see, mille fail nimetab.
- Muidu saidi laiuskraad ja pikkuskraad (ligikaudne; piisav kogu saidi ulatuses).

Suund mõõdetakse, mitte ei eeldata: arvestatakse kaardi pööret, tõelist põhjasuunda ja kaardi konvergentsi. Mudelile asukoha andmiseks kasuta tööriistas {{ui:Mõõda}} käsku {{ui:Kaardi algpunkt…}}.

## Teistes programmides

- **Google Earth** loeb .kmz-faili: mudel ilmub oma asukohta, pööratud põhja poole. Tavaline .dae-fail ei sisalda kohta, kust Google Earth asukoha loeks; kasuta .kmz-faili.
- **Blender** (4.x ja varasemad): File, Import, Collada (.dae). Iga element tuleb sisse oma objektina koos materjaliga. Asukoht jääb faili lisaandmetesse, mida Blender ei loe. Blender 5.0 on Collada-importija eemaldanud; sel juhul kasuta selle asemel {{ui:USD}} või glTF-eksporti, või ava .dae Blender 4.5-s ja salvesta .blend-failina.

Meie testid kontrollivad iga faili Collada 1.4.1 skeemi vastu ja loevad selle tagasi sõltumatu Collada-lugejaga. Faili pole avatud Blenderis ega Google Earthis.
