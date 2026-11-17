---
title: Punktid rajamiseks ja teostatud kontrollideks
summary: Nummerdage kohad, kuhu meeskond rajab mudelist (pilarite keskpunktid, seinte otsad, ankruplaadid, läbiviigud, mis tahes valitud element), kirjutage need koordinaatmõõtjale ja lugege meeskonna teostatud punktid tagasi ning vaadake, mis on kõrvale kaldunud.
keywords: rajapunktid, rajamine, maha märkimine, märkimine, koordinaatmõõtja, mõõdistus, punktifail, csv, txt, pnezd, penzd, xyz, põhjakoordinaat, idakoordinaat, kõrgus, teostatud, kontroll, tolerants, kõrvalekalle, ankruplaadid, pilarite keskpunktid, seinte otsad, läbiviigud, mõõdistuskoordinaadid, kaardi teisendus
from: acea9606
---

Vahekaart {{ui:Punktid}} paremal teeb punktid, mille meeskond rajab kohapeal avatud mudelist, ja kontrollib punkte, mille nad hiljem mõõdavad.

## Punktide tegemine

1. Avage IFC-mudel ja vahekaart {{ui:Punktid}}.
2. Märgistage, mida rajada: **column centres** (iga pilari keskjoone alus), **wall ends** (iga seina teljeotsad selle aluses), **anchor bolts** (ankrupoldid), **sleeves** (elemendid, mille nimi või tüüp ütleb sleeve, st läbiviik), ja **picked elements** (igaüks oma paigutuspunktis — valige need enne vaates).
3. Valige esimene number ja eesliide, koordinaadid, ühikud, veerud ja fail:
   - **Model**: faili enda koordinaadid. **Survey grid**: mudeli georeferentsi kaardivõrk (näidatakse ainult siis, kui IFC-s on kaardi teisendus), meetrites või teie valitud ühikutes.
   - Veerud **PNEZD** (punkt, põhjakoordinaat, idakoordinaat, kõrgus, kirjeldus), **PENZD** või **XYZ**; **CSV** (komadega) või **TXT** (tabulaatoritega).
4. Vajutage {{ui:Loo punktid}}: loend näitab neid ja vaade märgib need siniselt. {{ui:Laadi punktid alla}} kirjutab faili.

Punktid tulevad kindlas järjekorras — liigi järgi, siis ridades üle plaani — nii et samast mudelist uuesti tegemine annab samad arvud. Fail on see, mille avab CivilCraft ja mille kirjutab CadCrafti EXPORTPOINTS: üks punkt real, kolm kohta pärast koma, kirjeldus jutumärkides, kui see sisaldab koma.

## Teostatud punktide kontroll

Kui meeskond saadab tagasi, mida nad mõõtsid, valige **tolerance** millimeetrites ja kuidas punkte paarida — **point number** järgi (nad säilitasid teie numbrid) või **nearest shot** järgi (lähim mõõdistus) — ja vajutage {{ui:Loe teostatud punktid…}}. Lugege fail samades ühikutes ja koordinaatides, mida kirjutasite.

Iga projektipunkt on siis **within** (tolerantsi piires), **outside** (väljaspool), **not measured** (mõõtmata), ja iga mõõdistus, mida keegi ei tellinud, on **extra** (lisa). Tabel annab erinevused ühikus, mille valite tööriistaribal, jalad näidatakse kümnendtollidena (teostatud miinus projekt: ida, põhi, kõrgus ja kaugus plaanil); vaade märgib iga punkti rohelisena või punasena, joonega mõõdistuseni, ja halliga, kui seda ei mõõdetud. {{ui:Aruanne (CSV)}} kirjutab kogu võrdluse.

Siin ei muudeta midagi mudelis. Veel pole valmis: rajamine plaadi servadest, ruudustiku ristumistest või teie jaoks tehtud avadest ning punktide saatmine otse instrumendile — kasutage faili.
