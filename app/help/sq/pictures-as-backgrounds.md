---
title: Vendos një figurë nën plan
summary: Vendos një imazh PNG, JPEG ose WebP (një plan i skanuar, një skicë, një foto e vendit, një pamje nga ajri) nën planin e një niveli ose mbi një plan vertikal, shkalloje me dy pika, lëviz, rrotullo, zbeh dhe kyç, shiko në 3D dhe në PDF-në e planit, dhe mbaje pranë modelit në një paketë.
keywords: figurë, imazh, sfond, PNG, JPEG, WebP, skanim, skicë, foto, pamje nga ajri, planimetri vendi, shkallë, errësi, kyçje, nënshtresë, gjurmim
from: e3c78d1f
---

## Vendos një figurë

Ndiz {{ui:Vizato}}, shko te niveli, dhe zgjidh {{ui:Foto}} në menunë {{ui:Ndërtimi}}. Pastaj {{ui:Fut figurën…}} dhe zgjidh një skedar PNG, JPEG ose WebP. Lexohet në shfletuesin tënd dhe nuk ngarkohet kurrë. Shfaqet nën plan, e përshtatur me pamjen, dhe shiriti i veglave thotë se nuk është shkallëzuar ende. Gjithçka që vizaton qëndron mbi të.

## Vendos shkallën

Zgjidh {{ui:Shkalla}}, kliko dy pika mbi figurën, distanca reale e të cilave e di (dy skajet e një muri në një plan të skanuar, një përmasë e shtypur në një skicë), pastaj shkruaj distancën dhe shtyp {{key:Enter}}. Figura rritet ose zvogëlohet rreth pikës së parë që klikove. {{key:Esc}} anulon.

## Ngjit një zonë të kopjuar

Në MarkupCraft, {{ui:Kopjo zonën}} kopjon një pjesë të një fletë PDF si figurë. Kthehu te BimCraft, me planin e një niveli të shfaqur, shtyp {{key:Ctrl+V}} (ose {{ui:Ngjit}} te menyja {{ui:Redakto}}): zona vendoset në plan si figurë, e qendërzuar aty ku është treguesi (ose në mes të pamjes). Kur fleta kishte një shkallë vizatimi, hyn në madhësinë e saj reale, kështu që një mur në të është po aq i gjatë sa muret e tua. Pa të, hyn në madhësinë e letrës dhe {{ui:Shkalla}} fillon, kështu që mund të klikosh dy pika dhe të shkruash distancën e tyre. Një zonë e kopjuar si mbivendosje fillon me errësinë me të cilën u kopjua. Është një hap i vetëm zhbërjeje dhe mbahet si çdo figurë tjetër.

Ngjitja merr atë që kopjove më fundit: një zonë të kopjuar, ose diçka që kopjove në BimCraft. {{key:Ctrl+V}} ngjit gjithashtu çdo figurë tjetër PNG, JPEG ose WebP në kujtesën tënde, të vendosur si {{ui:Fut figurën…}} dhe pa u shkallëzuar ende. Një zonë e kopjuar mbahet mend për gjashtë orë.

## Lëviz, rrotullo, zbeh, kyç

{{ui:Zhvendos}} merr një pikë bazë mbi figurë dhe pastaj vendin ku duhet të shkojë. {{ui:Rrotullo}} merr një kënd në gradë, rreth qendrës së figurës. {{ui:Errësia}} e zbeh figurën, që linjat e tua të dallojnë. {{ui:Blloko}} e mban nga lëvizja ndërsa vizaton; një figurë e bllokuar ende të lejon të ndryshosh errësinë dhe ta fshehësh. Çdo ndryshim është një hap zhbërjeje.

## Disa figura, disa nivele

Një figurë i përket nivelit në të cilin u vendos dhe shfaqet në planin e atij niveli dhe në planin e tavanit. Kliko një figurë për ta punuar, ose zgjidhe nga lista. {{ui:Fshih}} e çaktivizon pa e hequr; {{ui:Hiq}} (ose {{key:Delete}}) e heq nga modeli.

## Figurat në pamjen 3D

