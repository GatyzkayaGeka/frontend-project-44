install: # установить зависимости
	npm ci

brain-games: # запустить игру
	node bin/brain-games.js

publish: #публикация
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .

brain-even: # запуск проверки на чётность
	node bin/brain-even.js

brain-calc: # запуск калькулятора
	node bin/brain-calc.js