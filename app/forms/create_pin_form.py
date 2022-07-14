from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError 
from app.models import User

class CreatePinForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    description = TextAreaField("description")
    img_url = StringField("img_url", validators=[DataRequired()])
    
    