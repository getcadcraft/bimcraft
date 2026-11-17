---
title: Shkallët dhe parmakët
summary: Vizato shkallë drejt, në L, në U dhe me hapa kthimi që i llogarisin ngritjet dhe hapat nga lartësia kat më kat, me dorezat, balustat dhe hapjen e shkallës të prerë në dyshemenë sipër; vizato parmakë sigurie përgjatë platformave dhe rreth hapjeve.
keywords: spirale, shkallë rrethore, shkallë, shkallët, shkallore, vrap, ngritje, hap, platformë, hapa kthimi, shkallë në L, shkallë në U, zigzag, dorezë, parmak sigurie, parmak, balusta, shtyllë, hapja e shkallës, hapësirë mbi kokë, platformë, ballkon
from: 16e5ace4
---

## Çfarë do të bëni

Shtoni shkallë midis niveleve dhe parmakë aty ku njerëzit kanë nevojë për ta. Një shkallë llogarit vetë hapat e saj nga lartësia midis niveleve, mbetet brenda kufijve të zakonshëm për banesa, vendos dorezë në anët e hapura dhe e pret hapjen e shkallës në dyshemenë sipër.

## Vizato një shkallë

1. Te niveli ku fillon shkalla, hapni {{ui:Ndërtimi}} dhe zgjidhni {{ui:Shkallë}}.
2. Zgjidhni llojin — **Drejt**, **L me platformë**, **U me platformë** ose **L me hapa kthimi** — cilit drejtim **kthehet**, **gjerësinë** e tij dhe ku shkojnë **dorezat** e tij.
3. Klikoni aty ku fillon shkalla: mesi i skajit të përparmë të hapit të poshtëm.
4. Lëvizni treguesin në drejtimin ku ngjitet shkalla; hapat e ndjekin, me numrin e ngritjeve dhe të hapave. Ajo ngjitet te muret dhe në hapa prej 15°; mbani {{key:Shift}} për ta mbajtur katrore.
5. Klikoni. {{key:Esc}} e nis përsëri.

## Vizato një shkallë spirale

1. Hapni {{ui:Ndërtimi}}, zgjidhni {{ui:Shkallë}}, pastaj zgjidhni **Spirale** si lloj.
2. Vendosni **Kthesën**, në cilin drejtim spiralohet ngjitur (majtas do të thotë në drejtim të kundërt të akrepave të orës).
3. Klikoni qendrën e shtyllës së saj.
4. Klikoni drejtimin ku tregon hapi i poshtëm.

Ajo fillon 30" e gjerë (hapi, nga shtylla deri jashtë), me një shtyllë 4½". Ngritjet llogariten nga lartësia kat më kat, më së shumti 9½" si parazgjedhje. Hapat janë 7½" të thellë në vijën e ecjes, 12" larg shtyllës. Dorezat ecin në anën e jashtme.

Te **Vetitë**, një shkallë spirale shton **Shtyllën qendrore**, diametrin e saj. Fusha **Hapi** matet në vijën e ecjes. Kontrollet e saj janë vlera parazgjedhje të etiketuara për shkallët spirale: 26" gjerësi të pastër, të paktën 6¾" hap në vijën e ecjes, ngritje më të larta se 9½" dhe dorezë 34"–38" lartësi. Ato nuk janë llogari inxhinierike; zyrtari i ndërtimit vendos.

## Si llogariten hapat

Lartësia midis dyshemesë së nivelit dhe nivelit sipër ndahet në ngritje të barabarta jo më të larta se 7¾", dhe çdo hap është 10" i thellë (të dyja mund të ndryshohen te **Vetitë**). Një platformë llogaritet si një hap; hapat e kthimit janë tre hapa të përhapur rreth këndit të brendshëm. Ndryshoni lartësinë e një niveli dhe çdo shkallë në të llogaritet përsëri.

:::warning
7¾" ngritje, 10" hapa, 36" gjerësi, 6'-8" hapësirë mbi kokë dhe dorezë 34"–38" janë vlera parazgjedhje të etiketuara sipas kodit të zakonshëm për banesa, jo llogari inxhinierike. **Vetitë** tregon cilat plotësohen; zyrtari i ndërtimit vendos çfarë zbatohet.
:::

## Ndrysho një shkallë

Zgjidheni (klikoni mbi të në plan ose në pamjen 3D) dhe ndryshoni te **Vetitë**: llojin dhe kthesën e tij, gjerësinë, ngritjen më të lartë, thellësinë e hapit, dorezat dhe lartësinë e tyre, dhe **Pritni dyshemenë sipër** për hapjen e shkallës. Ngritjet dhe hapat që mori shfaqen më poshtë.

## Hapja e shkallës

Kur kati sipër ka dysheme, shkalla e pret aty ku hapat do të kishin më pak se 6'-8" hapësirë mbi kokë. Prerja lëviz me shkallën dhe zhduket kur fshihet shkalla.

## Vizato një parmak

1. Hapni {{ui:Ndërtimi}} dhe zgjidhni {{ui:Parmakë}}.
2. Zgjidhni **Parmak sigurie** (36" i lartë) ose **Dorezë**, dhe lartësinë e tij.
3. Klikoni përgjatë skajit — një platforme, një ballkoni, rreth një hapjeje shkalle — dhe klikoni dy herë ose shtypni {{key:Enter}} për ta mbaruar.

Parmakët marrin shtylla në skajet dhe kthesat e tyre, dhe balusta me hapësira nën 4". Zgjidhni një për të ndryshuar llojin, lartësinë ose sa larg mbi dysheme fillon.

## Vizato një rrethim

Zgjidhni **Rrethim** te e njëjta vegël Parmakë, vendosni lartësinë e tij (1800 mm si fillim), klikoni përgjatë vijës së rrethimit dhe shtypni {{key:Enter}}.

- Rrethimi merr një shtyllë në çdo skaj dhe çdo kthesë, dhe një shtyllë të paktën çdo 2.4 m ndërmjet tyre. Një rrethim me panele ka një panel mes shtyllave; një rrethim me shina ka dy shina. Këto madhësi janë zgjedhje të zakonshme, jo kërkesë kodi: rregullat lokale kufizojnë lartësinë e një rrethimi.
- Është një element i vetëm në model (një IfcRailing me emrin Fence) me grupin e vetive {{ui:CadCraft_Fence}}: stili, lartësia, shtyllat, panelet, shinat, portat, gjatësia dhe sipërfaqja e paneleve. Një hap zhbërjeje.
- Nuk vizatohen këtu: portat (gjeneratori në CivilCraft i vendos), pikat, terreni (rrethimi qëndron mbi nivelin), dhe zgjedhja e një shtylle të vetme.

## Çfarë ruhet

Një shkallë ruhet si shkallë IFC e përbërë nga vrapet e shkallës (me ngritjet, lartësinë e ngritjes dhe gjatësinë e hapit), platformat, hapat e kthimit dhe dorezat; hapja e shkallës është një hapje në pllakën e dyshemesë sipër. Parmakët janë parmakë IFC me gjatësinë dhe numrin e balustave dhe shtyllave të tyre.