Çdo figurë qëndron gjithashtu në pamjen 3D si një plan i sheshtë: një figurë plani shtrihet mbi nivelin e vet, një figurë me plan vertikal qëndron mbi vijën e vet të prerjes. Vizatohet mbi model pa e fshehur, dhe modeli fsheh pjesën e figurës që është pas tij. Figurat e mbivendosura renditen sipas largësisë. {{ui:Errësia}}, {{ui:Fshih}}, {{ui:Blloko}} dhe {{ui:Hiq}} punojnë njëlloj, dhe {{ui:Shfaq në 3D}} i fik të gjitha planet vetëm në pamjen 3D. Një nivel mban më së shumti 8 figura, për t'i mbajtur pamjet të shpejta.

## Një figurë në një plan vertikal

Te {{ui:Vendos mbi}} zgjidh {{ui:Një plan vertikal (vijë prerjeje)}}, pastaj {{ui:Fut figurën…}}. Kliko dy skajet e një vije në plan (një skaj i faqes së murit kapet), ose zgjidh te {{ui:Mbi një vijë prerjeje}} një vijë prerjeje të emërtuar të nivelit dhe nuk duhen klikime. Figura qëndron mbi nivelin mbi atë vijë, po aq e gjerë sa vija. Vendose {{ui:Gjerësia}}, vendin e saj {{ui:Përgjatë vijës}} dhe {{ui:Lartësia mbi nivelin}} duke shkruar; {{ui:Rrotullo}} e rrotullon në planin e vet. Një figurë vertikale nuk vizatohet nën plan; plani e shfaq vijën e saj ndërsa punon mbi të. BimCraft nuk ka një dritare prerjeje 2D ndërvepruese: prerjet dhe pamjet ballore vizatohen në fletë, dhe figurat nuk printohen ende në ato pamje të fletëve.

## Printimi

{{ui:Pamja e printimit}} te një plan shkruan figurat e nivelit në PDF nën vizatim, në shkallën, rrotullimin dhe errësinë e tyre, të prera sipas fletës; një figurë e fshehur mbetet jashtë. Një JPEG hyn ashtu siç është; figurat e tjera zvogëlohen në 200 dpi në fletë më parë.

## Mbaje pranë modelit

Bajtët e figurës nuk shkruhen në tekstin IFC. Modeli i referohet secilës me emër (një IfcDocumentReference si pictures/<id>.png) dhe bajtët udhëtojnë në një paketë projekti. Përdor {{ui:Ruaj si paketë…}} (ose {{ui:Ruaj si IFC}} dhe zgjidh atë): merr një skedar të vetëm .ccbundle me modelin dhe figurat e tij; IFC mbetet i vogël dhe redaktimet shpejtë. Hape .ccbundle dhe figurat kthehen.

Një .ifc i thjeshtë nuk mund të mbajë një figurë pa u bërë i madh. Kur e ruan një të tillë, BimCraft thotë sa figura mbahen jashtë tij dhe ofron një paketë, ose një IFC të thjeshtë që përfshin figurat deri në 512 KB dhe i lë të tjerat jashtë. Një .ifc i thjeshtë i hapur pa paketën e vet i shfaq ato figura si të munguara dhe Problemet i liston; hap .ccbundle në të cilin u ruajtën. Skedarët e ruajtur nga versioni i parë, me figurën brenda IFC, hapen ende, dhe ruajtja si paketë i nxjerr figurat jashtë. Një figurë mbahet siç është deri në 6 MB; një më e madhe zvogëlohet më parë, dhe të thuhet. Programet e tjera e hapin modelin dhe i injorojnë figurat. Një figurë që nuk e ke shkallëzuar ende listohet në Problemet si shënim.

## Në fletët e prerjeve dhe pamjeve ballore

Një figurë në plan vertikal (zgjidh {{ui:Vertikale}} në panelin e figurës dhe kliko dy skajet e një vije, ose vendose mbi një vijë prerjeje të emërtuar) printohet në pamjet e fletëve që shohin drejt saj. Një prerje shfaq një figurë që qëndron mbi vijën e prerjes së saj, ose që u vendos mbi atë vijë prerjeje me emër. Një pamje ballore shfaq çdo figurë vertikale ndaj së cilës është e kthyer. Figura vizatohet nën linjat e pamjes, në shkallën e pamjes, e prerë sipas pamjes, dhe e mban errësinë e vet. Hap {{ui:Fletët…}} për ta parë; PDF-ja e fletës e mban si imazh. Kur shikohet nga pas, një figurë pasqyrohet, ashtu si në 3D. Figurat e fshehura lihen jashtë.
