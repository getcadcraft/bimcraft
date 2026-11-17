---
title: Dvere a okná
summary: Umiestnite dvere a okná do nakreslených stien: ukážte na stenu, uvidíte smer otvárania a vzdialenosti od rohov, kliknite; otvor vo stene sa sám vyreže.
keywords: dvere, okno, otvor, otváranie, záves, smer, prevrátiť, posuvné dvere, dvere do steny, garážové dvere, dvojkrídlové dvere, krídlové okno, jednoduché zdvihové okno, dvojité zdvihové okno, posuvné okno, pevné okno, parapet, nadpražie, skladacie dvere, skriňové dvere, francúzske dvere, stodolové dvere, bočné svetlá, vchodové dvere, výklopné okno, okno na výhľad, nadsvetlo
from: 4d8ac009
---

## Čo budete robiť

Umiestnite dvere a okná do stien, ktoré ste nakreslili ([Kreslenie stien](topic:draw-walls)). Ukážte na stenu a dvere alebo okno ukážu, kam by išli, ktorým smerom sa otvárajú a aká je vzdialenosť od každého rohu. Kliknite a otvor sa sám vyreže zo steny v pôdoryse aj v 3D.

## Umiestnite dvere

1. S zapnutým {{ui:Kresliť}} kliknite na {{ui:Dvere}} (alebo stlačte {{key:D}}).
2. Vyberte typ: **Jednokrídlové dvere**, **Dvojkrídlové dvere**, **Posuvné dvere**, **Dvere do steny**, **Garážové dvere**, **Skladacie skriňové dvere**, **Francúzske dvere**, **Stodolové dvere (na stene)** alebo **Vchodové dvere s bočnými svetlami**. Ich bežná veľkosť vyplní **W** a **H**; vyberte inú zo zoznamu veľkostí vedľa, alebo napíšte iné, napríklad `2'-8"` alebo `800`. Zoznam ponúka aj rodiny dverí tohto modelu (pozri [Rodiny a ich veľkosti](topic:families)).
3. Ukážte na stenu. Symbol dverí sa pohybuje podľa ukazovateľa pozdĺž steny a na pôdoryse sa zobrazí vzdialenosť od každého konca tejto plochy steny.
4. Dvere sa otvoria na stranu steny, na ktorej je ukazovateľ. Stlačte {{key:H}} (alebo kliknite na {{ui:Prevrátiť}}), aby sa závesy dali na druhý koniec.
5. Kliknite. Dvere sa umiestnia a nástroj zostane zapnutý pre ďalšie. Ukážte na stred steny a dvere sa vycentrujú sami.

Ak ich chcete umiestniť v presnej vzdialenosti, ukážte na stenu blízko rohu, od ktorého meriate, napíšte vzdialenosť (napríklad `2'` alebo `600`) a stlačte {{key:Enter}}. Vzdialenosť ide od bližšieho konca plochy steny k hrane dverí.

## Umiestnite okno

1. Kliknite na {{ui:Okno}} (alebo stlačte {{key:N}}).
2. Vyberte typ: **Pevné okno**, **Jednoduché zdvihové okno**, **Dvojité zdvihové okno**, **Krídlové okno**, **Posuvné okno**, **Výklopné okno**, **Okno na výhľad** alebo **Nadsvetlo**, a jeho **W**, **H** a **Parapet** (výška spodnej hrany okna nad podlahou).
3. Ukážte na stenu a kliknite, alebo napíšte vzdialenosť a stlačte {{key:Enter}} ako pri dverách. Okno sedí na vonkajšej strane steny.

## Presúvanie, prevracanie, mazanie

- S zapnutým {{ui:Vybrať}} potiahnite dvere alebo okno pozdĺž steny. Potiahnite ich na inú stenu, aby sa tam presunuli.
- {{key:Delete}} zmaže vybrané dvere a okná; stena sa zatvorí.
- Presun alebo zmazanie steny presunie alebo zmaže to, čo je v nej. Keď sa začiatok steny posunie pozdĺž vlastnej priamky, jej dvere a okná si zachovajú miesto.
- {{ui:Späť}} a {{ui:Znova}} vrátia späť a znova vykonajú každé umiestnenie, presun alebo zmazanie.

## Čo sa odmietne

- **Nevojde sa do tej steny.** Dvere alebo okno sú širšie ako stena alebo by trčali z jej konca. Skúste kratšiu šírku alebo dlhšiu stenu.
- **Je vyššie ako stena.** Parapet plus výška je nad hornou hranou steny.

## Čo sa uloží

Každé dvere alebo okno je dverami alebo oknom IFC s jeho veľkosťou, ovládaním (napríklad jednokrídlové otváranie vľavo), typom veľkosti (jeden typ pre každú veľkosť svojej rodiny), `Pset_DoorCommon` alebo `Pset_WindowCommon` a základnými množstvami, ktoré vypĺňajú otvor IFC v stene. Čistá plocha steny a objem steny otvor nezahŕňajú. Iné BIM programy ich otvoria ako dvere v stene.

## Dobré vedieť

- Pôdorys zobrazuje dvere otvorené pod 90° s ich smerom otvárania, posuvné dvere ako dve krídla, dvere do steny zasunuté do steny, garážové dvere ako prerušovanú čiaru nad hlavou a okná s ich rámom a čiarami skla.
- Šírka je celková šírka rámu; krídlo dverí je šírka mínus dve ostenia.
- Kopírovanie nakreslených dverí a okien ešte nie je hotové: umiestnite ďalšie.

## Okno únikovej šachty v suterénu

Vyberte **Únikové okno suterénu so šachtou** v zozname typov okien. Začína ako krídlové okno 36 × 48 palcov s parapetom 36 palcov nad úrovňou. Šachta je na vonkajšej strane steny, s najmenej 48 palcami voľnej šírky, 36 palcami výčnelku a dnom 6 palcov pod parapetom. V pôdoryse sa zobrazí ako prerušované čiary a v 3D ako tri strany bez vrchu. Šachta je súčasťou telesa IFC okna, takže uloženie, presun, zmena veľkosti alebo zmazanie okna ju berie so sebou. Pri zmene veľkosti zostanú aspoň 6 palcov pri každom ostení.

Sú to modelačné predvoľby, nie certifikácia súladu únikovej cesty. Čistý otvor výrobcu, miestne požiadavky, terén, odvodnenie a akýkoľvek potrebný rebrík overte samostatne. Hĺbka a výška šachty sú prednastavené rozmery; nesledujú terén.
