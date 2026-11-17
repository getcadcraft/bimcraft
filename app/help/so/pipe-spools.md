---
title: Spool-yada tuubada birta iyo xaashiyada spool-ka
summary: Jar xariiq tuubo birta oo butt-weld ah spool-yo aan ka dheerayn dherer aad dooratay, iyo alxanka goobta ee aad dhigto; lambarka sii, oo soo deji xaashi spool kasta (muuqaal 3D, dherer jarista, fittings, alxanka, liiska alaabta) PDF iyo CSV; tuubada hawada waxay helaan liis jarista qaybaha toosan.
keywords: spool, spool-yo, xaashiga spool, isometric, soo saarid, prefabrication, field weld, shop weld, butt weld, dherer jarista, liiska jarista, liiska alaabta, bom, tuubo birta, schedule 40, lambarka khadka, liiska jarista tuubada hawada, qaybaha tuubada hawada
from: 539f51de
---

## Waxa aad samayn doontid

Xariiq tuubo birta u rari qaybaha dukaanka ay alxanka ku sameeyaan iyo kuwa fitter-ku ku rakibo: spool-yo aan ka dheerayn dherer aad dooratid, oo lagu kala jaro meelaha alxanka goobta ee aad dhigto, mid kasta oo leh xaashi u gaar ah.

Kaliya **tuubada birta ee butt-weld** ayaa loo jaraa spool-yo (cabbirrada tuubada ASME B36.10M, elbow-yada long radius ee ASME B16.9). Naxaasta, PVC iyo PEX xidhkoodu ma aha butt weld, sidaas darteed xariiqyadoodu ma lahan spool-yo.

## Xariiq u jar spool-yo

1. Dooro xariiq tuubo birta. Properties, calaamadi **Cut into spools**.
2. **Longest spool**: dherer dhexe ee khadka ugu badan oo hal spool uu lahaan karo (6 m, qiyaastii 20 ft, marka hore).
3. **Line number**: qayb ka mid ah lambarka spool kasta. Xariiq spool ah oo cusub wuxuu helaa lambarka xor ah ee ugu xiga nidaamkiisa.

Spool-yada waxa loo lambareeyaa xariiqa iyo barta ugu horreysa: `CHW-12-S01`, `CHW-12-S02` … (nidaamka, lambarka khadka, spool-ka). Spool wuxuu kor u kacaa qayb-qayb; qaybta u horseedda inuu dheeraado ayaa bilaabaysa mid cusub, xariiq toosan oo ka dheer spool ayaa lagu jaraa meesha spool-ku buuxo.

## Dhig alxanka goobta

1. Fur {{ui:Dhismaha}} oo dooro {{ui:Laxaad goobta}}.
2. Guji tuubo spool ah meesha alxanka goobta uu tagayo. Gudaha xariiq toosan tuubada halkaas ayaa la jarayaa; gudaha fitting ama faalfo, alxanku wuxuu u guuraa isku xidhka ugu dhow.

Properties wuxuu liistaa alxanka goobta xariiqda, mid kasta oo leh {{ui:Ka saar}}. Isbedel kasta waa hal tallaabo oo {{ui:Ka noqo}}.

## Xaashiyada spool-ka

Properties of a spooled run:

- {{ui:Xaashiyada spool-ka (PDF)}}: hal bog spool kasta. Bidix, spool-ka muuqaal isometric 30°: qaybaha toosan ee lambaraysan, alxanka dukaanka oo ah dhibco, alxanka goobta oo lagu calaamadeeyay FW, iyo waqooyiga qorshaha. Midig, lambarka spool-ka, cabbirka, schedule-ka iyo dhererka, kadibna **dherer jarista**, **fittings**, **alxanka** (alxan dukaan oo ku yaal isku xidh kasta gudaha spool-ka, alxan goobta meesha ay ku dhacdo spool-ka xiga) iyo **liiska alaabta** oo leh miisaanka tuubada (ASME B36.10M plain-end weight).
- {{ui:Liiska spool-ka (CSV)}}: isla waxa, block kasta oo spool ah.

:::note
Dherer jarista waa end to end sida loo rasmeeyay: wax root gap ama alxan oo laga jaro ma jiro. Elbow-yada waxay ku yaalaan B16.9 long radius; tee, reducer iyo faalfaha waa guud, waxaana lagu cabbiraa tuubada, ma aha B16.9 ama soo saare, xaashiguna way sheegaa. Miisaanka fittings-ka lama siin. Qalab qabyo iyo isku-duubis, oo ay cabbirtay injineer.
:::

## Faylka IFC

Qayb kasta oo xariiq spool ah waxay leedahay **CadCraft_Spool** oo leh SpoolId-keeda, xariiqda, lambarka spool-ka xariiqda gudaheeda, iyo meesha uu ka bilaabmo iyo ku dhammaado xariiqda. Xariiqdu waxay hayaa xeerarkeeda (spool-ka ugu dheer, alxanka goobta, lambarka khadka) setkeeda, si spool-yadu isku mid ahaadaan marka faylka mar kale la furo.

## Tuubada hawada: liis jarista

Fur {{ui:Dhismaha}} oo guji {{ui:Liiska jarista tuubada hawada}}: CSV ah qaybaha toosan ee tuubada hawada sida nidaamka, qaabka iyo cabbirka, xariiq toosan kasta oo loo jaraa qaybo ah **Piece length** ee qalabka Tuubada hawada (1500 mm, qiyaastii 5 ft, marka hore) iyo wixii hadhay. Dherer keliya: ma jiraan seams, gauges ama connectors.
