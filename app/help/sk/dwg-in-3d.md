---
title: Zobrazenie výkresu DWG alebo DXF v 3D
summary: Prepnite priestor modelu výkresu do 3D, aby ste videli výšky, hrúbky, 3D plochy, siete a bloky, otáčali sa okolo neho, kliknutím na objekt zobrazili jeho vlastnosti a videli, čo ešte nie je nakreslené.
keywords: 3d, dwg, dxf, výkres, priestor modelu, otáčanie, rez, orez, výber, vybrať, vlastnosti, atribúty, handle, výška, hrúbka, vytiahnutie, 3dface, polyface, sieť, 3D polylínia, bloky, pohľady, perspektíva, rovnobežné, rozsah, acis, telesá
from: a0c6cd17
---

## Čo budete robiť

Pozrite sa na priestor modelu výkresu v 3D. Čiary a polylínie sú na svojich skutočných výškach, objekty s hrúbkou stoja ako steny a 3D plochy, siete a 3D bloky sa zobrazujú ako plochy, okolo ktorých sa môžete otáčať. Listy zostávajú 2D.

## Postup

1. Otvorte DWG alebo DXF. Pozri [Zobrazenie výkresu DWG alebo DXF](topic:view-dwg). Otvorí sa v 3D, pokiaľ {{ui:Settings}} › {{ui:BimCraft}} › **Výkresy sa otvárajú v** nehovorí {{ui:Model (2D)}}.
2. Z 2D kliknite na {{ui:3D}} v paneli nad výkresom alebo stlačte {{key:3}}.
3. Prvýkrát chvíľu počkajte: stavový riadok ukáže "Vytváram výkres v 3D…", potom koľko čiar a plôch zobrazuje.
4. Otáčajte, posúvajte a približujte (pozri tabuľku nižšie).
5. Kliknite na pohľad v druhom paneli: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} alebo {{ui:Right}}.
6. Kliknite na {{ui:Perspective}} a prepínajte medzi perspektívnym a rovnobežným pohľadom.
7. Kliknite na {{ui:Extents}} alebo stlačte {{key:F}}, aby ste znova videli celý výkres.
8. Kliknite znova na {{ui:3D}}, stlačte {{key:3}}, alebo kliknite na {{ui:Model}} či na kartu listu, aby ste sa vrátili do 2D.

## Čo by ste mali vidieť

- Priestor modelu v 3D, Z smerom nahor, vo farbách samotného výkresu. Plochy sú o odtieň svetlejšie ako ich hrany.
- Vrstvy, ktoré vypnete v {{ui:Layers}}, zmiznú aj z 3D zobrazenia.
- Vpravo: počet čiar a plôch, veľkosť výkresu v X, Y a Z, **Iba v 2D zobrazení** a **Ešte nie je nakreslené**.

## Rez rovinou

Kliknite na {{ui:Section}} na paneli 3D alebo stlačte {{key:X}}. Panel pod ním funguje ako pri modeloch IFC (pozri [Rez modelom IFC rovinou](topic:section-plane)): rezajte zo {{ui:Top}}, {{ui:Front}} alebo {{ui:Side}}, potiahnite alebo zadajte odsadenie — tu v jednotkách samotného výkresu — a {{ui:Flip}} ponechá druhú stranu. To, čo rovina odreže, sa nedá vybrať. Návrat do 2D rez zruší.

## Zobrazenie vlastností objektu

Kliknite na objekt v 3D zobrazení. Zafarbí sa farbou výberu a {{ui:Properties}} zobrazí, čo o ňom súbor hovorí: jeho typ, vrstvu, farbu, typ čiary a handle, potom jeho vlastné údaje, napríklad začiatok, koniec a dĺžku čiary, stred a polomer kružnice, rohy 3D plochy alebo odkaz na blok, jeho blok, vkladací bod, mierku, otočenie a hodnoty atribútov.

