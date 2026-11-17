---
title: Seinakoosted ja viitemõõdud
summary: Koosta oma seinatüübid kiht kaupa selge südamikuga, hoia projekti materjaliteeki ning mõõda pindadeni ja telgjoonteni, mis jäävad seina muutumisel külge.
keywords: lod, arendusaste, lod 200, lod 300, üldine, seinakoost, seinatüüp, kihid, südamik, südamiku pind, südamiku telgjoon, õhupilu, õhuvahe, membraan, maja ümbris, materjaliteek, materjalid, paksus, viitemõõt, mõõt, assotsiatiivne, asukojajoon, vooder, vahepost, kipsplaat
from: 4ea8fbf5
---

## Mida sa teed

Koosta seinatüüp, mis vastab seinale, mida hakkad ehitama: vooder, katteplaat, 5½-tollise vahepostiga südamik ja kipsplaat, või tellis, õhuvahe ja puitkarkassiga sein. Märgi, millised kihid on südamik, et mõõt või asukojajoon saaks hoida südamikku, samal ajal kui selle ümbrus muutub. Seejärel mõõda seinu pindadeni ja telgjoonteni, mida silmas pead.

## Seinatüübi loomine

1. Alusta hoone või ava IFC-mudel ja lülita sisse {{ui:Joonista}}, seejärel vali {{ui:Sein}} tööriist.
2. Vali alguspakkumine {{ui:Seinatüüp}} ja ava {{ui:Seinakoosted…}}. Alguspakkumine avaneb koopiana; anna uuele tüübile nimi.
3. Kihid kulgevad nimekirja ülaosast välisküljelt alumisse sisemisse. Vali iga kihi materjal, sisesta paksus (projekti ühikutes või selged väärtused nagu `12.7 mm` või `1/2"`), vali selle funktsioon (viimistlus, alus, konstruktsioon, isolatsioon, membraan) ja märgi **Südamik** kihid. Südamik peab olema üks järjepidev rühm.
4. {{ui:Lisa kiht}} lisab kihi, {{ui:Lisa õhupilu}} lisab õhuvahe koos ventilatsiooniga (määramata, ventileerimata, ventileeritud), {{ui:Lisa membraan}} lisab kihi ilma nimipaksuseta, näiteks maja ümbrise. Nooled liigutavad kihti väljapoole või sissepoole.
5. Eelvaade joonistab kihid mõõtkavas, südamik allajoonituna ja nummerdatuna nagu read, ning mõõdab iga kihi, südamiku ja kogupaksuse. Vajuta {{ui:Salvesta tüüp}}.

Uus tüüp on seinatööriista nimekirjas ja valitud seina **Omadustes**. Muudetud tüübi salvestamine muudab iga seina, mis seda kasutab; {{ui:Dubleeri tüüp}} teeb eraldi tüübi ja annab selle ainult valitud seintele. Iga salvestus on üks tagasivõtmise samm, koos seintega, mida see liigutab, nendes olevate uste ja akende ning neist sõltuvate mõõtudega.

Õhuvahe lisab laiust. Membraan ei lisa midagi: see jääb tüüpi, et loend saaks selle hiljem leida, ning ei lähe seina ega südamiku paksusse. Õhuvahet või membraani ei loeta kunagi tahkeks materjaliks. Failis IFC2X3 jääb membraan tüübi kirjesse, kuid jäetakse välja selle füüsilistest materjalikihtidest.

## Tüübi märkimine arendusastmega (LOD)

Tüüp võib öelda, kui arenenud ta on. Redaktoris pakub **Level of development (LOD)** fikseeritud skaalat 100, 200, 300, 350, 400 ja 500 või **Not set**. Üldine sein („Wall 230 generic“) on LOD 100 või 200; konkreetne ülesehitus oma tegelike kihtidega („230 clay brick, plastered both sides“) on LOD 300 või rohkem. Märgise paned sina: BimCraft seda ei arvuta välja ning alguspakkumistel seda pole.

