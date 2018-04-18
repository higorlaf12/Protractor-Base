# Protactor-Base #

### Necessário para construir ###

* versão node v6.9.5
* versão npm 3.10.0

### Instalar os plugins ###

* $ npm install -g protractor
* $ webdriver-manager update
* $ npm install

```
# Mais informações segue o site 
	https://www.protractortest.org/#/
```

### Como executar ###

* webdriver-manager start
* protractor protractor.conf.js

```
# Observação esse programa não ira rodar, pois não possue nenhum programa nele. 
	Irei colocar algum exemplo mais tarde. Vou explicar a estrutura.

#Webapp
	Dentro de webApp ficara nossos teste.
	Dentro do webApp temos as seguintes pastas.
#e2e
	Dentro de e2e ficara duas pasta:
	->spec
		- No spec ficará somente o nosso main, onde fica a regra do teste
	->wizard
		- aqui fica os dados como os elementos das páginas e a alguns programas como geradores aleatorios etc..
	-> Aqui pode ficar alguns arquivos .js que são usados frequentimente ou de facio acesso para verificar como login. 
#spec
	Não me lembro muito bem o proposito dela. Tem um explo lá mas não ira rodar pois não está configurado no protractor.conf.js
```
