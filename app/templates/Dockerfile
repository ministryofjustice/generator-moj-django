FROM ubuntu:trusty

RUN echo "Europe/London" > /etc/timezone  &&  dpkg-reconfigure -f noninteractive tzdata

RUN apt-get update && \
    apt-get install -y software-properties-common python-software-properties

RUN add-apt-repository -y ppa:nginx/stable
RUN add-apt-repository -y ppa:chris-lea/node.js 

RUN apt-get update && \
    apt-get install -y \
        build-essential git python python-dev python-setuptools python-pip \
        supervisor curl nginx libpq-dev ntp ruby ruby-dev nodejs
RUN service nginx stop && rm /etc/init.d/nginx

# fix for broken pip package in ubuntu 14
RUN easy_install -U pip

WORKDIR /app

RUN gem update rdoc
RUN npm install -g bower gulp

ADD ./conf/uwsgi /etc/uwsgi

ADD ./conf/nginx/nginx.conf /etc/nginx/nginx.conf
ADD ./conf/nginx/sites-enabled /etc/nginx/sites-enabled
ADD ./conf/supervisor /etc/supervisor

ADD ./requirements/ /app/requirements/
RUN pip install -r requirements/dev.txt

ADD . /app
RUN bower install --allow-root

EXPOSE 80
EXPOSE 443
CMD ["supervisord", "-n"]
