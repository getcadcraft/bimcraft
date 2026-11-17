---
title: Paquetes para clientes, informes de fase e comparación de opcións
summary: Cree un paquete para o cliente ou un informe de fase a partir do modelo, con as opcións de volumetría comparadas por superficie e custo, as superficies de planta, os debuxos coas súas revisións e o historial de emisións. Cada cifra conserva os elementos que hai detrás.
keywords: paquete para cliente, presentación, informe de fase, informe, comparación de opcións, opcións, comparar opcións, superficie e custo, custo por opción, sen tarifa, volumetría, superficies de planta, lista de debuxos, historial de emisións, cifras, cifras ligadas
from: f6679bf5
---

## Que vai facer

Cree un paquete para o cliente ou un informe de fase a partir do modelo tal como está agora, e compare as opcións de volumetría gardadas lado a lado por superficie e custo.

## Pasos

1. No panel esquerdo, abra **Paquete para cliente e informe de fase**.
2. Escolla **Abrir en Documentos** xunto a Paquete para cliente ou Informe de fase. O documento aparece en Documentos a partir do modelo, onde pode cambiar o seu texto.
3. Na vista previa, prema unha cifra para seleccionar os elementos que hai detrás.
4. Escolla **Crear o paquete**. Gárdase un ZIP: o documento en PDF, unha imaxe da vista 3D e `figures.csv`, que enumera cada cifra cos GlobalId dos seus elementos.

## Os campos

Pode usalos en calquera documento.

| Campo | Que imprime |
|---|---|
| `{{stage}}` | A fase do proxecto segundo os detalles do debuxo. |
| `{{options}}` | As opcións de volumetría gardadas, lado a lado: plantas, altura, superficie de ocupación, superficie bruta de planta, envolvente e custo. |
| `{{areas}}` | Superficie de planta por nivel, a partir dos cuartos. |
| `{{sheets}}` | As follas coa revisión en que están e a data da última emisión. |
| `{{issues}}` | O historial de emisións e o rexistro de cambios dos debuxos. |
| `{{changes}}` | Que cambiou desde a última emisión, folla por folla. |

## Como se calculan os custos

O custo procede só da táboa de prezos do proxecto (Enerxía/Custo, custo 5D). Non se estima nada por si mesmo.

- Unha fila de prezos só pon prezo a unha opción cando as súas clases nomean `IfcBuildingElementProxy`.
- A superficie de planta prézase cunha fila cuxas palabras nomean o uso da opción, como oficina. Sen esa fila, úsase unha fila coas palabras superficie bruta de planta ou masa do edificio. Unha fila por m² usa a superficie bruta de planta. Unha fila por m³ usa o volume.
- A envolvente (perímetro por altura) prézase cunha fila coa palabra envolvente ou fachada.
- Unha opción sen fila correspondente amosa **Sen tarifa**. Só se amosa un total cando todas as partes pedidas teñen tarifa.

## Boas a saber

- Conserve opcións con **Conservar como opción** na lista de volumetría do programa de necesidades. Vexa Opcións de volumetría.
- Un PDF non pode seleccionar elementos. Fóra de BimCraft, `figures.csv` leva a ligazón de cada cifra cos seus elementos.

## Non implementado aínda

- As follas e as vistas debuxadas non se colocan dentro do documento. O paquete contén só unha imaxe da vista 3D.
