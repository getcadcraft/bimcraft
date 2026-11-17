---
title: Qiyaas culeyska kulaylka iyo qaboojinta
summary: Luminta kulaylka qol kasta, kulaylkeeda sannadka oo dhan iyada oo loo marayo degree-days, iyo kor-jeedka qaboojintooda, oo laga bilaabo wixii xuddunaysa moodeelka iyo U-value kasta oo walax kasta, iyo dhammaan geliyeyaashaba oo la muujiyey. Qalab naqshadeed, ma aha xisaab u hogaansan qawaaniin.
keywords: tamar, kulaylka, qaboojinta, luminta kulaylka, culeyska kulaylka, u-value, gudbinta kulaylka, degree-days, hdd, hawo-marinta, isbedelka hawada, dhalaalaha gudaha, kulaylka qorraxda, lambda, awoodda gudbinta, dahaarka kulaylka, naqshadda hore, falanqayn, qolal, meelaha
from: ec312d20
---

Qaybta {{ui:Iftiinka maalinta}}, kadib {{ui:Xisaabi}}, fur {{ui:Culeyska kulaylka iyo qaboojinta}} oo guji {{ui:Soo saar culeyska}}. Qol kasta wuxuu helaa **luminta kulaylka** maalinta qabow ee naqshadda, **kulaylkiisa sannadka oo dhan** iyo **kor-jeedka qaboojintiisa** maalin kulul. Waxba lama soo dirayo; waxba moodeelka kama beddelo, mooyaane haddii aad U-value ku qortid.

:::warning
Tani waa **qalab naqshadeed, ma aha xisaab u hogaansan qawaaniin**: qiyaas xaaladda joogta ah oo dhammaan geliyeyaashu shaashadda ku muuqdaan. Ma aha habka **ISO 52016-1**, ma aha simulation, ma aha shahaado tamar; ma cabbirto boyleerada, pompyada kulaylka ama chillers-ka. Natiijooyinka hubi, qalabka cabbirtiisa injineer la jaan qaado.
:::

## Waxa xuddunaysa qol kasta

BimCraft wuxuu ka helaa moodeelka laftiisa, sidaas darteed IFC kasta oo barnaamij kasta leeyahay waa shaqeyneysaa (ma u baahna xuduudaha goobta ee barnaamijyada qaarkood dhoofiyaan). Wax kasta oo ka mid ah dusha qolka kasta wuxuu si toos ah u eegaa dibadda:

- derbiga ugu horreeya, daaqadda, albaabka, dhulka, saqafka, dahaarka, derbiga aaladda (curtain wall) ama biimka ay kulanto **xuduudayaa** qaybtaas;
- isla markaana wixii ka dambeeya walaxda, mid ka mid ah **qol kale** (loo tiriyaa inuu ku dhow yahay, heerkul isku mid ah: ma jiro luminta), **waxba** (dibadda), ama, hoos dhulka dabaqa ugu hooseeya, **dhulka**;
- albaab furan oo u furma qol kale waxaa loo tiriyaa inuu ku dhow yahay; qayb aan waxba kulmin (1.5 m dhinac ama hoos, 8 m kor) waa la liisanayaa qolka hoostiisa oo waa laga reebay.

Daaqadaha iyo albaabada cabbirkooda waxay ka qaadanaan IFC (ballac guud × dhererka) derbiga ay ku jiraan. Guji qol miiska ku jira si aad u aragto walax kasta oo xuddunaysa, oo leh aagga, U-value-kiisa iyo meesha uu ka yimid.

## U-values

Walax kasta oo BimCraft isticmaalo, waxay raacdaa tan siday u kala horreysaa:

