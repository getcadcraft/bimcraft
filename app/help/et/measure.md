---
title: Mõõda vahemaid, pindu ja asukohti 3D-s
summary: Mõõda kahe punkti vahel IFC-mudelis, püüdes nurkadele ja servadele, loe erinevus mööda X-, Y- ja Z-telge ning mõõda lameda pinna pindala.
keywords: mõõda, mõõtmine, vahemaa, pikkus, mõõde, pindala, pinna pindala, püüd, nurk, serv, mõõdulint, joonlaud, vabaruum, asukoht, laiuskraad, pikkuskraad, lat long, koordinaadid, georeferents, kaarditeisendus, EPSG, mõõdistus, idakoordinaat, põhjakoordinaat, WGS 84, datum
from: 5f430bba
---

## Mida sa teed

Kontrolli vabaruumi, seina pikkust või pinna suurust otse mudelist, ilma autoriprogrammi avamata.

## Sammud

1. Ava IFC-mudel.
2. Klõpsa tööriistaribal {{ui:Mõõda}} või vajuta {{key:M}}. Vaate allserva avaneb riba.
3. **Vahemaa:** kui on valitud {{ui:Vahemaa}}, klõpsa esimesele punktile, seejärel teisele. Nurga lähedal püüab kursor sinna, serva lähedal serva peale; kursori juures olev väike silt ütleb, kumb. Iga kahe klõpsu paar teeb ühe mõõdu.
4. **Pinna pindala:** vali {{ui:Pinna pindala}} ja klõpsa pinnale. Kogu lame pind helendab ja selle pindala kuvatakse.
5. **Sirged jooned:** hoia teise punkti valimisel {{key:Shift}} all või vajuta ribal {{ui:Sirge}}, et see püsiks sirgena. Joon kulgeb mööda ühte telge, millele kursor on kõige lähemal (ülevaates mööda plaani X või Y; teistes vaadetes mööda X, Y või Z), ja kursori silt ütleb "sirge telje sihis". {{key:M}} alustab ja lõpetab endiselt mõõtmise.
6. Klõpsa {{ui:Tühjenda}}, et mõõdud eemaldada, või {{ui:Valmis}} (või {{key:Esc}}), et mõõtmine lõpetada.

## Mida peaksid nägema

- Joon kahe punkti vahel, pikkus joonel, ja ribal pikkus koos sellega, kui palju see kulgeb mööda X, Y ja Z (mudeli telgedes, Z üles), kõik tööriistaribal valitud {{ui:Ühikud}}-es.
- Pinna pindala ruutmeetrites, pinnal ja ribal.
- Sildid jäävad oma mõõtude juurde, kui pöörad, liigutad ja suumid.
- Mõõtes ei vali klõpsud elemente. Lõikeplaan või -kast lõikab ikka mudelit ja sa saad mõõta seda, mida see näitab, lõigatud pinnad kaasa arvatud.

## Kus punkt asub maakeral

Klõpsa mõõturibal {{ui:Asukoht}} ja seejärel klõpsa punktil mudelil (see püüab nurkade ja servade külge nagu vahemaade puhul). Riba näitab:

- **laiuskraadi ja pikkuskraadi** kümnendkraadides ning kraadides, minutites ja sekundites, alguses WGS 84 süsteemis;
- **kaardikoordinaate** (idakoordinaate ja põhjakoordinaate, kirjutatud tööriistaribal valitud {{ui:Ühikud}}-es) mudeli enda kaardisüsteemis, näiteks `EPSG:28356`;
- **kõrguse** ja vertikaalse lähtepinna, mille fail nimetab, ning faili **enda lähtepinna** (näiteks GDA94).

{{ui:Kopeeri}} paneb kõik lõikelauale ühele reale. Muuda süsteemi, milles laiuskraad ja pikkuskraad on, jaotises {{ui:Sätted}} › {{ui:BimCraft}} › {{ui:Asukoht}}: WGS 84 (nagu GPS ja veebikaardid), faili enda lähtepind või mõni muu tavaline, näiteks ETRS89 või NAD83.

See vajab georefereeritud mudelit: sellist, mis on eksporditud kaardikoordinaatidega (kaarditeisendus projitseeritud süsteemi EPSG-koodiga). Mudel, millel on ainult koha laiuskraad ja pikkuskraad, saab ligikaudse asukoha, mis arvutatakse koha punkti ja tema tõelise põhja järgi, ja riba ütleb seda. Kui mitu mudelit on avatud, kasutab iga punkt oma mudeli georeferentsi.

:::note
Lähtepindade vahel liikumine (näiteks GDA94 kuni WGS 84) tehakse ilma ruudustikufailideta, seega on see täpne mõne meetrini; olekurida ütleb, kui täpne see on. Kaardikoordinaadid ise on täpsed.
:::

## Levinud vead

- **"…ei ole georeferentsi."** Failil ei ole kaarditeisendust ega koha laiuskraadi ja pikkuskraadi. Ekspordi see uuesti, kui selle koordinaatsüsteem on seatud (jagatud koordinaadid / mõõdistuspunkt autoriprogrammis).
- **Kaardikoordinaadid, aga laiuskraadi ja pikkuskraadi ei ole.** Fail nimetab oma kaardisüsteemi ilma EPSG-koodita või koodiga, mida loendis ei ole; olekurida ütleb, milline.
- **Punkt tabab pinda, mitte nurka.** Püüdmine vaatab kursori all olevat elementi. Liigu nurgale lähemale või suumi sisse.
- **Pindala on väiksem kui oodatud.** Avad on välja jäetud ja pind, mis paindub, on mitu pinda: klõpsa igaühele.
- **{{key:Esc}} lõpetas mõõtmise.** Esimene {{key:Esc}} viskab pooleli oleva vahemaa ära; teine lõpetab.

## Järgmine

- [Lõika IFC-mudel lõikeplaaniga](topic:section-plane)
- [Peida, isoleeri ja vaata elemente läbi](topic:hide-and-isolate)
