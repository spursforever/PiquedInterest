from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError 
from app.models import User

class CreatePinForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    description = TextAreaField("Description", validators=[DataRequired()])
    img_url = StringField("Image Url", validators=[DataRequired()])
    link = StringField("Link", validators=[DataRequired()])
    user_id = IntegerField('User Id', validators=[DataRequired()])