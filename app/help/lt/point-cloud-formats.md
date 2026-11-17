---
title: Taškų debesies formatai: kas atsidaro ir ką eksportuoti
summary: Kurie lazerinio nuskaitymo failai atsidaro 3D vaizde, kurie yra skenerio gamintojo formatai ir ką eksportuoti iš skenerio programinės įrangos, kad nuskaitymas atsidarytų čia.
keywords: taškų debesis, lazerinis nuskaitymas, nuskaitymas, formatai, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksportas, neatsidaro, nenuskaitomas
from: 1e985f01
---

## Kas čia atsidaro

Atidarykite juos su {{ui:Atvira}} arba numesdami į puslapį (žr. temą apie taškų debesies rodymą šalia modelio):

| Formatas | Plėtinys | Ką nuskaito |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: taškai, spalvos, intensyvumas, LiDAR klasės, koordinačių sistema. LAZ iki 1 GB. |
| E57 | `.e57` | Visi failo nuskaitymai, kiekvienas pagal savo padėtį; spalvos arba intensyvumas, jei failas be spalvų. Failo paveikslėliai praleidžiami (apie tai pranešama). Kol kas iki 6 milijonų taškų ir 512 MB: didesnius nuskaitymus eksportuokite kaip LAS arba LAZ. |
| PLY | `.ply` | Tekstinis ir dvejetainis (abi baitų tvarkos): viršūnių x y z, spalvos ir intensyvumas. Paviršiai praleidžiami (apie tai pranešama). |
| PCD | `.pcd` | Tekstinis ir dvejetainis: x y z, sujungtos arba atskiros spalvos, intensyvumas. Suspaustų PCD failų kol kas neskaitoma: įrašykite juos kaip dvejetainius arba tekstinius. |
| PTX | `.ptx` | Vienas ar daugiau nuskaitymų, kiekvienas pagal savo transformaciją; taškai, kurių skeneris neišmatavo, praleidžiami. Metrai. |
| PTS, XYZ | `.pts`, `.xyz` | Tekstinis: x y z, su intensyvumu ir spalvomis, kai tie stulpeliai yra. |

## Failai, kuriuos skaito tik skenerio programinė įranga

Kai kurie nuskaitymo failai yra skenerio gamintojo formatas, be paskelbto aprašo ir be atviro skaitytuvo. BimCraft jų nenuskaito, o atidarius vieną, rodoma kortelė, kuri pasako, kas tai yra ir ką daryti. Eksportuokite nuskaitymą iš gamintojo programinės įrangos kaip E57 arba LAS (arba PTX, PTS), tada atidarykite eksportuotą failą.

| Failas | Plėtinys | Eksportuokite iš |
|---|---|---|
| ReCap projektas | `.rcp` | ReCap: atidarykite projektą ir eksportuokite jį. Projektas tik nurodo savo nuskaitymus, todėl vien `.rcp` kopijavimas taškų neduoda. |
| ReCap nuskaitymas | `.rcs` | ReCap: atidarykite projektą, kuriam nuskaitymas priklauso, ir eksportuokite jį. |
| FARO nuskaitymas | `.fls` | FARO SCENE. |
| Leica nuskaitymas | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble nuskaitymas | `.tzf` | Trimble RealWorks arba Trimble Business Center. |
| Z+F nuskaitymas | `.zfs` | Z+F LaserControl. |

:::tip
Kai eksportas prašo formato, LAS arba LAZ išsaugo viską, ką BimCraft rodo (spalvas, intensyvumą, klases ir koordinačių sistemą), mažiausiame faile.
:::

## Kodėl šie failai nenuskaitomi

Šie formatai nepaskelbti, o vienintelis būdas juos skaityti yra kiekvieno gamintojo programinės įrangos biblioteka, pagal jos pačios sąlygas. BimCraft skaito tik tuos formatus, kuriuos gali nuskaityti savo kodu jūsų kompiuteryje, todėl nuskaitymas niekada neturi būti siunčiamas kur nors, kad atsidarytų.
