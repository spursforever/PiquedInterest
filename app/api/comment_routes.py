from flask import Blueprint, jsonify, session, request
from app.models import db, Pin, Comment
from flask_login import login_required, current_user
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import CommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:id>')
def get_comments(id):
    pin = Pin.query.get(id)
    comments = pin.comments
    return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/')
def post_comments():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment(
            content = form.data['content'],
            pin_id = form.data['pin_id'],
            user_id = form.data['user_id']
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
