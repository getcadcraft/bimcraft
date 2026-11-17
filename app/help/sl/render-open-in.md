---
title: Odprtje prizora v drugem programu
summary: Shranite prizor kot datoteko USD ali glTF za katerikoli program, ki ju bere, ali ga iz Studia odprite v programu na tem računalniku.
keywords: odpri v, usd, gltf, glb, izvoz, upodabljalni program, archviz, studio, usdview, pošlji, predaja, paket, mapa unreal
from: 0a6559ee
---

Izberite vnos **Odpri v** na seznamu pogonov v {{ui:Upodobitev}}, da prizor odnesete v drug program. Nič se ne vrne v model.

## Datoteka za vsak program

- **Datoteka USD** shrani prizor kot `.usdc` (ali `.usdz`, če model vsebuje slike): [ista datoteka kot pri Shrani kot USD](topic:usd), z materiali, svetilkami in kamerami. Ohrani instanciranje in natančne vrednosti materialov. Večina upodabljalnikov, igralnih pogonov in pregledovalnikov bere USD.
- **Datoteka glTF (.glb)** shrani lažjo datoteko glTF 2.0 z materiali, teksturami in svetilkami; glejte [Pošiljanje modela upodabljalnemu programu](topic:model-for-rendering), kaj vsebuje in kaj izpušča.
- **Mapa projekta Unreal (.zip)** shrani mapo, ki jo zapiše [Pošiljanje prizora igralnemu pogonu](topic:render-unreal), za projekt na poljubnem računalniku.

Vse tri delujejo v brskalniku in v Studiu.

## V Studiu: odprtje v programu

Studio našteje programe, ki jih najde na tem računalniku in lahko odprejo prizor: usdview, če je na vaši iskalni poti, in privzeti program računalnika za vrsto datoteke. Izberite enega, izberite USD ali glTF, kjer program bere oba, in kliknite {{ui:Upodobitev}}. Studio zapiše paket v novo mapo v Dokumentih (`CadCraft hand-off`; nič se ne prepiše, vsako pošiljanje dobi svojo mapo), nato zažene program nanjo in pove, kje so datoteke.

| Program | Najbolje bere |
|---|---|
| usdview | USD |
| Privzeti program računalnika | Kar ima računalnik za vrsto datoteke |

Studio zažene samo programe s tega fiksnega seznama; ne zažene ničesar, kar stran zahteva po imenu, in nikoli ne zažene programa pod licenco GNU GPL (glejte [Izris slike z drugim programom](topic:render-other-program#programs-cadcraft-never-runs)). Vsak program, ki bere USD ali glTF, odpre datoteko iz razdelka **Datoteka za vsak program** zgoraj.

:::note
Twinmotion, Enscape in drugi vizualizacijski programi niso na seznamu: CadCraft ni preveril, kako delujejo z njimi, zato o njih ne trdi ničesar. Datoteka glTF ali USD od tukaj je pot naprej; glejte opombe o [vtičnih upodabljalnikih](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
