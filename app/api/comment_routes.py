from flask import Blueprint, jsonify, session, request
from app.models import db, Pin, Comment
from flask_login import login_required, current_user
from app.api.auth_routes import validation_errors_to_error_messages

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:pinId>')
def get_comments(pinId):
    comments = Comment.queryfilter(Comment.pinId === pinId)    
    return {'comments': [comment.to_dict() for comment in comments]}