- Odkaz na blok sa vyberie ako celok, vrátane blokov vnorených v ňom.
- Kliknutie niekoľko pixelov od čiary vyberie čiaru.
- Podržte {{key:Mod}} a kliknite, ak chcete vybrať ďalšie objekty alebo jeden z už vybraných odobrať; {{ui:Properties}} ich potom spočíta podľa typu.
- {{key:Esc}} alebo kliknutie na prázdny priestor zruší výber.
- Objekty na vypnutých vrstvách sa nedajú vybrať.

## Pohyb

:::mouse
| Na čo | Urobte toto |
|---|---|
| Otáčanie | Ťahajte stredným tlačidlom alebo ľavým |
| Posun | Ťahajte pravým tlačidlom alebo podržte {{key:Shift}} a ťahajte |
| Zoom | Pohybujte kolieskom; zoomuje smerom k tomu, čo je pod ukazovateľom |
| Zobraziť všetko | {{ui:Extents}} alebo {{key:F}} |
| Pozrieť zo strany | Kliknite na stenu, hranu alebo roh kocky pohľadu v pravom dolnom rohu |
:::

Kocku pohľadu možno v {{ui:Settings}} nahradiť ikonou osí alebo ju skryť. Pozri [Nastavenia BimCraft](topic:settings).

:::mac mouse
Na touchpade potiahnite dvomi prstami na otáčanie, podržte {{key:Shift}} a potiahnite na posun; stiahnutím prstov (pinch) zoomujte.
:::

:::touch
Ťahajte jedným prstom na otáčanie. Dvomi prstami stiahnutím zoomujte a pohybom oboch spolu posúvajte pohľad.
:::

## Čo sa kreslí v 3D

| Vo výkrese | V 3D |
|---|---|
| Čiary, 3D polylínie | Na svojich skutočných výškach |
| Polylínie, kružnice, oblúky, elipsy | V vlastnej rovine, na svojej výške, naklonené podľa toho, ako ich výkres naklonil |
| Hrúbka na čiarach, polylíniách, kružniciach a oblúkoch | Steny tejto výšky; kružnice sú uzavreté hore aj dole |
| 3D plochy, polyface siete, polygónové siete | Tieňované plochy s ich viditeľnými hranami |
| Bloky | Umiestnené, otočené a zmenené na mierku v 3D, aj vnorené bloky |
| Šráfovania | Ich obrysy |
| Obyčajná 2D čiarová kresba | Plocho, kde bola nakreslená |

## Iba v 2D zobrazení

Text, viacriadkový text a viditeľné atribúty blokov sa kreslia v 3D, v ich vlastnej rovine na ich výške, a kliknutie na ne ich vyberie. Široké polylínie zobrazujú svoju šírku ako plochý pás. Viacnásobné vynášacie čiary, obrázky a vzory šráfovania sa počítajú pod **Iba v 2D zobrazení**: pozrite ich na karte {{ui:Model}} alebo na listoch.

## Ešte nie je nakreslené

Telesá a plochy uložené ako telesá ACIS (3D telesá, telesá, oblasti a plochy) a rozdeľované siete sa uvádzajú pod **Ešte nie je nakreslené** s počtom. Preskočia sa, neodhadujú sa.

## Časté chyby

- **Všetko vyzerá ploško.** Výkres je 2D: jeho čiary nemajú výšku. Kliknite na {{ui:Front}} a overte to; ploský výkres sa zobrazí ako čiara.
- **Model telesa nič nezobrazí.** Telesá vytvorené modelárom telies sú telesá ACIS, uvedené pod **Ešte nie je nakreslené**. Exportujte model ako IFC alebo ako 3D plochy z programu, ktorý ho vytvoril.
- **Výkres je malý zhluk v strede.** Niečo ďaleko v priestore modelu, napríklad stará kópia pôdorysu, zväčší rozsah. Priblížte kolieskom tam, kam sa chcete pozrieť.

## Ďalej

- [Práca s hladinami a listami](topic:dwg-layers-sheets)
- [Rez modelom IFC rovinou](topic:section-plane)
