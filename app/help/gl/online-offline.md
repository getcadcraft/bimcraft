---
title: En liña e sen conexión
summary: O que BimCraft carga desde o sitio, como Gardar para usar sen conexión fai que os modelos IFC e os debuxos DWG se abran sen conexión, e por que nunca se envía a ningunha nube o que abre.
keywords: sen conexión, en liña, internet, conexión, sen rede, modo avión, visita ao lugar, gardar para usar sen conexión, listo sen conexión, envío, privacidade, wasm, webassembly, motor ifc, dwg, nube
from: 39e5c7eb
---

BimCraft le os seus ficheiros dentro da pestana do navegador. Abrir, inspeccionar, editar e gardar nunca envían os seus ficheiros a ningures, en liña ou sen conexión. [Traballar sen conexión](common:offline) explica como funcionan as copias sen conexión en todas as aplicacións; esta páxina cobre o que é particular de BimCraft.

## Que carga BimCraft desde o sitio

| Parte | Cando se carga sen unha copia sen conexión | Tamaño |
|---|---|---|
| A propia aplicación, co visor 3D e o código do motor IFC | Cando abre BimCraft | Varios megabytes |
| A parte WebAssembly do motor IFC | O primeiro ficheiro IFC que abre na pestana: «Iniciando o motor IFC…» | Uns 1,6 MB |

Os DWG e DXF, os ficheiros de proxecto e de familia e as carpetas non precisan nada extra: os seus lectores forman parte da aplicación.

## Gardar BimCraft para uso sen conexión

1. Abra BimCraft cando estea en liña.
2. Prema {{ui:Gardar para usar sen conexión}} na barra superior da aplicación.
3. Observe como o botón conta: «Gardando 40 de 212», por exemplo. A copia de BimCraft ocupa uns 11 MB, porque inclúe o motor IFC.
4. Agarde a que aparezca {{ui:Listo sen conexión}}.

Cando diga {{ui:Listo sen conexión}}, os modelos IFC, os debuxos DWG e DXF, os ficheiros de proxecto, as carpetas e esta axuda ábrense sen conexión. Non precisa abrir antes un IFC ou un DWG para «quentar» os lectores.

Para actualizar ou quitar a copia, prema {{ui:Listo sen conexión}} e escolla {{ui:Gardar de novo (obter a versión máis recente)}} ou {{ui:Quitar a copia sen conexión}}.

## Que di o botón

| Botón | Significa |
|---|---|
| {{ui:Gardar para usar sen conexión}} | Non hai copia sen conexión neste navegador por agora. Prema para gardar unha |
| «Saving *n* of *m*» | Gardando; manteña a pestana aberta ata que remate |
| {{ui:Listo sen conexión}} | Gardado. Pase o cursor para ver cando; prema para ver o menú |
| {{ui:Non se puido gardar}} | Non se descargaron algúns ficheiros. Comprobe a conexión e prema para intentalo de novo. A última copia boa, se a hai, consérvase |
| {{ui:Sen copia sen conexión}} | Esta xanela non pode gardar unha copia sen conexión (unha ventá privada ou un ordenador xestionado). Véxase [Traballar sen conexión](common:offline) |

:::offline
Está sen conexión.

- Se o botón di {{ui:Listo sen conexión}}, todo tipo de ficheiro se abre como de costume.
- Se non o di, só funciona o que esta pestana xa cargou: un lector que nunca se cargou nesta pestana non pode arrancar, e abrir ese tipo de ficheiro amosa un erro do navegador na liña de estado. Non recargue a pestana ata que estea de novo en liña.
:::

## Que nunca precisa conexión

Unha vez aberto BimCraft na pestana, estes funcionan sen conexión aínda sen unha copia gardada:

- Ler ficheiros de proxecto e de familia e comprobar cartafoles.
- Escoller elementos, ler propiedades e editar valores IFC nun modelo que xa está aberto.
- {{ui:Gardar como IFC}} e {{ui:Descargar CSV}}: ambos son descargas feitas na pestana.

## Que aínda non está dispoñible

- **Gardado na nube.** Os ficheiros gárdanse só no seu ordenador.

Véxase [Onde van os seus ficheiros](common:your-files).
