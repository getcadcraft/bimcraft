---
title: Registreer verskeie skanderings tot een
summary: Plaas skanderings wat van verskillende posisies geneem is in een raamwerk deur gekose puntpare of getikte teikens, verfyn hulle met ICP, stoor die registrasie as 'n projek, en voer die geregistreerde wolk as LAS of E57 uit.
keywords: registreer, registrasie, skanderings, puntwolk, icp, iteratiewe naaste punt, teikens, puntpare, starre transformasie, belyn, samevoeg, e57, las, skandering na bim
from: e8e270db
---

## Wat jy gaan doen

Verskeie skanderings van een plek (elk vanaf sy eie skanderposisie) begin in hul eie koördinate. Registreer hulle: gee elke skandering een plasing sodat hulle almal in een raamwerk sit, stoor dit dan as 'n projek en skryf die geregistreerde wolk as een LAS- of E57-lêer.

## Plaas die skanderings

1. Maak die dialoog oop ({{ui:Register scans…}} op die beginpaneel, of {{ui:Show}} › {{ui:Register scans…}} wanneer 'n model oop is). {{ui:Add scans…}} neem LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- of XYZ-lêers, of laat hulle op die dialoog val. Skanderings wat verskillende eenhede gebruik, word met 'n nota geweier: skakel een eers om.
2. Kies {{ui:Scan to move}} en {{ui:Place against}}. Die prentjie wys elke skandering in die raamwerk soos dit nou is, een kleur elk: {{ui:Plan}}, {{ui:Front}} of {{ui:Side}}; sleep om te pan, gebruik die wiel om te zoem.
3. **Met puntpare.** Klik {{ui:Pick a pair}}, dan 'n punt op die skandering om te skuif, dan dieselfde plek op 'n ander skandering ('n hoek, 'n teiken, die voet van 'n kolom). Doen dit ten minste drie keer, met punte wat nie in een lyn is nie en ver uitmekaar is. Klik {{ui:Place by pairs}}: die skandering word geplaas deur 'n kleinste-kwadrate-passing, en **Links oor** wys hoe ver elke paar nog mis. 'n Paar met 'n groot getal is 'n slegte keuse: verwyder dit met die kruisie en plaas weer.
4. **Met teikens.** As 'n punt se ware koördinate bekend is (gemete teikens), klik {{ui:Pick, then type target}}, klik die punt op sy skandering, en tik die teiken se X, Y en Z in die ry. Pare en getikte teikens meng vrylik.

## Verfyn met ICP

Pare gee 'n growwe plasing. {{ui:Refine}} skuif die skandering totdat sy oppervlaktes op die ander skandering s'n sit: eers **point to point**, dan **point to plane**. Die tabel lys elke stap met sy fout en hoeveel punte ooreengekom het; die lyn daarbo teken die fout wat daal. {{ui:Stop}} beëindig die lopie na die stap wat aan die gang is en hou wat dit bereik het. {{ui:Undo}} neem die hele lopie (of die laaste plasing) terug; {{ui:Reset}} plaas die skandering terug op sy lêerkoördinate.

Om dit vinnig op 'n skootrekenaar te hou, werk ICP op 'n verminderde aandeel van die punte ({{ui:Points used}}, 5,000 tot 60,000) en ignoreer passings wat verder as {{ui:Largest match distance}} is (standaard 5% van die skandering se grootte, wat krimp soos dit vestig). Dit benodig eers 'n growwe plasing: skanderings wat amper nie oorvleuel nie, meld dat hulle nie gepas kan word nie. Oppervlaktes wat net plat of net reguit is, kan nie 'n posisie langs hulself vasmaak nie; voeg in daardie geval pare by.

## Stoor en voer uit

- {{ui:Save project}} skryf 'n klein `.ccscans.json`-lêer: elke skandering se naam, grootte en 'n vingerafdruk van sy eerste 64 KB, met sy transformasie. Dit hou geen punte nie. {{ui:Open project…}} vind die skandeerlêers volgens daardie verwysings (die lêers moet eers bygevoeg wees) en sit elke transformasie terug.
- {{ui:Export LAS}} en {{ui:Export E57}} skryf een lêer met elke skandering op sy geregistreerde plek. Punte word nooit in die oorspronklikes herskryf nie; die transformasie word op pad uit toegepas. Met {{ui:Read every point from the files}} aan, word elke lêer vir elke punt weer gelees (tot 20 miljoen per skandering); af, word net die punte wat in die kyker wys, geskryf.
- {{ui:Show registered cloud}} (BimCraft) skryf die LAS en maak dit in die 3D-aansig langs die model oop, soos enige wolk.

:::note
Niks word opgelaai nie. Registrasie werk in die lêers se eie eenhede en hou millimeter: 'n LAS word geskryf met 'n skaal wat pas (tot 0.1 mm), 'n E57 met dubbele. 'n Koördinaatstelsel word slegs na die LAS gedra wanneer elke skandering dieselfde EPSG-kode noem. Die E57-skrywer is ons eie; dit word getoets deur sy lêers terug te lees met hierdie leser en met libE57Format.
:::
