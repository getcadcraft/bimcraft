---
title: Rez modelu IFC rezovou rovinou
summary: Prerežte 3D model zhora, spredu alebo zboku, alebo ponechajte len to, čo je vo vnútri rezného boxu alebo objemu z viacerých boxov so šikmými plochami, aby ste videli dovnútra; posúvajte rez ťahaním alebo zadaním, prevráťte ho a vyberte, čo rez zobrazí.
keywords: rez, rezová rovina, rezný box, úchyty, ťahanie, okraj, výberový box, orezový box, orezanie, pôdorysný rez, pôdorys, pohľad, vnútro, interiér, prevrátiť, odsadenie, rezný objem, schodovitý rez, tvar L, naklonenie, šikmý rez, šikmá rovina, dodatočná rovina
from: 6315e71a
---

## Čo urobíte

Prerežte model IFC jednou rovinou a pozrite sa dovnútra: zhora pre pôdorys, alebo spredu či zboku pre rez budovou.

## Postup

1. Otvorte model IFC. Pozrite [Otvorenie modelu IFC a obzeranie sa v 3D](topic:open-ifc-model).
2. Kliknite na {{ui:Rez}} na lište alebo stlačte {{key:X}}. Model sa prereže v polovici výšky a pod lištou sa objaví pruh.
3. Zvoľte, odkiaľ rezať: {{ui:Zhora}}, {{ui:Spredu}} alebo {{ui:Bok}}. Spredu a Bok navyše otočia pohľad, aby ste videli rez.
4. Posuňte rez: ťahajte posuvník **Odsadenie** alebo zadajte vzdialenosť v metroch do poľa a stlačte {{key:Enter}}. Môžete zadať aj milimetre, napríklad `1200 mm`.
5. Kliknite na {{ui:Prevrátiť}}, aby ste ponechali druhú stranu rezu.
6. Kliknite na prvok v reze, aby ste videli jeho vlastnosti.
7. Kliknite na {{ui:Vypnuté}}, znova kliknite na {{ui:Rez}} alebo stlačte {{key:X}}, aby ste rez odstránili.

## Rezný box

Kliknite na {{ui:Box}} na tom istom pruhu, aby ste ponechali len to, čo je vo vnútri boxu. Každé z {{ui:X}}, {{ui:Y}} a {{ui:Z}} má dva posuvníky: kde box začína a kde končí, v metroch od okraja modelu. Hodnoty sa zobrazujú vedľa nich.

- {{ui:Box okolo výberu}} prispôsobí box okolo prvkov, ktoré ste vybrali, a priblíži na ne. Na každej strane nechá 300 mm voľného priestoru; zmeňte to v {{ui:Nastavenia}} › {{ui:BimCraft}} › {{ui:Rezerva okolo výberu}}.
- Ak sú prvky vybraté, {{ui:Zobraziť}} › {{ui:Rezný box okolo výberu}} alebo {{key:Shift+X}} urobí to isté v jednom kroku, aj keď nie je zapnutý žiadny rez.
- **Úchyty** na boxe ho posúvajú kurzorom: ťahajte štvorček v strede plochy, aby ste posunuli túto plochu, ten v strede hrany, aby ste posunuli dve plochy, ktoré sa tam stretávajú, alebo ten v rohu, aby ste posunuli tri. Posuvníky idú za nimi. V {{ui:Zhora}} roh posúva box v pôdoryse, v {{ui:Spredu}} alebo {{ui:Bok}} v pohľade.
- {{ui:Celý model}} otvorí box znova na celý model.
- {{ui:Zhora}}, {{ui:Spredu}} alebo {{ui:Bok}} vrátia rez na jednu rovinu.

## Objem z viacerých boxov, naklonené plochy a dodatočné roviny

Box nie je vždy tvar, ktorý potrebujete: schodovitý rez, krídlo tvaru L alebo rez pozdĺž steny, ktorá nie je kolmá na mriežku.

