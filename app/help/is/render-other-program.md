---
title: Teikna myndina með öðru forriti
summary: Okkar eigin geislarakning teiknar Myndgerðarmyndina; annað forrit getur það aðeins í gegnum myndgerðarviðbót í CadCraft Studio. Hvað berst með og af hverju sum forrit eru aldrei boðin.
keywords: myndgerð, vél, utanaðkomandi forrit, vél úr viðbót, studio, bakgrunnur, röð, usd, gltf, teiknað af, blender, gpl
from: 652b413c
---

Myndin í {{ui:Render}} er teiknuð af **okkar eigin vélum**: Hröð og Geislarakning, í vafranum og í CadCraft Studio. Annað forrit getur teiknað hana aðeins þegar **myndgerðarviðbót** kemur með það: sjá [Bæta við myndgerðarvél með viðbót](topic:render-engine-addons). Til að fara með senuna í annað forrit og halda áfram þar, notaðu [Opna senuna í öðru forriti](topic:render-open-in) eða [Senda senuna í leikjavél](topic:render-unreal).

## Teikna mynd með vél úr viðbót

1. Kveiktu á viðbótinni í Stillingar › Viðbætur. Vélin hennar birtist í vélalistanum í {{ui:Render}}.
2. Veldu hana. Eigin stillingar hennar birtast undir vélalistanum.
3. Smelltu á {{ui:Render}}. Í Studio, í fyrsta skipti sem viðbót keyrir forrit, spyr Studio þig í sínum eigin glugga. Framvinda sést meðan teiknað er; {{ui:Stop}} lýkur því. Myndin birtist merkt með vélinni sem teiknaði hana.

Vél skrifuð í JavaScript keyrir líka í vafranum. Vél sem keyrir forrit á þessari tölvu keyrir aðeins í Studio; í vafranum birtist hún sem skrá til að vista.

## Hvað berst með

Vélin fær **pakka**: líkanið sem USD-skrá (og glTF-skrá þegar hún biður um hana), og stillingaskrá með nákvæmum efnisgildum, sólinni og himninum, hverjum lampa sem er kveiktur með afli sínu og ljósprófíl, myndavélinni og lýsingunni. Hvert forrit lýsir, tónar og tekur sýnishorn á sinn hátt, þannig að myndir eru líkar í myndavél, sól, lömpum og lýsingu, en ekki pixill fyrir pixill.

## Forrit sem CadCraft keyrir aldrei

CadCraft ræsir aldrei forrit undir GNU GPL leyfi og skráir aldrei eitt sem vél eða sem markmið í Opna í. Blender er eitt þeirra, þess vegna er það ekki í vélalistanum. USD- eða glTF-skrá sem vistuð er úr {{ui:Render}} opnast samt í því eins og í hvaða forriti sem les þær skrár.

:::note
Víðmynda- og þrívíðar myndavélar og himnamynd (litir himinsins eru notaðir í staðinn) berast ekki yfir í annað forrit. Ekkert sem gert er í öðru forriti skilar sér aftur í líkanið.
:::
