---
title: Izris slike z drugim programom
summary: Naš lastni sledilnik žarkov nariše sliko Upodobitve; drug program jo lahko nariše le prek dodatka za upodobitveni pogon v CadCraft Studiu. Kaj se prenese in zakaj nekateri programi nikoli niso ponujeni.
keywords: upodobitev, pogon, zunanji program, pogon dodatka, studio, ozadje, čakalna vrsta, usd, gltf, nariše, blender, gpl
from: 652b413c
---

Sliko v {{ui:Upodobitev}} rišejo **naši lastni pogoni**: Hitro in Sledilnik žarkov, v brskalniku in v CadCraft Studiu. Drug program jo lahko nariše le, če jo prinese **dodatek za upodobitveni pogon**: glejte [Dodajanje upodobitvenega pogona z dodatkom](topic:render-engine-addons). Za prenos prizora v drug program in za nadaljnje delo tam uporabite [Odprtje prizora v drugem programu](topic:render-open-in) ali [Pošiljanje prizora igralnemu pogonu](topic:render-unreal).

## Izris slike s pogonom dodatka

1. Vklopite dodatek v Nastavitve › Dodatki. Njegov pogon se prikaže na seznamu pogonov v {{ui:Upodobitev}}.
2. Izberite ga. Njegove lastne nastavitve se prikažejo pod seznamom pogonov.
3. Kliknite {{ui:Upodobitev}}. V Studiu vas prvič, ko dodatek zažene program, Studio vpraša v svojem pogovornem oknu. Napredek se prikazuje med risanjem; {{ui:Ustavi}} ga konča. Slika se prikaže, označena s pogonom, ki jo je narisal.

Pogon, napisan v JavaScriptu, deluje tudi v brskalniku. Pogon, ki zažene program na tem računalniku, deluje samo v Studiu; v brskalniku se prikaže kot datoteka za shranjevanje.

## Kaj se prenese

Pogon dobi **paket**: model kot datoteko USD (in datoteko glTF, če jo zahteva), ter datoteko z nastavitvami z natančnimi vrednostmi materialov, soncem in nebom, vsako svetilko, ki je vklopljena, z njeno močjo in profilom svetlobe, kamero ter izpostavljenostjo. Vsak program osvetljuje, uravnava tone in vzorči po svoje, zato so slike podobne po kameri, soncu, svetilkah in izpostavljenosti, ne pa piksel za pikslom.

## Programi, ki jih CadCraft nikoli ne zažene

CadCraft nikoli ne zažene programa pod licenco GNU GPL in ga nikoli ne navede kot pogon ali cilj Odpri v. Blender je eden od njih, zato ni na seznamu pogonov. Datoteka USD ali glTF, shranjena iz {{ui:Upodobitev}}, se v njem še vedno odpre kot v vsakem programu, ki bere te datoteke.

:::note
Panoramske in stereo kamere ter slika neba (uporabljajo se barve neba) se ne prenesejo v drug program. Nič, kar naredite v drugem programu, se ne vrne v model.
:::
