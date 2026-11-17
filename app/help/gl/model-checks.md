---
title: Comprobar un modelo por problemas comúns
summary: Atopar elementos que non teñen unha propiedade que necesita, GlobalId usados dúas veces, elementos sen piso e copias superpostas.
keywords: comprobar, comprobación, validación, qa, calidade, propiedade que falta, obrigatoria, duplicado, globalid, guid, piso, superposto, solapamento
from: 4d835513
---

## Que vai facer

Revisar un modelo antes de entregalo: os problemas que rompen cuadros, cantidades e o software doutras persoas.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Comprobacións do modelo}} no panel esquerdo.
3. En {{ui:Propiedades obrigatorias}} xa hai unha regra (calquera clase, Nome). Cambie a súa clase (ou {{ui:Calquera clase}}) e a súa propiedade, ou faga clic en {{ui:Engadir unha propiedade}} para outra regra; a x retira unha. Un elemento non cumpre unha regra cando falta a propiedade ou está baleira. As regras quedan neste navegador para todos os modelos.
4. Faga clic en {{ui:Executar comprobacións}}.
5. Faga clic nun resultado para seleccionar eses elementos e ampliar a vista até eles.

## O que debe ver

- **Falta unha propiedade obrigatoria**: cada regra cos elementos que non teñen valor para ela.
- **GlobalId usado dúas veces**: elementos que comparten un mesmo GlobalId. Outro software trátaos como un só elemento.
- **Sen piso**: elementos cunha forma que ningún piso contén.
- **Copias superpostas**: elementos da mesma clase e tipo, coa mesma forma no mesmo lugar, que se contan dúas veces nas cantidades.

Cada liña dos resultados é un botón: faga clic nela para seleccionar eses elementos e ampliar a vista até eles. Só se listan os primeiros 50 grupos de cada comprobación. Os mesmos resultados aparecen tamén en {{ui:Problemas}}.

## Cousas útiles

- As comprobacións miran o modelo activo cando hai varios abertos. Consulte [Ver varios modelos IFC xuntos](topic:several-models).
- Despois dunha edición, execute de novo as comprobacións.
- No panel {{ui:Problemas}}, as lonxitudes, superficies e volumes nas palabras dun problema seguen as {{ui:Unidades}} escollidas na barra de ferramentas (unha porta de «800 mm» léese 2'-7 1/2" en pés e polgadas); cambie a unidade e o panel volverá redactalos.

## Seguinte

- [Auditar o modelo: salas, etiquetas, LOD, interferencias e interfaces](topic:audit-the-model)
- [Atopar elementos por clase, nome ou propiedade](topic:find)
- [Eliminar, cortar, copiar e pegar elementos](topic:copy-paste)
