import cherrypy


class HelloWorld(object):
    def index(self):
        # return "Hello world!"
        return open('index.html')
    index.exposed = True

cherrypy.quickstart(HelloWorld(), '/', config="count.conf")

