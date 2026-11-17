---
title: Unganisha mabadiliko ya watu wawili kwenye modeli moja
summary: Ruhusu git, Fossil au Mercurial kuunganisha nakala mbili zilizohaririwa za modeli ile ile ya IFC kitu kwa kitu, ili watu wawili waweze kuchora jengo moja na kuunganisha kazi yao.
keywords: unganisha, git, fossil, mercurial, udhibiti wa matoleo, mzozo, njia tatu, cadcraft merge, gitattributes, ifc, globalid, timu, nakala mbili, matawi
from: 50733df8
---

Watu wawili wanachukua nakala ya jengo lilelile; mmoja anachora bawa la mashariki na mwingine la magharibi, na baadaye nakala hizo zinapaswa kuwa moja. Kama waligusa vitu tofauti, programu inaweza kulifanya badala ya mtu.

## Kinachofanya ifanye kazi

Kila ukuta, mlango, ngazi, chumba na seti ya sifa katika faili ya IFC ina GlobalId isiyobadilika. Kuunganisha huangalia vitu kwa kitambulisho hicho, si kwa namba ambayo faili inawapa (`#123`), kwa sababu namba hubadilika programu inapohifadhi. Sehemu zinazoning'inia kwenye kitu bila kitambulisho chao wenyewe (uwekaji, maumbo, vitengo) hulinganishwa kwa yaliyomo.

Nakala zote mbili lazima ziwe toleo moja la IFC (2x3, 4 au 4.3). Kuunganisha huhifadhi faili yako kama ilivyo, mpangilio wake na namba zake, na huongeza kilicho kipya, kwa hiyo git diff ya muunganisho inaonyesha tu kile muunganisho ulichobadilisha.

## Iweke tayari

Git inahitaji mistari miwili mara moja kwa kila hazina:

```
# .gitattributes
*.ifc merge=cadcraft

# mara moja, kwenye kila kompyuta
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bila git, endesha `cadcraft merge <base> <ours> <theirs>`. Fossil na Mercurial hutumia faili hizo tatu katika mpangilio wao wa zana ya kuunganisha. Hakuna kinachopakiwa; yote yanaendeshwa kwenye kompyuta yako.

## Kanuni

- Sifa iliyobadilishwa upande mmoja tu inachukuliwa. Mabadiliko yale yale kwa pande zote mbili yanachukuliwa mara moja.
- Sifa ile ile iliyobadilishwa kwa njia mbili (ngazi ile ile ilipewa jina jipya kwa njia mbili) ni **mzozo**: upande wako unabaki, na ripoti inaorodhesha pande zote mbili. Fungua matokeo na urekebishe kwa mkono.
- Orodha ya vitu (kuta za ngazi, sifa za seti) huunganishwa kama seti: kilichoongezwa na upande wowote kinabaki, na kilichoondolewa na upande wowote kinaondolewa. Watu wawili kila mmoja akiongeza kuta kwenye ngazi ile ile hawana mzozo.
- Kitu kilichoongezwa upande wowote kinabaki, pamoja na umbo lake na sifa zake. Kimeondolewa upande mmoja na hakijaguswa upande mwingine: kinaondolewa. Kimeondolewa upande mmoja na kimebadilishwa upande mwingine: kinaondolewa, na kinaripotiwa.
- Muhuri wa muda na mwandishi wa faili, na owner history ya kila kitu, vinabaki vyako.

Jiometri inaunganishwa kwa ujumla: umbo la ukuta linatoka upande mmoja, kamwe si kuchanganywa nukta kwa nukta. Faili za IFC zilizobanwa (zipped) na IFCX hazijaunganishwa. Baada ya kuunganisha, fungua matokeo katika BimCraft na uangalie kidirisha cha {{ui:Matatizo}} kabla ya kuhifadhi.
