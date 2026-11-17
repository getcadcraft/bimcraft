---
title: Buscar debuxos ligados e imaxes
summary: Mostre os debuxos ligados dun debuxo (referencias externas ou xrefs) e as imaxes da cartela, abrindo a cartafol do debuxo ou engadindo os ficheiros a man.
keywords: xref, referencia externa, debuxo ligado, anexar, superposición, imaxe, fotografía, logotipo, cartela, xref que falta, etransmit, xestor de referencias
from: 5593d4b1
---

## Que vai facer

Complete un debuxo: mostre os debuxos aos que se liga (referencias externas, ou xrefs) e as imaxes que usa, como un logotipo na cartela.

## A forma fácil: abrir a cartafol

1. Faga clic en {{ui:Abrir un cartafol}} e escolla a cartafol que contén o debuxo e as súas ligazóns, por exemplo a cartafol `Cad` completa dun proxecto.
2. No informe da cartafol, desprace ata **Debuxos CAD**.
3. Faga clic no debuxo.
4. Mire o panel {{ui:Propiedades}} á dereita, baixo **Debuxos ligados** e **Imaxes**.

BimCraft busca cada debuxo ligado polo seu nome («*nome*.dwg»), primeiro na mesma cartafol que o debuxo e despois en calquera lugar da cartafol que abriu. As imaxes búscanse do mesmo xeito, e tamén por un nome semellante: unha exportación de eTransmit ou Revit adoita engadir diante o nome do proxecto, así que `logo.png` atópase como `Tower-logo-5425051.png`.

## A outra forma: engadir ficheiros a man

1. Abra o debuxo por separado.
2. À dereita, baixo **Debuxos ligados**, faga clic en {{ui:Engadir debuxos ligados…}}. Baixo **Imaxes**, o botón é {{ui:Engadir imaxes…}}; ambos abren o mesmo selector.
3. Escolla os ficheiros `.dwg` ligados e os ficheiros de imaxe. Pode escoller varios á vez.
4. Agarde mentres BimCraft volve abrir o debuxo con eles.

## Que debe ver

Cada debuxo ligado e cada imaxe aparecen listados cunha etiqueta:

| Etiqueta | Significa |
|---|---|
| **Mostrado** | Atopado e debuxado. A ruta debaixo indica de onde procede, ou «engadido por vostede». |
| **Mostrado, nome semellante** | Unha imaxe atopada por un nome semellante. Comprobe que é a correcta. |
| **Non atopado** | Non está na cartafol nin nos ficheiros que engadiu. Unha imaxe que falta móstrase como o seu marco baleiro. |
| **TIFF non se pode mostrar nun navegador** | A imaxe é un ficheiro TIFF, que os navegadores non debuxan. Gárdeo como PNG co mesmo nome e engádao. |
| **Non se puido ler** | O ficheiro atopouse, pero non se puido abrir como imaxe. |

O panel {{ui:Debuxo}} á esquerda mostra «*n* de *m* cargados» para os debuxos ligados. As capas dos debuxos ligados aparecen en {{ui:Capas}} como «*nome da ligazón*|*capa*».

## Erros habituais

- **Abrir só o debuxo.** «Este debuxo mostra só o seu propio contido ata que se engadan os seus debuxos ligados. Abrir a cartafol completa do proxecto atópaos automaticamente.»
- **Abrir unha cartafol demasiado pequena.** Se as ligazóns están nunha cartafol irmá, abra a cartafol pai.
- **Ligazóns renomeadas.** BimCraft empareja os debuxos ligados polo nome. Unha ligazón renomeada no disco non se atopa; engádaa a man.
- **Ligazóns de ligazóns.** BimCraft carga os debuxos aos que liga o debuxo aberto. Os debuxos ligados dentro deses non se buscan, así que normalmente non se mostran nesta versión.
