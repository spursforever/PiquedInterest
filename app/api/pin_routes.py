from flask import Blueprint, jsonify, session, request
from app.models import db, Pin
from flask_login import login_required, current_user
from app.api.auth_routes import validation_errors_to_error_messages

pin_routes = Blueprint('pins', __name__)

@pin_routes.route('/')
def get_all_pins():
    pins = Pin.query.all()
    print('..............', {'pins': [pin.to_dict() for pin in pins]})   
    return {'pins': [pin.to_dict() for pin in pins]}

@pin_routes.route('/<int:id>')
def get_pin_by_id(id):
    pin = Pin.query.get(id)

    return {'pin': pin.to_dict()}