Märgis kuvatakse seintüübi nime kõrval seinatööriista tüübiloendis, seina **Omadustes** ja [Vaheta tüüp](topic:wall-tools) loendis ning pärast vahetust näitab aruanne, kas tase tõusis või langes. Selle nägemiseks **Seinad tüübi järgi** loendis ja selle CSV-s märgi valik **Näita iga seintüübi LOD-i seinaloendis** menüüs {{ui:Sätted}} › BimCraft › {{ui:Seinad}}: lisatakse viimane veerg LOD. Märgis salvestatakse IFC-faili koos tüübiga (tüübi `CadCraft_WallType` omadusehulgas omadusena `LOD` ja tüübi kirjes), nii et see on olemas ka faili uuesti avamisel. Märgis on praegu ainult seintüüpidel, mitte üksikutel elementidel ega teistel elementide liikidel.

## Üldised seinad eskiisietapiks

Seinatööriista tüübiloend algab kahe **üldise** seinaga: **Generic wall 200 mm (exterior)** ja **Generic wall 100 mm (interior)**. Kumbki on üks kiht üldist materjali, märgistatud LOD 200. Kasuta neid, kui tead, kuhu seinad lähevad, aga veel mitte, millest need on tehtud.

Sein, mille tüüp on märgistatud **LOD 100** või **LOD 200**, joonistatakse igal plaanil ühe **kriipsutatud ribana** igal detailsusastmel: kihte ega kihijooni ei ole. See kehtib üldiste seinte ja iga sinu enda tüübi kohta, mille märgistad LOD 100 või 200. Sein ise on täielik: sellel on paksus, uksed ja aknad, ruumid ning kogused.

Arendamiseks vaheta selle tüüp (Muuda › {{ui:Seinad}} › {{ui:Vaheta tüüp}} või Tüüp seina **Omadustes**). Sein ei joonistata enam kunagi uuesti: sama sein võtab uue tüübi ja aruanne ütleb, mis liikus. Tüüp, mis on märgistatud LOD 300 või kõrgemaks, joonistatakse kihtidega nagu varem.

Kõigi seinte joonistamiseks kihtide järgi, olenemata märgisest: {{ui:Sätted}} › BimCraft › {{ui:Seinad}}, eemalda linnuke valikult **Joonista LOD 100 või LOD 200 tüüpi seinad ühe kriipsutatud ribana**.

Alguspakkumise uksed ja aknad on samuti üldised liigid (suurus ja avanemisviis, mitte toode). Kui **Näita iga seintüübi LOD-i seinaloendis** on sisse lülitatud, näitavad uste ja akende loendid neile LOD 200.

## Anna tüübile koguste arvestuse andmed

Seinatüübi redaktoris võtab **Takeoff data** selle, mida hankija peab seina kohta teadma; see antakse tüübile üks kord: **ühik**, millest sein on ehitatud (tellis või plokk: nimi, pikkus, kõrgus ja laius), **mört** (nimi ja vuugi paksus) ning **hind** koos valuutakoodiga (kolm tähte, nt USD, EUR või ZAR) ja selle, mille kohta see kehtib: ruutmeeter või ruutjalg netoseinapinda, meeter või jalg seina pikkust või iga sein. Kõik on valikuline.

See salvestatakse tüübiga faili. Iga selle tüübi sein esitab seejärel selle: {{ui:Loendid}} › **Seintüübid: koguste arvestuse andmed** loetleb ühiku, mördi, hinna ja hinna korrutatuna mõõdetud kogusega, ning TakeoffCraftile antud koguste arvestus kannab seda selle seintüübi real. Muuda tüüpi ja iga sein järgib.

Kolm välja on veel tellise või ploki ja mördi lugemiseks:

- **Jäätmed ühikutel, %** lisatakse ühikute arvule. Jäta tühjaks, et kasutada projekti mõõtmismeetodi arvu, või mitte midagi, kui meetodil seda pole. Sisesta 0, et jäätmeid ei oleks, mida meetod ka ütleks.
- **Lisamört, %** on pesade või perforatsioonide jaoks, mis võtavad mörti. See lisatakse mördi mahule. Jäta tühjaks, kui pole.
- **Selle ühikuga ehitatud kihid**: märgi iga kiht, mis on selle tellise või ploki leht. Õõnesseinal on kaks. Kui ühtegi pole märgitud, loetakse südamiku kihid.

