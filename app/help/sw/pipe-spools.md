---
title: Spuli za mabomba ya chuma na karatasi za spuli
summary: Kata njia ya bomba la chuma la uchomeleaji wa ncha kwa ncha kuwa spuli kwa urefu mrefu zaidi na kwenye uchomeleaji wa eneo la kazi unaouweka, zipe namba, na pakua karatasi ya spuli kwa kila spuli (mwonekano wa 3D, urefu wa kukata, viunganio, uchomeleaji, orodha ya vifaa) kama PDF na CSV; mifereji hupata orodha ya kukata ya vipande vilivyonyooka.
keywords: spuli, spool, karatasi ya spuli, isometriki, utengenezaji, utayarishaji wa awali, uchomeleaji wa eneo la kazi, field weld, uchomeleaji wa kiwandani, shop weld, uchomeleaji wa ncha kwa ncha, butt weld, urefu wa kukata, orodha ya kukata, orodha ya vifaa, bom, bomba la chuma, schedule 40, namba ya mstari, orodha ya kukata mifereji, vipande vya mifereji
from: 539f51de
---

## Utakachofanya

Geuza njia ya bomba la chuma kuwa vipande ambavyo kiwanda kinachomelea na fundi anaviweka: spuli zisizozidi urefu unaochagua, zikigawanywa mahali unapoweka uchomeleaji wa eneo la kazi, kila moja ikiwa na karatasi yake.

Ni **bomba la chuma la uchomeleaji wa ncha kwa ncha** pekee linalokatwa kuwa spuli (ukubwa wa bomba ASME B36.10M, viwiko kwa radius ndefu ya ASME B16.9). Viungio vya shaba, PVC na PEX si uchomeleaji wa ncha kwa ncha, kwa hivyo njia zao hazina spuli.

## Kata njia kuwa spuli

1. Chagua njia ya bomba la chuma. Kwenye Sifa, tia tiki **Cut into spools**.
2. **Longest spool**: urefu mrefu zaidi wa mstari wa katikati ambao spuli moja inaweza kuwa nao (mita 6, takriban futi 20, kuanzia hapo).
3. **Line number**: sehemu ya namba ya kila spuli. Njia mpya iliyogawanywa inapata namba inayofuata isiyotumika ya mfumo wake.

Spuli zinapewa namba kwenye njia kuanzia nukta yake ya kwanza: `CHW-12-S01`, `CHW-12-S02` … (mfumo, namba ya mstari, spuli). Spuli inakua kipande kwa kipande; kipande kitakachoifanya kuwa ndefu sana huanzisha spuli inayofuata, na urefu ulionyooka mrefu kuliko spuli hukatwa pale spuli inapojaa.

## Weka uchomeleaji wa eneo la kazi

1. Fungua {{ui:Build}} na uchague {{ui:Field weld}}.
2. Bofya kwenye bomba lenye spuli pale uchomeleaji wa eneo la kazi unapokwenda. Ndani ya urefu ulionyooka bomba linakatwa hapo; ndani ya kiwiko au vali, uchomeleaji unahamia kwenye kiungio kilicho karibu zaidi.

Sifa zinaorodhesha uchomeleaji wa eneo la kazi wa njia, kila mmoja na {{ui:Remove}}. Kila mabadiliko ni hatua moja ya {{ui:Undo}}.

## Karatasi za spuli

Kwenye Sifa za njia yenye spuli:

- {{ui:Spool sheets (PDF)}}: ukurasa mmoja kwa kila spuli. Upande wa kushoto, spuli kwenye mwonekano wa isometriki wa 30°: urefu wake ulionyooka umehesabiwa, uchomeleaji wa kiwandani unaonyeshwa kwa nukta, uchomeleaji wa eneo la kazi umewekwa alama FW, na kaskazini wa mpango. Upande wa kulia, namba ya spuli, ukubwa, ratiba na urefu, kisha **urefu wa kukata** wake, **viunganio**, **uchomeleaji** (uchomeleaji wa kiwandani wa ncha kwa ncha kwenye kila kiungio ndani ya spuli, na uchomeleaji wa eneo la kazi pale unapokutana na spuli inayofuata) na **orodha ya vifaa** yake pamoja na uzito wa bomba (uzito wa ASME B36.10M wa ncha tupu).
- {{ui:Spool list (CSV)}}: taarifa hizo hizo, kizuizi kimoja kwa kila spuli.

:::note
Urefu wa kukata ni wa ncha hadi ncha kama ulivyochora: hakuna pengo la mzizi wala posho ya uchomeleaji inayotolewa. Viwiko ni radius ndefu ya B16.9; tii, vipunguzi na vali ni za jumla, zimepimwa kwa bomba, si kwa B16.9 wala mtengenezaji, na karatasi inasema hivyo. Uzito wa viunganio haupewi. Ni msaada wa kuchora na kuratibu, unaopimwa na mhandisi.
:::

## Kwenye faili la IFC

Kila sehemu ya njia yenye spuli hubeba **CadCraft_Spool** pamoja na SpoolId yake, njia, namba ya spuli kwenye njia, na mahali inapoanzia na kuishia kwenye njia. Njia huhifadhi kanuni zake (urefu mrefu zaidi, uchomeleaji wa eneo la kazi, namba ya mstari) kwenye seti yake, ili spuli zirudi jinsi zilivyo faili likifunguliwa tena.

## Mifereji: orodha ya kukata

Fungua {{ui:Build}} na ubofye {{ui:Duct cut list}}: CSV ya vipande vya mifereji vilivyonyooka kwa mfumo, umbo na ukubwa, kila urefu ulionyooka ukikatwa vipande vya **Piece length** kwenye upau wa Mfereji (milimita 1500, takriban futi 5, kuanzia hapo) na kilichobaki. Ni urefu tu: hakuna viungio, vipimo vya karatasi wala viunganishi.
