---
title: Amb què renderitza el vostre equip
summary: Configuració › Renderitzat mostra els gràfics, els nuclis del processador i la memòria que aquest navegador deixa fer servir a l'aplicació, i el nivell que fixa on comença el renderitzat.
keywords: el vostre equip, targeta gràfica, gpu, webgpu, webgl, processador, cpu, nuclis, fils, memòria, ram, memòria compartida, aïllament, nivell, escaló, velocitat, lent, velocitat de renderitzat, portàtil
from: 360f2375
---

Obriu {{ui:Configuració}} ({{key:Mod+,}}), quedeu-vos a la pestanya pròpia d'aquesta aplicació i desplaceu-vos fins a {{ui:Renderitzat}}. {{ui:El vostre equip}} mostra el que aquest navegador deixa fer servir a l'aplicació per al renderitzat. Res del que hi ha no surt del vostre ordinador.

| Fila | Què vol dir |
|---|---|
| {{ui:Gràfics}} | La targeta gràfica que informa el navegador. "WebGPU" vol dir que pot fer la feina de renderitzat; "WebGL 2 only" vol dir que no hi ha WebGPU: la vista en directe i les imatges d'alta qualitat fan servir la targeta gràfica mitjançant WebGL 2 (les imatges amb el traçador de camins WebGL antic, sense els extres que necessiten WebGPU); un substitut per programari vol dir que tot s'executa al processador |
| {{ui:Processador}} | Quants nuclis del processador informa el navegador |
| {{ui:Memòria}} | Aproximadament quanta memòria té l'ordinador, quan el navegador ho indica. Alguns navegadors no ho fan |
| {{ui:Memòria compartida}} | Si la pàgina pot compartir memòria entre els seus treballadors. Activada, cada nucli pot treballar amb una sola còpia d'una escena; desactivada, cadascun necessita la seva pròpia còpia, de manera que una escena gran cap en menys nuclis alhora |
| {{ui:Codi de processador ràpid}} | Si el navegador executa el codi WebAssembly més ràpid. Sense això s'usa una alternativa més lenta |
| {{ui:Nivell}} | {{ui:Targeta gràfica, alta}}, {{ui:Targeta gràfica, bàsica}} o {{ui:Només processador}}, amb el motiu a sota |

## El nivell

El nivell és on comença el renderitzat, perquè un portàtil amb un xip gràfic integrat o sense cap targeta gràfica es mantingui àgil. Un xip gràfic integrat o de telèfon, o 4 GB de memòria o menys, mai no obté {{ui:Targeta gràfica, alta}}.

:::note
Els navegadors són diferents. El mateix ordinador pot mostrar WebGPU en un navegador i "WebGL 2 only" en un altre. A Linux, la majoria de navegadors encara no tenen WebGPU.
:::
