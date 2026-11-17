---
title: Stili i punës, pamjet e dyfishuara, penat e printimit, Raporto si dhe shablloni
summary: Zgjidh si sillet BimCraft sipas mënyrës sate të punës, dyfisho çdo pamje si kopje të vetme ose të lidhur, mbaj mbivendosjet e penave në skedar dhe printo siç shfaqet ose përmes një tabele penash, raporto një element si klasë tjetër IFC dhe nis projektet nga shablloni yt.
keywords: stili i punës, dyfisho pamjen, dyfisho, kopjo pamjen, pamje e varur, pamje e lidhur, kopje e vetme, kopje e pamjes, mbivendosje penash, pena, peshat e vijave, printo siç shfaqet, tabelë penash, stili i printimit, ctb, monokromatik, nuancë gri, raporto si, klasë ifc, riklasifiko, tip i parazgjedhur, model gjenerik, pllakë si rrugë, mur si panel, çati si rampë, shabllon projekti, shabllon, nis nga shablloni, ruaj si shabllon, standard zyre
from: 231d98b0
---

## Çfarë do të bësh

Vendos BimCraft sipas mënyrës sate të punës, dyfisho pamjet, printoji ato siç pret, numëro elementet për atë që janë me të vërtetë dhe nis çdo projekt nga shablloni i zyrës.

## Zgjidh një stil pune

1. Hap **Cilësimet** dhe skedën **BimCraft**. Gjej **Stili i punës**.
2. Zgjidh një:
   - **Çdo pamje me të vetat** (zgjedhja e parë): një pamje e dyfishuar kopjon shënimet e saj dhe ato mbeten të asaj pamjeje; fletët printohen ashtu si shfaqet në ekran.
   - **Shënime dhe tabela penash të përbashkëta**: pamjet e dyfishuara ndajnë shënimet; printimi kalon nëpër një tabelë penash.
3. Poshtë zgjedhjes janë katër gjërat që vendos. Ndrysho çdo një prej tyre më vete; stili pastaj lexohet **Me përshtatje**.

Stili i punës mbahet në këtë shfletues, njësoj si paraqitja e hapësirës së punës. Një shabllon e bart atë te modelet e reja.

## Dyfisho një pamje

1. Në **Shfletuesi i projektit**, çdo plan dyshemeje, plan tavani, thirrje, fasadë dhe prerje ka një buton **Dyfisho** (dy fletë).
2. Emërto kopjen dhe zgjidh si sillet:
   - **Kopje e vetme**: vizatimi, dimensionet, prerja, elementët e fshehur dhe penat e saj kopjohen dhe mbeten të saj. Redaktimi i njërës pamje nuk e ndryshon kurrë tjetrën, kështu që një pamje në një fletë të lëshuar mbetet siç u lëshua.
   - **Të lidhur**: shfaq të njëjtën pamje me një grup shënimesh dhe cilësimesh.
3. Kopja listohet te **Pamjet e dyfishuara**. Kliko për ta hapur; shiriti mbi planimetri thotë se është një kopje, me **Lart** për t'u kthyer te pamja e saj.
4. Butoni me ikonën e rrëshqitësit hap cilësimet e saj: emrin, **Diapazoni i pamjes** (një kopje e vetme ka të sajin), **Bëje kopje të vetme** për një kopje të lidhur, dhe **Fshi**.

Kopjet e fasadave dhe prerjeve vendosen në fletët e tua, njësoj si pamjet nga të cilat dolën. Dyfishimi është një hap zhbërjeje, dhe kopjet mbahen në IFC pranë thirrjeve.

## Penat e mbajtura me pamjen, dhe të printuara siç shfaqen

1. Ndiz **Vizato** dhe zgjidh **Pena**.
2. **Për** tani liston çdo kategori: muret, dyert dhe dritaret, dyshemetë, çatitë, kolonat, shkallët, mobiljet dhe të tjerat, si dhe vizatimin dhe dimensionet.
3. **Zbato** e mban penën në IFC me pamjen e shfaqur: një planimetri, një plan tavani, një thirrje ose një pamje e dyfishuar. Penat e bëra para versionit 0.9 u mbajtën në shfletues; **Mbaji këto në skedar** i zhvendos ato.
4. Fletët dhe PDF vizatojnë çdo penë ashtu siç e shfaq ekrani.

Për ta printuar përmes një tabele penash, vendos **Printo** te rreshti **Pena** në **Përmes tabelës së penave**, pastaj zgjidh një tabelë (ngjyrë, monokromatike, nuancë gri) ose **Redakto tabelën e penave…**: çdo ngjyrë merr ngjyrën, trashësinë dhe rastërtimin me të cilin printohet. Tabela është skedari i stilit të printimit të CadCraft, kështu që **Importo…** merr një tabelë të bërë në aplikacionin CadCraft dhe **Eksporto** kthen një. Modeli e mban zgjedhjen e vet; pa asnjë, stili i punës vendos.

## Raporto një element si klasë tjetër

Një plloçë e vizatuar si rrugë, një mur i përdorur si panel, një çati e formuar si rampë: mbaje mjetin me të cilin e vizatove dhe raporto si çfarë është.

1. Zgjidh elementin dhe hap **Vetitë**. Hap **Raporto si**.
2. Shkruaj në kutinë e kërkimit për të gjetur një klasë që përshtatet me formën, zgjidhe dhe tipin e saj të parasaktuar. Për një tip të tuajin, zgjidh USERDEFINED dhe jep një emër.
3. **Zbato** (një hap zhbërjeje). **Pastro** e raporton sërish si u vizatua.

Ti e redakton akoma me mjetin me të cilin u vizatua. IFC i ruajtur e shkruan si klasën e raportuar, kështu që programet e tjera, llogaritja nga **Sasi**, Gjej, Ngjyros sipas, kontrollet e modelit dhe **Problemet** e numërojnë si atë. Tabelat e mureve e nxjerrin murin e raportuar si panel, dhe **Elementet sipas klasës së raportuar** i liston të gjithë. Funksionon në skedarët IFC4 dhe IFC2X3; lista ofron vetëm klasat që ka versioni IFC i skedarit. Dyert, dritaret, shkallët, dhomat dhe nivelet mbajnë klasën e tyre.

## Ruaj një projekt si shabllon dhe nis nga ai

1. Me një projekt të hapur, kliko **Ruaj si shabllon** pranë **Ruaj**.
2. Emërtoje. Vendos shenjën te **Shkarko edhe skedarin e shabllonit** për ta ndarë si skedar IFC, dhe te **Nis modelet e reja prej tij** për ta bërë parazgjedhjen tënde.
3. Një shabllon mban nivelet, shabllonet dhe cilësimet e pamjeve, pamjet e dyfishuara dhe thirrjet, vizatimin, penat dhe tabelën e penave, etiketat, familjet dhe tipet, fletët, madhësitë e fletëve, bllokët e titullit dhe stilin e punës. Muret, dyshemetë, dyert dhe çdo element tjetër i modelit lihen jashtë.
4. Kliko **Ndërtesë e re** dhe zgjidhe nën **Nis nga**, ose zgjidh **Një skedar shabllon…** për një që të është dërguar. Projekti i ri merr emrin dhe identitetin e vet; gjithçka tjetër është siç e ka shablloni.

:::note
Shabllonet mbahen në këtë shfletues. Shabllonet e ekipit të ndara përmes CadCraft Studio nuk janë ndërtuar ende: dërgo skedarin e shabllonit.
:::
