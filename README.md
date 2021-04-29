# Документация
Сайт на фреймворке React. Используется AirBnb code-style. Для тестирования Jest. 
- Вся логика вынесена в хуки. Находятся в папке hooks.
- Папка templates использует стратегию Render props для расшаривания логики между компонентами.
- В lib вынесены все общее стили.
- Компоненты разбиты на UI (кнопки и т.д.), pages (стили и данные постранично) и layout (большие отдельные компоненты состоящие из UI)

## Особенности
1. search-context нужен для расшаривания поиска между страничками индекс и таблица
2. toggle-context для затемнения бекграунда при открытии модалок
3. SearchTable — это основная таблица, которая выводится после поиска
4. SearchInputs – строка поиска и выбора регионов

## Доп. технологии
- Next.js
- Material UI
- JSS
- Hooks

## Используемые пакеты
- js-cookie
- react-click-away-listener
- react-number-format
- react-transition-group