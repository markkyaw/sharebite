# Sharebite Coding Assessment Backend

Tech stack: Django REST framework

## Setup

1. Set up a virtual environment

```bash
py -m venv env
```

2. Install packages

```bash
py -m pip install -r requirements.txt
```

3. Run virtual env

```bash
source env\Scripts\activate
```

4. Import Postman

- Import [sharebite.postman_collection.json](sharebite.postman_collection.json) into postman to test api calls

## Runserver

```bash
py manage.py runserver
```

## Note

I'm unable to implement how to perform CRUD operations to map Items and Modifiers. The mapping is doable through Django Admin, however after spending hours on it, I could not figure out how to do it through http rest endpoint.
