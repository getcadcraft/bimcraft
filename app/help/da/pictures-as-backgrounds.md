---
title: Læg et billede under planen
summary: Placér et PNG-, JPEG- eller WebP-billede (en skannet plan, en skitse, et foto af stedet, et luftfoto) under en etages plan eller på et lodret plan, skalér det ud fra to punkter, flyt, drej, dæmp og lås det, se det i 3D og i plan-PDF'en, og hold det sammen med modellen i et bundt.
keywords: billede, baggrund, PNG, JPEG, WebP, scanning, skitse, foto, luftfoto, situationsplan, målestok, uigennemsigtighed, lås, underlag, spor
from: e3c78d1f
---

## Placér et billede

Slå {{ui:Tegn}} til, gå til etagen, og vælg {{ui:Billede}} i menuen {{ui:Build}}. Derefter {{ui:Indsæt billede…}} og vælg en PNG-, JPEG- eller WebP-fil. Den læses i din browser og uploades aldrig. Den vises under planen, tilpasset visningen, og værktøjslinjen siger, at den ikke er skaleret endnu. Alt, du tegner, ligger oven på den.

## Angiv målestoken

Vælg {{ui:Målestok}}, klik på to punkter på billedet, hvis reelle afstand du kender (to ender af en væg på en skannet plan, et mål trykt på en skitse), skriv derefter afstanden og tryk {{key:Enter}}. Billedet vokser eller skrumper om det første punkt, du klikkede på. {{key:Esc}} annullerer.

## Sæt et kopieret område ind

I MarkupCraft kopierer {{ui:Kopiér område}} en del af et PDF-ark som et billede. Tilbage i BimCraft, med en etages plan vist, trykker du {{key:Ctrl+V}} (eller {{ui:Sæt ind}} i menuen {{ui:Rediger}}): området lander på planen som et billede, centreret, hvor markøren er (eller midt i visningen). Når arket havde en tegningsmålestok, kommer det ind i sin rigtige størrelse, så en væg på det er lige så lang som dine vægge. Uden en målestok kommer det ind i papirstørrelse, og {{ui:Målestok}} starter, så du kan klikke på to punkter og skrive deres afstand. Et område kopieret som et overlay starter med den uigennemsigtighed, det blev kopieret med. Det er ét trin at fortryde og gemmes ligesom ethvert andet billede.

Sæt ind tager det, du kopierede sidst: et kopieret område eller noget, du kopierede i BimCraft. {{key:Ctrl+V}} sætter også ethvert andet PNG-, JPEG- eller WebP-billede på din udklipsholder ind, placeret som {{ui:Indsæt billede…}} og ikke skaleret endnu. Et kopieret område huskes i seks timer.

## Flyt, drej, dæmp, lås

{{ui:Flyt}} tager et basispunkt på billedet og derefter det sted, det skal hen. {{ui:Drej}} tager en vinkel i grader, om billedets centrum. {{ui:Uigennemsigtighed}} dæmper det, så dine linjer skiller sig ud. {{ui:Lås}} forhindrer, at det flyttes, mens du tegner; et låst billede lader dig stadig ændre dets uigennemsigtighed og skjule det. Hver ændring er ét trin at fortryde.

## Flere billeder, flere niveauer

Et billede hører til den etage, det blev placeret på, og vises på etagens plan og loftsplan. Klik på et billede for at arbejde med det, eller vælg det på listen. {{ui:Skjul}} slår det fra uden at fjerne det; {{ui:Fjern}} (eller {{key:Delete}}) tager det ud af modellen.

## Billeder i 3D-visningen

Hvert billede står også i 3D-visningen som et fladt plan: et planbillede ligger på sin etage, og et billede på et lodret plan står over sin snitlinje. Det tegnes over modellen uden at skjule den, og modellen skjuler den del af billedet, der står bagved. Overlappende billeder sorteres efter afstand. {{ui:Uigennemsigtighed}}, {{ui:Skjul}}, {{ui:Lås}} og {{ui:Fjern}} virker ens, og {{ui:Vis i 3D}} slår alle planerne fra i kun 3D-visningen. En etage har højst 8 billeder, for at visningerne forbliver hurtige.

## Et billede på et lodret plan

Under {{ui:Placér på}} vælger du {{ui:Et lodret plan (snitlinje)}}, og derefter {{ui:Indsæt billede…}}. Klik på de to ender af en linje på planen (en endeflade af en væg fanges), eller vælg en navngivet snitlinje for etagen under {{ui:Over en snitlinje}}, så er der ingen klik nødvendige. Billedet står på etagen over den linje, lige så bredt som linjen. Sæt dets {{ui:Bredde}}, dets placering {{ui:Langs linjen}} og dets {{ui:Højde over niveau}} ved at skrive; {{ui:Drej}} drejer det i sit eget plan. Et lodret billede tegnes ikke under planen; planen viser dets linje, mens du arbejder med det. BimCraft har ikke et interaktivt 2D-snitvindue: snit og facader tegnes på arkene, og billeder udskrives ikke i disse arkvisninger endnu.

## Udskrivning

{{ui:Udskriftsvisning}} på en plan skriver etagens billeder ind i PDF'en under tegningen, i deres målestok, drejning og uigennemsigtighed, beskåret til arket; et skjult billede forbliver ude. En JPEG lægges ind, som den er; andre billeder nedskaleres til 200 dpi på arket først.

## Gemt sammen med modellen

Billedets bytes skrives ikke ind i IFC-teksten. Modellen henviser til hvert billede ved navn (en IfcDocumentReference såsom pictures/<id>.png), og bytes rejser i et projektbundt. Brug {{ui:Gem som bundt…}} (eller {{ui:Gem som IFC}} og vælg det): du får én .ccbundle-fil med modellen og dens billeder; IFC'en forbliver lille, og redigeringer forbliver hurtige. Åbn .ccbundle-filen, så er billederne tilbage.

En ren .ifc kan ikke indeholde et billede uden at blive stor. Når du gemmer en, siger BimCraft, hvor mange billeder der holdes uden for den, og tilbyder et bundt eller en ren IFC, der indlejrer billederne op til 512 KB og udelader de øvrige. En ren .ifc åbnet uden sit bundt viser disse billeder som manglende, og Problemer lister dem; åbn den .ccbundle, de blev gemt i. Filer gemt af den første version, med billedet inde i IFC'en, åbnes stadig, og en bundt-gemning flytter deres billeder ud. Et billede beholdes, som det er, op til 6 MB; et større nedskaleres først, og du får besked. Andre programmer åbner modellen og ignorerer billederne. Et billede, du endnu ikke har skaleret, vises under Problemer som en note.

## I snit- og facadeark

Et billede på et lodret plan (vælg {{ui:Lodret}} i billedpanelet og klik på de to ender af en linje, eller læg det over en navngivet snitlinje) udskrives i de arkvisninger, der kigger direkte på det. Et snit viser et billede, der står på sin snitlinje, eller som blev lagt over den snitlinje ved navn. En facade viser hvert lodret billede, hvis plan vender mod den. Billedet tegnes under visningens linjer, i visningens målestok, beskåret til visningen, og beholder sin uigennemsigtighed. Åbn {{ui:Ark…}} for at se det; arkets PDF bærer det som et billede. Set bagfra er et billede spejlvendt, som det er i 3D. Skjulte billeder udelades.
