---
title: Etiketo elementet dhe bëj tabela sipas etiketës
summary: Përcakto etiketat e tua (një emër, një tip, vlerat e lejuara, cilat klasa), etiketo shumë elemente njëherësh, dhe bëj tabela me kolona, filtra dhe grupe që lexojnë etiketat. Etiketat mbahen në IFC.
keywords: etiketa, etiketim, veti të personalizuara, parametra, parametra të përbashkët, grup vetish, pset, tabelë, filtër, grupo sipas, përfundim, klasa e zjarrit, redaktim masiv, csv
from: 9cc7c90d
---

## Çfarë do të bësh

Një etiketë është një veti e jotja, si *Përfundimi* ose *Klasa e zjarrit*. E përcakton një herë për projektin, e vendos në shumë elemente njëherësh, dhe çdo tabelë në BimCraft mund ta lexojë: tabela e etiketave këtu, {{ui:Sasi}}, Gjej, Ngjyros sipas vetisë dhe [Dokumentet nga modeli](topic:documents-from-the-model).

## Hapat

1. Hap një model IFC, ose fillo një ndërtesë të re.
2. Në panelin e majtë, nën {{ui:Sasi}}, hap {{ui:Etiketat}}.
3. Kliko {{ui:Shto një etiketë}}. Jepi një emër, zgjidh tipin e saj, dhe nëse dëshiron listo vlerat e lejuara (me presje) dhe klasat për të cilat është (`IfcDoor`, `IfcWall` …). Kliko {{ui:Shto etiketën}}.
4. Zgjidh elementet në model (Gjej ndihmon: zgjidh çdo derë njëherësh).
5. Nën {{ui:Etiketo përzgjedhjen}}, zgjidh ose shkruaj një vlerë për çdo etiketë që dëshiron të vendosësh, lër të tjerat ashtu si janë, dhe kliko {{ui:Zbato te … elementet e përzgjedhura}}.
6. Nën {{ui:Tabela e etiketave}}, shëno kolonat, shto filtra, zgjidh {{ui:Grupo sipas}}, pastaj kliko {{ui:Shkarko CSV}}.

## Çfarë duhet të shohësh

- Një hap në listën e ndryshimeve për çdo përcaktim të ruajtur dhe çdo etiketim; {{ui:Zhbëj}} e kthen mbrapsht.
- Elementët e një klase për të cilën një etiketë nuk është lihen jashtë asaj etikete, dhe rreshti i statusit thotë sa janë.
- Tabela e etiketave liston një rresht për element, të grupuar sipas fushës që zgjodhe; kliko qelizën e parë të një rreshti për të zgjedhur atë element.
- {{ui:Sasi}} liston etiketat nën `CadCraft_Tags`, kështu që mund të mbledhësh sipërfaqe ose numërime sipas një etikete atje.

## Tipet

Tipet janë e njëjta listë si parametrat e familjes: Gjatësi (milimetra), Kënd (gradë), Numër, Numër i plotë, Po / Jo, Penë (1–16), Tekst, Material dhe Mbushje. Një vlerë që nuk përshtatet me tipin e vet, ose nuk është një nga vlerat e lejuara, refuzohet me një mesazh dhe asgjë nuk ndryshon.

## Gjëra që duhen ditur

- Gjithçka është IFC i thjeshtë, kështu që programe të tjera lexojnë vlerat: përkufizimet janë në grupin e vetive `CadCraft_TagDefs` në projekt, vlerat në grupin e vetive `CadCraft_Tags` te çdo element (një veti për etiketë). Gjatësitë shkruhen në njësinë e gjatësisë së skedarit.
- `IfcWall` në klasat e një etikete përfshin edhe muret standard-case dhe ato të elementuara.
- Riemërtimi i një etikete riemërton vlerat e saj te çdo element, në të njëjtin hap. Heqja e një etikete heq vetëm përkufizimin e saj: vlerat që janë vendosur mbeten te elementet si veti të thjeshta. Pastroi së pari (zgjidh {{ui:Pastro}}) për t'i hequr.
- Etiketat në aplikacionin hartues CadCraft (atributet e blloqeve) nuk janë ndërtuar ende.
