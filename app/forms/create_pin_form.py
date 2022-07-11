from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError 
from app.models import User

class CreatePinForm(FlaskForm):
    title = StringField("title", validators=[DataRequired(message="Please enter pin's title")])
    description = TextAreaField("description")
    img_url = StringField("img_url", validators=[DataRequired()])
    link = StringField("link")
    