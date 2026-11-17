---
title: Ligar outros modelos para a coordinación
summary: Amose outro modelo IFC xunto ao seu por referencia (nunca fusionado), colóqueo por coordenadas compartidas, coordenadas de mapa ou dous puntos, prenda nel ao debuxar e recárgueo cando cambie o seu ficheiro.
keywords: ligar, modelo ligado, referencia, xref, coordinación, federación, estrutura, MEP, consultor, coordenadas compartidas, levantamento, coordenadas de mapa, recargar, quitar da vista, referencia de documento, IfcDocumentReference
from: 3e0f1eab
---

## O que vai facer

Debuxar sobre o modelo dun consultor (a estrutura, as instalacións, o edificio existente) sen copiar nada no seu ficheiro.

Un **modelo ligado** móstrase na vista 3D e córtase nos seus planos, pero nunca se modifica nin se garda no seu modelo. O seu modelo conserva só a ligazón: o nome do ficheiro e onde vai.

## Ligar un modelo

1. Na sección {{ui:Linked models}} do panel esquerdo, prema en {{ui:Link a model…}} e escolla o ficheiro IFC. Móstrase de inmediato, e a súa fila di **Mostrado**.
2. Escolla onde vai en {{ui:Placement}}:
   - **Coordenadas compartidas** (para comezar): as súas coordenadas son as súas, como cando os dous modelos se trazaron desde a mesma orixe.
   - **Coordenadas de mapa**: as coordenadas de mapa dos dous ficheiros aliñan os modelos (ambos necesitan unha conversión de mapa; BimCraft avisa cando un non a ten).
   - **Por dous puntos…**: prema nun punto do modelo ligado e logo no punto onde vai no seu; despois, un segundo par. A ligazón móvese e xírase (ao redor da vertical) para encaixar.
3. Cada cambio de ligazón ou de colocación é un só paso: {{key:Mod+Z}} desfáino.

## Traballar con el

- Os planos amosan o modelo ligado cortado á altura de corte do nivel como liñas finas, e a ferramenta {{ui:Wall}} e as demais ferramentas de debuxo axústanse ás súas esquinas e bordos.
- Escolla os seus elementos na vista 3D para ler as súas propiedades; un modelo ligado nunca é o que se edita, así que o seu botón de opción en {{ui:Models}} está desactivado.
- **O ficheiro cambiou?** Cando o navegador pode vixiar o ficheiro (un ficheiro aberto co seu selector de ficheiros, ou en Studio), BimCraft recarga a ligazón por si mesmo uns segundos despois de gardar de novo o ficheiro, e dío. Se non, prema en {{ui:Reload}}.
- {{ui:Unload}} oculta o modelo e libera a memoria; a ligazón queda no seu modelo. {{ui:Load…}} volve mostralo (vostede escolle o ficheiro: un navegador non pode abrir un ficheiro só polo seu nome).
- A × elimina a ligazón do seu modelo.

## Que debe ver

- No seu ficheiro IFC: un IfcDocumentReference por cada ligazón (o nome do ficheiro), relacionado co proxecto, e onde vai no conxunto de propiedades do proxecto CadCraft_Links. Ao abrir de novo o modelo, as súas ligazóns aparecen como **Non cargadas** ata que as cargue.

:::note
As comprobacións de colisións, Comparar e Buscar poden usar unha ligazón cargada como calquera outro modelo aberto: ver [Ver varios modelos IFC xuntos](topic:several-models).
:::
