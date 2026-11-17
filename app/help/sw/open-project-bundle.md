---
title: Fungua kifurushi cha mradi
summary: Kifurushi cha mradi ni zip moja lenye modeli, mionekano yake, mipangilio yake na vikundi vyake vya sifa. Ifungue, onyesha mwonekano pamoja na ghorofa na tabaka zake, fungua mpangilio, na uone sifa katika vikundi vya mradi wenyewe.
keywords: kifurushi, kifurushi cha mradi, ccbundle, zip, mionekano, ramani ya mionekano, mipangilio, kitabu cha mipangilio, mchanganyiko wa tabaka, vikundi vya sifa, viwango, pln, kiolezo
from: b5b86e8f
---

## Unachofanya

Fungua **kifurushi cha mradi** (`.ccbundle.zip`) na ufanye kazi na mradi kama ulivyopangwa: mionekano yake, mipangilio yake na vikundi vyake vya sifa, juu ya modeli.

Kifurushi kina:

- modeli kama IFC,
- mipangilio kama PDF na DWG,
- orodha ya kile IFC haijumuishi: mionekano (kila moja na ghorofa yake, mchanganyiko wa tabaka na kipimo), mipangilio na michoro iliyowekwa juu yake, ufafanuzi wa sifa katika vikundi vyake, uainishaji, na viwango kama tabaka, seti za kalamu, aina za mistari, kujaza, nyuso na viunganishi.

Vifurushi vinaandikwa na hati huria inayoendeshwa ndani ya Archicad, inayoiuliza Archicad yenyewe orodha hizi. BimCraft haisomi faili za `.pln` au `.tpl` moja kwa moja; angalia [Fungua faili za mradi za .pln na .pla](topic:pln-project-files).

## Tengeneza kifurushi

