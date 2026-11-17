---
title: Terén lokality, stavebná plošina a spevnené plochy
summary: Vložte terén do modelu z geodetických bodov, vrstevníc, skenu LAS / LAZ, GeoTIFF, povrchu LandXML (CivilCraft) alebo niekoľkých bodových kót; vyrežte do terénu stavebnú plošinu domu so sklonmi a výkopom / násypom; položte na terén príjazdové cesty, chodníky a terasy; odovzdajte ho programu CivilCraft ako LandXML.
keywords: terén, zem, lokalita, topografia, zameranie, body, PNEZD, vrstevnice, LAS, LAZ, LiDAR, GeoTIFF, DEM, nadmorská výška, bodová kóta výšky, úprava terénu, úprava, plošina, stavebná plošina, výkop, násyp, zemné práce, priesečník so terénom, svah, príjazdová cesta, chodník, terasa, spevnené plochy, LandXML, CivilCraft
from: 208298d6
---

## Čo urobíte

Umiestnite dom na jeho pozemok. Terén sa stane súčasťou modelu: zobrazí sa v 3D, v rezoch a pohľadoch, s vrstevnicami na pôdoryse. Pod domom sa do neho vyreže stavebná plošina, príjazdové cesty a chodníky sa mu prispôsobia a základové pásy s ním klesnú.

## Vloženie terénu

1. Otvorte {{ui:Zostava}} a vyberte {{ui:Terén}}.
2. Buď:
   - **Otvoriť súbor zamerania…**: geodetické body (PNEZD, PENZD alebo prosté X, Y, výška; oddelené čiarkou, tabulátorom alebo medzerou), vrstevnice v DXF alebo DWG (lomené čiary vo svojej výške, 3D lomené čiary), sken LAS alebo LAZ (body terénu sa zachovajú, zredukované približne na jeden bod na m²), GeoTIFF alebo ASCII mriežku výšok, alebo povrch **LandXML**, ako ho exportuje CivilCraft (jeho vlastné body a trojuholníky sa zachovajú; ak súbor obsahuje viac povrchov, BimCraft sa opýta, ktorý je terén; jednotky sa prevezmú zo súboru). Najskôr vyberte jednotky súboru (LandXML ich uvádza sám).
   - Alebo zadajte **Bodovú kótu výšky** (od podlahy tohto podlažia, takže `-1'` znamená o stopu pod ňou) a kliknite na body na pôdoryse, zmeňte výšku a kliknite na ďalšie body, potom kliknite na **Vytvoriť terén**. Na začiatok stačia tri body.

Súradnice zamerania ďaleko od modelu (štátna rovina, UTM) sa presunú k domu a výšky sa nastavia tak, aby terén pri dome bol približne 8" pod prvým podlažím. **Zdvihnúť terén** vo **Vlastnostiach** to opraví o ľubovoľnú hodnotu.

## Stavebná plošina

1. Vyberte {{ui:Stavebná plošina}}.
2. Nastavte **Okraj** okolo domu, o koľko **plošina leží pod podlahou** (8" pod doskou, viac pod plazivým priestorom) a **Sklony** smerom k existujúcemu terénu (`2:1` = dva stopy von na každý stop nahor alebo nadol).
3. Kliknite dovnútri domu.

Terén sa pod domom vyrovná až k okraju a potom sa svahuje hore do svahu (výkop) a dolu k nižšej strane (násyp), až kým nenarazí na existujúci terén. **Vlastnosti** terénu a plošiny uvádzajú objemy výkopu a násypu. Keď presuniete múry, plošina ich nasleduje.

## Príjazdové cesty, chodníky a terasy

Vyberte {{ui:Spevnené plochy}}, zvoľte **Chodník**, **Príjazdová cesta** alebo **Terasa** a kliknite na rohy. Na dokončenie kliknite znova na prvý roh, dvakrát kliknite alebo stlačte {{key:Enter}}. Spevnená plocha sleduje hotový upravený terén; jej druh alebo hrúbku zmeníte vo **Vlastnostiach**.

## Základové pásy kopírujú terén

Keď je terén v modeli, základové steny a základy plazivého priestoru ho nasledujú. Pozdĺž každej steny zostáva základ v svojej hĺbke pod terénom vonku a v celých krokoch po 8" sa zníži tam, kde terén klesá (pozri [Základy pod stenami](topic:foundations)).

## Odovzdanie programu CivilCraft

**LandXML pre CivilCraft** (v riadku Terén alebo vo **Vlastnostiach** terénu) stiahne existujúci terén a upravený terén ako súbor LandXML. Otvorte ho v programe CivilCraft na skutočné úpravy terénu, odvodnenie a zemné práce.

## Dobré vedieť

- Terén potrebuje model IFC4, ako každá nová budova.
- Vrstevnice sa zobrazia na pôdoryse úrovne terénu v intervale nastavenom vo **Vlastnostiach** terénu; každá piata je hrubšia.
- Terén sa uloží ako prvok terénu IFC (uzavretý trojuholníkový povrch, takže ho rezy pretínajú); plošina a spevnené plochy sa uložia spolu s ním. Ak chcete začať znova, zmažte terén — jeho plošina a spevnené plochy zmiznú spolu s ním.
