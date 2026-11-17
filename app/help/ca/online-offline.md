---
title: En línia i fora de línia
summary: Què carrega BimCraft des del lloc, com Desa per fer-lo servir sense connexió fa que els models IFC i els dibuixos DWG s'obrin sense connexió, i per què mai no es puja res del que obriu.
keywords: fora de línia, en línia, internet, connexió, sense xarxa, mode avió, visita a obra, desa per fer-lo servir sense connexió, disponible sense connexió, pujada, privadesa, wasm, webassembly, motor IFC, dwg, núvol
from: 39e5c7eb
---

BimCraft llegeix els fitxers dins de la pestanya del navegador. Obrir, inspeccionar, editar i desar mai no envien els vostres fitxers enlloc, ni en línia ni fora de línia. [Treballar fora de línia](common:offline) explica com funcionen les còpies fora de línia a totes les aplicacions; aquesta pàgina tracta el que és propi de BimCraft.

## Què carrega BimCraft des del lloc

| Part | Quan es carrega sense una còpia fora de línia | Mida |
|---|---|---|
| L'aplicació en si, amb el visor 3D i el codi del motor IFC | Quan obriu BimCraft | Diversos megabytes |
| La part WebAssembly del motor IFC | El primer fitxer IFC que obriu a la pestanya: «S'està iniciant el motor IFC…» | Uns 1.6 MB |

Els dibuixos DWG i DXF, els fitxers de projecte i de família, i les carpetes no necessiten res més: els seus lectors formen part de l'aplicació.

## Desa BimCraft per fer-lo servir sense connexió

1. Obriu BimCraft mentre estigueu en línia.
2. Feu clic a {{ui:Desa per fer-lo servir sense connexió}} a la barra de l'aplicació, a dalt.
3. Mireu com el botó va comptant: «Desant 40 de 212», per exemple. La còpia de BimCraft ocupa uns 11 MB, perquè inclou el motor IFC.
4. Espereu que aparegui {{ui:Disponible sense connexió}}.

Quan diu {{ui:Disponible sense connexió}}, els models IFC, els dibuixos DWG i DXF, els fitxers de projecte, les carpetes i aquesta ajuda s'obren sense connexió. No cal obrir primer un IFC o un DWG per «escalfar» els lectors.

Per actualitzar o treure la còpia, feu clic a {{ui:Disponible sense connexió}} i trieu {{ui:Torna a desar (obté la versió més recent)}} o {{ui:Elimina la còpia sense connexió}}.

## Què diu el botó

| Botó | Vol dir |
|---|---|
| {{ui:Desa per fer-lo servir sense connexió}} | Encara no hi ha cap còpia sense connexió en aquest navegador. Feu clic per desar-ne una |
| «Desant *n* de *m*» | Desant; mantingueu la pestanya oberta fins que acabi |
| {{ui:Disponible sense connexió}} | Desat. Passeu el ratolí per sobre per veure quan; feu clic per obrir el menú |
| {{ui:No s'ha pogut desar}} | Alguns fitxers no s'han baixat. Comproveu la connexió i feu clic per tornar-ho a provar. Es conserva l'última còpia bona, si n'hi ha |
| {{ui:Mode sense connexió no disponible}} | Aquesta finestra no pot mantenir una còpia sense connexió (una finestra privada o un ordinador gestionat). Vegeu [Treballar fora de línia](common:offline) |

:::offline
Esteu fora de línia.

- Si el botó diu {{ui:Disponible sense connexió}}, cada tipus de fitxer s'obre com de costum.
- Si no, només funciona el que aquesta pestanya ja ha carregat: un lector que mai no s'ha carregat en aquesta pestanya no pot iniciar-se, i obrir aquest tipus de fitxer mostra un error del navegador a la línia d'estat. No recarregueu la pestanya fins que torneu a estar en línia.
:::

## Què no necessita mai connexió

Quan BimCraft ja és obert a la pestanya, aquests processos funcionen fora de línia fins i tot sense una còpia desada:

- Llegir fitxers de projecte i de família, i revisar carpetes.
- Triar elements, llegir propietats i editar valors IFC en un model que ja és obert.
- {{ui:Desa com a IFC}} i {{ui:Baixa el CSV}}: totes dues són baixades fetes a la pestanya.

## Què encara no està disponible

- **Desar al núvol.** Els fitxers es desen només al vostre ordinador.

Vegeu [On van els vostres fitxers](common:your-files).
