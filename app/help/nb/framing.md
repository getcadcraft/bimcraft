---
title: Bindingsverk i vegger, dekker og tak
summary: Lag stendere, svill, overliggere, bjelkelag, sperrer eller takstoler fra modellen og behold dem med den; de lages på nytt når veggene, åpningene, dekkene eller taket endres, og tabellen Trelast er kappelisten.
keywords: TJI, I-bjelke, spennetabell for bjelkelag, last inn en tabell, bindingsverk, binding, ramme, stender, stendere, svill, toppsvill, undersvill, overligger, kongestender, jackstender, trimmer, korte stendere, blokking, hjørne, California-hjørne, T-skjøt, bjelkelag, randbjelke, sperre, valmsperre, rennesperre, kortsperre, mønebjelke, takbjelke, bindebjelke, takstol, trelast, kappeliste, board feet, 2x4, 2x6, senteravstand
from: 76d0ffb5
---

## Hva du skal gjøre

Lag bindingsverket av det du tegnet. BimCraft legger ut stendere, svill og overliggere i veggene, bjelkelagene i dekkene og sperrene (eller takstolene) i taket. Den dimensjonerer dem etter merkede standardtabeller, beholder dem med modellen, og lager dem på nytt hver gang det de binder, endres. Tabellen **Trelast** er kappelisten.

## Lag bindingsverket

1. På et nivå åpner du {{ui:Bygg}} og velger {{ui:Bindingsverk}}.
2. Velg **senteravstand** (16" eller 24" senter-til-senter; 400 eller 600 mm), **hjørnene** (tre-stender eller California), **Sperrer** eller **Takstoler** for tak, og om veggene skal få en rad med **blokking** på halv høyde. For dekker velger du **Sagt trevirke** eller **TJI (foreløpig)**, og setter bjelkeretningen til automatisk, plan X eller plan Y.
3. Klikk **Lag bindingsverk i alle vegger**, eller klikk en vegg, et dekke eller et tak (på nivået taket står på) for å lage bare det.

Slå av **Vis bindingsverk** for å skjule alle bindingsverksdelene, som et lag. **Gjennomsiktig** skjuler veggene, dekkene og takene som har bindingsverk, slik at du kan se bindingsverket alene.

## Hva du får

- **Vegger**: en nedre svill (kuttet ved dører), en dobbel toppsvill, stendere på oppsettet fra veggens start, kongestendere og jackstendere og en overligger ved hver dør og hvert vindu, korte stendere over overliggere og under vinduer, en grov undersvill under vinduer, hjørner der vegger møtes (veggen som går gjennom tar hjørnestenderne), to forsterkningsstendere der en annen vegg går inn som T-skjøt, og blokking mellom stenderne.
- **Dekker**: bjelkelag tvers over dekkets korte vei som standard, eller langs din valgte planakse; randbjelker rundt kanten, og doble trimmere og overliggere rundt et trappehull, med bjelkelagene som går gjennom det kuttet korte (halebjelker). TJI-modus velger den minste oppførte serien og høyden som når den målte frie spennvidden ved valgt senteravstand.
- **Tak**: vanlige sperrer kvadrert mot hver takfot, kortsperrer der valmer og renner kutter dem, valm- og rennesperrer, møneplater, takbjelker på svillene og bindebjelker, eller enkle takstoler i avstanden, ett stykke hver.

## Endre det

Velg en bindingsverksdel i 3D-visningen eller modelltreet. **Egenskaper** viser bindingsverket: endre senteravstanden, bjelketypen og -retningen for dekket, hjørnene, blokkingen eller takbindingsverket. Når vegger, dører og vinduer flyttes, eller dekket eller taket endres, lages bindingsverket på nytt av seg selv.

For å beholde en del du plasserte med vilje når bindingsverket lages på nytt, velg den og velg **Behold denne delen når bindingsverket lages på nytt**. En beholdt del blir værende der den er; når bindingsverket rundt den endres, merkes den slik at du kan kontrollere den.

