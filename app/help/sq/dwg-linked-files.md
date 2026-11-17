---
title: Gjej vizatime dhe imazhe të lidhura
summary: Shfaq vizatimet e lidhura të një vizatimi (xref) dhe imazhet e bllokut të titullit, duke hapur dosjen e tij ose duke shtuar skedarët me dorë.
keywords: xref, referencë e jashtme, vizatim i lidhur, bashkëngjit, mbivendos, imazh, foto, logo, blloku i titullit, xref që mungon, etransmit, menaxheri i referencave
from: 5593d4b1
---

## Çfarë do të bësh

Plotëso një vizatim: shfaq vizatimet me të cilat lidhet (referenca të jashtme, ose xref) dhe imazhet që përdor, si një logo te blloku i titullit.

## Mënyra e lehtë: hap dosjen

1. Kliko {{ui:Hap një dosje}} dhe zgjidh dosjen që mban vizatimin dhe lidhjet e tij, për shembull gjithë dosjen `Cad` të një projekti.
2. Te raporti i dosjes, lëviz te **Vizatimet CAD**.
3. Kliko vizatimin.
4. Shiko panelin {{ui:Vetitë}} në të djathtë, nën **Vizatimet e lidhura** dhe **Imazhet**.

BimCraft kërkon çdo vizatim të lidhur me emrin e tij ("*emri*.dwg"), së pari në të njëjtën dosje me vizatimin, pastaj kudo në dosjen që hape. Imazhet gjenden në të njëjtën mënyrë, dhe gjithashtu me një emër të ngjashëm: një eksport eTransmit ose Revit shpesh shton emrin e projektit përpara, kështu që `logo.png` gjendet si `Tower-logo-5425051.png`.

## Mënyra tjetër: shto skedarët me dorë

1. Hap vizatimin vetëm.
2. Në të djathtë, nën **Vizatimet e lidhura**, kliko {{ui:Shto vizatime të lidhura…}}. Nën **Imazhet**, butoni është {{ui:Shto imazhe…}}; të dy hapin të njëjtin zgjedhës.
3. Zgjidh skedarët `.dwg` të lidhur dhe skedarët e imazheve. Mund të zgjedhësh disa njëherësh.
4. Prit ndërsa BimCraft e hap përsëri vizatimin me ta.

## Çfarë duhet të shohësh

Çdo vizatim dhe imazh i lidhur listohet me një etiketë:

| Etiketa | Do të thotë |
|---|---|
| **Shfaqet** | E gjetur dhe e vizatuar. Rruga nën të tregon nga erdhi, ose "shtuar nga ti". |
| **Shfaqet, emër i ngjashëm** | Një imazh i gjetur me një emër të ngjashëm. Kontrollo që është i saktë. |
| **Nuk u gjet** | Nuk është në dosje ose në skedarët që shtove. Një imazh që mungon shfaqet si korniza e tij bosh. |
| **TIFF nuk mund të shfaqet në shfletues** | Imazhi është një skedar TIFF, që shfletuesit nuk e vizatojnë. Ruaje si PNG me të njëjtin emër dhe shtoje. |
| **Nuk mund të lexohet** | Skedari u gjet, por nuk mund të hapet si imazh. |

Paneli {{ui:Vizatimi}} në të majtë shfaq "*n* nga *m* të ngarkuara" për vizatimet e lidhura. Shtresat e vizatimeve të lidhura shfaqen te {{ui:Shtresat}} si "*emri i lidhjes*|*shtresa*".

## Gabimet e zakonshme

- **Hapja vetëm e vizatimit.** "Ky vizatim shfaq vetëm përmbajtjen e vet derisa t'i shtohen vizatimet e lidhura. Hapja e gjithë dosjes së projektit i gjen ato automatikisht."
- **Hapja e një dosjeje shumë të vogël.** Nëse lidhjet ndodhen në një dosje tjetër të njëjtit nivel, hap dosjen prind.
- **Lidhje të riemërtuara.** BimCraft i përputh vizatimet e lidhura sipas emrit. Një lidhje e riemërtuar në disk nuk gjendet; shtoje me dorë.
- **Lidhje të lidhjeve.** BimCraft ngarkon vizatimet me të cilat lidhet vizatimi i hapur. Vizatimet e lidhura brenda tyre nuk kërkohen, kështu që zakonisht nuk shfaqen në këtë version.
