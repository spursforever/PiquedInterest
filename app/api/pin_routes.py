from flask import Blueprint, jsonify, session, request
from app.models import db, Pin
from flask_login import login_required, current_user
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import CreatePinForm, EditPinForm

pin_routes = Blueprint('pins', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@pin_routes.route('/')
def get_all_pins():
    pins = Pin.query.all()
    # print('..............', {'pins': [pin.to_dict() for pin in pins]})   
    return {'pins': [pin.to_dict() for pin in pins]}

@pin_routes.route('/<int:id>')
@login_required 
def get_one_pin(id):    
    pin = Pin.query.get(id)
    # print("oooooooooooooo", pin.to_dict())
    # print("1111111111111111", {'pin': pin.to_dict()})
    return {'pin': pin.to_dict()}

@pin_routes.route('/', methods = ["POST"])
# @login_required
def create_a_pin():
    form = CreatePinForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_pin = Pin(
            title=form.data["title"],
            description=form.data["description"],
            img_url=form.data["img_url"],
            link=form.data["link"],
            # user_id=form.data["userId"]
            user_id = current_user.id
        )
        
        print("99999999", new_pin)
        db.session.add(new_pin)
        db.session.commit()
        return new_pin.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@pin_routes.route('/<int:id>/update', methods=["PUT"])
# @login_required
def edit_a_pin(id):
    form = EditPinForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    updated_pin = Pin.query.get(id)
    if form.validate_on_submit():
        updated_pin.title = form.data['title'],
        updated_pin.img_url = form.data['img_url'],
        updated_pin.description = form.data['description'],
        updated_pin.link = form.data['link'],
        db.session.add(updated_pin)
        db.session.commit()
        return {'pins': updated_pin.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@pin_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_pin(id):
    pin = Pin.query.get(id)    
    db.session.delete(pin)
    db.session.commit()
    return pin.to_dict()

