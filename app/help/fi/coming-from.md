---
title: Siirtyminen muista BIM- ja piirustusohjelmista
summary: Miten pöytäkoneen BIM-suunnitteluohjelmien ja DWG-tiedostojen katselun tottumukset vastaavat BimCraft-ohjelmaa, ja erot, jotka yllättävät.
keywords: siirtyminen, siirto, tuttu, pöytäkoneen BIM, perhe, parametrit, projektiselain, ominaisuuspaletti, näkymäkuutio, xref, tasonhallinta, erot, vertailu
from: 2de629af
---

Jos tuttu ohjelma on Revit, suurin osa BimCraft-ohjelman toiminnoista tuntuu tutulta sanoiltaan mutta vieraalta laajuudeltaan. Tärkein ero: tämä versio lukee ja tarkastaa malleja sekä muokkaa IFC-tietoja. Se ei vielä suunnittele kuten Revit-ohjelma. Seiniä ei voi piirtää, perheitä sijoittaa, näkymiä tai arkkeja luoda, eikä projektitiedostoa tallentaa. Sen sijaan voi avata lähes minkä tahansa rakennustiedoston millä tahansa tietokoneella selaimessa, nähdä mitä siinä on, tarkistaa koko projektikansion ja korjata IFC-mallin tietoja.

## Tottumukset ja niiden vastineet

| Jos olet tottunut | BimCraft-ohjelmassa |
|---|---|
| Avaat `.rvt`-tiedoston Revit-ohjelmassa nähdäksesi mallin | `.rvt` avautuu tiedostokorttina: julkaisuversio, projektitiedot, linkit ja esikatselu. Kolmiulotteista mallia varten vie IFC ja avaa se. [Lue projekti- tai perhetiedosto](topic:read-rvt-file) |
| Tarkistat, missä Revit-versiossa tiedosto on tallennettu ennen avaamista | Kortin yläreunassa lukee "tallennettu Revit …", eikä tiedostoa päivitetä tai muokata |
| Projektiselain | Ei näkymien ja arkkien selainta. IFC-mallissa on {{ui:Kerrokset}}- ja {{ui:Rakennusosat}}-luettelot; piirustuksessa on arkkivälilehdet |
| Ominaisuuspaletti | {{ui:Ominaisuudet}}-paneeli oikealla, napsautetulle elementille. IFC-ominaisuusjoukot parametriryhmien sijaan |
| Ilmentymän ja tyypin parametrit | Ilmentymän ominaisuusjoukot ja "(tyyppi)"-merkityt joukot. Tyypin muutos koskee jokaista tyypin elementtiä, kuten Revitissä. [Muuta tyypin ominaisuutta kaikille tyypin elementeille](topic:type-vs-instance) |
| Muokkaa tyyppiä | Ei valintaikkunaa: napsauta arvoa "(tyyppi)"-joukossa ja kirjoita |
| Monen elementin valinta, suodattimet, Valitse kaikki ilmentymät | Yksi elementti kerrallaan. Ei vielä toteutettu |
| Näkymäkuutio ja navigointipyörä | Näkymäkuutio oikeassa alakulmassa, neljä painiketta ({{ui:Sovita}}, {{ui:Ylhäältä}}, {{ui:Edestä}}, {{ui:Sivu}}) ja vapaa kiertäminen. Ei navigointipyörää |
| Shift ja keskipainike kiertämiseen, keskipainike panorointiin | Vasenta painiketta vetämällä kierrät, oikealla vetämällä (tai {{key:Shift}} ja vetämällä) panoroit, rullalla zoomaat. {{ui:BIM-valintanauha}}-tyyli vaihtaa panoroinnin keskipainikevetoon ja kiertämisen {{key:Shift}}-näppäimeen keskipainikkeen kanssa. [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse) |
| Pohjapiirrokset, leikkaukset, leikkauslaatikot | Yksi {{ui:Leikkaus}}-taso kerrallaan ({{key:X}}); ei leikkauslaatikkoa eikä 2D-pohjapiirroksia. [Leikkaa IFC-malli leikkaustasolla](topic:section-plane) |
| Piilotus näkymässä, eristäminen, näkyvyys ja grafiikka | {{ui:Kerrokset}} päälle ja pois, {{ui:Tilat}} ja {{ui:Särmät}}. Yksittäisten elementtien piilotusta ei vielä ole |
| Huoneet | IFC-tilat, alussa piilossa. Napsauta {{ui:Tilat}} |
| Tallenna, Tallenna nimellä, synkronointi keskustiedoston kanssa | {{ui:Tallenna IFC-tiedostona}} lataa uuden IFC-tiedoston. Alkuperäinen ei muutu. Ei keskustiedostoa eikä yhteistyötilaa |
| Kumoa {{key:Mod+Z}} | Toimii IFC-muokkauksiin, kunnes tallennat. [Muuta IFC-ominaisuuksia ja tallenna muokattu kopio](topic:edit-ifc-properties) |
| Linkkien hallinta | Avaa projektikansio: jokainen linkki tarkistetaan ja merkitään **Tässä kansiossa**, **Samanniminen löytyi**, **Kirjastotiedosto** tai **Ei tässä kansiossa**. [Avaa koko projektikansio](topic:open-project-folder) |
| Tarkastus tai tiedoston avaaminen sen selvittämiseksi, onko se vioittunut | Kansioraportti tarkistaa jokaisen kopion ja varmuuskopion katkeamisen varalta sekunneissa. [Tarkista kansio vioittuneiden kopioiden varalta](topic:check-folder-health) |
| Oikean tiedoston valinta sotkuisesta kansiosta | {{ui:Aloita tästä}}-ruutu ehdottaa yhtä tiedostoa perusteluineen |

