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

brain-gcd: # запуск "НОД" (наибольший общий делитель)
	node bin/brain-gcd.js

brain-progression: # запуск "арифметическая прогрессия"
	node bin/brain-progression.js

brain-prime: # запуск "Простое ли число"
	node bin/brain-prime.js