---
title: Pohľady, rozsahy pohľadov a vlastné listy
summary: Nájdite každý pôdorys, pohľad, rez, 3D pohľad, tabuľku a list v prehliadači projektu, nastavte, ako sa každý pôdorys reže a čo zobrazuje, vytvárajte detaily, kreslite čiary a šráfovania v jednom pohľade, uchovávajte nastavenia v šablónach pohľadov a usporiadajte vlastné listy.
keywords: detail, pohľad detailu, detailný pôdorys, kreslenie, detailné čiary, kreslené čiary, šráfovanie, oblasť šráfovania, vyplnená oblasť, vzor výplne, pôdorys stropu, rcp, mriežka stropu, svietidlá, prehliadač projektu, pohľady, rozsah pohľadu, orez, oblasť orezu, mierka pohľadu, podklad, zobraziť ďalšie podlažie, polotón, rezná rovina, výška rezu, hore, dole, hĺbka pohľadu, viditeľnosť, kategórie, skryť v pohľade, šablóna pohľadu, šablóny, list, listy, popisové pole, výrez, mierka, usporiadanie listov, rozloženie, pdf, nastavenia pôdorysu, prehliadač
from: ee1d5afe
---

## Čo urobíte

Pracujete tak, ako sú organizované projekty BIM: každý pohľad v jednom zozname, každý pôdorys rezaný tam, kde chcete, rovnaké nastavenia pre viac pôdorysov cez šablónu a listy, ktoré si rozložíte sami.

## Prehliadač projektu

1. Zapnite {{ui:Kresliť}}. Ľavý panel má {{ui:Prehliadač projektu}} pod modelmi.
2. Vypíše:
   - **Pôdorysy podlaží**: každé podlažie. Kliknite na jedno, aby ste videli jeho pôdorys. Tlačidlo posuvníka vedľa neho nastavuje jeho rozsah pohľadu (nižšie). Pôdorys, ktorý nasleduje šablónu, zobrazuje názov šablóny.
   - **Pôdorysy stropov**: pôdorys stropu každého podlažia (nižšie).
   - **Detaily**: každý detail s pohľadom, na ktorom je nakreslený, a {{ui:Nový detail}}. **Chýbajúce** vypíše detaily, ktorých pohľad zmizol.
   - **Pohľady** a **Rezy**: štyri strany a každú reznú čiaru. Kliknite na jeden, aby ste otvorili súbor výkresov, v ktorom sú nakreslené.
   - **3D pohľady**: pohľady, ktoré ste uložili pomocou {{ui:Pohľady}}.
   - **Tabuľky**: kliknite na jednu, aby sa zobrazila pod pôdorysom.
   - **Listy**: listy, ktoré ste vytvorili, {{ui:Nový list}}, a {{ui:Súbor výkresov…}} pre celú sadu vytvorenú z modelu.
   - **Šablóny pohľadov** s {{ui:Nová šablóna}}, a **Odkazy** (prepojené modely).

## Nastavenie rozsahu pohľadu pôdorysu

1. Kliknite na tlačidlo posuvníka vedľa podlažia v **Pôdorysy podlaží**.
2. Nastavte výšky nad týmto podlažím:
   - **Rez vo výške**: kde pôdorys reže steny, dvere a okná (1200 mm, asi 4 ft, pokiaľ to nezmeníte).
   - **Hore**: veci nad rezom a pod hornou hranicou sa kreslia prerušovane (vysoká skrinka, nosník). Nechajte prázdne pre výšku podlažia.
   - **Dole** a **Hĺbka pod spodkom**: veci nižšie ako rez sa kreslia tenkými čiarami dole na spodok a toľko pod ním.
3. Pod **Zobrazené v tomto pôdoryse** zrušte to, čo tento pôdorys vynecháva: nábytok, miestnosti, stĺpy a podobne.
4. Ak chcete vynechať jednotlivé prvky: vyberte ich v pôdoryse alebo 3D pohľade, otvorte dialóg a kliknite na {{ui:Skryť tu vybrané}}. {{ui:Zobraziť všetky}} ich vráti.
5. Kliknite na {{ui:Použiť tieto nastavenia}}.

Pôdorys sa hneď prereže znova a súbor výkresov aj vaše listy ho nasledujú. Rez mračna bodov sa tiež riadi výškou rezu.

## Orezanie pôdorysu, mierka a zobrazenie ďalšieho podlažia pod ním

Všetky tri sú v tom istom dialógu (tlačidlo posuvníka vedľa podlažia):

- **Mierka**: mierka, v ktorej sa pôdorys tlačí ({{ui:Tlačiť}} na lište pôdorysu) a ktorou sa dostane na list. **Prispôsobiť** vyberie najväčšiu štandardnú mierku, ktorá sa zmestí.
- **Oblasť orezu**: kliknite na {{ui:Nakresliť v pôdoryse…}}, potom kliknite na jeden roh a protiľahlý roh na pôdoryse ({{key:Esc}} zastaví). Pôdorys mimo oblasti sa na obrazovke zakryje, a stále tam môžete pracovať; vytlačený, na listoch a v súbore výkresov pôdorys ukazuje iba to, čo je vnútri. {{ui:Vymazať}} orez odstráni. {{ui:Prispôsobiť}} prispôsobí orez.
- **Podklad**: vyberte iné podlažie. Jeho steny, rezané prvky, dvere a okná sa kreslia svetlo pod týmto pôdorysom, aby ste ich zarovnali s podlažím pod alebo nad ním. Tu ich nemôžete vybrať a vytlačia sa svetlosivo.

