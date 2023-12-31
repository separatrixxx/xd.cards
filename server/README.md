# [xd].cards
API к сервису по созданию открыток [xd].cards
```
Python            3.10.5
annotated-types   0.6.0
anyio             3.7.1
click             8.1.7
colorama          0.4.6
exceptiongroup    1.2.0
fastapi           0.104.1
h11               0.14.0
idna              3.6
pip               22.0.4
pydantic          2.5.2
pydantic_core     2.14.5
setuptools        58.1.0
sniffio           1.3.0
starlette         0.27.0
typing_extensions 4.8.0
uvicorn           0.24.0.post1
PIL               9.5.0 (ВАЖНО!!!)
pynter            0.1.6
requests          ЛЮБАЯ
```
Для быстрой установки:
```
pip install fastapi uvicorn pynter requests Pillow==9.5.0
```
Запуск сервера:
```
uvicorn main:app --reload
```
API:
```
Ручка: /imageGeneration/generateCard

Тип HTTP запроса: POST

Тело HTTP запроса:

{
    "text_stable_diffusion": "RUSSIAN WINTER",
    "text_image" : "USA!"
}

Значение параметра text_stable_diffusion - строка, по которой будет генерироваться изображение Stable Diffusion
Значение параметра text_image - строка, которая будет добавлена на изображение

Тип ответа:

HTTP 200 OK, возврат изображения (Content-Type: image/png)

HTTP 400, возврат ошибки с телом
{
    "details" : "ERROR"
}

Значение параметра details - строка, содержащая текст ошибки
```
![alt-текст](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

