---
title: Gjennomgå modellen i VR-briller
summary: Gå gjennom IFC-modellen i full størrelse med VR-briller: hopp rundt, snu deg, mål, kutt den opp, plasser BCF-saker med et bilde, se den som en bordmodell, og møt de andre i en live-økt.
keywords: vr, virtuell virkelighet, briller, webxr, xr, oppslukende, quest, oculus, vive, index, pico, gå gjennom, gjennomgang, teleportering, designgjennomgang, koordinering, mål, snitt, kutt, sak, saker, bcf, bordmodell, skalamodell, tilstedeværelse, avatarer, live, sammen
from: 8994b36d
---

{{ui:VR}} på verktøylinjen setter deg inne i modellen med VR-briller, i full størrelse. Du står der 3D-visningens kamera er, på gulvet under det, og vender samme vei. Brillene viser det 3D-visningen viser: skjulte etasjer, elementer og modeller forblir skjult, og malte materialer følger med. Ingenting lastes opp: nettleseren tegner det på denne datamaskinen (eller i brillenes egen nettleser).

## Det du trenger

- VR-briller nettleseren kan styre (WebXR): en frittstående bril med sin egen nettleser, eller Chrome eller Edge på en PC med briller koblet til.
- En IFC-modell åpen, på en sikker side (https), slik den er på denne siden.

Når det ikke finnes briller, er {{ui:VR}} nedtonet og sier hvorfor.

## Start

1. Sett opp 3D-visningen der du vil begynne: i et rom, eller utenfor og se på bygget.
2. Klikk {{ui:VR}} på verktøylinjen.
3. Ta på deg brillene.

Menyen sitter på baksiden av venstre hånd. Pek på den med høyre kontroller og trekk i avtrekkeren for å velge en knapp. (Med bare én hånd svever menyen foran der du startet.)

## Bevege deg rundt

- **Hopp:** i {{ui:Flytt}}, pek på et gulv og trekk i avtrekkeren; du lander der. Eller skyv styrespaken forover for å sikte, og slipp for å hoppe. Du kan bare lande på gulv, dekker og terreng (flater som vender opp), aldri på en vegg.
- **Snu:** skyv styrespaken til venstre eller høyre: du snur 30° hver gang.
- **Gå:** i spillerommet ditt, bare gå.

## Mål

Velg {{ui:Mål}}, og trekk så i avtrekkeren på to punkter. Avstanden vises mellom dem, i meter. Et punkt nær et hjørne fester seg til hjørnet.

## Kutt den opp

Velg {{ui:Snitt}} og trekk i avtrekkeren på en flate:

- på en vegg (eller alt som ikke er et gulv): alt mellom deg og den flaten kuttes bort, slik at du ser inn. Dette virker best utenfra, eller tvers over et rom;
- på et gulv, ovenfra: et planutsnitt 1.2 m over det gulvet, slik at veggene viser sin nedre del.

{{ui:Fjern}} tar bort kuttet og målingene. Hvis et [snittplan](topic:section-plane) kutter modellen når du starter, starter brillene med det.

## Plasser en sak

Velg {{ui:Sak}} og trekk i avtrekkeren der problemet er. En nummerert nål merker det, og saken havner i fanen {{ui:Saker}} som et BCF-emne, med et bilde av det du så og kameraet der du sto, i modellens egne koordinater. Lagre dem sammen med resten av [sakene](topic:issues-bcf) som en BCF-fil; andre koordineringsverktøy åpner dem i samme visning.

Legg til en kommentar til en sak etter at du går ut av VR, i fanen Saker: å skrive i brillene er ikke bygget ennå.

## Se den som en bordmodell

{{ui:Bordmodell}} krymper modellen til å passe et bord foran deg. Gå rundt det, eller snu det med styrespaken. {{ui:Full størrelse}} setter deg tilbake der du var.

## Med andre, live

I en [live-økt](topic:work-live) ser alle i VR de andre som et hode og to hender i sin egen farge, med navnet sitt, og en prikk der hver peker. Endringer alle gjør, når brillene dine i løpet av et øyeblikk. Personer ved pulten vises ikke i brillene ennå.

## Gå ut

Velg {{ui:Forlat VR}} (eller ta av brillene og avslutt der). 3D-visningen på skjermen flytter seg dit hodet ditt var.

:::note
Testet med en emulator for briller, ennå ikke på alle briller. En stor modell kan få brillene til å hakke: skjul etasjer eller modeller du ikke trenger først ([skjul og isoler](topic:hide-and-isolate)).
:::
