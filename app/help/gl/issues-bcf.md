---
title: Incidencias e ficheiros BCF
summary: Garde unha vista do modelo como incidencia (cámara, elementos escollidos, ocultos, sección), compártaa como ficheiro BCF con outras ferramentas de coordinación e abra os seus ficheiros BCF para ver as súas incidencias.
keywords: bcf, bcfzip, incidencia, incidencias, tema, punto de vista, informe de colisións, coordinación, comentario, instantánea, abrir bcf, gardar bcf, exportar, importar
from: 2a6cf201
---

## Que vai facer

Sinale un problema no modelo e conserve a vista que o amosa; despois envíao nun ficheiro BCF, o formato que outras ferramentas de coordinación len e escriben.

## Pasos

1. Abra un modelo IFC e prepare a vista: oriente a cámara cara a el, escolla os elementos implicados, oculte o que estorba e córteo cun plano ou unha caixa de sección.
2. Prema a lapela {{ui:Incidencias}} á dereita, despois {{ui:Nova incidencia desde esta vista}}.
3. Escriba un título e un comentario se quere; escolla un estado; indique o seu nome ou correo electrónico (con sesión iniciada, énchese o nome da súa conta; vexa [Configuración de BimCraft](topic:settings#your-name-on-issues)). Prema {{ui:Crear incidencia}}.
4. Prema {{ui:Mostrar}} nunha incidencia para repoñer a súa vista.
5. Prema {{ui:Gardar BCF}} para descargar todas as incidencias nun único ficheiro `.bcf`.
6. Para ver incidencias que outra persoa creou, prema {{ui:Abrir BCF…}} e escolla o seu ficheiro `.bcf` ou `.bcfzip`.

## O que debería ver

- Cada incidencia na lista, cunha imaxe da súa vista, o seu título, estado, autor e data.
- {{ui:Mostrar}} repón a cámara, os elementos escollidos, o que estaba oculto (ou só as cousas amosadas) e a sección. Os elementos atópanse polo seu GlobalId en cada modelo aberto; a liña de estado indica se algúns non están.
- Un plano ou caixa de sección doutra ferramenta amósase cando se alinea cos eixos do modelo; os planos inclinados ou adicionais volven como volume de sección (ata 6 planos). Unha incidencia conserva a primeira caixa dun volume de varias caixas.

## Bo que saber

- O ficheiro é BCF 2.1 e conserva a vista nas coordenadas do propio modelo, así que outras ferramentas colocan a cámara no mesmo sitio.
- As incidencias quedan nesta lapela ata que as garde. Abrir outro modelo conserva a lista; abra o modelo ao que pertencen as incidencias antes de amosalas.
- Unha cámara paralela (ortogonal) doutra ferramenta amósase coa cámara en perspectiva deste visor, afastada para que a mesma parte do modelo encha a vista.

## Erros frecuentes

- **Mostrar moveu a cámara a un sitio estraño.** A incidencia creouse noutro modelo ou con outras coordenadas. Abra primeiro o modelo correcto.
- **O ficheiro non se abre.** Non é un zip BCF, ou está danado; a liña de estado indica o motivo.

## Seguinte

- [Ocultar, illar e ver a través de elementos](topic:hide-and-isolate)
- [Cortar un modelo IFC cun plano de sección](topic:section-plane)
