---
title: Gem visninger og rundture
summary: Gem kameravisninger af modellen med navn, gå tilbage til dem, afspil dem efter hinanden, og optag en rundtur gennem bygningen til afspilning.
keywords: visninger, gemte visninger, kamera, kameraer, synsvinkel, scene, scener, tur, præsentation, rundtur, gennemgang, optag, afspil, sti, animation
from: 3af19a36
---

{{ui:Visninger}} på værktøjslinjen gemmer kameraer for 3D-visningen i modellens fil, så du og alle, du sender den til, kan gå direkte tilbage til dem.

## Gem en visning

1. Sæt 3D-visningen op: kredse rundt, zoom, skjul det du ikke vil have.
2. Klik på {{ui:Visninger}}, skriv et navn (eller behold det, der tilbydes), og klik på {{ui:Gem visning}} eller tryk på {{key:Enter}}.

Gemmer du med et navn, der allerede står på listen, opdateres den visning. Klik på en visnings navn for at gå tilbage til den; kameraet flytter sig blidt derhen.

Pilene ændrer rækkefølgen, blyanten omdøber, papirkurven sletter. Hver ændring er ét trin, så {{key:Ctrl+Z}} fortryder den.

## Afspil visningerne

{{ui:Afspil visningerne}} går fra visning til visning i listens rækkefølge og stopper et øjeblik ved hver. {{key:Esc}} eller {{ui:Stop}} afslutter det.

## Optag en rundtur

1. Tænd for [Gå](topic:walk) og begynd at gå inde i bygningen.
2. I {{ui:Visninger}} klikker du på {{ui:Optag en tur}}.
3. Gå med {{key:W}} {{key:A}} {{key:S}} {{key:D}} og kig rundt med musen.
4. Klik på {{ui:Stop optagelsen}}. Turen gemmes som »Walk 1« med sin længde.

Klik på en tur for at afspille den, som du gik den. {{key:Esc}} stopper den.

## Gengiv en rundtur som video

Klik på filmikonet ved siden af en tur. Videodialogen tegner hver billedramme af turen med de Render-indstillinger, du valgte sidst, i den størrelse, billedfrekvens og kvalitet du vælger her. Gem den som en WebM- eller MP4-video, eller som en ZIP med ét billede pr. ramme. Rammer tager lige så lang tid som billeder, så start med {{ui:Hurtig}}.

## Tilføj fortælling til en rundtur

Klik på taleboble-ikonet ved siden af en tur. Skriv én linje for hver ting, der siges, og start en linje med det tidspunkt, den begynder (`12`, `0:12` eller `1:02.5`). En linje uden tidspunkt følger linjen ovenfor, efter den tid det tager at sige den. Vælg sproget, på kundens sprog hvis det er dem, der ser den. {{ui:Forhåndsvisning}} afspiller ordene med denne computers egen stemme og viser dem som undertekster; det samme sker, når turen spilles. {{ui:Gem sammen med rundturen}} gemmer fortællingen i IFC'en sammen med turen.

Din egen forbundne assistent kan skrive fortællingen for dig: bed den se på turen og de gemte visninger, så sætter den linjerne på det sprog, du nævner, som ét fortrydelsestrin.

Den gengivne video har ingen egen lyd, fordi en browser ikke kan optage sin egen stemme. Gem underteksterne (`.srt` eller `.vtt`) og tilføj dem til videoen i din videoafspiller eller editor. Hvilke stemmer du kan vælge, afhænger af computeren: et sprog uden installeret stemme får stadig undertekster.

## I filen

Visninger og ture gemmes i IFC'en som egenskabssættet `CadCraft_Views` på projektet: almindelig IFC, som andre programmer ignorerer. De er i den første models koordinater, så de stadig passer, efter modellen er indlæst igen, eller en anden model er tilføjet.

:::tip
For at gengive et billede fra en gemt visning går du til visningen og klikker derefter på [Render](topic:render).
:::
