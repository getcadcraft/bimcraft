---
title: Loendid, mõõdud ja plaani PDF
summary: Ukse-, akna-, seina- ja ruumiloendid, mis muutuvad joonistamise ajal, mõõdud plaanil ning korruse plaan salvestatud PDF-ina standardses mõõtkavas.
keywords: loend, ukse loend, akna loend, seina loend, ruumi loend, kogused, koguste arvestus, pindala, csv, tabelarvutus, mõõdud, mõõt, prindi, pdf, plotimine, mõõtkava, 1/4", 1:50, leht
from: d97cd16e
---

## Mida sa teed

Vaata, mida sinu joonistatud hoone kokku annab, juba joonistamise ajal: mitu ust ja akent iga suurust, kui palju seina iga tüüpi, kui suur on iga ruum. Pane mõõdud plaanile ja salvesta see PDF-ina, et printida või saata.

## Loendid

Kui {{ui:Joonista}} on sisse lülitatud, näitab vasakpoolne paneel {{ui:Loendid}} korraga ühte tabelit:

- **Uksed** ja **Aknad**: igaüks oma märgi järgi (D1, D2 … ja W1 …, nagu sa need paigutad), oma tüüp, laius, kõrgus (ja aknalaud), tasand ja sein, milles see on.
- **Seinad tüübi järgi**: iga seinatüübi kohta, mitu seina, nende paksus, nende kogupikkus ja nende külgpindala kui **Bruto pindala**, **Mahaarvamised** ja **Netopindala**, koos kokkuvõttega.
- **Ruumid**: number, nimi, tasand, pindala ja ümbermõõt, koos kogupindalaga.
- **Põrandad**: iga põrand oma tasandi, liigi ja paksusega ning oma bruto-, mahaarvamise- ja netopindalaga.
- **Viimistlused**: iga seinatüübi viimistluskiht (materjali ja seina külje järgi) ning laed, koos tahkude arvu ning bruto, mahaarvamiste ja neto näitajatega.
- **Seinatüübid: koguste andmed**: mida igal seinatüübil üks kord sisestati (ühik, mört, määr), koos seinte arvu, nende pikkuse ja netopindalaga ning määr korda mõõdetud kogus. Vaata [Seinakomplektid](topic:wall-assemblies).
- **Finishes by room**, **Finishes by wall**, **Finishes by zone** ja **Finish quantities** (**Viimistlused ruumi järgi**, **Viimistlused seina järgi**, **Viimistlused tsooni järgi** ja **Viimistluste kogused**): mis katab iga ruumi, koos pindaladega, plaatide arvuga koos lõigetega ja aluspinna mahtudega. Vaata [Ruumide viimistlused ja viimistluse loendid](topic:room-finishes).
- Sinu enda **seadistused**: loend, mille sa koondasid, summeerisid ja salvestasid nime all. Vaata [Koosta, salvesta ja ekspordi loend](topic:schedule-layouts).

Tabelid muutuvad iga muudatusega. Klõpsa reale või ühele arvule, et valida elemendid, millest see tuli. {{ui:Laadi CSV alla}} salvestab tabeli, et avada tabelarvutuses; **Laadi Excel alla** ja **Kopeeri Google Sheetsi jaoks** on selle all. **Room finishes** ja **Specification** ([Kirjuta spetsifikatsioon mudelist](topic:specification)) avanevad samast kohast.

## Iga kihi pindala ja maht

Vali loendite loendist **Layers: area and volume** (**Kihid: pindala ja maht**). See annab iga kasutuses oleva seina-, põranda-, katuse- ja lae tüübi iga kihi kohta ühe rea: element, tüüp ja selle LOD, kiht (loendatud seina välisküljelt või põranda, katuse või lae pealt), selle materjal ja funktsioon, paksus, mitu elementi, **netopindala** ja **maht**.

- Pindala on selle tüübi elementide netopindala, mõõdetud täpselt nii nagu seinte, põrandate ja viimistluste loendis, projekti mõõtmismeetodi järgi. Katus mõõdetakse kalde järgi; ükski mõõtmismeetod ei sisalda katuste reeglit.
- Maht on see pindala korda kihi enda paksus.
- Põrand, katus või lagi ilma tüübita on üks rida: üks kiht oma paksusega.
- Õhuvahe on loetletud oma pindalaga ja jäetud välja kogumahust. Membraanil on pindala, kuid mahtu ei ole.

Klõpsa reale, et valida selle elemendid. {{ui:Laadi CSV alla}} salvestab tabeli.

## Kuidas pindalad mõõdetakse

Iga pindala on kolm arvu, mis liituvad: bruto miinus mahaarvamised on neto. Reegel on kirjutatud iga tabeli kohale ja see on üks reegel: loendid, IFC-failis salvestatud kogused ja TakeoffCraftile antud koguste arvestus kõik kasutavad seda.