Šablóna pohľadu nesie mierku spolu s výškami a kategóriami. Oblasť orezu a podklad vždy patria jednému pôdorysu.

## Pôdorys stropu podlažia

Každé podlažie má pôdorys stropu vedľa svojho pôdorysu: pôdorys pozeraný zdola, na rozloženie stropov a toho, čo z nich visí.

1. Kliknite na podlažie pod **Pôdorysy stropov** v prehliadači, alebo vyberte {{ui:Pôdorys stropu}} vedľa podlažia na lište pôdorysu.
2. Steny sú rezané vo výške 2300 mm (asi 7'-6"). Kreslí sa to, čo leží nad týmto rezom a pod výškou podlažia: stropy s ich mriežkou a výškovou značkou (`CLG 2438`), svetlá, nosníky. Dvere, okná a to, čo leží pod rezom, sú vynechané.
3. Na vytvorenie stropu použite {{ui:Strop}} ako na pôdoryse podlažia, potom ho vyberte a zvoľte jeho **Vzor** vo Vlastnostiach. Pozri [Miestnosti, podlahy, stropy a strechy](topic:floors-and-roofs).
4. Ak z neho chcete zavesiť svetlo, umiestnite položku z knižnice, zatiaľ čo je zobrazený pôdorys stropu: ide do **Pri strope**. Pozri [Umiestnenie zariadenia a nábytku z knižnice](topic:place-from-library).
5. Posuvník vedľa pôdorysu stropu nastavuje jeho rez a hornú hranicu, mierku, kategórie, oblasť orezu a podklad, ako pri pôdoryse podlažia. Pôdorysy stropov neberú šablónu pohľadu.

Kreslí sa rovnakým smerom ako pôdorys podlažia (odrazený pôdorys, nie zrkadlový obraz). Strop nižší ako rez sa nekreslí: pre pôdorys stropu tohto podlažia znížte rez. Pôdorysy stropov idú na vaše vlastné listy ako pôdorysy; sada výkresov ich nepridá sama.

## Vytvorenie detailu

Detail zobrazuje časť pôdorysu zväčšene, v jeho vlastnej mierke, ako samostatný pohľad: kuchyňa, schodisko, roh steny.

1. Zobrazte pôdorys, pôdorys stropu alebo detail, ku ktorému patrí.
2. Vyberte {{ui:Anotovať}} › {{ui:Detail}} na lište pôdorysu (alebo {{ui:Nový detail}} v prehliadači), potom kliknite na jeden roh oblasti a protiľahlý roh. {{key:Esc}} zastaví.
3. Detail sa vytvorí v mierke 1:20 (1/2" = 1'-0" v stopách a palcoch). Jeho obdĺžnik a okrúhla značka sa nakreslia na pôdorys.
4. Kliknite na značku pomocou {{ui:Vybrať}}, alebo na detail v prehliadači, aby ste ho otvorili: pôdorys ukazuje iba túto oblasť v mierke detailu. Lišta hovorí {{ui:Detail:}} a jeho názov; {{ui:Hore}} vráti k pohľadu, na ktorom je nakreslený.
5. Posuvník vedľa neho (v prehliadači alebo na lište) premenuje detail, zmení jeho mierku, nakreslí jeho obdĺžnik znova alebo ho zmaže.

Detail ukazuje to, čo ukazuje jeho pohľad: ten istý rez, tie isté kategórie, stropy pôdorysu stropu. Detail v detaile funguje rovnako. Umiestnite detail na list ako pôdorys; jeho značka potom hovorí, kde je (`1 / A-501`: prvý pohľad na liste A-501). {{ui:Tlačiť}} v detaili vytlačí iba túto oblasť v jej mierke.

Zmazanie detailu zmaže aj detaily nakreslené vnútri neho a čiary a šráfovania nakreslené v nich (najprv sa vás opýta). Ak sa zmaže podlažie, na ktorom je detail nakreslený, detail zostane pod **Chýbajúce**, kým ho nezmažete, a listy, na ktorých je, ho hlásia ako chýbajúci.

## Kreslenie čiar a šráfovaní v jednom pohľade

Kreslenie je 2D práca, ktorá patrí len jednému pohľadu: poznámky čiarami, šrafovaná plocha betónu alebo zeminy, vyplnená oblasť. Nikdy nie je v 3D pohľade ani v inom pôdoryse.

1. Zobrazte pôdorys podlažia, pôdorys stropu alebo detail, do ktorého kreslíte.
2. Vyberte z {{ui:Anotovať}} na lište pôdorysu:
   - {{ui:Riadok}}: kliknite, kde začína, a kde končí. Ďalší riadok začína tam, kde skončil posledný; {{key:Enter}} začne odznova.
   - {{ui:Lomená čiara}}: kliknite na jej body; {{key:Enter}} alebo dvojklik ju ukončí, kliknutie na jej prvý bod ju uzavrie.
   - {{ui:Obdĺžnik}}: dva protiľahlé rohy.
   - {{ui:Oblasť šráfovania}}: na lište vyberte **Vzor** (Plný, Diagonálny, Krížový, Betón, Izolácia, Zemina) a jeho mierku, potom kliknite na rohy; {{key:Enter}}, dvojklik alebo kliknutie na prvý roh ju uzavrie. Keď je zaškrtnuté {{ui:Vyplniť miestnosť}}, jedno kliknutie v miestnosti vyšrafuje jej obrys.
3. Body sa prichytávajú ako steny; {{key:Shift}} udrží čiaru v pravom uhle a dĺžku môžete napísať ako pri stenách. {{key:Backspace}} vezme späť posledný bod.

Čiaru alebo šráfovanie vyberte pomocou {{ui:Vybrať}} na pôdoryse. Vlastnosti menia vzor a mierku šráfovania a majú {{ui:Presunúť…}} (kliknite na bod, z ktorého sa presúva, a potom kam). {{key:Delete}} ju zmaže. Každá čiara, šráfovanie a zmena je jeden krok.

Čiary a šráfovania sa tlačia spolu s pôdorysom, idú na vaše listy spolu s ním a sú v sade výkresov. Zrušte **Anotácie** v rozsahu pohľadu, ak ich chcete z tohto pohľadu vynechať.

## Uchovanie nastavení v šablóne pohľadu

1. Kliknite na {{ui:Nová šablóna}} v prehliadači, alebo na {{ui:Uložiť ako šablónu…}} v rozsahu pohľadu pôdorysu (ten pôdorys ju potom používa).
2. Dajte jej názov, nastavte výšky a kategórie a kliknite na {{ui:Uložiť šablónu}}.
3. V ľubovoľnom rozsahu pohľadu pôdorysu zvoľte šablónu. Pôdorys prevezme jej výšky a kategórie; zmena šablóny zmení každý pôdorys, ktorý ju používa. Prvky, ktoré ste skryli jeden po druhom, zostanú skryté v ich vlastnom pôdoryse.
4. Kliknite na šablónu v prehliadači, aby ste ju zmenili, premenovali alebo zmazali. Zmazanie jednej nechá jej pôdorysy s jej nastaveniami ako ich vlastné.

## Usporiadanie vlastného listu

1. Kliknite na {{ui:Nový list}}. Zadajte jeho číslo a názov a vyberte papier.
2. Kliknite na {{ui:Pridať}} vedľa pôdorysu, pôdorysu stropu, detailu, pohľadu, rezu alebo tabuľky. Vloží sa do stredu listu.
3. Presuňte ho, kam patrí. Keď je vybraný, zvoľte **Mierka**, alebo ho nechajte na vlastnej mierke pôdorysu (keď ju má), inak mierku, ktorá sa zmestí na tretinu listu. {{ui:Odobrať z listu}} ho odstráni.
4. Kliknite na {{ui:Uložiť list}}. Je uvedený pod **Listy**; kliknutím naň ho neskôr zmeníte.
5. {{ui:Stiahnuť ako PDF}} uloží ten list ako jednu stranu.

## Čo by ste mali vidieť

- Pôdorysy rezané vo vašich výškach, s tým, čo je nad rezom, prerušované, a to, čo ste vymazali, vynechané.
- Orezaný pôdorys zakrytý mimo svojej oblasti na obrazovke a rezaný na ňu na papieri, v mierke, ktorú ste mu dali.
- Pôdorys stropu s mriežkami stropov, výškovými značkami a svetlami pri strope.
- Detaily s ich obdĺžnikom a značkou na pôdoryse, každý otvorený vo vlastnej mierke.
- Čiary a šráfovania iba v pohľade, v ktorom ste ich nakreslili.
- Vaše listy sa pri každom otvorení nakreslia znova z modelu, takže sa vždy zhodujú s ním. Pohľad, ktorého podlažie alebo rezná čiara bola zmazaná, sa hlási, nie kreslí.
- Každá zmena tu je jeden krok: {{key:Mod+Z}} ju vráti späť.

:::note
Všetko toto sa uchováva v súbore IFC ako sady vlastností, ktoré ostatné programy nechávajú na pokoji: rozsah pohľadu a pôdorys stropu každého podlažia na podlaží, šablóny, detaily a vaše listy na projekte. Čiary a šráfovania sú anotácie IFC vo svojom podlaží, takže ich ostatné programy vidia ako 2D krivky a šrafované plochy (vlastné kreslenie každého vzoru), hoci nevidia, ku ktorému pohľadu patria.
:::

:::tip
Ostatné BIM programy nazývajú rez rozsahom pohľadu alebo reznou rovinou, šablóny šablónami pohľadov alebo nastaveniami pohľadu, čiary kreslenia detailnými čiarami a oblasti šráfovania vyplnenými oblasťami. Myšlienky sú rovnaké; nastavenia pohľadu sa do nich neprenesú.
:::
