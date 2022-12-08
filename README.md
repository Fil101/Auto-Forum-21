## Auto-Forum-21
<p align="center">
      <a href="https://ibb.co/HB6xjV2"><img src="https://i.ibb.co/VJRQstN/2022-12-08-13-04-12.png" alt="2022-12-08-13-04-12" border="0"></a>
</p>

## About
Пет проект Full stack веб приложение
Демо версия социальной сети для автомобилистов

Реализованный функционал:
- выбор сообщества по марке и модели авто.
<a href="https://ibb.co/QjNcJ5j"><img width="70%" src="https://i.ibb.co/M5VhgX5/2022-12-08-13-09-11.png" alt="2022-12-08-13-09-11" border="0"></a>
- поиск по постам, добавление постов, добавление комментариев к постам
<a href="https://ibb.co/dMSLBhg"><img width="70%" src="https://i.ibb.co/xLyfh4H/2022-12-08-13-18-19.png" alt="2022-12-08-13-18-19" border="0"></a>
- лайки к постам, добавление поста в избранное
- просмотр статей и фотографий сообщества
<a href="https://ibb.co/djwrMsd"><img width="70%" src="https://i.ibb.co/YPF3Q4z/2022-12-08-13-21-37.png" alt="2022-12-08-13-21-37" border="0"></a>
- авторизация/регистрация с использованием bcrypt. 
- подписки на сообщества.
## Documentation
Для запуска на локальной машине небходимо:
1. Проинициализовать папки \client и \server
2. Создать пустую БД в PostgreSQL 
3. В папке \server создать файл .env в нем указать параметры доступа к вашей БД:
DB_NAME=example
DB_USER=example
DB_PASS=123
4. Накатить Sequelize сиды и миграци, через команды: 
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
5. Выполнить команду npm start в папках \client и \server

## Developers

- [Eldar Abbdulaev]([GitHub Profile Link](https://github.com/Abdullaev-Eldar))
- [Vladimir Cherkasov]([GitHub Profile Link](https://github.com/Retal13))
- [Anastasia Gurdzhiyan]([GitHub Profile Link](https://github.com/nastassiana))
- [Philipp Protsko]([GitHub Profile Link](https://github.com/Fil101))

## License
MIT
