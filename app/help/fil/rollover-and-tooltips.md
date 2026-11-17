---
title: Mga tooltip sa dalawang yugto, at impormasyon ng rollover sa plano
summary: Ituro ang isang tool para makita agad ang pangalan at shortcut nito, at makalipas ang sandali ang ginagawa nito. Ihinto ang pointer sa pader, pinto, bintana, kuwarto o dimension para mabasa ito nang hindi ito pinipili.
keywords: tooltip, hint, shortcut, key, typed command, paglalarawan, hover, rollover, ituro, uri ng pader, level, laki, straight, skew, off square, curved, pinto, bintana, kuwarto, area, dimension, nang walang pagpili
from: 2e701f08
---

## Ang gagawin mo

Alamin ang shortcut ng isang tool sa pamamagitan ng pagturo nito, at basahin kung ano ang isang bagay sa plano nang hindi ito pinipili.

## Mga hakbang

1. Ituro ang isang tool, halimbawa ang {{ui:Wall}} sa Draw bar. Halos agad lalabas ang tooltip na may pangalan at shortcut nito (**Wall**, **W**).
2. Itigil ang pointer doon. Makalipas ang sandali, may isang linyang nasa ilalim nito na nagsasabi kung ano ang ginagawa ng tool.
3. Magbukas ng plano, nakabukas ang tool na {{ui:Select}}. Itigil ang pointer sa pader. Lumalabas sa tabi ng pointer ang tooltip na nagpapakita ng uri nito, ng level nito, ng haba at kapal nito, at kung tuwid ito o skew.
4. Lumipat sa pinto, bintana, kuwarto o dimension para mabasa ang isang iyon. Walang napipili.

## Ano ang ipinapakita ng tooltip ng isang tool

- **Stage 1**: ang pangalan ng command sa menu style na ginagamit mo, at ang mga key nito sa style na iyon. Kapag may command line sa screen, ipinapakita rin nito ang salitang i-type kapag walang key ang command.
- **Stage 2**: isang linya ng paglalarawan. Ito ang teksto ng sariling button ng command, kaya pareho ang sinasabi sa bawat lugar kung saan lumilitaw ang command (ang Draw bar, ang ribbon, ang menu style, ang mga row ng tool ng layout).
- Ang tool na naka-off ay nagpapakita ng dahilan sa halip.

## Ano ang ipinapakita ng rollover

- **Wall**: uri, level, haba at kapal, at **Straight**, **Skew** (kasama ang anggulo) o **Curved**. Ang Straight ay nangangahulugang patayo sa pangunahing direksyon ng mga pader na nakakabit dito: ang gusaling nakaikot sa plano ay Straight pa rin. Ang pader na mag-isa ay Straight.
- **Door or window**: uri, level, lapad at taas, ang taas ng sill ng bintana, at ang pader na kinalalagyan nito.
- **Room**: pangalan at numero, level, at ang area gaya ng pagkakalagay nito sa plano.
- **Dimension**: haba nito, kung buong pader ito o ang bahaging nasa pagitan ng mga opening, aling mukha ang sinusukatan, at ang pader na kinabibilangan nito.

## Magandang malaman

- Gumagana ang rollover kasama ang Select tool. Habang tumatakbo ang isang Draw tool, sariling marka ng tool ang ipinapakita.
- Nawawala ito kapag lumayo ka sa bagay, pumindot ng mouse button, umikot ang wheel, o pumindot ng key.
- Hindi kailanman lumilitaw ang tooltip sa touch.