- **Sein**: bruto on seina üks tahk, selle pikkus mööda keskjoont korda kõrgus (tegelik tahk seina puhul, mille ülemine või alumine osa on kujuga). Iga uks, aken ja muu ava lahutatakse, laius korda kõrgus, iga ava üks kord.
- **Põrand või lagi**: bruto on tema piirjoone sisemine pindala. Iga ava ja väljalõige selle sees lahutatakse üks kord.
- **Seina viimistlus**: iga seinatüübi viimistluskiht katab ühe seina tahu, mõõdetuna nagu sein, samade mahaarvatud avadega. Viimistlus on seina kiht: see on loetletud viimistluste all ega lisata seina pindalale, nii et seina koos ukse või aknaga ei loeta kunagi kaks korda.

See on **CadCraft vaikimisi**: iga ava lahutatakse, sõltumata selle suurusest; seinte pikkused on mööda keskjoont; avade servi ei mõõdeta. Seda kasutab iga projekt, kuni sa valid teise meetodi.

## Vali mõõtmismeetod

Loendi kohal loetleb **Measurement method** (**Mõõtmismeetod**) BimCraftiga kaasas tulevad meetodid ja **Load a method file** (**Laadi meetodifail**) võtab sinu büroo oma. Valik salvestatakse IFC-faili ühe {{ui:Võta tagasi}} sammuna ning kolm asja järgnevad sellele kohe: loendid, IFC-failis salvestatud netokogused ja TakeoffCraftile antud koguste arvestus. Reegel iga tabeli kohal algab siis meetodiga, selle allikaga, kuupäevaga, mil allikas loeti, ja sõnadega **Kvantiteedimõõtja poolt kontrollimata**.

Meetod on väike faktifail, mitte programmikood. Iga koguse kohta ütleb see:

- **väikseim mahaarvatav ava**: näiteks 0.5 m² või väiksem ava jääb seina pindalasse;
- **kuidas seinte ühenduskohti mõõdetakse**: mööda keskjoont; või seinal, mis lõpeb teise vastu, mõõdetuna teise seina tahuni; või iga seinaots, mis kohtub teise seinaga, mõõdetuna lähima tahuni;
- **kas avade servi mõõdetakse** viimistluse jaoks (viimistluse tagasikäigud avadesse), pindalana või, kui need on madalad, pikkusena. Avade serva sügavus võetakse poole seina paksusest;
- **mida see ütleb muurimise kohta**: kuidas seda mõõdetakse ja mis tahes jäätmete või mörditeksi lubatud osa.

Meetodid, mis tulevad BimCraftiga:

| Meetod | Seinad: väikseim mahaarvatav ava | Seinaviimistlused | Laed | Muurimine |
|---|---|---|---|---|
| CadCraft vaikimisi | iga ava | iga ava | iga väljalõige | jäätmete varu ei ole |
| RICS NRM 2 (Ühendkuningriik), 2. väljaanne 2021 | 0.5 m² või väiksem jääb sisse | 1 m² või väiksem jääb sisse | 1 m² või väiksem jääb sisse | pindala järgi; protsente ei ole ette nähtud |
| AAQS Standard Method for Africa 2015 | 0.5 m² või väiksem jääb sisse | 0.5 m² või väiksem jääb sisse | 0.5 m² või väiksem jääb sisse | pindala järgi; mõõdetud netona, 0% jäätmeid |
| IS 1200 (India), 1976, tellismüür | 0.1 m² või väiksem jääb sisse | vaikimisi (vt allpool) | vaikimisi | mahu järgi |
| BIA Technical Note 10 (Ameerika Ühendriigid), 2009 | iga ava | vaikimisi | vaikimisi | 5% jäätmeid ühikutel, 15% mörtelil |

Loe need piirangud enne, kui meetodile toetud:

- **Kvantiteedimõõtja ei ole ühtegi neist kontrollinud.** Igaüks on tehtud nimetatud allikat lugedes ja selle numbrite salvestamisel koos nende aluseks oleva punktiga. Kui oled kvantiteedimõõtja ja saad ühte kontrollida, tahaksid rakenduse tegijad sinult kuulda.
- Kui reeglit ei õnnestunud allikast lugeda, ütleb meetod selle kohta **kinnitamata** ja kasutatakse CadCraft vaikimisi. Ühelgi BimCraftiga kaasasolevatel meetodil ei ole kinnitatud reeglit seinte ühenduste, avade servade ega põrandate kohta, seega mõõdetakse neid kõigi nende all vaikimisi viisil.
- IS 1200 lahutab krohvis avad kolmes vööndis. Meetodifail ei saa veel vööndeid hoida, seega seinaviimistlused kasutavad selle meetodi all vaikimisi ja reegel ütleb seda.
- Lõuna-Aafrika standardsüsteem ehitustööde mõõtmiseks **ei** ole nende hulgas: selle tekst ei olnud loetav. AAQS Aafrika meetod ütleb, et see on loodud selle süsteemi 1991. aasta väljaande põhjal, kuid see on teine dokument.
- BIA tehniline märkus 10 on tööstuse hindamismärkus, mitte standardne mõõtmismeetod.
- Ava, mis on täpselt väikseim suurus, järgib meetodi enda sõnu („ei ületa“, „väiksem kui“). Suurused, mis jäävad selle 2 osa 10 000-st piiresse, loetakse täpselt selleks.
- Meetodi all järgivad faili seina netokülgpindala ning põranda või lae netopindala meetodit, ja koguste komplekt nimetab seda. Faili bruto pindalad ja mahud jäävad nagu joonistatud.