## TJI-dekker fra en tabell du laster inn

BimCraft har ingen spennetabeller fra bjelkeprodusenter (de tilhører produsenten, og endres med hver utgave). Velg et dekkes bindingsverk, sett **Dekkebjelker** til **TJI (foreløpig)** og velg **Last inn en tabell…** i **Egenskaper**: en fil i formatet `cadcraft-tji-table`, JSON eller CSV, som du laget fra produsentens gjeldende spennetabeller. Den navngir produsenten, produktet og utgaven, og hvor tallene kommer fra, og lister for hvert lasttilfelle (nyttelast, egenlast, nedbøyningsgrense, opplagerlengde) den største frie spennvidden for hver serie og høyde ved hver senteravstand.

- BimCraft tar dekkets **frie spennvidde**, velger den laveste høyden, og innenfor den serien hvis oppgitte spenn når den for senteravstanden og lasttilfellet du valgte, og bindingsverker dekket med den. Er spennet eller senteravstanden utenfor tabellen, sier den det og endrer ingenting.
- Lastene, nedbøyningsgrensen, opplagerlengden, tabellen og setningen «Foreløpig veiledning for layout; endelig valg krever produsentens tabeller og prosjektlastene» skrives ut på Trelast-tabellen, skrives inn i modellen med bindingsverket og listes i **Problemer**-panelet som en merknad. En tabell merket som eksempel sier det i en advarsel.
- Med tillegget **Byggeforskrifter** på leser dets regel for dekkebjelker også en innlastet tabell; uten tabell utelates TJI-bjelker fra den kontrollen, som før.
- Tabellen blir i denne nettleseren til du sletter den eller laster inn en annen. Filen: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inches, feet, psf; eller `metric`: mm, meter, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) og `rows` (`series`, `depth`, `spans`: for hver tilfelle-id, senteravstanden og den største frie spennvidden, for eksempel `"16": "15-6"`). I CSV er de samme opplysningene `# nøkkel = verdi`-linjer, og så `series,depth,case,spacing,span`.
- Uten innlastet tabell avvises en TJI-layout, og ingenting endres: **Last inn en TJI-tabell: produsentens tabeller tilhører dem og er ikke innebygd.** En modell som er bindingsverket med den eldre innebygde TJI-tabellen (før denne endringen) beholder hver bjelke den har; Egenskaper og Problemer sier at tabellen trengs, og dekket kan lages på nytt når du har lastet inn en. Bjelker av massivt sagt trevirke virker som før.

Dette er veiledning for layout. Endelig valg av bjelker krever produsentens tabeller, prosjektets laster og en ingeniør.

## Kappelisten

I **Tabeller**-panelet velger du **Trelast**: hvert bindingsverksstykke, gruppert etter størrelse og etter lagerlengden du ville kjøpt (hele 2'-lengder fra 8'; 600 mm-trinn fra 2400 i millimeter), med antall stykker og board feet. **CSV** laster den ned.

:::warning
Størrelsene for hode, bjelker, sperrer og takbjelker kommer fra merkede standardtabeller for et vanlig hus med én eller to etasjer, ikke fra prosjektering. **Egenskaper** sier når et spenn eller en åpning er utenfor tabellen. En konstruktør eller ingeniør kontrollerer spenn, laster og forbindelser.

TJI-layouter bruker bare en tabell du laster inn, som du lager fra produsentens gjeldende spennetabeller; BimCraft leveres med ingen. Forslaget kontrollerer ikke opplager, punktlaster, utkragninger, hull, overliggere ved trappehull eller forbindelser, og modellens I-profil er skjematisk.
:::

## Hva som lagres

Hvert innrammede vegg-, dekke- eller takelement er en IFC-elementsamling («Framing») av IFC-staver (stendere, svill, sperrer, stagbjelker, blokking, takstoler) og bjelker (overliggere, bjelkelag, randbjelker, møneplater), hver med sin størrelse, lengde og board feet.
