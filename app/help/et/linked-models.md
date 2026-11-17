---
title: Seo teised mudelid koordineerimiseks
summary: Näita teist IFC-mudelit oma mudeli kõrval viitena (kunagi ühendamata), paiguta see jagatud koordinaatide, kaardikoordinaatide või kahe punkti järgi, püüa sellele joonistamise ajal ja laadi see uuesti, kui selle fail muutub.
keywords: seo, seotud mudel, viide, xref, koordineerimine, föderatsioon, konstruktsioon, MEP, konsultant, jagatud koordinaadid, kaardikoordinaadid, laadi uuesti, eemalda laadimisest, dokumendiviide, IfcDocumentReference
from: 3e0f1eab
---

## Mida sa teed

Joonista konsultandi mudeli järgi (konstruktsioon, tehnosüsteemid, olemasolev hoone), kopeerimata midagi oma faili.

**Seotud mudel** on näidatud 3D-vaates ja lõigatud sinu plaanidel, kuid seda ei muudeta kunagi ega salvestata sinu mudelisse. Sinu mudel hoiab alles ainult seose: faili nime ja seda, kuhu see läheb.

## Seo mudel

1. Vasakpaneeli jaotises {{ui:Seotud mudelid}} klõpsa {{ui:Seo mudel…}} ja vali IFC-fail. See kuvatakse kohe ja selle rida ütleb **Näidatud**.
2. Vali jaotises {{ui:Paigutus}}, kuhu see läheb:
   - **Jagatud koordinaadid** (alguseks): selle koordinaadid on sinu omad, nagu siis, kui mõlemad mudelid on seatud samast alguspunktist.
   - **Kaardikoordinaadid**: mõlema faili kaardikoordinaadid joondavad need (mõlemal peab olema kaarditeisendus; BimCraft ütleb, kui sellel seda pole).
   - **Kahe punkti järgi…**: klõpsa punktile seotud mudelil, seejärel kohale sinu mudelis; siis teine paar. Seost nihutatakse ja pööratakse (vertikaaltelje ümber), et see sobiks.
3. Iga seose ja paigutuse muutus on üks samm: {{key:Mod+Z}} võtab selle tagasi.

## Töö sellega

- Plaanidel on seotud mudel näidatud lõikekõrgusel õhukeste joontena ning {{ui:Sein}} tööriist ja teised joonistustööriistad püüavad selle nurkade ja servade külge.
- Vali selle elemente 3D-vaates, et lugeda nende omadusi; seotud mudelit ei redigeerita, seega on selle raadionupp jaotises {{ui:Mudelid}} väljas.
- **Fail muutus?** Kui brauser suudab faili jälgida (fail, mis on avatud faili valijast, või Studios), laeb BimCraft seose ise uuesti mõne sekundi pärast, kui fail uuesti salvestatakse, ja teatab sellest. Muidu klõpsa {{ui:Laadi uuesti}}.
- {{ui:Eemalda laadimisest}} peidab seose ja vabastab mälu; seos jääb sinu mudelisse. {{ui:Laadi…}} näitab seda uuesti (valid faili ise, sest brauser ei saa faili avada nime järgi).
- × eemaldab seose sinu mudelist.

## Mida peaksid nägema

- Sinu IFC-failis: iga seose kohta IfcDocumentReference (faili nimi), seotud projektiga, ja selle koht projekti omadusrühmas CadCraft_Links. Kui avad oma mudeli uuesti, loetleb see seosed kui **Ei ole laaditud**, kuni need laadid.

:::note
Kokkupõrgete kontroll, Võrdlus ja Otsing saavad kasutada laaditud seost nagu iga muud avatud mudelit: vaata [Mitme IFC-mudeli vaatamine koos](topic:several-models).
:::
