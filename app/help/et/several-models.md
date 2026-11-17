---
title: Mitme IFC-mudeli vaatamine koos
summary: Lisa stseenile rohkem IFC-faile, näiteks arhitektuuri-, konstruktsiooni- ja tehnosüsteemide omad, vaata neid samades koordinaatides, teisalda üks, peida üks ja vali, millist muudad.
keywords: ühendamine, föderatsioon, ühendatud mudel, mitu mudelit, mitu faili, kombineerimine, ülekate, koordineerimine, eriala, konstruktsioon, mep, tehnosüsteemid, nihe, teisalda mudel, aktiivne mudel, lisa mudel
from: df0efbbf
---

## Mida sa teed

Vaata eri erialade mudeleid ühes kohas: arhitekti mudel koos konstruktsiooni- ja tehnosüsteemide mudelitega. Igaüks jääb omaette failiks; BimCraft ainult näitab neid koos.

## Sammud

1. Ava esimene IFC-mudel tavapäraselt.
2. Vasakul {{ui:Mudelid}} klõpsa {{ui:Lisa mudel…}} ja vali üks või mitu IFC-faili. Igaüks ilmub loendisse ja 3D-vaatesse.
3. Eemalda linnuke, et mudel peita; märgi uuesti, et see taas näidata.
4. Kui mudel tuleb valesse kohta (teine mõõdistuspunkt), klõpsa selle all olevat {{ui:Teisalda}}, sisesta, kui palju X, Y ja Z suunas meetrites nihutada, ja klõpsa {{ui:Rakenda}}.
5. Punktiga mudel on see, mida sa muudad. Klõpsa teise mudeli punkti, et seda muuta.
6. Klõpsa mudeli kõrval olevat ×, et see stseenist välja võtta.

## Meeskonna mudelite avamine

Kui avatud mudel on pilvefail tiimiprojektis, ilmub loendi alla {{ui:Ava meeskonna mudelid}}. See avab projekti teised IFC-mudelid selle kõrvale, igaüks projekti määratud nihke võrra teisaldatuna. Sinult peidetud mudelid jäävad välja ja neid loetakse; mudel, mida projekt pöörab, avatakse pööramata ja samuti loetakse; mitte-IFC failid (näiteks DWG) jäetakse vahele ja nimetatakse olekureal. Mudelit, mis on juba avatud, ei avata kunagi kaks korda. Nupp on peidetud failile, mis ei ole tiimiprojektis.

## Mida peaksid nägema

- Iga mudel esimese mudeli koordinaatides, nii nagu tema fail paigutab. Sama projektist eksporditud mudelid joonduvad ilma midagi liigutamata.
- Mudeli, mida sa ei redigeeri, elemendi valimine kuvab selle omadused ainult lugemiseks, ja {{ui:Redigeeri seda mudelit}} vahetab.
- {{ui:Mudelipuu}}, {{ui:Korrused}}, {{ui:Värv}}, {{ui:Muudatused}} loend, raamatukogu üksuste paigutamine ja {{ui:Salvesta IFC-na}} töötavad kõik redigeeritava mudeli kohta. Peitmine, eraldamine, läbipaistvus ja {{ui:Vali kõik}} töötavad kõigi mudelite kohta.
- {{ui:Salvesta IFC-na}} laadib alla redigeeritava mudeli ainult selle muudatustega.

## Levinud vead

- **Mudel on kaugel või puudub.** Selle fail kasutab teisi koordinaate. Leia see {{ui:Mahuta}} abil ja teisalda see {{ui:Teisalda}} abil õigesse kohta.
- **Valitud elemendil on Kustuta või Kopeeri hallina.** See kuulub teisele mudelile: lülitu sellele enne.
- **Faili avamine nupuga „Vali fail“ asendas kõik.** See alustab uut stseeni. Kasuta {{ui:Lisa mudel…}}, et lisada faile olemasolevale.

## Järgmine

- [Peida, eralda ja tee elemendid läbipaistvaks](topic:hide-and-isolate)
- [Värvi elemendid omaduse järgi](topic:color-by-property)
