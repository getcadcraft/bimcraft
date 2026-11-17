---
title: Hanapin ang mga naka-link na drawing at larawan
summary: Ipakita ang mga naka-link na drawing (xrefs) at mga larawan ng title block ng isang drawing, sa pamamagitan ng pagbubukas ng folder nito o pagdaragdag ng mga file nang manu-mano.
keywords: xref, external reference, naka-link na drawing, attach, overlay, image, larawan, logo, title block, nawawalang xref, etransmit, reference manager
from: 5593d4b1
---

## Ano ang gagawin mo

Gawing kumpleto ang drawing: ipakita ang mga drawing na kinokonektahan nito (external references, o xrefs) at ang mga larawang ginagamit nito, gaya ng logo sa title block.

## Ang madaling paraan: buksan ang folder

1. I-click ang {{ui:Open a folder}} at piliin ang folder na naglalaman ng drawing at ng mga link nito, halimbawa ang buong `Cad` folder ng isang proyekto.
2. Sa folder report, mag-scroll pababa sa **Mga CAD drawing**.
3. I-click ang drawing.
4. Tingnan ang {{ui:Properties}} panel sa kanan, sa ilalim ng **Mga naka-link na drawing** at **Mga larawan**.

Hinahanap ng BimCraft ang bawat naka-link na drawing ayon sa pangalan nito ("*name*.dwg"), sa parehong folder ng drawing muna, pagkatapos saanman sa folder na binuksan mo. Ganoon din hinahanap ang mga larawan, at ayon din sa katulad na pangalan: madalas nagdaragdag ang eTransmit o Revit export ng pangalan ng proyekto sa unahan, kaya ang `logo.png` ay nahahanap bilang `Tower-logo-5425051.png`.

## Ang ibang paraan: magdagdag ng file nang manu-mano

1. Buksan ang drawing nang mag-isa.
2. Sa kanan, sa ilalim ng **Mga naka-link na drawing**, i-click ang {{ui:Add linked drawings…}}. Sa ilalim ng **Mga larawan**, ang button ay {{ui:Add pictures…}}; pareho silang nagbubukas ng parehong chooser.
3. Piliin ang naka-link na `.dwg` files at ang mga picture file. Maaari kang pumili ng marami nang sabay.
4. Maghintay habang muling binubuksan ng BimCraft ang drawing kasama ang mga ito.

## Ano ang dapat mong makita

Bawat naka-link na drawing at larawan ay nakalista na may label:

| Label | Ibig sabihin |
|---|---|
| **Naipakita** | Nahanap at naiguhit. Ang path sa ilalim nito ay nagsasabi kung saan ito galing, o "idinagdag mo". |
| **Naipakita, katulad na pangalan** | Larawang nahanap sa pamamagitan ng katulad na pangalan. Suriin kung tama ito. |
| **Hindi nahanap** | Wala sa folder o sa mga file na idinagdag mo. Ang nawawalang larawan ay lumalabas bilang walang laman nitong frame. |
| **Hindi maipakita sa browser ang TIFF** | TIFF file ang larawan, na hindi naiguguhit ng browser. I-save ito bilang PNG na may parehong pangalan at idagdag ito. |
| **Hindi mabasa** | Nahanap ang file, pero hindi ito mabuksan bilang larawan. |

Ipinapakita ng {{ui:Drawing}} panel sa kaliwa ang "*n* sa *m* ang na-load" para sa mga naka-link na drawing. Lumalabas ang mga layer ng mga naka-link na drawing sa {{ui:Layers}} bilang "*link name*|*layer*".

## Mga karaniwang pagkakamali

- **Pagbubukas lang ng drawing.** "Ipinapakita lang ng drawing na ito ang sarili nitong nilalaman hangga't hindi idinaragdag ang mga naka-link nitong drawing. Awtomatikong nahahanap ang mga ito kapag binuksan ang buong project folder."
- **Pagbubukas ng masyadong maliit na folder.** Kung nasa kapatid na folder ang mga link, buksan ang parent folder.
- **Mga pinalitan ng pangalan na link.** Itinutugma ng BimCraft ang mga naka-link na drawing ayon sa pangalan. Hindi mahahanap ang link na pinalitan ng pangalan sa disk; idagdag ito nang manu-mano.
- **Mga link ng link.** Nilo-load ng BimCraft ang mga drawing na kinokonektahan ng bukas na drawing. Hindi hinahanap ang mga drawing na naka-link sa loob ng mga iyon, kaya karaniwang hindi ito lumalabas sa build na ito.
