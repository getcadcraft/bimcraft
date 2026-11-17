---
title: Ang command line sa status strip
summary: Sa layout na may command line, mag-type kahit saan at lalabas ang mga letra sa linya sa ibaba. Inililista nito ang mga tugma, nagtatago ng history, at hindi kailanman tinatakpan ang drawing.
keywords: command line, type anywhere, typed command, status strip, status bar, history, arrow keys, enter, space, WALL, DOOR, Duncan layout, Rhino layout, shortcut, keys, command finder
from: d583b52d
---

## Ano ang gagawin mo

Patakbuhin ang mga tool sa pamamagitan ng pag-type ng pangalan nila, nang hindi muna nagki-click sa isang box.

## Mga hakbang

1. Pumili ng layout na may command line: buksan ang {{ui:Settings}}, piliin ang {{ui:Global}}, saka {{ui:Layout}}, at piliin ang **Duncan** (o **Rhino**). Nasa status strip sa ibaba ng window ang linya.
2. Nasaan man ang pointer at walang box na ginagamit, i-type ang `wall`. Lalabas ang mga letra sa command line, at may listahan sa itaas nito na nagpapakita ng mga tugmang command.
3. Pindutin ang {{key:Enter}}. Magsisimula ang Wall tool.
4. I-click ang command line (o pindutin ulit ang isang key). Kapag walang laman ang linya, ipinapakita ng listahan ang mga command na dati mong na-type. Nililibot ng {{key:Up}} at {{key:Down}} ang mga ito; pinapatakbo ng {{key:Enter}} ang ipinapakitang isa.

## Ano ang maaari mong i-type

- Isang command word ng menu style na ginagamit, kung saan may mga ganoon ang style (`WALL`, `WA`, `DOOR` sa Drafting style).
- Ang key ng isang command, bilang salita: `W` tapos {{key:Enter}} o {{key:Space}} ay Wall, ang `D` ay Door.
- Ang pangalan ng isang command, may o walang espasyo: `split wall`, `wallrectangle`.
- Ang simula ng isang salita o pangalan, kapag isang command lang ang nagsisimula sa ganoon.
- Ang anumang iba pa ay magbubukas ng command finder kasama ang na-type mo.

## Mabuting malaman

- Binubura ng {{key:Esc}} ang linya at ibinabalik ang mga key sa drawing.
- Sa mga layout na ito, hindi na nagsisimula ng tool ang isang letra nang mag-isa: naghihintay ito sa linya para sa {{key:Enter}} o {{key:Space}}. Gumagana pa rin tulad ng dati ang mga key na may {{key:Ctrl}}, ang mga function key, ang {{key:Delete}} at ang {{key:Esc}}. Sa ibang layout, walang nagbabago.
- Habang tumatakbo ang isang Draw tool, nananatili sa tool ang mga digit (isang na-type na haba).
- Ang pag-type sa isang box, dialog o sa Settings ay nananatili roon.
- Nakatago sa computer na ito ang history, 50 command para sa bawat app.
