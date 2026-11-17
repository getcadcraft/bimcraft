---
title: Hap një paketë projekti
summary: Një paketë projekti është një zip me një model, pamjet, fletët dhe grupet e vetive të tij. Hape, shfaq një pamje me katin dhe shtresat e saj, hap një fletë dhe shiko vetitë te grupet e vetë projektit.
keywords: paketë, paketë projekti, ccbundle, zip, pamje, hartë pamjesh, fletë, libër fletësh, kombinim shtresash, grupe vetish, standarde, pln, shabllon
from: b5b86e8f
---

## Çfarë do të bësh

Hap një **paketë projekti** (`.ccbundle.zip`) dhe punoje projektin ashtu siç ishte organizuar: pamjet, fletët dhe grupet e vetive të tij, mbi modelin.

Një paketë mban:

- modelin si IFC,
- fletët si PDF dhe DWG,
- një listë të asaj që IFC lë jashtë: pamjet (secila me katin, kombinimin e shtresave dhe shkallën e saj), fletët dhe vizatimet e vendosura mbi to, përkufizimet e vetive në grupet e tyre, klasifikimet, dhe standardet si shtresat, setet e lapsave, llojet e vijave, mbushjet, sipërfaqet dhe kompozitët.

Paketat shkruhen nga një skriptë me burim të hapur që punon brenda Archicad dhe i kërkon vetë Archicad këto lista. BimCraft nuk lexon kurrë drejtpërdrejt skedarët `.pln` ose `.tpl`; shih [Hap skedarët e projektit .pln dhe .pla](topic:pln-project-files).

## Bëj një paketë

Skripta është një version paraprak: nuk është provuar ende në çdo version të Archicad. Merre nga [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Të duhet Archicad 24 ose më i ri dhe Python 3.8 ose më i ri; asgjë tjetër për t'u instaluar.

1. Ruaj `archicad_bundle.py` në një dosje, për shembull `C:\cc-bundle`.
2. Në Archicad, hap projektin dhe krijo një grup publikimi me emrin saktësisht **CadCraft bundle**: pamjen 3D si IFC, çdo fletë si PDF, dhe çdo fletë përsëri si DWG, të publikuara në skedarë në disk, në një dosje të vetme të sheshtë.
3. Me projektin të hapur, ekzekuto `python archicad_bundle.py --probe --out .` një herë. Ai vetëm lexon dhe shkruan `probe.json`.
4. Ekzekuto `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (përdor përkthyesin IFC që zgjodhe). Archicad publikon grupin dhe skripta shkruan `<project>.ccbundle.zip`.

Nëse publikimi përmes skriptës dështon, publiko grupin me dorë dhe ekzekuto `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README e depove ka çdo opsion. Nëse diçka nuk arrin, hap një çështje atje dhe bashkangjit `probe.json`.

## Hap një paketë

1. Kliko {{ui:Zgjidh një skedar}}, ose lësho `.ccbundle.zip` mbi BimCraft. Në një dosje që hape me {{ui:Hap një dosje}}, paketat listohen nën **Paketat e projektit**; kliko një emër.
2. Modeli hapet si çdo IFC, dhe seksioni **Paketa e projektit** shfaqet në të majtë, nën faktet e skedarit.

Asgjë nuk ngarkohet: paketa lexohet në kompjuterin tënd, një skedar në herë, kështu që një model i madh nuk kopjohet dy herë.

## Shfaq një pamje

Nën **Pamjet**, pamjet grupohen sipas dosjeve që kishin në projekt. Kliko emrin e një pamjeje:

- **Një plan kati** shfaq vetëm katin e vet, parë nga lart.
- **Kombinimi i shtresave të saj** fsheh elementet në shtresat që ai kombinim i fsheh. Rreshti i statusit thotë sa elemente u fshehën.
- **Shkalla e saj** shfaqet pranë emrit dhe në rreshtin e statusit.
- **Një pamje 3D** shfaq çdo kat.

Për të shfaqur gjithçka sërish, përdor {{ui:Shfaq të gjitha}} te {{ui:Shfaq}} dhe shëno çdo kat.

:::note
BimCraft i gjen shtresat përmes caktimeve të shtresave të skedarit IFC. Nëse IFC u eksportua pa to, një kombinim shtresash nuk fsheh asgjë, dhe rreshti i statusit thotë 0 elemente të fshehura.
:::

## Hap një fletë

Nën **Fletët**, çdo fletë shfaq numrin, emrin, madhësinë e letrës dhe pamjet e vendosura mbi të.

- **PDF** ruan PDF-në e fletës nga paketa.
- **DWG** hap vizatimin e fletës te pamja 2D. Kliko çdo pamje për t'u kthyer te modeli.
- **Hap në …** dërgon skedarin e fletës te aplikacioni që punon me të, në një skedë të re: PDF te MarkupCraft, DWG te CadCraft. Shfaqet vetëm aty ku ai aplikacion është i hapur pranë BimCraft. Skedari lexohet nga paketa ndërsa skeda ngarkohet, dhe asgjë nuk ngarkohet.

Një fletë pa asnjërin prej tyre thotë **Nuk ka skedar në paketë**.

## Shiko vetitë te grupet e projektit

Zgjidh një element. **Grupet e vetive** shfaq vetitë e tij nën grupet që projekti përcaktoi, të përputhura përmes grupit të vetive dhe emrit që i jep përkufizimi për IFC, ose ndryshe sipas emrit të tij. Pjesa tjetër mbetet te {{ui:Vetitë}} si zakonisht. **Përkufizimet e vetive** liston çdo përkufizim me grupin, tipin dhe emrin IFC.

## Standardet dhe shënimet

- **Standardet** numëron shtresat, kombinimet e shtresave, setet e lapsave, llojet e vijave, mbushjet, sipërfaqet, kompozitët dhe materialet në paketë.
- **Shënimet** liston atë që skripta nuk arriti ta marrë nga ai version i Archicad, çdo fushë që BimCraft nuk e lexoi, dhe çdo skedar që paketa e emëron por nuk e mban.

## Zgjidhja e problemeve

- **"… është një zip, por jo një paketë projekti."** Zip-i nuk ka `manifest.json`. Zgjidhe dhe hap `.ifc`-në brenda tij.
- **"… është një paketë projekti më e re se sa e lexon ky BimCraft."** Përditëso BimCraft.
- **"… nuk mban modelin që emëron manifesti i tij."** Zip-i u pre ose u ndryshua. Bëje sërish paketën.
- **Një pamje shfaq çdo kat.** Katin e saj nuk e ka IFC i modelit (rreshti i statusit e thotë). Kontrollo nëse eksportimi IFC e përfshiu atë kat.

Shih edhe [Puna mes dy programeve BIM](topic:two-bim-programs) dhe [Çfarë lexon BimCraft nga secili format](topic:file-formats).
