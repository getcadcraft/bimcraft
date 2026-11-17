---
title: Verificar um modelo com o IDS do cliente
summary: Carregue o arquivo .ids que você recebeu e veja em Problemas cada elemento que não atende a ele, antes de entregar o IFC.
keywords: ids, especificação de entrega de informações, buildingsmart, requisitos, entrega, verificação, validação, garantia da qualidade, eir, bep, propriedade, classificação, material, aquisição
from: 7b960222
---

## O que você vai fazer

Um IDS (Information Delivery Specification, um padrão da buildingSMART) é a lista do que um IFC deve conter: quais classes, quais propriedades com quais valores, classificações, materiais, onde cada coisa deve estar. Clientes e licitações públicas enviam um com o trabalho. O BimCraft verifica o modelo IFC aberto contra ele e lista cada elemento que fica aquém.

## Passos

1. Abra um modelo IFC.
2. Abra {{ui:Verificar com um IDS}} no painel esquerdo, em {{ui:Verificações do modelo}}, ou escolha {{ui:Verificar com IDS…}} no menu conforme o seu estilo de menu.
3. Clique em {{ui:Carregar um arquivo .ids…}} e escolha o arquivo. Nada é enviado.
4. Leia o resultado: cada especificação com {{ui:Passa}} ou {{ui:Falha}} e em quantos elementos ela se aplica.
5. Abra Problemas ({{key:Ctrl+Shift+M}}) e clique em uma falha para selecionar o elemento e dar zoom nele.

## O que você deve ver

- Um aviso por elemento e requisito que ele não cumpre, com o nome da especificação, o que o IDS pede e o que o elemento tem.
- Uma especificação obrigatória que nada no modelo atende gera um aviso próprio.
- O relatório de verificação (em Problemas) começa pelo IDS: título, versão, autor e, para cada especificação, as contagens de aplicáveis, aprovados e reprovados.

## Bom saber

- O IFC guarda apenas uma referência ao IDS (nome, título, versão e um hash), não o IDS em si: o IDS de um cliente pode ser confidencial, e o IFC vai para outras pessoas. O IDS fica neste navegador junto ao modelo, então, ao abrir de novo aqui o IFC salvo, ele é verificado outra vez. Carregar ou esquecer o IDS é uma etapa que você pode desfazer.
- Aberto em outro computador ou em outro navegador, Problemas mostra uma nota de que o IDS não foi encontrado: carregue-o de novo para verificar outra vez.
- Para enviar o IDS junto com o IFC, ative {{ui:Guardar o IDS dentro do IFC}} em Configurações, na guia BimCraft, antes de carregá-lo.
- Cada edição, desfazer e refazer é verificada de novo um instante depois.
- Os valores são comparados do jeito do IDS: texto exatamente (maiúsculas e minúsculas contam), números em unidades SI com uma pequena tolerância (comprimentos em metros, então um modelo em milímetros é convertido antes).
- Uma especificação escrita para outra versão do IFC (por exemplo IFC2X3 quando o modelo é IFC4) ainda é verificada; o resultado indica isso.
- Se o arquivo IDS tiver falhas que uma auditoria de IDS apontaria, a caixa de diálogo as lista; as especificações em que elas estão falham.
- Você pode aceitar uma falha com um motivo, como qualquer problema. Ela continua aceita enquanto os valores do elemento permanecerem os mesmos.

- Padrões no IDS são lidos como o valor inteiro. Um `^` no início e um `$` no fim também são tomados como "o valor inteiro", como a maioria dos arquivos IDS os entende.

## Próximo

- [Verificar um modelo quanto a problemas comuns](topic:model-checks)
- [Alterar uma parede ou porta](topic:change-a-wall-or-door)
