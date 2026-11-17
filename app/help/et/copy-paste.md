---
title: Teegi üksuste kopeerimine, kleepimine ja dubleerimine
summary: Kopeeri paigutatud teegi üksus ja kleebi see sinna, kuhu klõpsad, originaali kõrvale samasse kohta või teise mudelisse; kopeeri mis tahes muu elemendi omadused tekstina; võta tagasi ja tee uuesti.
keywords: kopeeri, kleebi, dubleeri, lõikepuhver, kleebi samasse kohta, lõika, kustuta, vali kõik, võta tagasi, tee uuesti, redigeerimise menüü, veel, teegi üksus, paigutus, korda, massiiv
from: 6ac15931
---

## Mida teed

Paigutad juba lisatud teegi üksusest veel koopiaid: teine töölaud, rida valamuid. See teema käsitleb **paigutatud teegi üksusi**, need on elemendid, mille BimCraft kirjutas mudelisse. Üks neist võib kleepida mis tahes mudelisse, isegi teise vahekaarti. Seinu, uksi ja kõiki muid elemente kopeeritakse, lõigatakse, kleebitakse ja kustutatakse samamoodi oma mudelis: vt [Kustuta, lõika, kopeeri ja kleebi ehituselemendid](topic:edit-elements).

Käsud asuvad mudeli kohal tööriistaribal: {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}}, {{ui:Kleebi}} ja {{ui:Veel}}, menüü, kus on {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Kleebi samasse kohta}}, {{ui:Dubleeri}}, {{ui:Kustuta}}, {{ui:Vali kõik}} ja {{ui:Tühista valik}}. Käsk, mis parasjagu ei saa toimida, on hallina; osuta sellele, et lugeda põhjust, või klõpsa, ja olekurida ütleb, miks.

## Sammud

1. Ava IFC-mudel, kus on teegi üksus, või paiguta esmalt üks. Vt [Paiguta seadmed ja mööbel teegist](topic:place-from-library).
2. Klõpsa üksusel 3D-vaates. Selle omadustes on kast **Teegi üksus**.
3. Klõpsa {{ui:Kopeeri}} või vajuta {{key:Mod+C}}.
4. Klõpsa {{ui:Kleebi}} või vajuta {{key:Mod+V}}. Paigutusriba avaneb ja kursorit järgib läbipaistev kast, pööratud nagu originaal.
5. Vajuta {{key:R}}, et pöörata 90°, {{key:Tab}}, et kinnitada tagumine külg seina külge, või sisesta paigutusribale X ja Y.
6. Klõpsa kohta, kuhu koopia läheb. Iga klõps paigutab veel ühe koopia; peatamiseks vajuta {{key:Esc}}.
7. Klõpsa {{ui:Salvesta IFC-na}}, et laadida alla mudeli muudetud koopia.

## Kleebi samasse kohta

{{ui:Veel}}, {{ui:Kleebi samasse kohta}} või {{key:Mod+Shift+V}} kleebib ilma klõpsamata, samale X- ja Y-kohale ning samamoodi pööratuna:

- **Samasse mudelisse, samale korrusele**: kaks üksust täpselt samas kohas ei oleks kasulikud, seega koopia läheb otse originaali kõrvale, üks üksuse laius pluss 100 mm mööda üksuse enda laiust. Kleebi uuest koopiast uuesti samasse kohta, et teha rida.
- **Teisele korrusele või teise mudelisse**: täpselt sama X, Y ja pööre. BimCraft kasutab sama nimega korrust; kui sellist pole, siis lähima kõrgusega korrust. Olekurida ütleb, millist.

## Dubleeri

{{ui:Veel}}, {{ui:Dubleeri}} või {{key:Mod+D}} kopeerib valitud üksuse ja alustab kohe kleepimist: üks samm kahe asemel.

## Teise mudelisse või teise vahekaarti

Kopeeritu jääb sellesse brauserisse, nii et võid avada teise IFC-mudeli või BimCraft'i teises vahekaardis ja kleepida seal. Teine mudel vajab teegi üksust ennast: BimCraft on selle, kui üksus paigutati, vahetati või uuendati selles vahekaardis. Varasemas seansis paigutatud üksuse saab uuesti kleepida ainult oma mudelisse; teises mudelis paiguta see vahekaardilt {{ui:Teek}}.

## Mida peaksid nägema

- Koopia mudelis, valituna, sama teegi üksuse, litsentsi, seadmeandmete, koguse ja märkmega nagu originaal, ning **järgmise vaba üksusenumbriga**. Muuda numbrit omadustes, rubriigis `CadCraft_Placement`.
- Muudatuste loendis „Paigutatud: *üksus* (üksus *n*)“. {{key:Mod+Z}} võtab selle tagasi; {{key:Mod+Y}} paneb tagasi.

## Hea teada

- Koopiad jagavad originaali tüüpi, nii et kõik kasutavad ühte geomeetriakomplekti, nagu sama üksuse kahekordne paigutamine.
- {{ui:Võta tagasi}} ja {{ui:Tee uuesti}} katavad kõik muudatused: muudetud väärtused, paigutused, kleepimised, vahetused ja uuendused. Tee uuesti paneb paigutuse tagasi samasse kohta; uus muudatus tühjendab selle, mida saaks uuesti teha.
- Joonise 2D-vaates pole midagi valida, seega pole midagi kopeerida. Joonise muutmiseks kasuta {{ui:Redigeeri CadCraftis}}, kui see kuvatakse.

## Levinud vead

- **{{ui:Kleebi}} ütleb, et elemendid tulid teisest mudelist.** Viimane kopeeritud asi oli ehituselement või mitu elementi: need kleepuvad ainult oma mudelisse. Vali üks paigutatud teegi üksus ja kopeeri see.
- **{{ui:Kleebi}} ütleb, et koopia tuli teisest mudelist ilma teegi üksuseta.** Paiguta üksus üks kord sellesse vahekaarti vahekaardilt {{ui:Teek}}, seejärel kopeeri ja kleebi.
- **{{key:Mod+C}} kopeerib hoopis lehe teksti.** Lehel oli tekst valitud. Klõpsa enne mudelil.

## Seotud

- [Klahvid ja hiir](topic:keyboard#edit)
- [BimCraft'i sätted](topic:settings)
