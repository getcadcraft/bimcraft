---
title: Krahaso skanimin me modelin dhe orarin 4D
summary: Gjykoni çdo element të modelit kundrejt një reje pikash të hapur (i ndërtuar, pjesërisht, mungon, nuk u arrit), shihni përqindjen e ndërtuar, ngjyrosni modelin sipas saj, dhe me një orar 4D të ngarkuar listoni çfarë është prapa ose përpara në ditën 4D.
keywords: skanim, re pikash, progres, përqindje e përfunduar, i ndërtuar, mungon, prapa orarit, përpara orarit, 4D, progres në terren, devijim, siç u ndërtua, skanim lazer, dron, krahaso
from: 6fdc9003
---

Hapni një IFC, hapni një re pikash pranë tij (shih [Re pikash](topic:point-clouds)) dhe vendoseni mbi model. Seksioni {{ui:Compare the scan with the model}} shfaqet në panelin e djathtë kur një re është e hapur.

## Çfarë bën

Shtypni {{ui:Compare}}. Çdo element i modelit gjykohet sipas sipërfaqes së tij, sepse kjo është ajo që sheh një skaner. Gjashtë faqet e kutisë së tij priten në qeliza rreth 20 cm; një qelizë llogaritet kur një pikë skanimi bie brenda {{ui:Tolerance}} tuaj (50 mm në fillim) të faqes. Faqja e madhe më e mirë llogaritet, kështu që një mur i skanuar nga njëra anë nuk penalizohet për anën tjetër.

- **Built**: të paktën 40 % e sipërfaqes shihet.
- **Partly**: 10 % deri 40 %.
- **Missing**: më pak se kaq, por skanimi arrin elementin (pika brenda 1.5 m nga ai).
- **Not reached**: skanimi nuk shkoi kurrë atje, kështu që nuk thuhet asgjë për të.

Për elementët e ndërtuar dhe pjesërisht të ndërtuar jep edhe devijimin mesatar të pikave të skanimit nga sipërfaqja e modelit, dhe thotë nëse elementi është në vend (brenda tolerancës), afër (brenda tre herë) ose jashtë (më larg). Sheh vetëm devijime deri në pesë herë tolerancën: një element i ndërtuar më larg vendit të vet se kaq duket si i munguar.

Përmbledhja jep përqindjen e ndërtuar mes elementëve që arrin skanimi, sipas numrit dhe sipas vëllimit. Elementët pjesërisht të ndërtuar numërohen veçmas dhe nuk shtohen te ata të ndërtuar.

## Kundrejt orarit 4D

Me një orar 4D të ngarkuar (shih [Orari 4D](topic:4d-schedule)), rezultati përdor edhe ditën që keni vendosur në rrëshqitësin 4D: elementët që duhet të jenë gati deri atë ditë, por që skanimi nuk i shfaq si të ndërtuar, janë **prapa orarit**; elementët që s'u kanë ardhur ende koha dhe janë të ndërtuar janë **përpara**. Elementët prapa orarit listohen te {{ui:Problems}}, dhe tabela mund të filtrohet për ta. Pa orar nuk thuhet asgjë për prapa ose përpara.

## Tabela dhe modeli

Klikoni një rresht për të zgjedhur elementin. {{ui:Colour the model}} i ngjyros elementët jeshil (të ndërtuar), kaltër (pjesërisht), të kuq (mungon) ose gri (nuk u arrit); {{ui:Own colours}} i kthen ato. {{ui:Save CSV}} shkruan tabelën. Shëno elementët përkatës si të verifikuar në terren marrë çdo element të parë si të ndërtuar dhe brenda tolerancës si të verifikuar në terren (LOD 500, metoda skanim), në një hap që mund ta zhbësh. Shih [Shëno elementët si të kontrolluar ose të verifikuar në terren](topic:verification).

:::warning
Ky krahasim e kutinë e çdo elementi me pikat e skanimit brenda një tolerance. **Nuk është një rilevim, një llogaritje sasish ose bazë për pagesë.** Një element i fshehur pas një që është skanuar (një mur pas një veshjeje, një pllakë nën një shtresë dysheme) ndan sipërfaqen e tij dhe mund të lexohet si i ndërtuar; një element i lakuar ose i pjerrët ka një kuti më të madhe se trupi i tij dhe mund të lexohet si pjesërisht ose i munguar. Shikoni listën para se të veproni sipas saj. Komentet e lejeve dhe shënimet e progresit nuk janë pjesë e kësaj: ato mbeten në kolonat ku i mbani.
:::

Një asistent mund të ekzekutojë të njëjtin krahasim me mjetin {{ui:Compare the scan with the model}}; ai nuk ndryshon asgjë në model.
