import psycopg2
from flask import Flask, render_template
from flask_cors import CORS, cross_origin



app = Flask(__name__)

CORS(app)


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
        qq = "select * from digits_table;"
        _ = cursor.execute(qq)
        req_result = cursor.fetchall()

        db_resp = [resp_item for resp_item in req_result]

        resp = {}

        for i in req_result:
            if i[0] == 1:
                resp['digit'] = i[1]
            elif i[0] == 2:
                resp['message_2'] = i[1]

        

        conn.commit()
        cursor.close()

        return resp





if __name__ == '__main__':
    app.run()