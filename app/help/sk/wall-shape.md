---
title: Tvar steny: pripojenie, profil, sklon a otvory
summary: Pripojte vrch steny ku streche, podlahe alebo stropu, dajte jej vlastný obrys pohľadu zboku, nakloňte ju alebo vyrežte otvor bez dverí a okna, vo Vlastnostiach, v pohľade alebo reze, na pohľade na jej plochu alebo v 3D; každá úprava je jeden krok späť.
keywords: pripojiť, pripojiť hore, pripojiť dole, strecha, doska, strop, štít, profil, upraviť profil, obrys pohľadu, schodovitý, parapet, sklon, naklonený, nakloniť, náklon, kužeľovitý, dvojitý sklon, otvor, otvor v stene, diera, prechod, bez dverí, úchyty, pohľad, rez, 3D, pohľad na plochu, zakrivená stena, kópia
from: f558b269
---

## Čo urobíte

Zmeníte tvar steny nad a pod jej pôdorysom: jej vrch môže nasledovať strechu, podlahovú dosku alebo strop, môže mať vlastný obrys viditeľný zboku, môže byť naklonená a môže mať otvory bez dverí alebo okna. Pôdorys steny, jej rohy a referenčná čiara zostanú, ako boli.

## Kde to môžete urobiť

- **Vlastnosti**: so zapnutým {{ui:Kresliť}} a {{ui:Vybrať}} kliknite na jednu stenu, ktorú ste nakreslili. **Vlastnosti** zobrazia riadky steny, potom **Tvar**, kde sa všetko zadáva písaním.
- **Pohľad alebo rez**: ceruzka v prehliadači projektu ({{ui:Upraviť v tomto pohľade}}) otvorí pohľad; vyberte v ňom stenu a potiahnite jej úchyty. Pozri „V pohľade alebo reze“ nižšie.
- **Pohľad na plochu steny**: {{ui:Múry}} › {{ui:Upraviť profil}}, potom kliknite na stenu v pôdoryse. Funguje to pre každú stenu, aj pre takú, ktorú žiadny pohľad nezobrazuje kolmo, a pre zakrivenú stenu (zobrazenú rozvinutú).
- **Pôdorys a 3D pohľad**: štyri príkazy v {{ui:Múry}} (skupina Upraviť): {{ui:Pripojiť hore / dole}}, {{ui:Upraviť profil}}, {{ui:Sklon}} a {{ui:Otvor v stene}}. Pozri „V pôdoryse a v 3D“ nižšie.

Nech zvolíte ktorýkoľvek spôsob, ide o tú istú zmenu: jeden krok v **Zmenách**, ktorý {{ui:Späť}} vráti.

Rovné aj zakrivené steny podporujú všetky nástroje tvaru. Pri zakrivenej stene sa vzdialenosti merajú pozdĺž jej oblúka.

## Pripojenie hornej alebo spodnej hrany

- **Pripojiť hore**: vyberte strechu, podlahu alebo strop. Vrch steny nasleduje spodnú stranu vybraného objektu, priamo nad každým rohom steny. Pod šikmou strechou dostane stena šikmý vrch a tam, kde strecha mení rovinu (hrebeň alebo valba), sa vrch steny ohne spolu s ňou.
- **Pripojiť dole**: vyberte podlahu alebo strop. Spodná hrana steny nasleduje jej vrchnú plochu.
- Tam, kde nad (alebo pod) časťou steny nič nie je, si táto časť zachová vlastnú výšku steny.
- Prepojenie zostáva: zmeňte sklon alebo presah strechy, alebo výšku stropu a pripojené steny nasledujú v tom istom kroku.
- Vyberte **Vlastná výška**, ak chcete prepojenie uvoľniť.

## Úprava profilu

{{ui:Upraviť profil…}} otvorí obrys steny pohľadom zboku:

