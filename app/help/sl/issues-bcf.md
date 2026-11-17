---
title: Zadeve in datoteke BCF
summary: Shranite pogled na model kot zadevo — kamero, izbrane elemente, skrite elemente, prerez — jo delite kot datoteko BCF z drugimi orodji za koordinacijo in odprite njihove datoteke BCF, da vidite njihove zadeve.
keywords: bcf, bcfzip, zadeva, zadeve, tema, pogled, poročilo o kolizijah, koordinacija, komentar, posnetek, odpri bcf, shrani bcf, izvoz, uvoz
from: 2a6cf201
---

## Kaj boste naredili

Pokažite na težavo v modelu, shranite pogled, ki jo prikazuje, in ga nato posredujte v datoteki BCF, formatu, ki ga drugi orodja za koordinacijo berejo in pišejo.

## Koraki

1. Odprite model IFC in nastavite pogled: zavrtite ga, izberite vpletene elemente, skrijte, kar stoji na poti, ga prerežite z ravnino ali kvadrom prereza.
2. Kliknite zavihek {{ui:Zadeve}} na desni, nato {{ui:Nova zadeva iz tega pogleda}}.
3. Vnesite naslov in po želji komentar; izberite stanje; vpišite svoje ime ali e-pošto (če ste prijavljeni, se ime vašega računa vpiše samodejno; glejte [Nastavitve BimCraft](topic:settings#your-name-on-issues)). Kliknite {{ui:Ustvari zadevo}}.
4. Kliknite {{ui:Pokaži}} pri zadevi, da se njen pogled znova postavi.
5. Kliknite {{ui:Shrani BCF}}, da prenesete vse zadeve kot eno datoteko `.bcf`.
6. Če želite videti zadeve, ki jih je naredil nekdo drug, kliknite {{ui:Odpri BCF …}} in izberite njegovo datoteko `.bcf` ali `.bcfzip`.

## Kaj boste videli

- Vsako zadevo na seznamu s sliko njenega pogleda, naslovom, stanjem, avtorjem in datumom.
- {{ui:Pokaži}} vrne kamero, izbrane elemente, to, kar je bilo skrito (ali edine prikazane stvari), in prerez. Elementi se najdejo po njihovem GlobalId v vseh odprtih modelih; vrstica stanja pove, če nekaterih ni.
- Ravnina ali kvader prereza iz drugega orodja se prikaže, če se poravna z osmi modela; nagnjene ali dodatne ravnine se vrnejo kot prostornina prereza (do 6 ravnin). Zadeva ohrani prvi kvader prostornine iz več kvadrov.

## Dobro je vedeti

- Datoteka je BCF 2.1 in ohrani pogled v lastnih koordinatah modela, zato druga orodja postavijo kamero na isto mesto.
- Zadeve ostanejo na tem zavihku, dokler jih ne shranite. Odpiranje drugega modela ohrani seznam; pred prikazom zadev odprite model, na katerega se nanašajo.
- Vzporedna (ortogonalna) kamera iz drugega orodja se prikaže s perspektivno kamero tega pregledovalnika, odmaknjeno, tako da isti del modela zapolni pogled.

## Pogoste napake

- **Pokaži je premaknil kamero na nenavadno mesto.** Zadeva je bila narejena na drugem modelu ali z drugimi koordinatami. Najprej odprite pravi model.
- **Datoteke ni mogoče odpreti.** Ni datoteka BCF zip ali je poškodovana; vrstica stanja pove razlog.

## Naprej

- [Skrijte, izolirajte in prikažite prosojno elemente](topic:hide-and-isolate)
- [Prerežite model IFC z ravnino prereza](topic:section-plane)
