---
title: Paiguta seadmed ja mööbel teegist
summary: Leia üksus teegist, failist või avatud joonisest, paiguta see IFC-mudeli korrusele eelvaatega, pööra seda, kinnita seinale ja salvesta.
keywords: teisalda, pööra, lohista, teek, librarycraft, paiguta, sisesta, seade, mööbel, plokk, perekond, üksus, kataloog, sisu, kcl, csv, gltf, obj, rfa, dwg, ifc tüüp
from: 3dad5d4b
---

## Mida sa teed

Pane teegi üksus IFC-mudelisse: valamu, töölaud, tool. BimCraft kirjutab selle õige IFC-elemendina tüübiga, nii et iga sama üksuse koopia jagab ühte geomeetria komplekti, ning selle andmed, üksuse number ja litsents liiguvad kaasa.

## Sammud

1. Ava IFC-mudel.
2. Klõpsa paremal {{ui:Teek}} vahekaarti kõrval {{ui:Omadused}} või tööriistaribal mudeli kohal {{ui:Teek}}.
3. Vali allikas:
   - **Sisseehitatud sümbolid**: üldised torustiku plaanisümbolid, mis tulevad BimCraftiga Apache-2.0 litsentsi all ja on kasutatavad võrguühenduseta. Kontrolli nende mõõtusid enne ehitamist. Elektriplaani sümbolite ja IFC elektriseadmete jaoks kasuta {{ui:Versioon}} › **Elekter**.
   - **Teek**: CadCraft teek sellel saidil. Avalikud üksused ei nõua sisselogimist.
   - **See fail**: avatud DWG- või DXF-joonise plokid. Dünaamiline plokk nähtavuse olekutega pakutakse iga oleku kohta, nimega „Valamu: kahekordne kauss“, ja joonistatud ainult selle oleku objektidega.
   - **Failid…**: DWG-, DXF-, IFC-, glTF/GLB-, OBJ-, RFA- või CSV-fail sinu arvutis. See loetakse selles vahekaardis; midagi ei laadita üles.
   - **Muud allikad**: teine teek, mis kasutab sama allikavormingut. Lisa selle aadress üks kord; see jääb sellesse brauserisse.
4. Otsi või vali kategooria ja klõpsa kaardil. Kaart näitab plaani eelvaadet, nime, tootjat ja mudelit, litsentsi ning versiooni.
5. Klõpsa {{ui:Paiguta plaanile}} (plaanivaates) või {{ui:Paiguta mudelisse}} (3D-vaates). Vaates {{ui:Jaga}}, kus plaan ja 3D-vaade mõlemad on näha, on nupp jagatud nupp: peamine tegevus on {{ui:Paiguta plaanile}}, ja selle parempoolne nool avab menüü, kus on {{ui:Paiguta mudelisse}}. Või lohista kaart või pilt üksuse üksikasjadest plaanile või 3D-vaatele: üksus paigutatakse sinna, kuhu lased lahti. Pliiatsi või sõrmega vajuta ja hoia kaarti mõni hetk, seejärel lohista.
6. Vali korrus paigutusribal. 3D-vaates peidetakse selle kohal olevad korrused paigutamise ajal ja vaade pöördub ülevaatesse; plaanil näitab plaan juba seda korrust. Kui valid {{ui:Paiguta mudelisse}} ainult plaanilt, tuleb 3D-vaade sellega kõrvuti.
7. Liiguta kursor mudeli kohal: läbipaistev kast näitab, kuhu üksus läheb.
8. Vajuta {{key:R}}, et pöörata seda 90°. Vajuta {{key:Tab}} (või {{ui:Seinale kinnitus}}), et panna selle selg lähima seina vastu, nägu ruumi poole.
9. Klõpsa, et paigutada. Või sisesta asukoht väljale **X, Y (mm)**, näiteks `1200, 3400`, ja vajuta {{key:Enter}}.

Valgusti või miski, mis on lakke riputatud: sea **Kinnitus** väärtusele **Laega**. Üksuse ülemine külg jääb siis laeaseme alumise külje juurde selle koha kohal (või tasandi kõrgusele, kui lage ei ole). Laeplaani korral on plaanivaates **Kinnitus** algselt **Laega**.

10. Vasta ühele küsimusele: **üksuse number** (järgmine vaba number täidetakse), kogus ja märkus. Vajuta {{key:Enter}}.
11. Paiguta rohkem või vajuta {{key:Esc}}, et lõpetada.
12. Klõpsa {{ui:Salvesta IFC-na}}, et laadida alla muudetud koopia.

## Plaan või mudel

Teegi paigutusnupp järgib vaadet, milles sa oled, ja muutub kohe, kui vaadet muudad ({{ui:Plaan}}, {{ui:Jaga}} ja {{ui:3D}} nupud, klaviatuur, faili avamine). Plaan näitab ühte nuppu, {{ui:Paiguta plaanile}}; 3D näitab ühte nuppu, {{ui:Paiguta mudelisse}}; Jaga näitab jagatud nuppu, kus peamine tegevus on {{ui:Paiguta plaanile}} ja menüüs {{ui:Paiguta mudelisse}}. Mõlemad viisid kasutavad sama paigutusriba ja kirjutavad sama IFC-elemendi: kursor töötab ühe jaoks plaanivaates ja teise jaoks 3D-vaates. Vajuta {{key:Esc}} igal ajal, et peatuda.

