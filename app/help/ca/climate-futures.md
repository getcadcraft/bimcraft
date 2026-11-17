---
title: "Futurs climàtics: inundació, calor i incendi forestal el 2050 i el 2080"
summary: Torneu a executar la inundació, l'any d'energia i un cribratge d'incendi forestal amb un clima futur (escenaris SSP2-4.5 i SSP5-8.5, anys 2050 i 2080) des d'un paquet de dades climàtiques, i presenteu el present al costat del futur.
keywords: clima, canvi climàtic, futur, 2050, 2080, ssp, cmip6, escenari, nivell del mar, inundació, calor, fitxer meteorològic, epw, morph, energyplus, incendi forestal, incendi de vegetació, temps d'incendi
from: 224ecd08
---

Les xifres climàtiques vénen d'un **paquet de dades**, no de l'aplicació. Activeu el complement {{ui:Futurs climàtics}} a Configuració › Complements, o carregueu un fitxer de paquet propi al bloc {{ui:Clima futur}}.

:::warning
El paquet que ve amb el complement és una **mostra**: tres llocs (Denver, Miami, Johannesburg), un model climàtic, cinc anys a cada període de 20 anys. És per provar les eines, **no per al disseny**. El panell ho diu en negreta mentre s'usa. Un paquet complet (molts models, tots els anys, més llocs) es construeix amb `tools/climate/build-pack.mjs` a partir de les dades NEX-GDDP-CMIP6 de la NASA.
:::

## Triar un futur

A {{ui:Reproducció de risc}} del panell de l'esquerra, trieu un **Escenari** (SSP2-4.5, el camí del mig, o SSP5-8.5, emissions altes) i un **Any** (2050 vol dir 2041-2060, 2080 vol dir 2071-2090; tots dos comparats amb 1995-2014). El **Lloc** és el lloc del paquet més proper a la ubicació del model (latitud i longitud de l'IfcSite), o el que trieu. Lluny de tots els llocs, s'usen els canvis de mitjana global del paquet i el panell ho indica.

## Inundació, present al costat del futur

Amb un escenari triat, definiu el **Tipus d'inundació**: costaner (afegeix la pujada del nivell del mar), de riu o de pluja intensa (més profunda pel canvi en la pluja del dia més plujós), o tots dos. Premeu {{ui:Executa}}: la inundació es reprodueix com abans, i una taula mostra la inundació actual i la futura una al costat de l'altra (nivell de l'aigua, sales que es mullen, l'aigua més profunda). Sota hi ha les suposicions:

- un nivell costaner puja tota la pujada del nivell del mar; la marea de tempesta i les onades no canvien;
- el cabal del riu puja un a un amb la pluja del dia més plujós, i la profunditat segueix el cabal elevat a la potència 0.6 (equació de Manning per a un canal ample);
- les dues parts simplement se sumen.

## Calor: un fitxer meteorològic futur

Trieu el tipus {{ui:Calor: fitxer meteorològic futur}}, escolliu un fitxer `.epw` meteorològic del present i premeu {{ui:Fes el fitxer meteorològic futur}}. El fitxer es **morfa** mes a mes amb el mètode publicat de desplaçament i estirament (Belcher, Hacker i Powell 2005): la mitjana del mes s'escalfa pel canvi del paquet, les tardes calentes pel canvi en el màxim diari i les nits fredes pel canvi en el mínim diari; la humitat relativa es mou pel canvi del paquet i el punt de rosada es torna a calcular. La pressió i el vent es mantenen com eren. La taula compara la temperatura mitjana i la més alta, les temperatures de disseny de refrigeració al 0.4 % i de calefacció al 99.6 %, les hores a 30 °C i 35 °C i els graus-dia.

{{ui:Desa el fitxer meteorològic futur}} el desa; {{ui:Usa-ho a la comprovació d'energia}} el passa a la comprovació d'EnergyPlus (pestanya Energia). El fitxer futur és el mateix any típic, més càlid: no afegeix noves onades de calor.

## Any d'energia, present al costat del futur

Al bloc {{ui:Clima futur}} de la comprovació d'EnergyPlus de la pestanya Energia (un complement propi, amb el vostre motor), trieu un fitxer meteorològic del present, després un escenari i un any, i premeu {{ui:Simula un any: present i futur}}: l'any es simula amb el fitxer del present i amb el seu futur morfat, i la calefacció i la refrigeració de cada sala es llisten una al costat de l'altra.

## Exposició a incendis forestals (només cribratge)

Trieu el tipus {{ui:Exposició a incendis forestals (només cribratge)}}: la vegetació més propera, el pendent des d'ella fins a l'edifici i la distància fins a ella. El resultat és una banda que va de molt baixa a extrema, present i futura.

:::warning
**Només cribratge.** És la nostra escala relativa pròpia per saber si un lloc necessita una avaluació d'incendi forestal adequada, no una qualificació de codi ni un nivell d'atac per incendi de vegetació. Multiplica un pes per la vegetació, un factor de pendent (un foc gairebé duplica la seva velocitat per cada 10 graus cap amunt, comptats fins a 20 graus), un factor de distància (10 m dividit per la distància, com a màxim 1) i el canvi del paquet en l'índex de temps d'incendi.
:::

## D'on surten les xifres

- **Temperatura, humitat, sol, pluja, temps d'incendi:** NASA NEX-GDDP-CMIP6, sortida de models CMIP6 reduïda a escala diària. La sortida de cada model és sota CC BY 4.0. El canvi en el temps d'incendi és l'Índex canadenc de temps d'incendi (Canadian Fire Weather Index), calculat dia a dia a partir del temps del model (amb la humitat diària en lloc de la humitat del migdia).
- **Pujada del nivell del mar:** la mitjana global de l'IPCC AR6 (no local; l'enfonsament o l'enlairament de terra no hi és), tret que un paquet porti xifres locals.
- El paquet indica la seva font, llicència i data; el panell les mostra.
