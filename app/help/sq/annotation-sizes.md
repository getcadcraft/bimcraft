---
title: Vizato në madhësi të plotë, shëno sipas shkallës
summary: Ndërtesa vizatohet gjithmonë në madhësi të plotë. Teksti, përmasat, etiketat, emrat e dhomave, rrathët e rrjetit dhe simbolet përcaktohen në letër, në milimetra siç shtypen, dhe mbajnë atë madhësi kur shkalla e një vizatimi ndryshon nga 1:100 në 1:50.
keywords: shkallë shënimesh, shënim shkallëzues, madhësi teksti, lartësi teksti, lartësi në letër, madhësi teksti përmasash, madhësi etikete, madhësi emri dhome, rreth rrjeti, madhësi simboli, shkallë vizatimi, 1:50, 1:100, standard zyre, shkrim, vizato në 1:1, madhësi e plotë, tekst në fletë
from: 94118788
---

## Çfarë do të bësh

Vendos sa e lartë është shkrimi i vizatimeve të tua në letër, një herë për ndërtesën. Kurrë nuk e shkallëzon modelin dhe kurrë nuk e ndryshon madhësinë e tekstit sipas shkallës: BimCraft e llogarit madhësinë nga lartësia në letër dhe shkalla e vizatimit.

## Si funksionon

- Modeli është në madhësi të plotë. Një mur 10 m i gjatë është 10 000 mm i gjatë në çdo shkallë.
- Një shënim ka një **lartësi në letër**: lartësia e një shkronje të madhe në fletën e shtypur, në milimetra.
- Në shkallë 1:100 një tekst 2.5 mm është 250 mm i lartë në model; në 1:50 është 125 mm. Në letër është 2.5 mm të dy herët.
- Simbolet e planit (elektrike, hidraulike) vizatohen në milimetra letre dhe ndjekin të njëjtën rregull.

## Hapat

1. Hap shfletuesin e projektit. Nën {{ui:Fletët}} kliko {{ui:Madhësitë e shënimeve…}}.
2. Shkruaj një lartësi në milimetra për llojet që do të vendosësh: {{ui:Shënime dhe etiketa}}, {{ui:Teksti i përmasave}}, {{ui:Etiketat dhe emrat e niveleve}}, {{ui:Emrat e dhomave}}, {{ui:Shkronjat e rrethave të rrjetit}}, {{ui:Titujt e pamjeve në fletë}} dhe {{ui:Teksti i tabelave}}. Një kuti bosh mban madhësinë e vetë BimCraft, e shfaqur me gri.
3. Kliko {{ui:Ruaj}}. Është një hap që mund ta zhbësh.

Çdo fletë, grupi i vizatimeve, PDF-i i planimetrisë, si dhe fasadat dhe prerjet përdorin madhësitë nga ai moment. Hapësira midis një vije përmasash dhe tekstit të saj, madhësia e një rrethi rrjeti dhe lartësia e një rreshti tabele rriten me tekstin e tyre.

## Një planimetri me shkallën e vet

Jep një planimetrie një shkallë në intervalin e pamjes së saj ({{ui:Shkalla}}; shih [Pamjet dhe fletët](topic:views-and-sheets)). Atëherë:

- në ekran, emrat e dhomave, etiketat, teksti i përmasave dhe rrathët e rrjetit vizatohen në madhësinë e tyre të shtypur ndaj modelit, kështu që ajo që sheh është ajo që do të tregojë fleta;
- simbolet e planit dhe etiketat e tyre përshtaten për atë shkallë. Ndrysho shkallën nga 1:100 në 1:50 dhe ato janë gjysmë sa më të mëdha në model, dhe njëlloj në letër.

Një planimetri pa shkallë të vetën mban tekstin fiks të ekranit, dhe simbolet e saj përshtaten për 1:50 (1/4" = 1'-0" në këmbë dhe inç), si më parë.

## Madhësitë e zyrës sate

Me shtojcën Politikat e parazgjedhura të aktivizuar, vendos lartësitë e zyrës te Cilësimet › Global › Politikat e parazgjedhura › {{ui:Madhësitë e shënimeve në letër}}. Një ndërtesë e re i merr kur kliko Krijo. Në një ndërtesë që ke nisur tashmë, dialogu ka {{ui:Përdor madhësitë e zyrës sime}}. Shih [Politikat e parazgjedhura](topic:default-policies).

## Madhësitë e një pakete rregullash

Një pakete rregullash mund të japë lartësitë e tekstit që kërkon vendi i saj (shtojca Rregulloret e ndërtimit, konventat e vizatimit). Shëno paketën te Cilësimet › Rregulloret e ndërtimit, pastaj në dialog kliko {{ui:Përdor madhësitë e një pakete rregullash}}: kutitë plotësohen, ti i kontrollon dhe ruan. Një madhësi që një paketë jep në pikë është madhësi shkronje, dhe kthehet në lartësi shkronje të madhe, kështu që kontrollo. Asgjë nuk vendoset derisa të ruash.

## Çfarë do të shohësh

- E njëjta lartësi teksti në milimetra në një fletë në 1:100 dhe në një fletë në 1:50, ndërsa vetë planimetria është dy herë më e madhe në 1:50.
- Madhësitë udhëtojnë me ndërtesën: ruhen në skedarin e saj IFC.

## Gjëra të dobishme

- Madhësitë e vetë BimCraft janë ato që fletët e tij kanë përdorur gjithmonë (rreth 1.5 mm shkronja të mëdha për tekstin e përmasave). Nuk janë standard hartimi: vendos të zyrës tënde.
- Një lartësi duhet të jetë nga 0.5 deri 50 mm.
- Shkronjat e bllokut të titullit dhe legjendat e shënimeve kryesore nuk janë pjesë e kësaj: ato mbajnë madhësitë e tyre.
