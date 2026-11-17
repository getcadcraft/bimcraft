---
title: Carboni incorporat i costos a la programació
summary: Suma el carboni incorporat del model a partir d'una taula de factors oberta i editable, i reparteix els preus de la programació 4D en una corba de costos i de flux de caixa. Tots dos parteixen de valors que escrius o importes.
keywords: carboni incorporat, carboni, CO2, kgCO2e, emissions, taula de factors, EPD, 5D, cost, flux de caixa, corba en S, cost de la programació, preus, preus de l'amidament
from: 83e82840
---

## Carboni incorporat

Obre el panell **Carboni**. La quantitat de cada element (volum, àrea o longitud) es multiplica per un factor de la taula, per mòdul de cicle de vida: l'etapa de producte és obligatòria; el transport i els residus són opcionals. Els totals surten per material, classe i planta, i per metre quadrat de superfície de planta.

**La taula de factors és teva.** Les files que porta BimCraft són valors inicials genèrics de l'ordre de magnitud correcte. No provenen d'una base de dades, estan marcades com a no verificades i cal substituir-les per la font que utilitzis (una EPD, una base de dades nacional o les xifres del teu despatx). Edita les files al panell, o importa i exporta la taula en CSV o JSON. Les files que afegeixes substitueixen la fila inicial amb el mateix identificador. La taula es desa al model.

Els elements sense coincidència, o sense quantitat, es llisten com a Problemes en lloc de comptar-se com a zero.

## Costos a la programació 4D

Obre el panell **Cost** al costat de la programació 4D. Dona-li preus (escriu-los, importa un CSV o JSON, o porta les línies de TakeoffCraft), associa cada preu als materials del model amb paraules clau, i valorarà els elements de cada tasca. El cost d'una tasca es reparteix entre els dies d'inici i de fi (uniformement, o carregat al principi o al final), i el panell dibuixa la corba acumulada del flux de caixa per dia, setmana o mes, amb el cost per etapa i per paquet, i el que està previst enfront del que està construït en una data. Sortida en CSV. No es valora res fins que hi poses preus: no n'hi ha cap de sèrie.

## Moneda

Una taula de preus pot indicar en quina moneda estan expressats (tres lletres, com USD o EUR). El panell 5D té un camp per a això; es desa al fitxer amb els preus, i les exportacions JSON el porten. Una taula feta abans d'això, o en què l'has deixat buida, no té moneda: els seus costos es mostren en USD, la moneda per defecte de l'aplicació, i el panell i els totals acumulats ho indiquen. No es converteix res entre monedes.
