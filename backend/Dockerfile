FROM python:alpine

RUN pip install Flask

RUN apk add --no-cache curl

WORKDIR /app

COPY app.py ./

COPY entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/entrypoint.sh

ENV FLASK_APP app.py

CMD env

CMD curl — retry 5 — connect-timeout 3 -s 169.254.170.2/latest/meta-data/local-ipv4

CMD flask run --host=0.0.0.0

#ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