1. **U-value-ka IFC-ga laftiisa** — `ThermalTransmittance` ee ku jira common property set-ka walaxda (tusaale `Pset_WallCommon`) ama nooceeda. Naqshadaha badankood way qori karaan.
2. **Dahaarrada agabkeeda** — 1 ÷ (iska caabbinta dusha gudaha + qaybo dahaar kasta oo dhumuc ÷ kulaylka gudbiya λ + iska caabbinta dusha dibadda), iyadoo la isticmaalayo iska caabbinta dusha ee caadiga ah (0.13 iyo 0.04 m²K/W derbiyada; 0.10 kor u ah, 0.17 hoos u ah gudaha). Kulaylka gudbiya ee bilowga caadiga ah (wool-ka macdanta 0.035, dhagaxa 0.77, konkreet 1.4…); hoos {{ui:Kulaylinta agabka}} ku qor kan soo saaraha, U-value kasta oo ka yimaada dahaaradaas wuu raacaa.
3. **Qiime caadi ah** (derbiyada 0.3, saqafyada 0.2, dhulka 0.25, daaqadaha 1.4, albaabada 1.6 W/m²K), oo sidaas loo calaamadiyey — ku qor kaaga.

U-value aad ku qorto faahfaahinta qol waxaa lagu qoraa common property set-ka walaxda sida `ThermalTransmittance` (hal tallaabo; {{key:Mod+Z}} ayaa ka noqdiya). Haddii walxo badan wadaagaan set-kaas (tusaale hal nooc oo derbi), dhammaantood way isbeddelaan, sadarka xaaladdana wuxuu sheegaa inta ay tahay.

## Kulaylka

- **Luminta kulaylka** = Σ U × A × (gudaha − dibadda) dhammaan wixii dibadda u furan + Σ U × A × (gudaha − dhulka) dhulka ku taal + 0.335 × isbeddelka hawada saacadiiba × mugga qolka × (gudaha − dibadda). 0.335 Wh halkii m³ halkii kelvin waa cufnaanta hawada (1.2 kg/m³) iyo kulaylka ay kaydiso (1005 J/kgK).
- **Kulaylka sannadka** = (luminta qolka halkii darajo oo dibadda loo gudbiyo, oo ku dhex marta dhismaha iyo hawada, + luminta dhulkiisa oo loo qiyaasay isla farqiga) × **degree-days** × 24 ÷ 1000, oo ah kWh. Ku qor degree-days meesha, ama {{ui:Akhri degree-days CSV…}} (hal safka maalin ama bil kasta; tirada ugu dambeysa ee safka kasta waa la isku daraa). Isticmaal degree-days ilaa heerkulka saldhigga ee isha aad isticmaasho: saldhigaas horay buu u qabtay kulaylka bilaashka ah ee dadka, iftiinka iyo qorraxda.

## Qaboojinta

**Kor-jeedka qaboojinta** = kulaylka dhismaha iyo hawada heerkulka naqshadda xagaaga + dadka (dhul halkii qof × kulayl halkii qof) + iftiinka iyo qalabka halkii m² dhul + **qorraxda**: kor-jeedka {{ui:Qorraxda daaqadaha taariikh gaar ah}} qolkaas. Marka hore qorraxda ka shaqee maalin kulul; ilaa markaas qorraxdu waxay tiraysaa 0 qaybtuna way sheegtaa. Kor-jeedka qayb kasta waa la isku daraa xitaa haddii ay saacado kala duwan ku dhacaan, taasoo wax yar ka sii badisa.

## Waxa ka reebma

- Habka ISO 52016-1 ee bil iyo saacad (heer ku qoran oo lacag la bixiyo), kulaylka ku kaydsan miisaanka dhismaha, xidhiidhka kulaylka (thermal bridges), sida nidaamyada kulaylka iyo qaboojinta u shaqeeyaan, iyo faylasha cimilada.
- Qolalka isku xiga waxaa loo qaatay heerkul isku mid ah; meelaha aan kulaylka lahayn ma la moodelayo.

Eeg sidoo kale [Qiyaas iftiinka qol kasta](topic:daylight-factor).