- **Horná čiara**: riadky **Pozdĺž** (vzdialenosť od začiatku steny) a **Výška** (nad spodkom steny). Tri riadky 0 / 3000, 2500 / 4500, 5000 / 3000 vytvoria štítovú stenu na 5 m stene.
- **Spodná čiara**: nechajte prázdnu pre úrovňový spodok, alebo zadajte riadky pre stenu na schodovitom základe.
- {{ui:Pridať bod}} pridá riadok, **Odstrániť** odstráni jeden. {{ui:Použiť tento profil}} ho použije; {{ui:Späť na rovnú}} ho odstráni.

Každá čiara vedie pozdĺž steny raz, od jej začiatku ku koncu; čiara, ktorá sa vracia sama na seba, alebo vrch, ktorý klesne až na spodok, sa odmietne. Ak je pripojený aj vrch, použije sa nižší z oboch.

## Naklonenie steny

**Sklon**: **Kolmá**, **Naklonená** (obe plochy sa nakláňajú rovnakým smerom, hrúbka zostáva) alebo **Dvojitý sklon** (každá plocha má vlastný uhol: stena sa smerom nahor zužuje alebo rozširuje). Zadajte stupne od kolmice; kladný uhol sa nakláňa doľava steny, pohľadom od jej začiatku. Stena zostáva na mieste, kde je nakreslená pri spodku; steny spojené s ňou sa s ňou nenakláňajú.

## Otvory bez dverí alebo okna

{{ui:Pridať otvor}} vyreže dieru širokú 900 v strede steny. Jej riadok v **Otvoroch** nastavuje **Od začiatku**, **Šírku**, **Parapet** (od úrovne) a **Výšku**; **Odstrániť** ho odstráni. Otvor prechádza celou stenou, množstvá steny ho vynechajú a pôdorys ukáže medzeru tam, kde dosiahne výšku rezu pôdorysu. Keď sa začiatok steny posúva pozdĺž jej čiary, otvor si zachová svoje miesto; zmena, ktorá by ho nechala mimo steny, sa odmietne.

## V pohľade alebo reze

Otvorte pohľad ceruzkou v prehliadači projektu. So zapnutým {{ui:Vybrať a presunúť}}:

- **Profil**: kliknite na stenu, ktorá smeruje k pohľadu. Jej horná a spodná čiara sa zmenia na modré, s štvorcovým úchytom na každom bode a bodkou v strede každého úseku.
  - Potiahnite štvorec, aby ste presunuli bod (dva koncové body sa pohybujú len hore a dole).
  - Potiahnite bodku, aby ste presunuli celý úsek hore alebo dole.
  - Dvojklikom na čiaru (alebo pravým tlačidlom) pridajte bod tam; {{ui:Pridať bod (hore)}} a {{ui:Pridať bod (dole)}} pridajú bod v strede najdlhšieho úseku.
  - Kliknite na štvorec a stlačte Delete (alebo ho kliknite pravým tlačidlom), aby ste ten bod odstránili. {{ui:Späť na rovnú}} odstráni profil.
  - Keď je bod vybraný, napíšte jeho **Pozdĺž** a **Výšku** do lišty pod panelom nástrojov.
- **Pripojenie**: lišta obsahuje zoznamy **Pripojiť hore** a **Pripojiť dole** pre vybranú stenu. Alebo použite nástroj **Pripojiť hore** alebo **Pripojiť dole**: kliknite na stenu alebo steny, potom na strechu, podlahu alebo strop, zobrazené ako prerušované rámiky. Všetky vybrané steny sa pripoja v jednom kroku.
- **Otvory v stenách**: pomocou nástroja {{ui:Otvor v stene}} potiahnite obdĺžnik na ploche steny. Späť v {{ui:Vybrať a presunúť}} potiahnite otvor, aby ste ho presunuli, potiahnite jeden z jeho ôsmich úchytov, aby ste zmenili veľkosť, napíšte **Od začiatku**, **Šírku**, **Parapet** a **Výšku** do lišty, alebo stlačte Delete, aby ste ho odstránili.
- **Sklon**: stenu, na ktorú sa pohľad díva pozdĺž (vidieť ju na ráz, ako rez cez ňu alebo v pohľade z jej konca), možno kliknúť tiež. Potiahnite okrúhlu rukoväť na jej vrchu, aby ste ju naklonili, alebo vyberte **Kolmá**, **Naklonená** alebo **Dvojitý sklon** v lište a napíšte uhly.