Kaardi lohistamisel ei ole oma klahvi: jagatud nupp või tavaline nupp teeb klaviatuuriga sama.

## Liiguta või pööra paigutatud üksust

Vali {{ui:Joonista}} režiimis üksus plaanil. Selle sisestuspunktis näidatakse ruudukujulist haaret ja selle kõrval ümmargust haaret.

- Lohista üksust või selle ruudukujulist haaret, et seda liigutada. See kinnitub nagu seina tööriist (seinte otsad ja tahud); {{key:Shift}} hoiab selle risti sinna, kus see oli.
- Lohista ümmargust haaret, et pöörata seda 15° sammudega. Hoia {{key:Shift}} all 1° sammudega.
- Vajuta {{key:R}}, et pöörata 90°.
- Omadustes (ka 3D-vaates) sisesta **X**, **Y** ja **Pööre (°)** või klõpsa **Pööra 90°**.

Iga teisaldamine on üks {{ui:Võta tagasi}} samm ja liigub Live TeamWorkis. Üksus säilitab oma üksuse numbri, oma teegi andmed ja oma kõrguse tasandi kohal. Veel ei ole valmis: lohistamine 3D-vaates.

## Mida peaksid nägema

- Mudelis üksus, valituna, koos omadustega paremal: **Teegi üksus** kast oma litsentsi ja tunnustusega ning komplektidega `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` ja märgistatud joonistest pärit üksuste puhul `CadCraft_SourceAttributes`.
- „Paigutatud: *üksus* (üksus *n*)“ muudatuste loendis. {{key:Mod+Z}} võtab selle tagasi.
- Olekurida: „Paigutatud *üksus* numbriga *n*.“

## Hea teada

- Mõned üksused tulevad mitmes suuruses või valikuga: kaardil on siis **Variant** valik ja paigutatakse see, mille sa valid. Vaata [Paiguta ja vaheta teegi üksust, millel on variante](topic:library-variants).
- Üksus ilma 3D-kehata (2D-sümbol) paigutatakse ajutise kastiga; sinult küsitakse selle kõrgust.
- Sama asja veel: vali paigutatud üksus ja kasuta {{ui:Kopeeri}} ja {{ui:Kleebi}} või {{key:Mod+D}}. Vaata [Kopeeri, kleebi ja dubleeri teegi üksusi](topic:copy-paste).
- Et alustada iga paigutust seinakinnitusega, lülita sisse **Alusta seinakinnitusega** [BimCraftiga sätetes](topic:settings).
- Pikkused teisendatakse mudeli enda ühikutesse, mis need ka ei oleks.
- **Entourage** (puud, põõsad, inimesed, autod) on samuti teegis: otsi „tree“, „person“ või „car“. Need on joonistanud CadCraft (CC0) ja need säilitavad oma värvid, kui on paigutatud (tüvi pruun, lehed roheline, auto aknad läbipaistvad), BimCraftis ja teistes BIM-programmides. Need kuvatakse [renderdatud piltidel](topic:render).
- IFC2X3 failis kirjutatakse keha tahkisena (faceted solid); IFC4 failis kolmnurkade hulgana. Mõlemad avanevad teistes IFC-tööriistades.
- Joonist (DWG või DXF) ei saa siin salvestada, seega üksusi paigutatakse ainult IFC-mudelitesse. Kasuta joonisel **See fail**, et näha, milleks selle plokid saaksid.

## Üksused sinu keeles

Üksusel võib olla nimi, kirjeldus ja tüüp teistes keeltes. Kui need on keeles, millele BimCraft on seadistatud (Sätted › Üldine › Keel), näitab üksuse leht neid, tootja antud nimi on all, ja **Paiguta** kirjutab mudelisse sinu keele nime, nii et {{ui:Seadmed}} loend loetleb seda nii. Üksus jääb samaks üksuseks: uuenduste kontrollimine ja vahetamine toimuvad üksuse enda, mitte nime järgi. Ilma tõlketa üksused säilitavad oma sõnad.

## Levinud vead

- **Paigutamisnupp puudub.** IFC-mudel ei ole avatud. Ava see kõigepealt.
- **Kummitus ei järgi kursorit.** Kursor on mudeli alast väljas või korruse tasand ei ole vaates. Klõpsa {{ui:Ülemine}}.
- **{{ui:Seinale kinnitus}} ütleb, et seinu ei ole.** Korrusel ei ole IFC-s seinu (mõned ekspordid panevad seinad teisele korrusele). Vali see korrus või sisesta X ja Y.
- **Faili üksused on vale suurusega.** Failil ei ole ühikuid või on valed ühikud. {{ui:Failid…}} all vali ühikud ja loe fail uuesti.

:::tip
Sama üksuse kahekordne paigutamine jagab ühte IFC-tüüpi, nii et mudel nelikümne tooliga salvestab tooli ühe korra.
:::