Jos avaat malleja lähinnä tarkistaaksesi niitä, kuten mallintarkastus- tai IFC-katseluohjelmassa, valitse {{ui:Katselin}}-valikkotyyli: katselu- ja tarkastustyökalut tulevat ensin, ja rakennustyökalut odottavat yhdessä valikossa. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse).

## DWG-tiedostojen katselusta

Jos avaat DWG-tiedostoja AutoCADissa tai DWG-katselijassa:

| Jos olet tottunut | BimCraft-ohjelmassa |
|---|---|
| Malli- ja asettelu-välilehdet alareunassa | Välilehdet piirustuksen yläpuolella: {{ui:Malli}} ja yksi kutakin arkkia kohti |
| ZOOM Extents, kaksoisnapsautus rullaan | Kaksoisnapsautus, {{key:F}} tai {{ui:Sovita}} |
| Panorointi keskipainikkeella | Vedä millä tahansa painikkeella |
| Tasonhallinta | {{ui:Tasot}}-luettelo: rastita näyttääksesi, poista rasti piilottaaksesi; {{ui:Kaikki päällä}} ja {{ui:Kaikki pois}} |
| Xref-hallinta | **Linkitetyt piirustukset** oikealla, merkinnöillä **Näkyy** tai **Ei löydy**, ja {{ui:Lisää linkitettyjä piirustuksia…}} |
| Tulostuksen esikatselu | {{ui:Tulostusnäkymä}} tai {{key:P}}: musta valkoisella viivanpaksuuksineen. Sitä ei tulosteta |
| Lohkojen attribuuttien tietojen poiminta | {{ui:Laitteet}}-välilehti tunnisteilla merkityille keittiöpiirustuksille, {{ui:Lataa CSV}} |
| Mittaaminen, piirtäminen, muokkaus, tallennus nimellä | Ei BimCraft-ohjelmassa. CadCraft-piirto-ohjelma piirtää ja muokkaa |

## Erot, jotka yllättävät

- **Se toimii selaimessa, ja selain käsittelee tiedostojasi varovasti.** BimCraft voi lukea vain tiedostoja ja kansioita, jotka annat sille valitsemalla tai vetämällä ne. Se ei voi avata tiedostoa itsekseen eikä tallentaa sen päälle. Jokainen tallennus on lataus.
- **Mitään ei lähetetä.** Sana "lähetä" joissain selainten kansioikkunoissa on selaimen oma sanamuoto. Tiedostot pysyvät tietokoneella.
- **IFC on mallimuoto.** Projektitiedosto avautuu korttina, koska sen kolmiulotteinen sisältö ei ole dokumentoitu. IFC on tapa, jolla mallit siirtyvät BimCraft-ohjelmaan.
- **Muokkaukset kirjoittavat kopioon.** Yhden elementin arvon muuttaminen ei koskaan muuta sen naapureita, vaikka vientiohjelma olisi jakanut arvon niiden kesken. Tyyppiominaisuudet ovat tietoinen poikkeus.
- **Ei projektia, ei näkymiä.** BimCraft näyttää kerrallaan yhden tiedoston eikä muista siitä mitään välilehden sulkemisen jälkeen, paitsi viimeisimpien kansioiden nimet Chromessa ja Edgessä.
- **Mac-näppäimet.** Missä Revitin Windows-pikanäppäimet käyttävät {{key:Ctrl}}-näppäintä, BimCraftin pikanäppäimet käyttävät {{key:Mod}}-näppäintä: Macissa Command.
- **Hiiritottumukset.** Kiertäminen tehdään vasemmalla painikkeella, ei Shift- ja keskipainikkeella, ellet valitse {{ui:BIM-valintanauha}}-valikkotyyliä tai aseta painikkeita itse kohdassa [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse).

Katso [Mitä ei ole vielä toteutettu](topic:not-built-yet), mitä käyttää sen sijaan tänään.
