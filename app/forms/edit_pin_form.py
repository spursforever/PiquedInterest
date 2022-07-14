from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, ValidationError 
from app.models import User

class EditPinForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    description = TextAreaField("description")
    img_url = StringField("image_url", validators=[DataRequired()])
    