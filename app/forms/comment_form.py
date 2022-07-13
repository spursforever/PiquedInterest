from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired
from app.models import Comment

class CommentForm(FlaskForm):
    content= TextAreaField("content", validators=[DataRequired()])
    pin_id = IntegerField("pin_id")
    user_id= IntegerField("user_id")