---
title: Lagre visninger og gjennomganger
summary: Behold kameravisninger av modellen under navn, gå tilbake til dem, spill dem av etter hverandre, og ta opp en gjennomgang av bygget som kan spilles av igjen.
keywords: visninger, lagrede visninger, kamera, kameraer, synspunkt, scene, scener, omvisning, presentasjon, gjennomgang, gå gjennom, flygjennom, ta opp, spill av, bane, animasjon
from: 3af19a36
---

{{ui:Visninger}} på verktøylinjen beholder kameraer for 3D-visningen i modellens fil, slik at du og alle du sender den til, kan gå rett tilbake til dem.

## Lagre en visning

1. Sett opp 3D-visningen: roter, zoom, skjul det du ikke vil ha.
2. Klikk {{ui:Visninger}}, skriv et navn (eller behold det som tilbys), og klikk {{ui:Lagre visning}} eller trykk {{key:Enter}}.

Lagring med et navn som allerede er i listen oppdaterer den visningen. Klikk en visnings navn for å gå tilbake til den; kameraet beveger seg dit jevnt.

Pilene endrer rekkefølgen, blyanten gir nytt navn, søppelkassen sletter. Hver endring er ett steg, så {{key:Ctrl+Z}} angrer den.

## Spill av visningene

{{ui:Spill av visningene}} går fra en visning til den neste i listens rekkefølge, og stopper et øyeblikk ved hver. {{key:Esc}} eller {{ui:Stopp}} avslutter det.

## Ta opp en gjennomgang

1. Slå på [Gå](topic:walk) og begynn å gå inne i bygget.
2. I {{ui:Visninger}} klikker du {{ui:Ta opp en gjennomgang}}.
3. Gå med {{key:W}} {{key:A}} {{key:S}} {{key:D}} og se deg rundt med musen.
4. Klikk {{ui:Stopp opptaket}}. Gjennomgangen lagres som «Gjennomgang 1», med lengden.

Klikk en gjennomgang for å spille den av slik du gikk den. {{key:Esc}} stopper den.

## Gjengi en gjennomgang som video

Klikk filmikonet ved siden av en gjennomgang. Videodialogen tegner hver ramme av gjennomgangen med de Render-innstillingene du valgte sist, i størrelsen, bildefrekvensen og kvaliteten du velger her. Lagre den som en WebM- eller MP4-video, eller som en ZIP med ett bilde per ramme. Rammer tar like lang tid som bilder, så start med {{ui:Hurtig}}.

## Fortell en gjennomgang

Klikk taleboblesymbolet ved siden av en gjennomgang. Skriv en linje for hver ting som sies, og start en linje med tidspunktet den starter (`12`, `0:12` eller `1:02.5`). En linje uten tid følger linjen over, etter tiden det tar å si den. Velg språket, i klientens språk hvis det er dem som skal se på. {{ui:Forhåndsvis}} spiller ordene med denne datamaskinens egen stemme og viser dem som undertekster; det samme skjer hver gang gjennomgangen spilles av. {{ui:Lagre sammen med gjennomgangen}} beholder fortellingen i IFC-filen sammen med gjennomgangen.

Din egen tilkoblede assistent kan skrive fortellingen for deg: be den se på gjennomgangen og de lagrede visningene, så setter den linjene på språket du nevner, som ett angresteg.

Den gjengitte videoen har ingen egen lyd, fordi en nettleser ikke kan ta opp sin egen stemme. Lagre undertekstene (`.srt` eller `.vtt`) og legg dem til videoen i videospilleren eller redigeringsprogrammet. Hvilke stemmer du kan velge, avhenger av datamaskinen. Et språk uten installert stemme får fortsatt undertekstene.

## I filen

Visninger og gjennomganger lagres i IFC-filen som egenskapssettet `CadCraft_Views` på prosjektet: vanlig IFC som andre programmer ignorerer. De er i den første modellens koordinater, så de passer fortsatt etter at modellen er lastet på nytt eller en annen modell er lagt til.

:::tip
For å gjengi et bilde fra en lagret visning, gå til visningen og klikk deretter [Render](topic:render).
:::
