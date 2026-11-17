---
title: Maľovanie materiálov na steny, podlahy a strechy
summary: Priraďte prvkom materiál, ako je tehla, obklad, šindeľ, drevo alebo dlažba, na celý prvok alebo na jednu jeho stranu; uloží sa do IFC a zobrazí sa na vykreslených obrázkoch.
keywords: maľovať, materiál, materiály, úprava, úpravy povrchu, textúra, tehla, obklad, šindeľ, strešná krytina, drevo, kameň, dlažba, betón, omietka, tráva, štrk, sklo, kov, strana steny, vnútro, vonku, povrch podlahy, miestnosť, štýl povrchu
from: fbfed676
---

{{ui:Maľovať}} na paneli nástrojov otvorí knižnicu materiálov nad 3D pohľadom: tehla a tvárnice, obklad, strešná krytina, drevo, kameň, dlažba, betón, omietka, terén, sklo a kov.

## Maľovanie prvkov

1. Kliknite na {{ui:Maľovať}}.
2. Kliknite na materiál.
3. Kliknite na prvky v 3D pohľade. Každé kliknutie natrie prvok, na ktorý kliknete.

Aby ste natreli naraz viac prvkov, najprv ich vyberte (kliknutím, {{key:Ctrl}}+kliknutím alebo [vyhľadávaním](topic:find)) a potom kliknite na materiál: každý vybraný prvok ho prevezme v jednom kroku.

Prvok hneď zobrazí farbu materiálu v 3D pohľade. Jeho textúra sa zobrazí na [vykreslenom obrázku](topic:render). {{key:Esc}} alebo {{ui:Zavrieť}} ukončí maľovanie.

## Maľovanie jednej strany

Zvoľte {{ui:Iba kliknutú stranu}} a potom kliknite na stranu, ktorú chcete: vonkajšiu stranu steny v obklade a jej vnútornú stranu v inej úprave, hornú stranu podlahy v dreve, pričom spodná strana zostane taká, aká je. Zvyšok prvku si ponechá svoj materiál.

Strana sa určuje podľa vlastných smerov prvku, takže zostane tou istou stranou, keď prvok posuniete alebo otočíte.

Ak chcete natierať podlahy miestnosť po miestnosti, dajte každej miestnosti vlastnú podlahu ({{ui:Kresliť}} › {{ui:Podlaha}} › **Táto miestnosť**, pozrite [Miestnosti, podlahy, stropy a strechy](topic:floors-and-roofs)), potom natrite hornú stranu každej podlahy.

## Odstránenie materiálu

Kliknite na pruhovaný vzorník ({{ui:Bez materiálu}}) a potom kliknite na prvok. Odstráni sa každý materiál na ňom vrátane strán.

## V súbore

Maľovanie mení IFC (každý krok je jeden krok, {{key:Ctrl+Z}} ho vráti späť) a zostáva čisté IFC:

- každý natretý prvok dostane sadu vlastností `CadCraft_Render`, ktorá uvádza jeho materiál, a jednu vlastnosť pre každú natretú stranu;
- jeho teleso dostane štýl povrchu s farbou materiálu, aby ju ostatné BIM programy zobrazili. V IFC4 štýl uvádza aj textúru.

Ak BimCraft prestavuje stenu, ktorú ste natreli (napríklad posuniete jej koniec), stena si zachová svoj materiál a farbu, v BimCraft, na obrázkoch aj v iných programoch.

:::note
Textúry kreslí sám BimCraft: fungujú offline a sú voľne použiteľné na čokoľvek (CC0). Vaše vlastné obrazové textúry ešte nie sú hotové.
:::

## Textúry v 3D pohľade

Natretá tehlová stena zobrazuje svoje tehly, drevená podlaha svoje dosky, v ich skutočnej veľkosti, hneď ako je náter nanesený. Zrušte zaškrtnutie možnosti **Zobraziť textúry v 3D pohľade** na palete Maľovanie, ak chcete namiesto toho vidieť ploché farby (veľmi veľký model ich sám vypne a povie to). Farba podľa vlastnosti vždy zobrazuje svoje vlastné farby. Textúry kreslí program, takže sa nič nesťahuje, a vykreslenia aj súbor glTF ich obsahujú v každom prípade.
