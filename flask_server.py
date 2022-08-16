#!/user/bin/env python
# -*- coding:utf-8 -*-
# Author: Songs
# Created time: 13/4/2022 0:48
# Last Edited Time: 13/4/2022 0:48

"""
A Entry of Flask
"""


import sys
sys.path.append("./")

from flask import Flask, render_template

from flask_config import Config

app = Flask(__name__, static_url_path='', static_folder='dist', template_folder='dist')
app.config.from_object(Config)


@app.route("/")
def home():
    return render_template("index.html")


if __name__ == '__main__':
    #Debug Mode app.run('0.0.0.0', debug=True)
    app.run(host="0.0.0.0", port = "80")