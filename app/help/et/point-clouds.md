---
title: Kuva punktipilv mudeli kõrval
summary: Ava laserskann (LAS, LAZ, E57, PLY, PCD, PTX, PTS või XYZ) 3D-vaates eraldi või koos IFC-mudeliga, värvi see, lõika sellest õhuke lõige, mõõda selle punktideni ja anna see joonistusrakendusele tegelikult valminud joonte jälgimiseks.
keywords: punktipilv, laserskannimine, skann, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tegelikult valminud, as-built, mõõdistus, registreerimine, lõige, plaanilõige, haakumine, mõõtmine, jälgimine, skannist BIM-iks
from: d0a3e740
---

## Mida sa teed

Vaata hoone laserskannimist mudeli kõrval: kontrolli, kas ehitatu vastab projektile, mõõda skannitud punktide vahel ja lõika õhuke lõige, et lugeda seinad, uksed ja postid.

## Sammud

1. Ava pilv: {{ui:Avatud}} `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` või `.xyz` fail või lohista see lehele (vaata teemat punktivormingute kohta, mida kumbki toob ja mida skanneri enda tarkvarast eksportida). Kui mudel on avatud, liitub pilv mudeliga 3D-vaates; pilve avamine ei sulge kunagi mudelit ega selle salvestamata muudatusi. Ilma mudelita avaneb pilv iseseisvalt.
2. Tööriistariba all ilmub pilve riba. See ütleb, mitu punkti kuvatakse ja mitu failis on.
3. Vali {{ui:Värvi järgi}}: faili enda värvid (kui skanner need salvestas), {{ui:Kõrgus}}, {{ui:Intensiivsus}}, {{ui:Klass}} (LiDAR-klassid nagu maapind, taimestik ja hoone) või {{ui:Üks värv}}. {{ui:Suurus}} muudab punktid suuremaks või väiksemaks.
4. Klõpsa {{ui:Plaan}} all {{ui:Lõige}}, et jätta alles vaid õhuke riba 1.2 m kõige madalamast punktist, vaadatuna ülevalt: seinad, ukseavad ja postid loevad nagu korrusplaan. {{ui:Esi}} ja {{ui:Külg}} lõikavad püstiseid ribasid fassaadi- ja lõigujoonte jaoks. Riba liigutad {{ui:Kõrgusel}} abil ning muudad {{ui:Paksus}} (meetrites). {{ui:Väljas}} näitab jälle kogu pilve.
5. Klõpsa tööriistaribal {{ui:Mõõda}}. Osuti haakub pilve punktidele (silt ütleb „punktipilv“), nii et saad mõõta seinast seinani lõikes või mudeli elemendist skannini. Mudeli nurk või serv, mis on ulatuses, võidab alati.
6. Kui kasutad {{ui:Mõõda}} › {{ui:Asukoht}}, annab pilve punkt oma laiuskraadi ja pikkuskraadi pilve enda koordinaatsüsteemist, kui fail seda nimetab.
7. {{ui:Peida}} peidab pilve hetkeks; {{ui:Eemalda}} võtab selle välja. {{ui:Näita}} › {{ui:Punktipilv}} peidab või näitab riba.

## Kuhu pilv läheb

{{ui:Paiguta}} riba ütleb, kuidas pilv mudeliga joondub:

- **Mudeli koordinaadid**: pilve numbrid on mudeli enda (skann on registreeritud projekti koordinaatidesse).
- **Kaardikoordinaadid**: mudelil on kaarditeisendus (IfcMapConversion) ja pilv on samas projitseeritud süsteemis: pilv paigutatakse selle kaudu. Kui need kaks nimetavad erinevaid süsteeme, ütleb olekurida seda.
- **Mudeli keskele**: kui kumbki ei too pilve mudeli lähedale, läheb selle keskpunkt mudeli keskele ja madalaim punkt mudeli põrandale. Muu valik tühistab selle.

Kui fail ei ütle oma ühikuid, loeb BimCraft meetreid ja pakub ribal {{ui:Ühikud}}.

## Jälgi tegelikult valminud jooni

Klõpsa {{ui:Jälgi CadCraftis}}, et anda pilv joonistusrakendusele uuel vahelehel. See avaneb seal joonise all, kus lõige ja objekti haakumine võimaldavad joonistada seinad skanni peale. Vaata CadCraft-i teemat punktipilvede kohta.

## Mitu punkti

Skannis võib olla sadu miljoneid punkte. BimCraft loeb iga punkti ühe korra ja hoiab joonistamiseks võrdse osa neist: {{ui:Näita}} riba all määrab, mitu (1, 2, 5 või 10 miljonit). Rohkem punkte vajab rohkem mälu ja kiiremat graafikakaarti. Klassipõhised arvud hõlmavad kõiki faili punkte.

:::note
Failid loetakse sellel arvutil; midagi ei laadita üles. LAS 1.0–1.4 ja LAZ loetakse (LAZ-failid kuni 1 GB, hoitakse lugemise ajal mälus); E57-failid kuni 6 miljonit punkti ja 512 MB praegu (suuremad skannid: ekspordi LAS või LAZ); PLY, PCD ja PTX täielikult; tekstipilved on `x y z`, koos värvi (`r g b`) ja intensiivsuse veergudega, kui need on olemas.
:::

## Mitu skanni

Eri asukohtadest tehtud skannid saab registreerida üheks raamistikuks, täpsustada ICP-ga ja eksportida ühe LAS- või E57-failina: vaata [Mitme skanni registreerimine üheks](topic:register-scans).
