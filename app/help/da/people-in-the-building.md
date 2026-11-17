---
title: Lad personer gå gennem bygningen
summary: En evakuering eller en almindelig dags ankomster gennem dine rum, døre og trapper, med køer, hvor bygningen smalner, den længste gang til en udgang fra hvert rum, og resultaterne under Problemer. En grov menneskemodel til designbeslutninger, ikke et brandsikkerhedscertifikat.
keywords: personer, evakuering, flugt, udgang, flugtvej, gangafstand, kø, menneskemængde, strøm, dørbredde, trapper, ankomster, flaskehals, simulering, beboere, fodgænger, hvad hvis, blokeret dør
from: 84aa8920
---

{{ui:Personer i bygningen}}-afsnittet i venstre panel lader personer gå gennem rummene, dørene og trapperne i den åbne IFC-model. Intet i modellen ændres, og intet uploades.

:::warning
Dette er **et designhjælpemiddel, ikke et brandsikkerhedscertifikat**. Det kender ikke til ild, røg, panik, forskelle i mobilitet eller hvad en norm kræver af dig. Grænserne er dine: den længste gang til en udgang og den tid, der er til rådighed, er tal, du skriver ind, og intet antages.
:::

## Kør den

1. Åbn en model med lukkede rum og døre. En dør med et rum på kun den ene side er en udgang; en dør mellem to rum forbinder dem; en trappe forbinder rummene i dens ender.
2. Vælg **Evakuering** (alle går til en udgang), **Ankomster** (alle kommer ind og går til et rum) eller **Udveksling** (personerne i rummene forlader, mens lige så mange kommer ind), samt gulvarealet pr. person. Rum, der hedder noget med gang, trappe, hal eller toilet, har ingen personer.
3. Klik på {{ui:Kør}}. Du får tidspunktet for den sidste persons udgang (og hvornår halvdelen og ni ud af ti er ude), køen ved hver dør og trappe, rummet med den længste gang og en plan, der afspiller kørslen.

## Hvad-hvis-scenarier

Sæt flueben ved {{ui:Lukket}} på en dør i tabellen, og kør igen: personerne finder en anden vej, eller rum uden udvej listes som fejl. En dør dobbelt så bred tømmer et rum meget hurtigere; tabellen viser, hvor køerne er.

## Sådan virker det

Hvert rum er et gitter, så personerne går rundt om hjørner, ikke gennem vægge. Hastigheden falder, når et rum fyldes (S = 1.4 (1 − 0.266 D) m/s, D i personer pr. m²). En dør lader 1.3 personer passere i sekundet pr. meter af sin bredde, minus 150 mm på hver side; en trappe 1.0 og langsommere gang. Personer venter i en kø i ankomstrækkefølge. Et kørselsnummer gentager den samme kørsel nøjagtigt.

Assistenten kan køre det samme: bed om en evakuering eller den længste gang til en udgang fra hvert rum.

## Personer i hvert rum

Åbn {{ui:Personer i hvert rum}} for at skrive et tal for et hvilket som helst rum. En tom boks bruger gulvarealtallet (vist med grå); 0 tømmer et rum. Dine tal bruges til kørslen og gemmes i denne browser.

## Modstrøm ved døre

I **Udveksling** mødes personer, der går ud, og personer, der kommer ind, ved de samme døre. Når en dør lader en person gå den modsatte vej lige efter den sidste person, beholder den en del af sin hastighed (0.8 her; en antagelse, da offentliggjorte værdier varierer), og tabellen tæller retningsskiftene. En dør, der skifter retning ofte, vises under **Problemer** som en note.

## Trapper og repos

Hvert repos på en trappe koster en gående et sekund at dreje (en antagelse). En lige trappe har ingen; en L- eller U-trappe har ét. Trappens hastighed kommer stadig fra bredden af dens løb.

## I 3D-visningen

Sæt flueben ved {{ui:Vis personerne i 3D-visningen}}, og de gående vises som figurer i modellen, farvet efter hvad de laver, og de bevæger sig, når du afspiller kørslen. Intet føjes til modellen.
