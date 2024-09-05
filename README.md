# Test-task

## Установка

### 1. Клонирование репозитория

Сначала клонируйте репозиторий на ваш локальный компьютер:

```bash
git clone https://github.com/monalisssa/test-task.git
cd ваш_репозиторий
```

### 1. Сборка образа Docker
После клонирования, соберите образ Docker:
```bash
docker build -t test-task:latest .
```

### 3. Запуск контейнера
   Запустите контейнер с приложением:

```bash
docker run -d -p 3000:3000 test-task:latest
```

Теперь приложение доступно по адресу http://localhost:3000.