Hind võib olla ka ühiku kohta tellimiseks, 1000 ühiku kohta tellimiseks või m³ mördi kohta. Kui ühikul on pikkus ja kõrgus, näitab **Seintüübid: koguste arvestuse andmed** ühikuid ühe lehe m² (või ft²) kohta, tellitavaid ühikuid ja mördi mahtu; valemid on leheküljel [Tellised, plokid ja mört](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Tüübil on üks ühik: kahte erinevat lehte (nt tellis-välislehte ja plokk-sisselehte) ei saa veel ühel tüübil lugeda.

## Hoia südamik paigal

Omadustes sea seina **Asukojajoon** südamiku pinnale või südamiku telgjoonele. Kui hiljem lisad või paksendad viimistlust, jääb see joon paigale ja sein kasvab selle ümber; nurgas sellega kokkupuutuvad seinad järgivad, nii et sirged nurgad jäävad suletuks.

## Projekti materjalid

{{ui:Materjaliteek…}} loetleb projekti materjalid: nimi, kategooria, paksus, millega kiht algab, kuvavärv, lõikemuster ja märkmed. Teek salvestatakse IFC-sse koos projektiga. Kihi materjali valimine annab kihile materjali vaikepaksuse, mida saab siis muuta; teeki hiljem muutes ei muudeta juba joonistatud seinte suurust. Materjali saad teha ka kihi materjalide loendist nupuga {{ui:+ Uus materjal…}}.

## Viitemõõdud

{{ui:Märgista}} › {{ui:Viitemõõt}}: vali horisontaalne, vertikaalne või joondatud ning viide: välimine või sisemine viimistlusepind, välimine või sisemine südamiku pind, seina telgjoon või südamiku telgjoon. Vali esimene sein, muuda viidet, kui tahad, vali teine ja klõpsa kohta, kuhu mõõdujoon läheb. Kaks viidet ühel seinal mõõdavad selle kogupaksust või südamiku paksust. {{ui:Viitemõõdud…}} loetleb vaate mõõtmed, kaasa arvatud need, mis kaotasid seina, koos valikutega {{ui:Omadused}}, Seo viited uuesti ja {{ui:Kustuta}}.

### Mõõtmesta kogu plaan reeglite järgi

{{ui:Märgista}} › {{ui:Mõõtmesta plaan…}} mõõdab vaadatava korruseplaani välisküljed: üldmõõdu igas suunas ja mõõtmete rea iga väliserva ääres (seinte otsad, servaga kokkupuutuvad seinad ning seal olevad uksed ja aknad), read asetatud hoonest eemale. Märgi, mida tahad, loe arv ja vali {{ui:Lisa mõõtmed}}. Need on tavalised viitemõõdud: nad järgivad seinu, kui seinad liiguvad, ning sa saad neid valida, liigutada või kustutada. Kogu komplekt on üks samm tagasivõtmiseks ja selle uuesti käivitamine ei tee ühtegi topeltmõõtu.

Mõõdab ainult välisküljed: hoone sees olevad ruumid, kõverad seinad ja seinad, mis ei ole plaaniga risti, jäetakse käsitööriistadele, ning ruudustiku jooned ei ole seinad, nii et ruudustikujoonte vahelisi mõõte siin ei tehta. Sinu ühendatud assistent saab sama teha käsuga `plan_dimension`.

Mõõt on seintega seotud, mitte ekraanil oleva kohaga: kui sein liigub või selle tüüp muutub, muutub väärtus kaasa. Kui sein kustutatakse, öeldakse mõõdus, et see on lahendamata, ega näidata numbrit, kuni seod selle uuesti või võtad tagasi. Pikkuse väli võtab ka plaani koordinaadid, nagu `10',12'`, mõõdujoone täpseks kohaks.

Mõõtmed on mõeldud BimCraftiga joonistatud seintele, plaanivaadetes. Veel ehitamata: mõõtmed lõigetes ja vaadetes, ustele, akendele ja teistele komponentidele ning koostise kihid, mis on joonistatud plaanil ja lõikes; vt [Mis pole veel valmis](topic:not-built-yet).

## Vaata ka

[Joonista seinad](topic:draw-walls), [Muuda seina, ust või akent](topic:change-a-wall-or-door), [Omadused](topic:properties-panel).
