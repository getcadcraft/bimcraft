---
title: Sammenlign en scanning med modellen og 4D-tidsplanen
summary: Vurdér hvert element i modellen mod en åben punktsky (bygget, delvist, mangler, ikke nået), se den procentvise udførelse, farvelæg modellen efter den, og læs med en indlæst 4D-tidsplan, hvad der er bagud eller foran på 4D-dagen.
keywords: scanning, punktsky, fremdrift, procent færdig, bygget, mangler, bagud i tidsplanen, foran tidsplanen, 4D, byggepladsfremdrift, afvigelse, som bygget, laserscanning, drone, sammenlign
from: 6fdc9003
---

Åbn en IFC, åbn en punktsky ved siden af (se [Punktskyer](topic:point-clouds)) og placér den på modellen. Sektionen {{ui:Sammenlign scanningen med modellen}} vises i højre panel, mens en sky er åben.

## Hvad det gør

Tryk på {{ui:Sammenlign}}. Hvert element i modellen vurderes ud fra sin overflade, fordi det er det, en scanner ser. De seks flader af dets boks skæres i celler på cirka 20 cm; en celle tæller, når et scanningspunkt ligger inden for din {{ui:Tolerance}} (50 mm til at starte med) fra fladen. Den bedste store flade tæller, så en væg, der er scannet fra den ene side, ikke straffes for sin anden side.

- **Bygget**: mindst 40 % af overfladen er set.
- **Delvist**: 10 % til 40 %.
- **Mangler**: mindre end det, men scanningen når elementet (punkter inden for 1.5 m af det).
- **Ikke nået**: scanningen har aldrig været der, så der siges intet om det.

For bygget og delvist bygget elementer giver den også middelafstanden fra scanningspunkterne til modellens overflade og siger, om elementet står på plads (inden for tolerancen), tæt på (inden for tre gange tolerancen) eller forskudt (længere væk). Den ser kun afvigelser op til fem gange tolerancen: et element, der er bygget længere væk fra sin plads end det, læses som mangler.

Oversigten giver den procentvise udførelse blandt de elementer, scanningen når, efter antal og efter volumen. Delvist byggede elementer tælles særskilt og lægges ikke til de byggede.

## Mod 4D-tidsplanen

Med en indlæst 4D-tidsplan (se [4D-tidsplan](topic:4d-schedule)) bruger resultatet også den dag, du har sat på 4D-skyderen: elementer, der skulle være klar senest den dag, og som scanningen ikke viser som byggede, er **bagud i tidsplanen**; elementer, der endnu ikke skulle være klar, men er bygget, er **foran**. Elementer bagud i tidsplanen står på listen under {{ui:Problemer}}, og tabellen kan filtreres til dem. Uden en tidsplan siges der intet om bagud eller foran.

## Tabellen og modellen

Klik på en række for at vælge elementet. {{ui:Farvelæg modellen}} maler elementer grønne (bygget), gule (delvist), røde (mangler) eller grå (ikke nået); {{ui:Egne farver}} sætter dem tilbage. {{ui:Gem CSV}} skriver tabellen. {{ui:Markér de matchende elementer som feltverificeret}} markerer hvert element, der er set som bygget og inden for tolerancen, som feltverificeret (LOD 500, metode scanning), i ét trin, som kan fortrydes. Se [Markér elementer som kontrolleret eller feltverificeret](topic:verification).

:::warning
Dette sammenligner boksen for hvert element med scanningspunkter inden for en tolerance. Det er **ikke en opmåling, en mængdeopgørelse eller et grundlag for betaling**. Et element skjult bag et scannet (en væg bag en beklædning, en dæk under et gulvbelæg) deler dets overflade og kan se ud som bygget; et buet eller skråtstillet element har en boks større end sit legeme og kan se ud som delvist eller manglende. Kig på listen, før du handler på den. Tilladelsesbemærkninger og fremdriftsnoter er ikke en del af dette: de bliver i de kolonner, du gemmer dem i.
:::

En assistent kan køre den samme sammenligning med værktøjet {{ui:Sammenlign scanningen med modellen}}; det ændrer intet i modellen.
