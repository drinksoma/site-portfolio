@echo off
:: Запуск локального сервера на порту 8000
python -m http.server 8000 --bind 0.0.0.0

pause
