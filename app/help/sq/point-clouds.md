---
title: Shfaq një re pikash pranë modelit
summary: Hap një skanim lazer (LAS, LAZ, E57, PLY, PCD, PTX, PTS ose XYZ) në pamjen 3D vetëm ose me një model IFC, ngjyrose, pritni një prerje të hollë përmes tij, mat deri te pikat e tij, dhe dërgoje në aplikacionin e vizatimit për të gjurmuar linjat siç u ndërtuan.
keywords: re pikash, skanim lazer, skanim, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, siç u ndërtua, rilevim, regjistrim, prerje, prerje planimetrike, kapje, mat, gjurmo, skanim në bim
from: d0a3e740
---

## Çfarë do të bësh

Shiko një skanim lazer të një ndërtese pranë modelit të saj: kontrollo që ajo që u ndërtua përputhet me projektin, mat midis pikave të skanuara, dhe pritni një prerje të hollë për të lexuar muret, dyert dhe kolonat.

## Hapat

1. Hap renë: {{ui:Open}} një skedar `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ose `.xyz`, ose lësho në faqe (shih temën mbi formatet e reve të pikave për atë që sjell secili, dhe çfarë të eksportohet nga softueri vetanak i skanerit). Me një model të hapur, reja bashkohet me modelin në pamjen 3D; hapja e një reje nuk mbyll kurrë modelin apo ndryshimet e tij të paruajtura. Pa model, reja hapet vetvetiu.
2. Shiriti i renës shfaqet nën shiritin e mjeteve. Ai thotë sa pika shfaqen dhe sa ka skedari.
3. Zgjidh {{ui:Color by}}: ngjyrat e vetë skedarit (kur skaneri i ka ruajtur), {{ui:Height}}, {{ui:Intensity}}, {{ui:Class}} (klasat LiDAR si toka, bimësia dhe ndërtesa) ose {{ui:One color}}. {{ui:Size}} i bën pikat më të mëdha ose më të vogla.
4. Kliko {{ui:Plan}} nën {{ui:Slice}} për të mbajtur vetëm një brez të hollë 1.2 m mbi pikën më të ulët, parë nga lart: muret, hapjet e dyerve dhe kolonat lexohen si një planimetri. {{ui:Front}} dhe {{ui:Side}} presin brezat vertikalë për fasada dhe prerje. Lëviz brezin me {{ui:At}}, dhe ndrysho {{ui:Thickness}} (metra). {{ui:Off}} shfaq përsëri të gjithë renën.
5. Kliko {{ui:Measure}} në shiritin e mjeteve. Treguesi kapet te pikat e renës (etiketa thotë "point cloud"), kështu që mund të matësh nga muri në mur në prerje, ose nga një element i modelit deri te skanimi. Një cep ose skaj i modelit brenda arritjes ende fiton.
6. Me {{ui:Measure}} › {{ui:Location}}, një pikë e renës jep gjerësinë dhe gjatësinë e saj gjeografike nga sistemi i koordinatave i vetë renës, kur skedari e emërton.
7. {{ui:Hide}} e fsheh renën për një çast; {{ui:Remove}} e heq. {{ui:Show}} › {{ui:Point cloud}} fsheh ose shfaq shiritin.

## Ku shkon reja

{{ui:Place}} në shirit tregon si rreshtohet reja me modelin:

- **Koordinatat e modelit**: numrat e renës janë të vetë modelit (një skanim i regjistruar me koordinatat e projektit).
- **Koordinatat e hartës**: modeli ka një konvertim hartë (IfcMapConversion) dhe reja është në të njëjtin sistem të projektuar: reja vendoset përmes tij. Nëse të dyja emërtojnë sisteme të ndryshme, rreshti i statusit e thotë këtë.
- **Të qendëruar në model**: kur asnjëra nuk e vendos renën afër modelit, mesi i saj shkon në mesin e modelit dhe pika më e ulët në dyshemenë e modelit. Zgjidh një zgjedhje tjetër për ta anashkaluar.

Kur skedari nuk thotë njësitë e tij, BimCraft lexon metra dhe ofron {{ui:Units}} në shirit.

## Gjurmo vijat siç u ndërtuan

Kliko {{ui:Gjurmo në CadCraft}} për t'ia dhënë renën aplikacionit të vizatimit, në një skedë të re. Hapet atje nën vizatimin, ku një prerje planimetrike dhe kapja e objekteve të lejojnë të vizatosh muret mbi skanim. Shih temën CadCraft mbi renë e pikave.

## Sa pika

Një skanim mund të mbajë qindra miliona pika. BimCraft lexon çdo pikë një herë dhe mban një pjesë të barabartë prej tyre për ta vizatuar: {{ui:Show}} në shirit cakton sa (1, 2, 5 ose 10 milionë). Më shumë pika kërkojnë më shumë memorie dhe një kartelë grafike më të shpejtë. Numërimet për çdo klasë LiDAR janë për çdo pikë të skedarit.

:::note
Skedarët lexohen në këtë kompjuter; asgjë nuk ngarkohet. LAS 1.0–1.4 dhe LAZ lexohen (skedarët LAZ deri në 1 GB, të mbajtur në memorie gjatë leximit); skedarët E57 deri në 6 milionë pika dhe 512 MB për tani (skanimet më të mëdha: eksporto LAS ose LAZ); PLY, PCD dhe PTX plotësisht; renët tekstuale janë `x y z`, me kolonat e ngjyrës (`r g b`) dhe intensitetit kur janë aty.
:::

## Skanime të shumta

Skanimet e marra nga pozicione të ndryshme mund të regjistrohen në një kuadër të vetëm, të rafinohen me ICP dhe të eksportohen si një LAS ose E57 i vetëm: shih [Regjistro disa skanime në një](topic:register-scans).
