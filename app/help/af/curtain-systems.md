---
title: "Gordynstelsels: glasmure op 'n rooster, met sprosse"
summary: Teken 'n gordynstelsel soos 'n muur of lê een op 'n oppervlak, en stel dan die roosterlyne en sprosse. Dit word gestoor as 'n IfcCurtainWall met sy ruite en sprosse.
keywords: gordynstelsel, gordynmuur, gordynrooster, spros, sprosse, beglazing, winkelfront, glasmuur, paneel, ruit, volgens oppervlak, oppervlak, massa, roosterlyn, spasiëring, profiel, dwarslyn, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Wat jy gaan doen

'n Glasmuur van ruite tussen sprosse maak, verander waar die roosterlyne is, en kies watter lyne 'n spros dra.

## Stappe

1. Skakel **Teken** aan en maak die **Bou**-kieslys oop (in 'n lintuitleg: die Argitektuur-oortjie).
2. Kies **Gordynstelsel**. Stel in sy ry die bokant (die vlak bo, of 'n hoogte), 'n lyn elke so-veel langs, 'n lyn elke so-veel op (laat leeg vir geen), of dit sprosse kry, en die sprosprofiel.
3. Klik waar dit begin en waar dit eindig, soos wanneer jy 'n muur teken. Shift hou dit vierkantig.
4. Om die rooster te verander, kies **Gordynrooster** en klik op die stelsel:
   - **Voeg 'n lyn by**: 'n vertikale lyn gaan waar jy klik. Vir 'n horisontale lyn, tik eers sy hoogte in **By**.
   - **Skuif 'n lyn**: klik op die lyn, en dan waar dit moet gaan.
   - **Verwyder 'n lyn**: klik op die lyn.
   - **Stel volgens spasiëring**: tik die spasiëring in **Elke**, en klik dan op die stelsel.
5. Om sprosse te verander, kies **Spros**, kies waarop dit werk (die vertikale lyn wat jy klik, die horisontale lyn op 'n hoogte, die rand, of elke lyn), kies **Plaas sprosse** of **Verwyder sprosse** en 'n profiel, en klik dan op die stelsel.
6. Kies 'n stelsel om alles daarvan in **Eienskappe** te sien: elke roosterlyn met sy plek, 'n merkie vir sy spros en 'n knoppie om dit te verwyder; die spasiëring; die rand; die profiel; die ruitdikte.

## Volgens oppervlak

**Volgens oppervlak** maak 'n gordynstelsel op 'n plat oppervlak wat jy in die 3D-aansig klik. Die ry het dieselfde roosterinstellings en sprosinstellings.

- Dit werk op enige plat oppervlak van enige element wat die 3D-aansig wys: 'n massa, 'n muur, 'n vloer, 'n dakvlak, 'n kolom, 'n geplaasde item. Die oppervlak kan vertikaal, skuins of horisontaal wees.
- Die stelsel neem die oppervlak se buitelyn. 'n Gewel of 'n ander vreemde vorm sny die ruite en sprosse daarop aan.
- Dit kan in plaas daarvan 'n **muur** maak, langs die voet van 'n vertikale oppervlak en so hoog soos die oppervlak. 'n Muur hier staan altyd vertikaal, so 'n skuins of horisontale oppervlak kan nie een neem nie.
- Dit maak nie 'n dak nie. 'n Dak in BimCraft word uit 'n vlak se buitelyn en 'n helling bereken, nie uit 'n enkele oppervlak nie.
- 'n Geboë oppervlak is baie klein plat oppervlakke: een klik neem een daarvan.
- 'n Oppervlak met openings daarin: die stelsel bedek die oppervlak se buitenste buitelyn.

## Hoe dit gemeet word

- **Bruto-oppervlakte** is die stelsel se buitelyn.
- **Glasoppervlakte** is die ruite soos gemaak: elke ruit verloor 'n halwe sprosbreedte aan een kant met 'n roosterspros en 'n hele breedte by 'n randspros.
- 'n Vertikale spros loop deur van rand tot rand. 'n Horisontale spros stop by elke vertikale spros en by die rand. Randsprosse lê binne die buitelyn; waar twee ontmoet, loop die meer vertikale een deur. Verbindings word reg gesny, nie geskuins nie.
- **Skedules** het 'n lys **Gordynstelsels** met hierdie getalle sodra die model een het.

## In die IFC-lêer

'n IfcCurtainWall op sy vlak, saamgestel uit een IfcPlate (gordynpaneel) per ruit en een IfcMember (spros) per sprosstuk, elk met sy eie vorm, materiaal en basishoeveelhede.

## Goed om te weet

- Enige grootte word gemaak soos jy vra. Net 'n buitelyn sonder oppervlakte word geweier, omdat daar niks is om te maak nie.
- 'n Stelsel wat soos 'n muur geteken is, hou die hoogte waarmee dit geteken is. As jy later 'n vlak skuif, stel sy hoogte weer in Eienskappe.
- Die Skuif-gereedskap skuif nog nie 'n gordynstelsel nie. Verwyder dit en teken dit weer, of verander sy rooster op dieselfde plek.
- Ontdoen neem elke stap terug: die hele stelsel, een roosterverandering, een sprosverandering.
