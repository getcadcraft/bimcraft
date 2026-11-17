---
title: Risbe panelov v lesu ali lahkem jeklu
summary: Okvirjajte stene, tla in strehe modela kot panele v lesu ali lahkem jeklu, vsak steber, vezno letev, nadglavni nosilec, lego in rog si oglejte v merilu ter shranite seznam rezanja kot CSV in delavniške risbe kot PDF.
keywords: panel, okvirjanje, delavniška risba, seznam rezanja, lahko jeklo, jeklen steber, LGS, les, lega, rog, nadglavni nosilec, zaloga, PDF
from: c09f916e
---

## Odprite panele

Izberite {{ui:Risbe panelov}} v meniju {{ui:Zgradba}} (ali vtipkajte {{cmd:PANELS}}). Seznam vsebuje vsako narisano steno, vsa tla in vse strehe modela, vsakega s kljukico. Stene pridejo z vrati in okni kot odprtinami. Tla so okvirjena kot pravokotnik okoli njihovega obrisa, z legami, ki tečejo po krajši strani. Streha je okvirjena kot čelna streha nad obrisom svojih sten, z naklonom strehe; seznam to pove, ker valbasta ali zapletena streha ni čelna streha.

## Material, velikost in razmik

Izberite {{ui:Material}}: **Les** ali **Lahko jeklo**. Jeklenih kosov so C-stebri, poimenovani po globini in debelini (na primer C92-1.2), s tirom za vezne letve. {{ui:Dimenzija elementa}} izbere eno velikost za vsak odkljukani panel, ali pustite na Privzeto, da vzamete privzete vrednosti za vsako vrsto panela. {{ui:Razmik}} je razdalja med stebri, legami ali rogovi. To so začetne vrednosti, ki jih nastavite sami. Niso preverjanje skladnosti: ali stebri na tem razmiku nosijo to steno in ali nadglavni nosilec prenese ta razpon, je stvar tabel predpisov (dodatek Gradbeni predpisi ima tabele IRC) in vašega inženirja.

## Kaj dobite

Prvi odkljukani panel je narisan v merilu v pogovornem oknu, z merami. {{ui:Seznam rezanja (CSV)}} shrani vse kose vsakega panela po oznaki, velikosti in dolžini ter zaloge dolžin, ki jih kupite zanje. {{ui:Delavniške risbe (PDF)}} shrani eno stran A3 za vsak panel, z vsakim kosom označenim in njegovim seznamom rezanja. {{ui:Risba (SVG)}} shrani prvi panel kot risbo. Vse, kar koda okvirjanja najde, česar ni mogoče okviriti (odprtina preblizu konca stene, nadglavni nosilec, ki ne gre pod vezne letve, kos, daljši od najdaljše zaloge), je navedeno pod Težave in v pogovornem oknu.

## Česar ne počne

Paneli so risbe, narejene iz modela, kadarkoli jih zahtevate: v model se ne zapiše nič, zato se vedno ujemajo z njim. Če želite okvirjenje vstaviti v model kot elemente, uporabite {{ui:Okvirjanje}} za lesene stene, tla in strehe.