**Märkused selle meetodi kohta** valija all ütleb, mida iga allikas lahtiseks jätab. **Ava allikas** viib dokumendini.

### Sinu büroo oma meetod

Meetodifail on JSON vormingus `cadcraft-measurement-method`. Iga väärtus selles nimetab punkti, millest see pärineb; väärtus ilma punktita lükatakse tagasi. Fail kontrollitakse laadimisel, vale väli nimetatakse, ega kasutata midagi failist, mis ei läbi kontrolli. Kui see on valitud, salvestatakse fail projekti sisse, nii et projekt avaneb samamoodi teises arvutis. Selle id on sinu enda lihtne nimi (see ei tohi olla rakendusega kaasasoleva meetodi id).

## Tellised, plokid ja mört

**Seinatüübid: koguste andmed** loeb ühikud ja mörti iga seinatüübi kohta, mille ühikul on pikkus ja kõrgus (vaata [Anna tüübile tema koguste andmed](topic:wall-assemblies#give-a-type-its-takeoff-data)). Need on valemid täpselt nii, nagu need arvutatakse:

- **Ühikud pinnaühiku kohta ühe kihi kohta** = 1 / ((ühiku pikkus + vuug) × (ühiku kõrgus + vuug)). 215 × 65 mm tellis 10 mm vuugiga: 1 / (225 × 75 mm) = 59.26 m² kohta.
- **Ühikute laiused üle kihi** = (kihi paksus + vuug) / (ühiku laius + vuug), ümardatud täisarvuks, vähemalt 1. 102.5 mm kiht 102.5 mm tellistest on 1; sama tellistega 215 mm sein on 2.
- **Ühikud** = ühikuid pinnaühiku kohta × ühikute laiused üle kihi × seina netopind, liidetud tüübi muurikihtide üle.
- **Tellitavad ühikud** = ühikud × (1 + jäätmete % / 100), ümardatud üles täisühikuni. Jäätmed on need, mis tüübil sisestatud; kui ei ole sisestatud, siis meetodi oma, kui see selle ütleb; muidu 0%.
- **Mört** = netopind × kihi paksus, miinus ühikute maht (ühikud × pikkus × kõrgus × laius), siis pluss tüübil sisestatud lisaprotsent pesade või perforatsioonide jaoks, siis pluss meetodi lubatud varu, kui see on ette nähtud. Vajab ühiku laiust.

Eeldatakse, et iga tüübi muurikiht on ehitatud tüübi ühest ühikust; kiht, mis on paksem kui üks ühiku laius, loetakse nii mitmeks ühiku laiuseks, iga nagu pikuti laotud kiht, nii et lõigatud ühikuid, nurkaühikuid ja erikujulisi ühikuid ei loeta eraldi; kus ükski kiht ei ole märgitud ühikust ehitatuks, võetakse tuumakihid kihtidena, ja selle kohta ütleb tabeli kohal olev märkus. **Kogus** on määr korda see, mille kohta määr on, mis võib nüüd olla ka tellitavad ühikud, 1000 tellitavat ühikut või m³ mörti.

Märgid on elementide IFC silt: muuda üht **Omadustes** (Silt) ja loend järgib. Iga IFC-mudeli puhul, joonistatud või mitte, [Liida kokku kogused, loetle elemendid ja koosta ruumide loend](topic:quantity-totals) liidab kokku igast omadusest.

## Mõõdud

Plaan näitab iga joonistatud seina pikkust mööda tema välist tahku (siseseina puhul mööda ühte tahku) ning seina puhul, millel on uksed või aknad, ahelat nurkadest iga avani. {{ui:Mõõdud}} mudeliribal peidab need ja näitab need uuesti.

## Salvesta plaan PDF-ina

1. Näita korrust, mida tahad, ja sea ühikud paneelis **Tasandid**.
2. Klõpsa mudeliribal {{ui:Prindi}}.
3. BimCraft salvestab „<fail> — <tasand>.pdf“: plaan mustvalgena suurimas standardses mõõtkavas, mis mahub lehele (1/4" = 1'-0", 1/8" = 1'-0" … Letter-formaadil jalgades ja tollides; 1:50, 1:100 … A4-l millimeetrites), seinad täidetud, uksed, aknad, ruumide nimed ja pindalad, mõõdud ning tiitliriba koos tasandi, faili, lõikekõrguse, kuupäeva ja mõõtkavaga.

PDF on joonistatud joontena ja tekstina, nii et see jääb terav igal suumil ja selle tekst on otsitav.

## Hea teada

- Loendid loetlevad seda, mida joonistustööriistad tegid. Uksed ja aknad teisest programmist kuvatakse selle asemel koguste koondtabelis.
- Töö hinnastamiseks anna kogused TakeoffCraftile: vaata [Kogused TakeoffCraftile](topic:takeoff). CSV-allalaadimine jääb tabelarvutuse jaoks.
