FROM python:alpine

RUN pip install Flask

RUN apk add --no-cache curl

WORKDIR /app

COPY app.py ./

COPY entrypoint.sh /usr/local/bin/

ENV FLASK_APP app.py

ENTRYPOINT ["entrypoint.sh"]

CMD flask run --host=0.0.0.0
