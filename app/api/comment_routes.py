from flask import Blueprint, jsonify, session, request
from app.models import db, Pin, Comment
from flask_login import login_required, current_user
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import CommentForm, EditCommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def get_comments():
    comments = Comment.query.all()      
    return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/', methods = ["POST"])
@login_required
def post_comments():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(
            content = form.data['content'],
            pin_id = form.data['pin_id'],
            user_id = form.data['user_id']
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route('/<int:id>/update', methods = ["PUT"])
def edit_comment(id):
    form = EditCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    updated_comment = Comment.query.get(id)
    if form.validate_on_submit():
        updated_comment.content = form.data("content")
        updated_comment.pin_id = form.data("pin_id")
        updated_comment.user_id = form.data("user_id")
        db.session.add(updated_comment)
        db.session.commit()
        return {'comments': updated_comment.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route('/<int:id>', methods=["DELETE"])
# @login_required
def delete_comment(id):
    comment = Comment.query.get(id)    
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict()

