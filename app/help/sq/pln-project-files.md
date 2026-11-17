---
title: Hap skedarët e projektit .pln dhe .pla
summary: Çfarë bën BimCraft sot me skedarët .pln, .pla, .tpl dhe .bpn, dhe si të eksportohen IFC dhe DWG prej tyre, që modeli dhe vizatimet të hapen këtu.
keywords: pln, pla, tpl, bpn, skedar projekti, arkiv, shabllon, kopje rezervë, eksportim ifc, eksportim dwg, përkthyes, zona, paraqitje
from: 41fb921d
---

## Çfarë do të bësh

Merr një projekt të ruajtur si `.pln` (projekt), `.pla` (arkiv me bibliotekën e tij), `.tpl` (shabllon) ose `.bpn` (kopje rezervë) dhe fute në BimCraft. Këto janë skedarët e vetë Archicad.

## Çfarë hapet sot

- **Vetë skedarët e projektit nuk hapen ende.** Formati i tyre nuk është publikuar, dhe BimCraft nuk e lexon ende. Kur hap një prej tyre, BimCraft e thotë këtë dhe të drejton këtu.
- **BimCraft kontrollon bajtet e para të skedarit.** Projektet e Archicad nga versioni 17 e lart fillojnë me të njëjtën nënshkrim të shkurtër, kështu që BimCraft mund të thotë me siguri se një skedar është projekt Archicad. Një skedar me emër Archicad që nuk fillon kështu ka gjasa të jetë riemërtuar, të jetë i dëmtuar ose të vijë nga një version më i vjetër. Nënshkrimi nuk e dallon projektin, arkivin dhe shabllonin nga njëri-tjetri.
- **Një eksport IFC hapet plotësisht**: modeli në 3D, katet, zonat si hapësira, të dhënat e elementeve, grupet e vetive dhe klasifikimet, me çdo mjet të BimCraft.
- **Një eksport DWG hapet** në pamjen 2D, me shtresat dhe paraqitjet e tij, dhe në {{ui:3D}}. Për ta redaktuar, përdor {{ui:Gjurmo në CadCraft}}.

Ose sill të gjithë projektin si një zip të vetëm, me pamjet, paraqitjet dhe grupet e vetive: shih [Hap një paketë projekti](topic:open-project-bundle).

## Eksporto IFC (modeli)

1. Hap projektin në Archicad.
2. Zgjidh **File > Save As**, dhe zgjidh **IFC** si lloj skedari.
3. Zgjidh një përkthyes IFC (emri i Archicad për një grup cilësimesh eksportimi IFC). Një nga **IFC4 Reference View** ose **IFC2X3 Coordination View 2.0** i përshtatet BimCraft. IFC4X3 hapet gjithashtu.
4. Zgjidh çfarë do të eksportohet: i gjithë projekti, ose vetëm elementët e dukshëm në katet që po shikon.
5. Ruaj, pastaj kliko {{ui:Choose a file}} në BimCraft dhe zgjidh skedarin `.ifc`.

Kontrollo këto në cilësimet e përkthyesit përpara eksportimit:

- **Zonat**: eksportoji, që dhomat të vijnë si hapësira. Kliko {{ui:Spaces}} në BimCraft për t'i parë.
- **Vetitë dhe klasifikimet**: eksportoji, që të shfaqen në {{ui:Properties}} dhe të mund të përdoren në {{ui:Find}}, {{ui:Color}} dhe {{ui:Quantity totals}}.
- **`.ifc` i thjeshtë**, jo `.ifczip` ose `.ifcxml`. BimCraft hap vetëm `.ifc` të thjeshtë.

## Eksporto DWG (vizatimet)

1. Hap planimetrinë, prerjen ose paraqitjen që dëshiron.
2. Zgjidh **File > Save As**, dhe zgjidh **DWG** si lloj skedari.
3. Zgjidh një përkthyes DXF-DWG, dhe ruaj.
4. Për një grup të tërë fletësh, ruaji paraqitjet nga Layout Book, ose publikoji si DWG.
5. Hap `.dwg` në BimCraft. Vizatimet e lidhura nga eksporti hapen me të kur janë në të njëjtin dosje; shih [Vizatimet dhe imazhet e lidhura](topic:dwg-linked-files).

## Zgjidhja e problemeve

- **"… është projekt Archicad: bajtet e tij të para e thonë këtë."** Eksporto IFC ose DWG si më sipër, dhe hap atë skedar.
- **"… emërtohet si skedar Archicad, por nuk fillon si i tillë."** Kontrollo nga erdhi skedari: mund të jetë një lloj tjetër skedari me emër të ri (provo ta hapësh me shtesën e vërtetë), një kopje që nuk u mbarua, ose një projekt nga një version para 17. Hape në Archicad nëse mundesh, pastaj eksporto IFC ose DWG.
- **Modeli hapet pa dhoma.** Zonat nuk u eksportuan. Aktivizoji në përkthyesin IFC dhe eksporto përsëri.
- **Hapjet nuk priten.** BimCraft e thotë këtë nën **Nuk është vizatuar ende** në panelin {{ui:File}}. Eksporto përsëri; nëse mbetet, hap modelin në programin që e krijoi dhe kontrollo hapjet atje.
- **Teksti në DWG duket ndryshe.** Eksporti mund të ruajë fonte që BimCraft nuk i ka; BimCraft e vizaton tekstin me një font sans-serif të thjeshtë.

Shih edhe [Merr një skedar projekti në 3D përmes IFC](topic:rvt-to-ifc) dhe [Çfarë lexon BimCraft nga secili format](topic:file-formats).
