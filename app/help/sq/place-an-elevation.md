---
title: Vendos një kotë dhe hap pamjen e saj
summary: Vendos një shenjë kote në planimetri, drejtoje si duket, pastaj gjej vizatimin e saj në shfletuesin e projektit, redakto në të dhe vendose në një fletë. Hapa për paraqitjet me shirit dhe për paraqitjen klasike.
keywords: kotë, pamje kote, shenjë kote, etiketë kote, vendos kotë, bëj kotë, kotë e re, fasadë, fasadë e jashtme, pamje anësore, pamje e përparme, pamje nga një pikë, ku është kota ime, hap kotën, kotë në fletë, kthe kotën, riemërto kotën, fasadë veriore, shtro pamjet, ndaj pamjen, planimetri dhe 3D krah për krah
from: a7cfd2b9
---

## Çfarë do të bësh

Bëj një kotë të tuajën: një vizatim të ndërtesës të parë nga një pikë që zgjedh ti, e drejtuar ashtu siç zgjedh ti. Duhen dy klikime mbi një planimetri. Vizatimi shfaqet më pas së bashku me kotat e tjera të ndërtesës.

:::note
Katër anët janë tashmë aty. Çdo ndërtesë ka fasada Veri, Lindje, Jug dhe Perëndim në {{ui:Project browser}} nën {{ui:Elevations}}, pa vendosur asgjë. Vendos një të tuajën kur dëshiron një pamje nga një vend tjetër: drejt një krahu të pjerrët, nga brenda një oborri, ose e një muri brenda një dhome.
:::

## Ku është vegla

- Paraqitjet me shirit: {{ui:View}} › **Krijo** › {{ui:Elevation}}.
- Paraqitja klasike: ndiz {{ui:Draw}}, pastaj {{ui:Build}} › {{ui:Elevation}}.
- Çdo stil menuje: komanda quhet Kota; paleta e komandave e gjen, dhe rreshti i komandave pranon ELEVATION.

## Hapat

1. Zgjidh {{ui:Elevation}}. Kota vendoset mbi një planimetri, kështu që nëse ishe në pamjen 3D, BimCraft shfaq planimetrinë e nivelit ku ishe. Treguesi thotë **Kliko aty ku qëndron kota**.
2. Kliko aty nga ku merret pamja. Për një kotë jashtë, kliko jashtë ndërtesës, pak larg murit që dëshiron të shohësh.
3. Treguesi tani thotë **Kliko si duket**. Lëviz drejt ndërtesës: një shigjetë tregon drejtimin, dhe vija e shkurtër përtej klikimit të parë është skaji nga ku shikohet pamja. Kliko.
4. Një rreth me një numër dhe një tregues shfaqet në planimetri. Ai është shenja e kotës. E para është 1, tjetra 2.
5. Shtyp Esc për të përfunduar, ose vazhdo dhe vendos një tjetër.

Vendosja e një shenje është një hap: {{key:Mod+Z}} e zhbën.

## Hap vizatimin

Planimetria mbetet përpara teje pas klikimit të dytë. Vizatimi është në {{ui:Project browser}}:

1. Hap {{ui:Elevations}}. Jotja listohet pas katër anëve si **Elevation 1**.
2. Kliko butonin e lapsit {{ui:Edit in this view}} në rreshtin e saj për të parë vizatimin dhe për të punuar në të: lëviz muret, dyert, dritaret dhe nivelet, shto shënime dhe përmasa. Shih [Redakto në fasada dhe prerje](topic:edit-in-elevations).
3. Kliko vetë rreshtin për të hapur grupin e vizatimeve, ose shto pamjen në një fletë tënden. Shih [Pamjet dhe fletët](topic:views-and-sheets).

Në paraqitjen klasike, shfletuesi i projektit është në panelin e majtë kur {{ui:Draw}} është i ndezur. Në paraqitjet me shirit, është skeda {{ui:Project Browser}} nën Vetitë.

## Çfarë shfaq pamja

- Gjithçka përpara shenjës, deri ku shtrihet ndërtesa. Asgjë pas saj.
- Nivelet, me emrat dhe lartësitë e tyre.
- Nëse shenja qëndron brenda ndërtesës, çfarëdo që ka aty pritet atje, ashtu si e pret një prerje. Për një fasadë të pastër jashtë, qëndro jashtë.

## Ndrysho

Zgjidh shenjën në planimetri (kliko rrethin e saj me {{ui:Select}}). Vetitë ka:

- {{ui:Label}}: numrin ose një emër tënd, deri në 8 karaktere.
- {{ui:Flip the view}}: shiko në drejtim të kundërt nga i njëjti vend.
- {{ui:Look as far as}}: sa larg përpara shenjës arrin pamja. 0 shfaq gjithçka.

Shtyp Delete për të hequr shenjën dhe vizatimin e saj. Zhbëj i kthen të dyja.

:::tip
Për të parë planimetrinë dhe pamjen 3D njëkohësisht gjatë punës, përdor {{ui:View}} › **Dritare** › {{ui:Tile Views}} në paraqitjet me shirit, ose {{ui:Split}} në paraqitjen klasike. Një klikim mbi skedën e një pamjeje kthehet në një pamje.
:::

## Kufizime

- Një shenjë nuk mund të tërhiqet ose rrotullohet në planimetri ende. Fshije dhe vendose përsëri, ose përdor {{ui:Flip the view}}.
- Në listën e pamjeve që mund t'i shtosh një fletë, një fasadë e jotja listohet së bashku me prerjet.
- Etiketat e dyerve dhe dritareve vizatohen në katër fasadat anësore, jo në një që ke vendosur ti.

## Në IFC

Shenja ruhet në skedar si IfcAnnotation me emrin "Elevation 1" dhe llojin e objektit "Elevation marker", në nivelin ku u vendos. Një program tjetër e shfaq si shënim; vizatimi vetë bëhet nga BimCraft, nga modeli, çdo herë.
