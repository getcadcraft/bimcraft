---
title: Pamja e drejtpërdrejtë
summary: Një panel pranë modelit që e shfaq në pamjen e kohës reale, me diell, hije dhe dritë të reflektuar, dhe ndjek çdo ndryshim që bën; ec nëpër të dhe cakto orën e ditës dhe muajin.
keywords: pamje e drejtpërdrejtë, kohë reale, realtime, render në kohë reale, shëtitje, ec, ec nëpër, perspektivë e parë, prezantim, klient, ekran i dytë, dritare e dytë, monitor, ora e ditës, dielli, stina, muaji, hije, ambient occlusion, reflektime, dritë e reflektuar, ndriçim global, webgpu, webgl
from: ea5c02bf
---

Pamja e drejtpërdrejtë e shfaq modelin në pamjen e kohës reale: qiellin dhe diellin sipas vendit dhe datës së vendit tënd, hijet e diellit, bojërat dhe materialet që u ke dhënë elementeve, llambat dhe dritën e reflektuar nga muret dhe dyshemetë. Ndjek atë që bën: ktheje pamjen 3D dhe edhe ajo kthehet, ndrysho modelin dhe e shfaq ndryshimin pak më vonë. Asgjë nuk ngarkohet.

Ajo vizaton të njëjtën skenë, bojëra, llamba dhe diell si [Rendero një pamje](topic:render); për një imazh të përfunduar përdore atë.

## Ta hapësh

1. Hap një model dhe zgjidh {{ui:Pamja e drejtpërdrejtë}} në shiritin e veglave. Paneli hapet mbi aplikacion, poshtë djathtas.
2. Tërhiqe shiritin e titullit për ta zhvendosur, tërhiq cepin për ta bërë më të madh.
3. {{ui:Pamja e drejtpërdrejtë në dritare të re}} (butoni pranë saj) ose {{ui:Dritare e re}} në panel e zhvendos në një dritare të vetën, për një ekran të dytë. Nëse shfletuesi yt bllokon dritaret pop-up, hapet si panel.
4. {{ui:Mbyll}} e mbyll.

## Kontrollet

| Kontrolli | Çfarë bën |
|---|---|
| {{ui:Ndiq pamjen}} | Aktiv: pamja e drejtpërdrejtë shikon ku shikon pamja 3D. Ecja e fik |
| {{ui:Ec}} | Ec nëpër model (më poshtë) |
| {{ui:Gravitet}} | Gjatë ecjes: qëndro mbi dyshemetë dhe ngjitu në shkallë. Fikur: fluturo |
| {{ui:Ora}} | Ora e ditës. Dielli lëviz ndërsa tërheq |
| {{ui:Muaji}} | Muaji, që të shohësh diellin në dimër dhe verë |
| {{ui:Cilësia}} | {{ui:Për këtë kompjuter}}, ose {{ui:E ulët}}, {{ui:Mesatar}} ose {{ui:E lartë}} |

Rreshti në fund thotë çfarë vizaton pamjen (WebGPU ose WebGL 2), cilësinë dhe dritën e reflektuar.

## Ecja nëpër model

1. Kthe pamjen 3D aty ku dëshiron të qëndrosh dhe zgjidh {{ui:Ec}}. Qëndron mbi dyshemenë poshtë pikës së syrit të pamjes, 1.6 m i lartë.
2. Kliko pamjen e drejtpërdrejtë, pastaj përdor {{key:W}} {{key:A}} {{key:S}} {{key:D}} ose tastet me shigjeta. Mbaj {{key:Shift}} për të vrapuar. Tërhiq për të parë përreth.
3. Hapat deri në 40 cm kapërcehen (shkallët); çdo gjë më e lartë është mur. Muret të ndalojnë dhe rrëshqet përgjatë tyre.
4. Me {{ui:Gravitet}} të fikur fluturon: {{key:E}} ngjitet lart, {{key:Q}} zbret.
5. {{key:Esc}} ndalon ecjen.

## Drita e reflektuar

Drita që reflektohet nga një mur i ndriçuar nga dielli mbi dyshemenë, dhe brendësia më e errët e një dhome, llogariten në sfond në çdo bërthamë të procesorit. Ndërkohë që punon, rreshti i fundit thotë {{ui:Drita e reflektuar: 40 %}}; kur është gati, pamja e merr. Pas një ndryshimi fillon sërish.

:::note
Kjo është një përafrim për një pamje të drejtpërdrejtë, jo një imazh i renderuar: detajet e vogla midis pikave marrin dritën e reflektuar të pikave pranë tyre.
:::

:::note
Shfletuesit ndryshojnë. Aty ku shfletuesi ka WebGPU, pamja e drejtpërdrejtë e përdor; gjetiu përdor WebGL 2 dhe duket njëlloj. Pa asnjërin, paneli e thotë këtë.
:::
