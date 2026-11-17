---
title: Verificar um modelo contra o IDS de um cliente
summary: Carregue o ficheiro .ids que recebeu e veja em Problemas cada elemento que não cumpre, antes de entregar o IFC.
keywords: ids, information delivery specification, buildingsmart, requisitos, entrega, verificar, validação, qa, eir, bep, propriedade, classificação, material, contratação
from: 7b960222
---

## O que vai fazer

Um IDS (Information Delivery Specification, uma norma da buildingSMART) é a lista do que um IFC tem de conter: que classes, que propriedades com que valores, classificações, materiais e onde as coisas devem estar. Os clientes e as entidades de contratação pública enviam uma com a obra. O BimCraft verifica o modelo IFC aberto contra essa lista e indica cada elemento que fica aquém.

## Passos

1. Abra um modelo IFC.
2. Abra {{ui:Verificar com um IDS}} no painel da esquerda, em {{ui:Verificações do modelo}}, ou escolha {{ui:Verificar com IDS…}} no menu, conforme o estilo de menu escolhido.
3. Clique em {{ui:Carregar um ficheiro .ids…}} e escolha o ficheiro. Nada é enviado.
4. Leia o resultado: cada especificação com {{ui:Passa}} ou {{ui:Falha}} e o número de elementos a que se aplica.
5. Abra Problemas ({{key:Ctrl+Shift+M}}) e clique numa falha para selecionar o elemento e fazer zoom sobre ele.

## O que deve ver

- Um aviso por cada elemento e requisito em falta, com o nome da especificação, o que o IDS pede e o que o elemento tem.
- Uma especificação obrigatória a que nenhum elemento do modelo corresponda é um aviso próprio.
- O relatório de verificação (em Problemas) começa pelo IDS: o título, a versão, o autor e, para cada especificação, as contagens de elementos aplicáveis, aprovados e falhados.

## Bom saber

- O IFC guarda apenas uma referência ao IDS (o nome, o título, a versão e um hash), e não o próprio IDS: o IDS de um cliente pode ser confidencial, e o IFC vai para outras pessoas. O IDS fica neste navegador junto ao modelo, por isso, quando o IFC guardado é aberto aqui de novo, volta a ser verificado. Carregar ou esquecer o IDS é um passo que pode anular.
- Aberto noutro computador ou noutro navegador, Problemas mostra uma nota a indicar que o IDS não foi encontrado: carregue-o de novo para voltar a verificar.
- Para enviar o IDS junto com o IFC, ative {{ui:Guardar o IDS dentro do IFC}} em Definições, no separador BimCraft, antes de o carregar.
- Cada edição, anulação e refazer é verificada de novo um momento depois.
- Os valores são comparados à maneira do IDS: o texto exatamente (as maiúsculas contam), e os números em unidades SI com uma pequena tolerância (os comprimentos em metros, por isso um modelo em milímetros é convertido primeiro).
- Uma especificação escrita para outra versão do IFC (por exemplo IFC2X3 quando o modelo é IFC4) continua a ser verificada; o resultado indica-o.
- Se o ficheiro IDS tiver defeitos que uma auditoria IDS assinalaria, o diálogo lista-os; as especificações em que estão falham.
- Pode aceitar uma falha com um motivo, como qualquer problema. Continua aceite enquanto os valores do elemento se mantiverem iguais.

- Os padrões no IDS são lidos como o valor inteiro. Um `^` no início e um `$` no fim também são tomados como «o valor inteiro», como a maioria dos ficheiros IDS os entende.

## Seguinte

- [Verificar um modelo quanto a problemas comuns](topic:model-checks)
- [Alterar uma parede ou uma porta](topic:change-a-wall-or-door)