1. V {{ui:Box}} kliknite na {{ui:Pridať box}}. Rez teraz ponecháva to, čo je vo vnútri **ľubovoľného** z boxov, takže dva boxy tvoria schodovitý alebo tvar L. Zoznam vedľa uvádza, ktorý box menia posuvníky ({{ui:Box 1}}, {{ui:Box 2}}…); {{ui:Odstrániť tento box}} odstráni vybraný. Objem má najviac 8 boxov.
2. Otvorte {{ui:Naklonenie a roviny}}, aby ste tvarovali vybraný box:
   - Zvoľte {{ui:Plocha}} a zadajte, ako ďaleko sa nakláňa na každú stranu, v stupňoch (najviac 80). Plocha sa otáča okolo svojho stredu; ostatné plochy zostávajú tam, kam ich dali posuvníky. {{ui:Kolmo}} ju vráti späť.
   - {{ui:Pridať rovinu}} preseká box ďalšou rovinou. {{ui:Plochy}} je smer, v ktorom je odrezaná strana obrátená, v stupňoch od X k Y; {{ui:Sklon}} je, ako veľmi sa to zdvíha (0 pre zvislú rovinu, 90 pre vodorovnú); {{ui:Odsadenie}} je vzdialenosť roviny od stredu boxu v metroch. × ju odstráni. Box má najviac 6 dodatočných rovín.
3. Tam, kde objem preseká pevné telesá, sú rezané plochy vyplnené ako predtým, aj tam, kde sa dva boxy stretávajú v schode.

:::tip
Ak obrys zmizne a nič nezostane, naklonenia alebo roviny nenechajú vo vnútri žiadny box; pruh to povie. Nakloňte plochu späť alebo zmeňte odsadenie roviny.
:::

## Budova otočená na stavbe

Mnohé modely majú budovu pod uhlom voči osiam súboru (skutočný sever, zdieľané súradnice). Keď steny bežia pod uhlom, nový rez začína kolmo na budovu: {{ui:Spredu}}, {{ui:Bok}} a box bežia pozdĺž jej vlastných stien a tlačidlo {{ui:Kolmo na budovu}} na lište rezu je zapnuté. Kliknutím na neho prejdete na osi modelu a znova kliknutím sa vrátite (stavový riadok povie, o koľko je budova otočená). Pri nastavení **Nastavenia › BimCraft › Budova otočená na stavbe › Podľa umiestnenia na stavbe** začínajú rezy a pohľady namiesto toho na osiach modelu. Pozrite [Nastavenia](topic:settings).

## Čo by ste mali vidieť

- **Zhora** ponechá to, čo je pod rezom, takže sa pozeráte dolu do miestností. Odsadenie sa meria nahor od spodku modelu.
- **Spredu** ponechá to, čo je za rezom, pohľad spredu; **Bok** ponechá to, čo je za ním, pohľad zboku. Odsadenie sa meria od prednej alebo bočnej strany modelu.
- Tenký farebný obrys ukazuje, kde je rovina.
- Tam, kde rovina preseká stenu, dosku alebo iné pevné teleso, je rezná plocha vyplnená tmavou farbou, ako nakreslený rez. {{ui:Výplň}} na lište ju zapína a vypína.
- Pohľadová kocka v pravom dolnom rohu otočí model, aby ste rez videli z ľubovoľnej strany.
- Kliknutím vyberáte to, čo vidíte: čokoľvek odrezané sa nedá vybrať.

## Časté chyby

- **Nič sa nezmenilo.** Rez môže byť nad strechou alebo mimo modelu. Posuňte posuvník alebo zadajte menšie odsadenie.
- **Odsadenie sa vrátilo späť.** Vzdialenosť za modelom sa presunie na jeho koniec a stavový riadok to povie.
- **Problém (BCF) zobrazuje len časť môjho objemu.** Problém (BCF) ponechá jeden box s jeho naklonenými plochami a rovinami: prvý box objemu. Stavový riadok to povie, keď problém vytvárate.
- **Rez je dutý.** {{ui:Výplň}} na lište je vypnutá: kliknite na ňu, aby sa vyplnili rezané plochy stien, dosiek a iných pevných telies.
- **Vyplnený rez vyzerá škvrnito alebo chýba kus.** Vyplnenie potrebuje uzavreté telesá; prvok, ktorého tvar v súbore nie je uzavretý (jediný plát, lístie stromu), zostane nevyplnený a nenamaľuje sa cez neho. Prvok zložený z častí rôznych farieb (rám a jeho sklo) sa vyplní, keď sa jeho časti spájajú.
- **Kde je pruh rezu?** Je na vrchu 3D pohľadu, ktorý reže: na 3D polovici v {{ui:Rozdeliť}}, a pod lištou kreslenia v {{ui:Pôdorys}} samotnom. V krátkom pohľade sa posúva.

## Ďalej

- [Zobrazenie a skrytie podlaží, priestorov a hrán](topic:storeys-and-spaces)
- [Pozrite výkres DWG alebo DXF v 3D](topic:dwg-in-3d) — výkresy v 3D majú rovnakú rezovú rovinu
