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
def get_one_pin(id):
    pin = Pin.query.get(id)
    print("oooooooooooooo", pin.to_dict())
    return {'pin': pin.to_dict()}

@pin_routes.route('/', methods = ["POST"])
def create_a_pin():
    form - CreatePinForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_Pin = Pin(
            title=form.data["title"],
            description=form.data["description"],
            image_url=form.data["image_url"],
            link=form.data["link"],
            # user_id=current_user.id,
        )
        db.session.add(new_Pin)
        db.session.commit()
        return new_Pin.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401