Hati hii ni onyesho la kukagua: bado haijajaribiwa kwenye kila toleo la Archicad. Ipate kutoka [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Unahitaji Archicad 24 au mpya zaidi na Python 3.8 au mpya zaidi; hakuna kitu kingine cha kusakinisha.

1. Hifadhi `archicad_bundle.py` kwenye folda, kwa mfano `C:\cc-bundle`.
2. Katika Archicad, fungua mradi na uunde seti ya uchapishaji yenye jina hasa **CadCraft bundle**: mwonekano wa 3D kama IFC, kila mpangilio kama PDF, na kila mpangilio tena kama DWG, vikichapishwa kwenye faili diskini kwenye folda moja bapa.
3. Mradi ukiwa wazi, endesha `python archicad_bundle.py --probe --out .` mara moja. Hii inasoma tu, na huandika `probe.json`.
4. Endesha `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (tumia kitafsiri cha IFC ulichochagua). Archicad huchapisha seti na hati huandika `<project>.ccbundle.zip`.

Ikiwa kuchapisha kupitia hati kunashindwa, chapisha seti kwa mkono na endesha `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README ya hazina ina chaguo zote. Kitu kisipofika, fungua suala hapo na ambatisha `probe.json`.

## Fungua kifurushi

1. Bofya {{ui:Chagua faili}}, au dondosha `.ccbundle.zip` kwenye BimCraft. Kwenye folda uliyofungua kwa {{ui:Fungua folda}}, vifurushi vinaorodheshwa chini ya **Vifurushi vya mradi**; bofya kimoja kwa jina lake.
2. Modeli inafunguka kama IFC yoyote inavyofunguka, na sehemu ya **Kifurushi cha mradi** inaonekana upande wa kushoto, chini ya taarifa za msingi za faili.

Hakuna kinachopakiwa: kifurushi kinasomwa kwenye kompyuta yako, faili moja kwa wakati, kwa hiyo modeli kubwa hainakiliwi mara mbili.

## Onyesha mwonekano

Chini ya **Mionekano**, mionekano imepangwa kwa folda ilizokuwa nazo kwenye mradi. Bofya jina la mwonekano:

- **Mpango wa sakafu** unaonyesha ghorofa yake tu, ukitazamwa kutoka juu.
- **Mchanganyiko wake wa tabaka** unaficha vipengele vilivyo kwenye tabaka ambazo mchanganyiko huo unaficha. Mstari wa hali unasema vipengele vingapi vimefichwa.
- **Kipimo chake** kinaonyeshwa kando ya jina na kwenye mstari wa hali.
- **Mwonekano wa 3D** unaonyesha ghorofa zote.

Ili kuonyesha kila kitu tena, tumia {{ui:Onyesha yote}} ndani ya {{ui:Onyesha}} na uweke alama kwenye kila ghorofa.

:::note
BimCraft inatafuta tabaka kupitia mgawo wa tabaka wa faili ya IFC. Ikiwa IFC ilisafirishwa bila hizo, mchanganyiko wa tabaka hauficha chochote, na mstari wa hali unasema vipengele 0 vimefichwa.
:::

## Fungua mpangilio

Chini ya **Mipangilio**, kila mpangilio unaonyesha nambari yake, jina lake, ukubwa wa karatasi na mionekano iliyowekwa juu yake.

- **PDF** huhifadhi PDF ya mpangilio kutoka kwenye kifurushi.
- **DWG** hufungua mchoro wa mpangilio kwenye mwonekano wa 2D. Bofya mwonekano wowote kurudi kwenye modeli.
- **Fungua katika …** hutuma faili ya mpangilio kwa programu inayoifanyia kazi, kwenye kichupo kipya: PDF kwa MarkupCraft, DWG kwa CadCraft. Inaonekana tu pale programu hiyo iko wazi pembeni ya BimCraft. Faili inasomwa kutoka kwenye kifurushi kadiri kichupo kinavyopakia, na hakuna kinachopakiwa.

Mpangilio usio na yoyote unasema **Hakuna faili kwenye kifurushi**.

## Tazama sifa katika vikundi vya mradi

Chagua kipengele. **Vikundi vya sifa** kinaonyesha sifa zake chini ya vikundi ambavyo mradi umevifafanua, vilivyolinganishwa kupitia seti ya sifa na jina ambalo ufafanuzi hutoa kwa IFC, au kwa jina lake. Zilizobaki zinabaki kwenye {{ui:Sifa}} kama kawaida. **Ufafanuzi wa sifa** unaorodhesha kila ufafanuzi pamoja na kundi lake, aina yake na jina lake la IFC.

## Viwango na vidokezo

- **Viwango** kinahesabu tabaka, mchanganyiko wa tabaka, seti za kalamu, aina za mistari, kujaza, nyuso, viunganishi na nyenzo zilizomo kwenye kifurushi.
- **Vidokezo** kinaorodhesha kile hati haikuweza kupata kutoka toleo hilo la Archicad, sehemu yoyote ambayo BimCraft haikuweza kusoma, na faili yoyote ambayo kifurushi kinaitaja lakini hakina.

## Utatuzi

- **"… ni zip lakini si kifurushi cha mradi."** Zip haina `manifest.json`. Ifungue zip na ufungue `.ifc` iliyo ndani.
- **"… ni kifurushi kipya cha mradi kuliko BimCraft inachosoma."** Sasisha BimCraft.
- **"… haina modeli ambayo manifest yake inaitaja."** Zip ilikatwa au ilihaririwa. Tengeneza kifurushi upya.
- **Mwonekano unaonyesha ghorofa zote.** Ghorofa yake haipo kwenye IFC ya modeli (mstari wa hali unasema hivyo). Hakikisha usafirishaji wa IFC ulijumuisha ghorofa hiyo.

Angalia pia [Kufanya kazi kati ya programu mbili za BIM](topic:two-bim-programs) na [Kile BimCraft inachosoma kutoka kila muundo](topic:file-formats).
