---
title: Lähetä malli renderöintiohjelmaan
summary: Tallenna 3D-näkymän sisältö glTF-mallina (.glb) materiaaleineen, tekstuureineen ja valaisimineen renderöinti- ja visualisointiohjelmiin, jotka lukevat glTF:ää.
keywords: glb, gltf, gl transmission format, vienti, renderöinti, renderöi, visualisointi, reaaliaikainen, archviz, materiaalit, tekstuurit, valaisimet, valot, omaisuuserä, mukautettu omaisuuserä
from: e62d57dc
---

{{ui:Renderöintiä varten}} työkalurivillä tallentaa 3D-näkymän sisällön yhdeksi **.glb**-tiedostoksi (glTF 2.0, Khronos Groupin avoin formaatti). Renderöintiohjelmat, jotka lukevat glTF:ää, avaavat sen mallin materiaaleineen ja valoineen. Twinmotion luettelee glTF:n ja GLB:n geometriatiedostoina, jotka se tuo, ja säilyttää niiden valot (Epicin dokumentaatio, ”Geometrian tuominen Twinmotionissa”): käytä {{ui:Renderöintiä varten}} -toimintoa ja tuo .glb-tiedosto siellä. Mitään ei lähetetä; tiedosto tehdään tällä tietokoneella.

## Tallenna se

1. Avaa IFC-malli ja aseta 3D-näkymä: piilota kerrokset, elementit tai linkitetyt mallit, joita et halua, ja [maalaa materiaalit](topic:paint-materials), jotka haluat nähdä.
2. Napsauta {{ui:Renderöintiä varten}} (tai kirjoita `GLB`).
3. Tiedosto ladataan nimellä "<model name>.glb". Tilarivi kertoo, kuinka monta kolmiota, materiaalia ja valaisinta tiedostossa on.

## Mitä tiedosto sisältää

- **Geometria** jokaisesta elementistä, jonka 3D-näkymä näyttää, metreinä, Y ylöspäin (glTF:n omat akselit). Yksi kohde per kerros ja materiaali, nimeltään esimerkiksi "Kerros 1 — Tiili, punainen", jotta voit valita materiaalin renderöintiohjelmassa ja vaihtaa sen omaansa.
- **Materiaalit:** jokainen väri sillä ilmeellä, jonka valitsit kohdassa [Renderöi](topic:render) (himmeä, satiini, kiiltävä, metalli, lasi…), ja jokainen maalattu kirjastomateriaali värillään, karheudellaan ja **tekstuurillaan** (sen kuva on tiedostossa skaalattuna todelliseen kokoonsa: tiili on tiilen kokoinen). Lasi on läpinäkyvä.
- **Valaisimet:** jokainen valaisin, joka on päällä kohdassa Renderöi › Valaisimet, pistevalona tai kohdevalona kirkkautensa (luumenit muunnettuna kandeloiksi), värinsä ja säteen kulmansa kanssa.
- **Missä kohde on:** kohteen leveys- ja pituuspiiri kirjoitetaan tiedostoon viitteeksi. Renderöintiohjelmissa on oma aurinko: kirjoita paikka sinne.

## Mitä se jättää pois

- Leikkaustason (kokonaiset elementit menevät mukaan) ja läpinäkyviksi näytetyt elementit (ne jätetään pois).
- Elementtikohtaiset kohteet (sen sijaan yksi kohde per kerros ja materiaali), IFC-ominaisuudet, kuhmukartat, tallennetut näkymät ja tallennetut kävelyt.
- Reunat ja tausta.

## Enscape ja muut liitännäisrenderöijät

Enscape toimii toisen suunnitteluohjelman sisällä, eikä sillä ole tiedostoa, jonka avaamalla koko projekti aukeaisi. Kaksi tapaa:

- Avaa mallin **IFC** (Tiedosto › Tallenna) ohjelmassa, jossa Enscape toimii; useimmat niistä lukevat IFC:tä. Värit tulevat mukana; kirjastomateriaalit tulevat värinsä kanssa.
- Tuo **pieni osa** (huonekalu, kalustus) mukautettuna omaisuuseränä: eristä se ensin ja napsauta sitten {{ui:Enscapea varten (.gltf)}}. Enscapen mukautettujen omaisuuserien kirjasto listaa .gltf-, .obj- ja .fbx-tiedostot, ei .glb-tiedostoja, joten tämä painike tallentaa saman kohtauksen yhtenä itsenäisenä **.gltf**-tiedostona (binääridata ja kuvat ovat tiedoston sisällä; siihen ei tarvitse kopioida mitään muuta). Enscape suosittelee pieniä omaisuuseriä (alle noin 20,000 kolmiota).

:::note
CadCraft Studiossa saman glTF-tiedoston (ja USD-tiedoston) voi tallentaa myös kohdasta {{ui:Renderöi}} › Moottori › **glTF-tiedosto** / **USD-tiedosto**, tai avata suoraan toisessa ohjelmassa tällä tietokoneella: katso [Avaa kohtaus toisessa ohjelmassa](topic:render-open-in). Liitännäistä tai suoraa yhteyttä Enscapeen tai Twinmotioniin ei ole toteutettu. FBX- ja Datasmith-formaateilla ei ole julkaistua määritystä, joten BimCraft ei kirjoita niitä; glTF on avoin reitti.
:::
