---
title: Zidovi iz prerisane risbe
summary: Spremenite tloris DWG ali DXF v zidove, vrata in okna na nivoju ter ohranite risbo pod tlorisom kot referenco.
keywords: dwg, dxf, prerisano, uvoz tlorisa, pretvori, cad v bim, 2d v 3d, zidovi iz črt, sloji, bloki, vrata iz blokov, podlaga, referenčna risba, ozadje, zunanji sklic, risalni program
from: 3bf213f1
---

## Kaj boste naredili

Uporabite tloris, ki ste ga (ali kdo drug) narisali v risalnem programu, kot začetek modela: njegove črte zidov postanejo zidovi, njegovi bloki vrat in oken pa vrata in okna.

## Koraki

1. Vklopite {{ui:Risanje}} in izberite nivo, ki ga risba prikazuje, na seznamu nivojev tlorisa.
2. Izberite {{ui:Zgradba}} › {{ui:Iz risbe …}}, nato {{ui:Izberi risbo …}} in izberite DWG ali DXF.
3. V pogovornem oknu:
   - **Enote risbe** so iz risbe; izberite druge, če niso pravilne (tloris, narisan v čevljih in prebran kot palci, je dvanajstkrat premajhen).
   - **Sloji z zidovi**: označite sloje, na katerih so črte zidov. Sloji, katerih imena vsebujejo »wall« ali »zid«, so označeni samodejno.
   - **Črte so**: **obe lici vsakega zidu** (običajen način risanja tlorisov: vsak par vzporednih črt, oddaljen do 600 mm, postane en zid, debel toliko, kot je razmik), **osrednje črte zidov** ali **eno lice** z zidom na njegovi levi ali desni. Pri osrednjih črtah ali eni strani debelino določi tip zida.
   - **Tip zida** in **Višina zidu**, kot pri orodju {{ui:Zid}}.
   - **Bloki**: za vsak blok, ki je vrata ali okno, izberite tip vrat ali okna ali ga izpustite. Bloki, katerih imena vsebujejo »door« ali »window«, so izbrani samodejno. Vsak je postavljen v zid, na katerem sedi, širok toliko, kot je blok vzdolž zidu; vrata se odprejo na stran, na katero je narisan njihov zamah.
   - **Kam gre**: na koordinate risbe samega ali z njenim levim spodnjim kotom na izhodišču tlorisa.
   - **Ohrani risbo pod tlorisom tega nivoja**: pustite označeno, da vidite risbo kot tanke črte pod tem, kar naredite.
4. Črta pod izbirami pove, koliko zidov, vrat in oken bo naredila. Kliknite {{ui:Naredi}}.

## Kaj boste videli

- Zidovi, vrata in okna na nivoju, povezani tam, kjer se srečajo, s prostori, ki jih zaprejo; vse je en korak, zato {{key:Mod+Z}} to povrne.
- Risba kot tanke črte pod tlorisom. {{ui:Zgradba}} › {{ui:Iz risbe …}} našteje risbe, shranjene na nivoju, vsako z {{ui:Odstrani}}; odstranitev ene pusti zidove.
- V datoteki IFC je ohranjena risba oznaka na nivoju (njene črte), zato jo prikažejo tudi drugi BIM programi.

:::note
PDF ali optični posnetek prav tako deluje: glejte [Zidovi iz nabora načrtov](topic:walls-from-plans). Loki so izpuščeni (BimCraft riše ravne zidove), prav tako črte znotraj blokov. Črte brez para pri »obeh licih« so v pogovornem oknu prešteti in izpuščeni: narišite te zidove z orodjem {{ui:Zid}} ali jih uredite z {{ui:Spremeni}} › {{ui:Prirezi / podaljšaj}} (glejte [Prirezovanje, podaljševanje in združevanje zidov](topic:trim-extend-walls)).
:::

:::tip
Prerisali ste preko optičnega posnetka v risalnem programu? Tukaj odprite tudi posnetek in preverite zidove glede nanj: glejte [Model iz optičnega posnetka](topic:model-from-a-scan).
:::
