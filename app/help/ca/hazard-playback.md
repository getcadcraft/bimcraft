---
title: Reprodueix una inundació, un vent o un terratrèmol a l'edifici
summary: Aigua que puja per les sales, pressió del vent a cada planta o un terratrèmol que sacseja les plantes, reproduïts en una planta o un alçat amb un control lliscant de temps. Models simples amb les hipòtesis llistades; no és una comprovació normativa ni un disseny estructural.
keywords: risc, inundació, vent, terratrèmol, sísmic, deriva, balanceig, cortant de base, nivell de l'aigua, clima, escenari, nivell del mar, reproducció, planta, període
from: ff0d34d1
---

La secció {{ui:Reproducció de risc}} del tauler de l'esquerra reprodueix un risc sobre el model IFC obert. No es canvia res del model.

:::warning
Són **models simples per veure què fa un risc a aquesta distribució**, no un estudi d'inundacions, una comprovació de la normativa de vent ni un disseny estructural. Cada resultat llista les seves hipòtesis.
:::

## Inundació

Definiu el nivell més alt de l'aigua per sobre de la planta més baixa i els minuts que triga a pujar, a mantenir-se i a baixar. L'aigua entra a una sala per una obertura quan ha superat el seu ampit, i les sales unides a sales humides per obertures per sota de l'aigua estan al mateix nivell (quasi estàtic). La taula indica quan es mulla cada sala per primera vegada i a quina fondària; la planta ho reprodueix. Escriviu la quantitat màxima d'aigua que pot suportar una sala, i les sales que la superin apareixen com a avisos. **Futurs climàtics:** carregueu el vostre propi fitxer d'escenari (JSON o CSV amb un any, una pujada del nivell del mar i un factor d'inundació) i trieu un any. O activeu el complement Futurs climàtics i trieu un escenari i un any: la inundació es calcula dues vegades, present al costat de futur (vegeu "Futurs climàtics: inundació, calor i incendis de 2050 i 2080"). Els tipus Exposició a incendis i Calor: fitxer de clima futur també es troben a la mateixa llista.

## Vent

La pressió segueix ½ρV² amb la velocitat que augmenta amb l'alçada; la força sobre una planta és aquesta pressió multiplicada per un factor de ràfega, pels dos coeficients de pressió, per l'amplada i per l'alçada de la planta. Obteniu el cisallament, el moment de bolcada i el balanceig.

## Terratrèmol

Un edifici de cisallament: una massa per planta (superfície en planta × quilograms per metre quadrat, que definiu), la mateixa rigidesa a cada planta ajustada al primer període que doneu (una desena de segon per planta si el deixeu en blanc, i ho indica), amortiment, i un moviment del terreny generat (un impuls o soroll filtrat) a l'acceleració de pic que trieu. El resultat és la deriva de cada planta, les acceleracions de cada planta i el cisallament de base; l'alçat reprodueix el balanceig, dibuixat més gran del que és. Escriviu una relació de deriva admesa, i les plantes que la superin apareixen com a avisos. És elàstic: res no cedeix ni es fissura.

## Rigidesa de planta des del marc d'anàlisi

Per a un terratrèmol o per al balanceig del vent, trieu **El marc d'anàlisi** com a font de la rigidesa en lloc d'escriure un període. Cada planta s'empeny lateralment per torn, es resol el marc (bigues, pilars, contraventaments, lloses) i la rigidesa de les plantes, amb tot el conjunt treballant junt, condueix l'execució. El pes és el dels mateixos membres més la càrrega de planta per metre quadrat que definiu a la caixa de planta de cada nivell. Es mostra el primer període real. És elàstic: res no cedeix, i la torsió no es modela. Per al vent, les forces de planta continuen sent les hipotètiques d'adalt (un perfil de llei de potència, el vostre factor de ràfega i els coeficients de pressió fixos, no una normativa de vent); només el balanceig prové del marc, resolent la matriu de rigidesa completa del marc amb aquestes forces. El model necessita un IFC amb un marc que la pestanya Anàlisi pugui llegir.

## Unitats

Les fondàries de l'aigua, el balanceig i la deriva planta per planta, les distàncies i les àrees es mostren en les {{ui:Unitats}} que heu triat. Les forces (kN), els temps i les acceleracions conserven les seves pròpies unitats, i un valor que escriviu en una casella etiquetada en metres es manté en metres. El mateix s'aplica als resultats d'evacuació, llum natural, calefacció i refrigeració i mobiliari: les longituds, àrees i volums segueixen la vostra elecció; la pressió, el cabal, la temperatura, l'energia i la potència mai no es converteixen.
