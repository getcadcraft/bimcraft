---
title: Suriin ang drawing sa print view
summary: Lumipat sa print view ng DWG o DXF para makita ito na itim sa puti, kasama ang line weight nito at nang walang mga layer na hindi kailanman nagpi-print.
keywords: print, plot, preview, plot preview, line weights, lineweight, monochrome, itim at puti, defpoints, no plot
from: 1a59c23e
---

## Ano ang gagawin mo

Makita kung paano lalabas ang sheet sa papel bago ito i-print mula sa program na gumawa nito: itim sa puti, ang line weight ay nasa tunay nitong lapad, at nang walang mga layer na nakatakdang hindi mag-print.

## Mga hakbang

1. Magbukas ng DWG o DXF na drawing.
2. I-click ang sheet tab sa ibabaw ng drawing.
3. I-click ang {{ui:Print view}} sa dulo ng mga tab, o pindutin ang {{key:P}}.
4. Mag-zoom in sa isang detalye para ihambing ang mabibigat at magagaang linya.
5. I-click muli ang {{ui:Print view}}, o pindutin muli ang {{key:P}}, para bumalik sa normal na mga kulay.

## Ano ang dapat mong makita

- Puting papel sa kulay-abong desk, bawat linya at text ay itim, anuman ang theme.
- Line weight: sa sheet, iginuguhit ang bawat weight sa tunay nitong lapad sa papel, kaya ang linyang 0.5 mm ay dalawang beses na mas makapal kaysa sa linyang 0.25 mm sa anumang zoom. Hindi kailanman iginuguhit ang linya na mas manipis kaysa sa screen weight nito.
- Nakatago ang mga layer na nakatakdang hindi mag-print, at ang DEFPOINTS layer.
- Nananatiling nakadiin ang button na {{ui:Print view}}. Nananatiling naka-on ang print view kapag lumipat ka ng sheet o nagbukas ng ibang drawing, hanggang i-off mo ito.

Sa {{ui:Model}}, screen weight lang ang ginagamit ng print view (manipis na linya ay isang pixel, mas mabibigat ay bahagyang mas makapal), dahil walang laki ng papel ang model space.

## Mga karaniwang pagkakamali

- **Inaasahang mai-print ito.** Preview ang print view. Hindi pa built-in sa BimCraft ang pag-print at PDF export; mag-print mula sa program na gumawa ng drawing.
- **Inaasahang may plot style.** Hindi binabasa ang pen table at mga kulay ng plot style. Lahat ay simpleng itim.
- **Pagpindot ng P habang nagta-type.** Walang epekto ang {{key:F}} at {{key:P}} habang nagta-type ka sa field, o habang nakikita ang equipment schedule.
