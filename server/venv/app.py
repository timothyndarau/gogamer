# server/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/evaluate_code', methods=['POST'])
def evaluate_code():
    code = request.json.get('code')
    try:
        exec_globals = {}
        exec(code, exec_globals)
        return jsonify({'result': exec_globals})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
