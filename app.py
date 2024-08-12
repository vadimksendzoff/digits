from flask import Flask, request, jsonify, render_template
import psycopg2


templ_folder = '/Users/vadimus/work/courses/digits_site/back_side'

app = Flask(__name__)


def get_db_connection():

    conn = psycopg2.connect(dbname='db_digits',
                            user='user_digits',
                            password='ud3479',
                            host='128.140.40.7',
                            port='5993')

    conn.autocommit = True

    return conn


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/get_digits', methods=['GET'])
def get_digits():

    conn = get_db_connection()
    cursor = conn.cursor()

    if conn:
        qq = "select d_digit from digits_table where d_id = 1;"
        _ = cursor.execute(qq)
        req_result = cursor.fetchall()

        conn.commit()
        cursor.close()

        return req_result