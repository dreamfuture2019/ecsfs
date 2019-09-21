FROM python:alpine

RUN pip install Flask

RUN apt-get update && apt-get install -yy \
    curl 

WORKDIR /app

COPY app.py ./

COPY entrypoint.sh /usr/local/bin/

ENV FLASK_APP app.py

ENTRYPOINT ["entrypoint.sh"]

CMD flask run --host=0.0.0.0
