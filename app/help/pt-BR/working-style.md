---
title: Estilo de trabalho, vistas duplicadas, penas no papel, Reportar como e modelos
summary: Escolha como o BimCraft se comporta para o seu jeito de trabalhar, duplique qualquer vista como cópia própria ou vinculada, mantenha as substituições de penas no arquivo e imprima como exibido ou por uma tabela de canetas, reportar um elemento como outra classe IFC e comece projetos a partir dos seus próprios modelos.
keywords: estilo de trabalho, duplicar vista, duplicar, copiar vista, vista dependente, vista vinculada, cópia própria, cópia de vista, substituições de penas, penas, espessuras de linha, imprimir como exibido, tabela de canetas, estilo de plotagem, ctb, monocromático, escala de cinza, reportar como, classe ifc, reclassificar, tipo predefinido, modelo genérico, laje como via, parede como painel, cobertura como rampa, modelo de projeto, modelo, novo a partir de modelo, salvar como modelo, padrão do escritório
from: 231d98b0
---

## O que você vai fazer

Configure o BimCraft para o seu jeito de trabalhar, depois duplique vistas, imprima-as do jeito que espera, conte os elementos como realmente são e comece cada projeto a partir do modelo do seu escritório.

## Escolher um estilo de trabalho

1. Abra {{ui:Configurações}} e a guia {{ui:BimCraft}}. Encontre {{ui:Estilo de trabalho}}.
2. Escolha uma opção:
   - {{ui:Cada uma com a sua}} (a primeira opção): uma vista duplicada copia as suas anotações e elas continuam sendo da vista; as folhas são impressas como a tela mostra.
   - {{ui:Anotações e tabelas de canetas compartilhadas}}: as vistas duplicadas compartilham as anotações; a impressão passa por uma tabela de canetas.
3. Abaixo da escolha estão as quatro coisas que ela define. Altere qualquer uma delas isoladamente; o estilo então passa a aparecer como {{ui:Personalizado}}.

O estilo de trabalho fica guardado neste navegador, assim como o layout da área de trabalho. Um modelo leva esse estilo para novos modelos.

## Duplicar uma vista

1. No {{ui:Navegador de projeto}}, toda planta baixa, planta de forro, chamada, elevação e corte tem um botão {{ui:Duplicar}} (duas folhas).
2. Dê um nome à cópia e escolha como ela se comporta:
   - {{ui:Cópia própria}}: o desenho, as cotas, o recorte, os elementos ocultos e as penas são copiados e continuam sendo próprios dela. Editar qualquer uma das vistas nunca altera a outra, então uma vista em uma folha emitida permanece como foi emitida.
   - {{ui:Vinculada}}: mostra a mesma vista, com um único conjunto de anotações e configurações.
3. A cópia aparece em {{ui:Vistas duplicadas}}. Clique nela para abri-la; a barra acima da planta indica que é uma cópia, com {{ui:Acima}} para voltar à sua vista.
4. O botão de controles abre as configurações dela: o nome, {{ui:Alcance da vista}} (uma cópia própria tem o seu), {{ui:Tornar cópia própria}} para uma vinculada, e {{ui:Excluir}}.

Cópias de elevações e cortes vão para as suas próprias folhas, como as vistas de origem. Duplicar é um único passo de desfazer, e as cópias são mantidas no IFC junto das chamadas.

## Penas mantidas com a vista e impressas como exibidas

1. Ative {{ui:Desenhar}} e escolha {{ui:Penas}}.
2. {{ui:Para}} agora lista todas as categorias: paredes, portas e janelas, lajes, telhados, pilares, escadas, mobiliário e as demais, além de desenho e cotas.
3. {{ui:Aplicar}} mantém a pena no IFC junto da vista exibida: uma planta, uma planta de forro, uma chamada ou uma vista duplicada. Penas feitas antes da versão 0.9 ficavam guardadas no navegador; {{ui:Manter estas no arquivo}} as move.
4. As folhas e o PDF desenham cada pena como a tela a mostra.

Para imprimir por uma tabela de canetas, defina {{ui:Imprimir}} na linha Penas como {{ui:Por uma tabela de canetas}}, depois escolha uma tabela (cor, monocromática, escala de cinza) ou {{ui:Editar tabela de canetas…}}: cada cor recebe a cor, a espessura e a retícula com que é impressa. A tabela é o arquivo de estilo de plotagem do CadCraft, então {{ui:Importar…}} aceita uma tabela feita no CadCraft e {{ui:Exportar}} gera uma de volta. O modelo mantém a sua escolha; sem nenhuma, vale o estilo de trabalho.

## Reportar um elemento como outra classe

Uma laje desenhada como via, uma parede usada como painel, um telhado com formato de rampa: mantenha a ferramenta com que você o desenhou e reporte-o como ele realmente é.

1. Escolha o elemento e abra {{ui:Propriedades}}. Abra {{ui:Reportar como}}.
2. Digite na caixa de pesquisa para encontrar uma classe que combine com a forma, escolha-a e depois o tipo predefinido. Para um tipo próprio, escolha USERDEFINED e dê um nome a ele.
3. {{ui:Aplicar}} (um passo de desfazer). {{ui:Limpar}} volta a reportá-lo como desenhado.

Você continua editando com a ferramenta com que o desenhou. O IFC salvo grava o elemento como a classe reportada, então outros programas, o levantamento de {{ui:Quantitativos}}, Localizar, Colorir por, as verificações de modelo e {{ui:Problemas}} o contam como tal. As tabelas deixam uma parede reportada como painel fora da tabela de paredes, e {{ui:Elementos por classe reportada}} lista todos eles. Funciona em arquivos IFC4 e IFC2X3; a lista oferece apenas as classes da versão IFC do arquivo. Portas, janelas, escadas, ambientes e níveis mantêm a própria classe.

## Salvar um projeto como modelo e começar a partir dele

1. Com um projeto aberto, clique em {{ui:Salvar como modelo}} ao lado de {{ui:Salvar}}.
2. Dê um nome a ele. Marque {{ui:Também baixar o arquivo de modelo}} para compartilhá-lo como arquivo IFC, e {{ui:Começar novos modelos a partir dele}} para torná-lo o seu padrão.
3. Um modelo mantém os níveis, os modelos de vista e as configurações de vista, as vistas duplicadas e as chamadas, o desenho, as penas e a tabela de canetas, as etiquetas, as famílias e tipos, as folhas, os tamanhos de folha, as legendas e o estilo de trabalho. Paredes, pisos, portas e todos os outros elementos do modelo ficam de fora.
4. Clique em {{ui:Nova edificação}} e escolha o modelo em {{ui:Começar a partir de}}, ou escolha {{ui:Um arquivo de modelo…}} para um que tenha recebido. O novo projeto recebe o próprio nome e identidade de projeto; todo o resto fica como está no modelo.

:::note
Os modelos ficam guardados neste navegador. Modelos de equipe compartilhados pelo CadCraft Studio ainda não foram implementados: envie o arquivo de modelo no lugar.
:::