Rozmery sa prichytávajú na 10 mm; pre jemnejšie hodnoty zadajte hodnotu. Zakrivenú stenu možno upraviť v pohľade, kým ide jedným smerom napríč cez pohľad; jej vlastný pohľad na plochu funguje vždy.

## V pôdoryse a v 3D

Otvorte {{ui:Múry}} v skupine Upraviť:

- {{ui:Pripojiť hornú / spodnú hranu}}: vyberte **Pripojiť hore** alebo **Pripojiť dole** v riadku nástroja. Kliknite na stenu alebo steny (v pôdoryse alebo v 3D), potom na to, k čomu sa pripájajú: v 3D kliknite priamo na strechu, podlahu alebo strop; v pôdoryse kliknite na bod pod ním (ak je ich viac, zobrazí sa zoznam, ktorý sa spýta).
- {{ui:Upraviť profil}}: v pôdoryse kliknite na stenu, aby sa otvoril jej pohľad na plochu. V 3D kliknite na stenu: jej body profilu dostanú úchyty; potiahnite jeden z nich v rovine steny.
- {{ui:Sklon}}: kliknite na stenu (pôdorys alebo 3D) a napíšte, ako veľmi sa nakláňa.
- {{ui:Otvor v stene}}: v pôdoryse kliknite na stenu, kde má otvor byť; jeho **Šírka**, **Výška** a **Parapet** sú v riadku nástroja. V 3D kliknite na jeden roh na ploche steny, potom na protiľahlý roh. Keď je stena vybraná v 3D, jej otvory majú úchyty: rohy menia veľkosť, stred sa presúva.

Úchyty v 3D sú úchyty 3D pohľadu, takže počkajú, kým rezný box zobrazuje svoje úchyty.

## Na pôdoryse

Naklonená stena sa kreslí tam, kde pôdorys ju pretína (1200 nad úrovňou, pokiaľ pohľad nehovorí inak): jej obrys sa posunie o toľko, koľko sa v tej výške nakláňa, a dvojitý sklon je tam širší alebo užší. Jej obrys na podlahe sa kreslí tenkými čiarami toho, čo leží pod rezom. Rohy, úchyty a kóty steny zostávajú pri jej spodku.

## Kópie

{{ui:Kopírovať túto úroveň…}} a Presunúť s **Kopírovať** prevezmú profil steny, sklon a otvory v stene. Stena pripojená k podlahe alebo stropu sa pripája ku kopírovanej podlahe alebo stropu novej úrovne; pripojenie k streche sa s úrovňou nekopíruje (strechy sa nekopírujú). Kópia na tej istej úrovni zostáva pripojená k tej istej streche, podlahe alebo stropu.

## V súbore

Stena s tvarom sa zapisuje ako fasetované teleso (IfcFacetedBrep), ktoré iné programy čítajú tak, ako je nakreslené; jej nastavenia sú na stene (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Otvor je IfcOpeningElement v stene, nič ho nevypĺňa.

## Čo ešte nie je hotové

- Profil s previsami alebo dierami v obryse (na diery použite otvory).
- V 3D: pridávanie alebo odstraňovanie bodov profilu a sklon pomocou rukoväte (použite pohľad na plochu steny, pohľad alebo rez, alebo ho napíšte).
- {{ui:Odsadenie}} so zapnutým Kopírovať nekopíruje tvar ani otvory v stene (Presunúť s Kopírovať áno).
- Vrstvy naklonenej steny sa nekreslia v pôdorysoch so stredným a jemným detailom (kreslí sa jej obrys).
- Otvory, ktoré nie sú obdĺžnikové.
