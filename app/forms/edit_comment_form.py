from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired
from app.models import Comment

class EditCommentForm(FlaskForm):
    content= TextAreaField("content", validators=[DataRequired()])
    pin_id = IntegerField("pin_id", validators=[DataRequired()])
    user_id= IntegerField("user_id", validators=[DataRequired()])