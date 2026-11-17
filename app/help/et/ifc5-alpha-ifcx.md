---
title: IFC5 alfa (IFCX-failide) avamine ja eksport
summary: Laborivalik IFC5 alfa failivormingu (.ifcx) jaoks. Avage fail koos selle kihtidega, vaadake, mida lugemine ei suutnud kontrollida, ning eksportige avatud mudelid. Vorming on veel muutumas, seega lugege enne.
keywords: ifc5, ifcx, alfa, buildingsmart, json, kihid, skeem, labor, kogused, qto, eksport, import
from: cffe1669
---

IFC5 alfa (faililõpuga {{ui:.ifcx}}) on vorming, mida buildingSMART veel kujundab. See ei ole lõplik: failid ja meie nende lugemine võivad muutuda. Sellepärast on see laborivalik ja lugemine tuleb esimesena.

## Lülitage sisse

1. Valige {{ui:Sätted}}, seejärel jaotis {{ui:IFC5 alfa (IFCX)}} vahekaardil BimCraft.
2. Märkige {{ui:IFC5 alfa (IFCX) – vorming on veel muutumas; loe enne}}.

See on vaikimisi väljas. Kui see on väljas, lükatakse .ifcx-fail tagasi sõnumiga, mis suunab siia. {{ui:Ava IFC5 alfa (.ifcx)…}} ja {{ui:IFC5 alfa}} eksportimise nupp ilmuvad, kui see on sisse lülitatud.

## Avamine

- Valige .ifcx-fail abil {{ui:Ava fail või kaust}} (see asendab avatud mudeli, pärast tavapärast küsimust muudatuste kohta), või
- valige {{ui:Ava IFC5 alfa (.ifcx)…}} ja valige mitu faili korraga: fail, selle kihid ja skeemifailid, mida see impordib. Kui mudel on juba avatud, **lisatakse fail selle kõrvale**; mudelite loendi x eemaldab selle uuesti, mis on tagasivõtmine.

IFCX-fail loetleb sõlmi (tee, selle alamelemendid, mida see pärib, ja atribuudid). Mitu faili võivad kirjeldada sama sõlme: hilisem fail (kiht) tühistab varasema atribuudid ning null-alamelement eemaldab alamelemendi. BimCraft koostab need ja joonistab tulemuse väikese IFC4-mudelina: projekt, asukoht, hoone, korrused ja elemendid nimede, klasside, omaduste, koguste, värvide ja võrkudega.

Võrgust ei laadita midagi alla. Skeemifaile, mida fail impordib (näiteks `ifc@v5a.ifcx`), kasutatakse ainult siis, kui valisite need failiga koos; vastasel juhul ütleb aruanne seda ning atribuudid loetakse ilma tüübikontrollita.

### Aruanne

Pärast avamist loetleb aruanne, mida lugemine leidis: andmed, mis ei vasta oma skeemile, skeemifailid, mida ei antud, ja atribuudid, millel pole siin IFC-tähendust. Atribuudid ilma vastenduseta **säilitatakse** mudelis, neid ei jäeta välja, ning need kirjutatakse eksportimisel tagasi.

## Mis muutub milleks

| IFCX-failis | BimCraftis |
|---|---|
| Sõlm IFC-klassiga (projekt, asukoht, hoone, korrus, sein …) | Vastav IFC4-element; klass, mida see lugemine ei tunne, muutub ehitiselemendi proxy-ks |
| Nimi, mis sõlmel on oma vanema all | Elemendi nimi |
| Atribuudid koguse liigiga (Length, Area, Volume, Mass …) | IFC4 koguste komplekt nimega `Qto_IFCX` (IFC4 kogused jäävad IFC4 `Qto_*` komplektideks) |
| Muud omaduste atribuudid | Omaduste komplekt nimega `Pset_IFCX` |
| Võrgu ja teisenduse atribuudid | Elemendi kolmnurgad ja paigutus; nähtamatuid võrke ei joonistata |
| Värv, läbipaistmatus, materjal, klassifikatsioon | Elemendi pinnastiil, materjal ja klassifikatsioon |

Ühikud võetakse meetritena, Z on üleval: alfa ütleb, et ühikud dokumenteeritakse hiljem.

## Eksport

Valige tööriistaribal {{ui:IFC5 alfa}}, lugege märkust ja seejärel {{ui:Ekspordi .ifcx}}. Failil on meie oma päis (autor CadCraft, versioon ifcx_alpha) ning see ütleb endas, et on alfa-vorming. Iga mudel kirjutatakse oma failikoordinaatides, meetrites, koos nimede, klasside, omaduste komplektide, koguste (atribuutidena koos liigiga), värvide ja kolmnurkadega. Kihid ja pärimine kirjutatakse lamendatult. Kontrollige faili programmis, millele te selle saadate.

## Piirangud

- Kõverat geomeetriat (kõverad, pinnad) ei loeta: ainult kolmnurkvõrke.
- Seinas paiknevad uksed ja aknad paigutatakse korrusele; seina, millest nad pärinevad, ei seota.
- IFC4 `Qto_*` komplektide nimed säilitatakse meie enda atribuudirühmadena (`cadcraft::qto::…`); standardses alfa-skeemis on vaid mõned koguste nimed.
- Vorming võib meie all muutuda; täna tehtud fail ei pruugi homme lugeda.
